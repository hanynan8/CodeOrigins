# Re-generates public/brand/circuit-left.svg + circuit-right.svg from the brand banner image.
# usage: python3 scripts/trace-circuit-from-banner.py <banner.jpg> public/brand   (needs opencv-python, scikit-image, scipy)
"""Clean vector re-trace of the CodeLegacy banner circuit.
Skeletonises the traces -> simplified polylines drawn as crisp strokes, plus
nodes / pixel chips, plus CSS animation (travelling light pulses, pulsing nodes).
usage: python3 trace-circuit-from-banner.py banner.jpg out_dir"""
import cv2, numpy as np, sys, os, random
from skimage.morphology import skeletonize
from scipy import ndimage as ndi
SRC,OUT=sys.argv[1],sys.argv[2]
img=cv2.imread(SRC); S=3
random.seed(7)

def signal(x0,x1,masks):
    c=img[:,x0:x1].astype(np.float32)
    d=np.clip(c-np.array([26,6,1],np.float32),0,None)
    v=np.maximum(d[...,0]/229.0,np.maximum(d[...,1]/249.0,d[...,2]/254.0))
    v=cv2.resize(v,None,fx=S,fy=S,interpolation=cv2.INTER_CUBIC)
    v=cv2.GaussianBlur(v,(0,0),0.7)
    k=cv2.getStructuringElement(cv2.MORPH_ELLIPSE,(21,21))
    th=np.clip((v-cv2.morphologyEx(v,cv2.MORPH_OPEN,k))*1.15,0,1)
    m=np.ones_like(v)
    for a,b,c0,d0 in masks: m[c0*S:d0*S,a*S:b*S]=0
    m=cv2.GaussianBlur(m,(0,0),8)
    return v*m, th*m

NB=np.ones((3,3),int); NB[1,1]=0

def lines_from(th,v):
    """LSD on the top-hat image, snap to 0/45/90/135 deg, merge collinear, return clean segments."""
    g=(np.clip(th*3.2,0,1)*255).astype(np.uint8)
    lsd=cv2.createLineSegmentDetector(cv2.LSD_REFINE_STD)
    det=lsd.detect(g)[0]
    segs={}
    if det is None: return []
    det=np.asarray(det).reshape(-1,4)
    for x1,y1,x2,y2 in det/S:
        L=np.hypot(x2-x1,y2-y1)
        if L<7: continue
        ang=np.degrees(np.arctan2(y2-y1,x2-x1))%180
        best=min((0,45,90,135,180),key=lambda a:abs(a-ang)); 
        if abs(best-ang)>7: continue
        k={0:0,180:0,45:45,90:90,135:135}[best]
        mx,my=(x1+x2)/2,(y1+y2)/2
        if k==0:   key=(0,round(my/1.0)); t0,t1=sorted((x1,x2)); off=my
        elif k==90:key=(90,round(mx/1.0)); t0,t1=sorted((y1,y2)); off=mx
        elif k==45:key=(45,round((mx-my)/1.3)); t0,t1=sorted((x1,x2)); off=mx-my   # "\\" direction (y=x+c)
        else:      key=(135,round((mx+my)/1.3)); t0,t1=sorted((x1,x2)); off=mx+my   # "/"
        segs.setdefault(key,[]).append([t0,t1,off,0])
    out=[]
    for (k,_),lst in segs.items():
        lst.sort()
        cur=None
        for t0,t1,off,_x in lst:
            if cur and t0<=cur[1]+9: cur[1]=max(cur[1],t1); cur[2].append(off)
            else:
                if cur: out.append((k,cur))
                cur=[t0,t1,[off]]
        if cur: out.append((k,cur))
    res=[]
    for k,(t0,t1,offs) in out:
        o=float(np.mean(offs))
        if k==0: p=((t0,o),(t1,o))
        elif k==90: p=((o,t0),(o,t1))
        elif k==45: p=((t0,t0-o),(t1,t1-o))
        else: p=((t0,o-t0),(t1,o-t1))
        L=np.hypot(p[1][0]-p[0][0],p[1][1]-p[0][1])
        if L<17: continue
        # brightness along the line from the raw signal
        n=max(2,int(L)); xs=np.linspace(p[0][0],p[1][0],n); ys=np.linspace(p[0][1],p[1][1],n)
        xi=np.clip((xs*S).astype(int),0,v.shape[1]-1); yi=np.clip((ys*S).astype(int),0,v.shape[0]-1)
        res.append([np.array(p,float),L,float(np.mean(v[yi,xi]))])
    return res

def chain(segs,tol=3.2):
    """join segments whose ends meet into polylines"""
    ends=[]
    for i,(p,L,b) in enumerate(segs):
        ends.append((i,0,p[0])); ends.append((i,1,p[1]))
    used=set(); chains=[]
    def near(pt,skip):
        c=[(i,e,q) for i,e,q in ends if i!=skip and i not in used and np.hypot(*(q-pt))<=tol]
        return c
    order=sorted(range(len(segs)),key=lambda i:-segs[i][1])
    for i in order:
        if i in used: continue
        used.add(i); pts=[segs[i][0][0],segs[i][0][1]]; br=[segs[i][2]]; Ls=segs[i][1]
        for side in (1,0):
            while True:
                pt=pts[-1] if side==1 else pts[0]
                c=near(pt,-1)
                c=[x for x in c if x[0] not in used]
                if not c: break
                j,e,q=c[0]; used.add(j)
                other=segs[j][0][1-e]
                if side==1: pts.append(other)
                else: pts.insert(0,other)
                br.append(segs[j][2]); Ls+=segs[j][1]
        chains.append((np.array(pts),Ls,float(np.mean(br))))
    return chains

def build(name,x0,x1,masks):
    v,th=signal(x0,x1,masks)
    segs=lines_from(th,v)
    traces=chain(segs)
    # nodes: bright round blobs
    nodes=[]
    nb=(v>=0.6).astype(np.uint8)
    nl,lb,st,ce=cv2.connectedComponentsWithStats(nb,connectivity=8)
    for i in range(1,nl):
        a=st[i,cv2.CC_STAT_AREA]; w=st[i,cv2.CC_STAT_WIDTH]; h=st[i,cv2.CC_STAT_HEIGHT]
        if 25<=a<=300 and 0.65<w/h<1.5 and a/(w*h)>0.6:
            cx,cy=ce[i]/S; nodes.append((cx,cy,max(2.6,np.sqrt(a/np.pi)/S*1.1),1.0))
    # pixel chips: tiny blobs, kept only when they form a cluster (the 3x3 grids)
    binm=th>=0.09
    lab,n=ndi.label(binm,structure=np.ones((3,3)))
    raw=[]
    for i,sl in enumerate(ndi.find_objects(lab),1):
        h=sl[0].stop-sl[0].start; w=sl[1].stop-sl[1].start
        if 5<=max(h,w)<=14 and 0.6<w/h<1.7: raw.append(((sl[1].start+w/2)/S,(sl[0].start+h/2)/S))
    chips=[]
    for x,y in raw:
        if sum(1 for a,b in raw if (a,b)!=(x,y) and abs(a-x)<=9 and abs(b-y)<=9)>=3: chips.append((x-1.7,y-1.7,3.4,3.4,1))
    return traces,nodes,chips


def fill_layers(x0,x1,masks):
    """photo-faithful static layers (smoothed contours) for the dim background texture"""
    c=img[:,x0:x1].astype(np.float32)
    d=np.clip(c-np.array([26,6,1],np.float32),0,None)
    v=np.maximum(d[...,0]/229.0,np.maximum(d[...,1]/249.0,d[...,2]/254.0))
    v=cv2.resize(v,None,fx=4,fy=4,interpolation=cv2.INTER_CUBIC); v=cv2.GaussianBlur(v,(0,0),1.1)
    k=cv2.getStructuringElement(cv2.MORPH_ELLIPSE,(27,27))
    v2=np.clip((v-cv2.morphologyEx(v,cv2.MORPH_OPEN,k))*1.15,0,1)
    m=np.ones_like(v2)
    for a,b,c0,d0 in masks: m[c0*4:d0*4,a*4:b*4]=0
    m=cv2.GaussianBlur(m,(0,0),10); v2*=m; v*=m
    def cont(b,minarea,eps):
        cs,_=cv2.findContours((b*255).astype(np.uint8),cv2.RETR_CCOMP,cv2.CHAIN_APPROX_NONE)
        o=[]
        for q in cs:
            if cv2.contourArea(q)<minarea and len(q)<minarea*0.6: continue
            a=cv2.approxPolyDP(q,eps,True)
            if len(a)>=3: o.append(a[:,0,:]/4)
        return "".join("M"+" ".join(f"{x:.1f} {y:.1f}" for x,y in q)+"Z" for q in o)
    return cont(v2>=0.07,50,2.0),cont(v2>=0.16,30,1.8)

def svg(name,x0,x1,masks,traces,nodes,chips):
    dim,mid=fill_layers(x0,x1,masks)
    s=['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 1024" width="300" height="1024">',
     '<style>',
     '.p{fill:none;stroke-linecap:round;stroke-linejoin:round}',
     '.h{stroke:#7fd0ff;stroke-width:1.5}',
     '.l{stroke:#2f8bff;stroke-width:1.1;opacity:.9}',
     '.z{fill:none;stroke:#fff;stroke-width:2.4;stroke-linecap:round;stroke-dasharray:8 92;stroke-dashoffset:100;animation:z var(--t) linear var(--w) infinite}',
     '@keyframes z{from{stroke-dashoffset:100}to{stroke-dashoffset:0}}',
     '.n{fill:#c9f1ff;transform-box:fill-box;transform-origin:center;animation:n 2.2s ease-in-out var(--w) infinite}',
     '@keyframes n{0%,100%{opacity:.8;transform:scale(1)}50%{opacity:1;transform:scale(1.7)}}',
     '.r{fill:none;stroke:#4cc4ff;stroke-width:1;transform-box:fill-box;transform-origin:center;animation:r 2.2s ease-out var(--w) infinite}',
     '@keyframes r{0%{opacity:.9;transform:scale(1)}100%{opacity:0;transform:scale(3.4)}}',
     '.c{fill:#3a86ff;animation:c 2.8s ease-in-out var(--w) infinite}',
     '@keyframes c{0%,100%{opacity:.5}50%{opacity:1}}',
     '@media (prefers-reduced-motion:reduce){.z,.n,.r,.c{animation:none}.z,.r{opacity:0}}',
     '</style>',
     '<defs><filter id="g" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="1.8" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>',
     '<filter id="hz" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="4"/></filter></defs>']
    s.append(f'<path d="{dim}" fill="#1646d6" fill-opacity=".62" fill-rule="evenodd"/>')
    s.append(f'<path d="{mid}" fill="#2f6bff" fill-opacity=".85" fill-rule="evenodd"/>')
    hot=[];low=[];pul=[]
    for pl,L,br in traces:
        dd="M"+" L".join(f"{x:.1f} {y:.1f}" for x,y in pl)
        if br>=0.42 and L>=22: hot.append(dd)
        if L>=46 and br>=0.16: pul.append((dd,L,br))
    pul.sort(key=lambda a:-a[2]); pul=pul[:46]
    s.append(f'<g filter="url(#hz)" opacity=".8"><path class="p" stroke="#2f8bff" stroke-width="3" d="{"".join(hot)}"/></g>')
    s.append(f'<g filter="url(#g)"><path class="p h" d="{"".join(hot)}"/></g>')
    s.append('<g filter="url(#g)">')
    for dd,L,br in pul:
        s.append(f'<path class="z" pathLength="100" style="--t:{random.uniform(2.4,5.2):.1f}s;--w:-{random.uniform(0,5):.1f}s" d="{dd}"/>')
    s.append('</g>')
    for x,y,w,hh,pk in chips: s.append(f'<rect class="c" x="{x:.1f}" y="{y:.1f}" width="3.4" height="3.4" rx=".5" style="--w:-{random.uniform(0,3):.1f}s"/>')
    s.append('<g filter="url(#g)">')
    for x,y,r,pk in nodes:
        w=f"-{random.uniform(0,2.2):.1f}s"
        s.append(f'<circle class="r" cx="{x:.1f}" cy="{y:.1f}" r="{r:.1f}" style="--w:{w}"/><circle class="n" cx="{x:.1f}" cy="{y:.1f}" r="{r:.1f}" style="--w:{w}"/>')
    s.append('</g></svg>')
    p=os.path.join(OUT,f"circuit-{name}.svg"); open(p,"w").write("".join(s)); print(name,len(traces),"chains",len(nodes),"nodes",len(chips),"chips",os.path.getsize(p)//1024,"KB")

for name,x0,x1,mk in [("left",0,300,[(150,300,425,580)]),("right",724,1024,[(0,175,435,590)])]:
    t,n,c=build(name,x0,x1,mk); svg(name,x0,x1,mk,t,n,c)
