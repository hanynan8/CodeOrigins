// Breadcrumb for the projects list only (the project detail pages emit their own, longer trail).
import JsonLd from '@/app/(components)/JsonLd';
import { getDictionary } from '@/lib/dictionaries';
import { breadcrumbJsonLd } from '@/lib/seo';

export default async function ListLayout({ children, params }) {
  const { lang } = await params;
  const names = (await getDictionary(lang)).pageNames;
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(lang, [[names.home, '/'], [names.ourWork, '/lastprojects']])} />
      {children}
    </>
  );
}
