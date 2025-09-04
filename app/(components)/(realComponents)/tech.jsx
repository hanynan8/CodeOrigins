// TechSection.jsx
// React component (Tailwind) for the "التقنيات المتطورة" section.
// NOTE: add Devicon stylesheet in your _app.js / index.html for the icons to show:
// <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@master/devicon.min.css">

import React from 'react';

const defaultTechs = [
  { name: 'React', iconClass: 'devicon-react-original colored' },
  { name: 'Next.js', iconClass: 'devicon-nextjs-original' },
  { name: 'Vue.js', iconClass: 'devicon-vuejs-plain colored' },
  { name: 'Node.js', iconClass: 'devicon-nodejs-plain colored' },
  { name: 'Laravel', iconClass: 'devicon-laravel-plain colored' },
  { name: 'CSS3', iconClass: 'devicon-css3-plain colored' },
  { name: 'Python', iconClass: 'devicon-python-plain colored' },
  { name: 'MongoDB', iconClass: 'devicon-mongodb-plain colored' },
  { name: 'JavaScript', iconClass: 'devicon-javascript-plain colored' },
  { name: 'HTML5', iconClass: 'devicon-html5-plain colored' },
  { name: 'Express.js', iconClass: 'devicon-express-original' },
  { name: 'TypeScript', iconClass: 'devicon-typescript-plain colored' },
];

export default function TechSection({ techs = defaultTechs, id = 'tech', className = '' }) {
  return (
    <section className={`py-20 bg-white ${className}`} id={id}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            التقنيات <span className="text-blue-600">المتطورة</span> التي نستخدمها
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نعتمد على أحدث التقنيات والأدوات البرمجية لضمان تطوير مواقع عصرية
            وقوية
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {techs.map((tech, index) => (
            <div
              key={tech.name + index}
              className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 text-center"
            >
              <div className="w-16 h-16 rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {/* Using <i> with devicon classes (requires Devicon CSS) */}
                <i className={`${tech.iconClass} text-6xl`} aria-hidden="true"></i>
              </div>
              <h3 className="font-semibold text-gray-800 group-hover:text-blue-700 transition-colors">
                {tech.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
