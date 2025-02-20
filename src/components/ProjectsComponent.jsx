import { useState } from "react";
import "../styles/Projects.css"

export const ProjectsComponent = () => {
    const [activeCompany, setActiveCompany] = useState(0);
    const jobs = [
        {
            company: 'Upstatement',
            title: 'Lead Engineer',
            period: 'May 2018 - Present',
            responsibilities: [
                'Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more',
                'Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements',
                'Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders',
                'Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship'
            ]
        },
        {
            company: 'Apple',
            title: 'Software Engineer',
            period: 'July 2017 - May 2018',
            responsibilities: [
                'Developed and shipped highly interactive web applications for Apple Music',
                'Built and shipped the Apple Music Extension within Facebook Messenger',
                'Architected and implemented the user interface of CustomerHub'
            ]
        },
        {
            company: 'Scout Studio',
            title: 'Studio Developer',
            period: 'January 2017 - July 2017',
            responsibilities: [
                'Collaborated with designers and clients to deliver high-quality websites',
                'Implemented responsive designs and ensured cross-browser compatibility',
                'Managed multiple project deadlines and communicated with stakeholders'
            ]
        },
        {
            company: 'Starry',
            title: 'Software Engineer',
            period: 'October 2016 - January 2017',
            responsibilities: [
                'Engineered and maintained major features of customer-facing web app',
                'Proposed and implemented scalable solutions to issues identified with cloud services',
                'Interfaced with user experience designers and other developers'
            ]
        },
        {
            company: 'MullenLowe',
            title: 'Creative Technologist',
            period: 'July 2015 - September 2016',
            responsibilities: [
                'Developed and maintained code for in-house and client websites',
                'Tested sites in various browsers and devices to ensure cross-browser compatibility',
                'Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense'
            ]
        }
    ];
    return (
        <section id="projects" className="section">

            <div className="container">
                <div className="flex-item">
                    <h2 className="text-4xl text-slate-200 font-semibold">Where I&apos;ve Worked</h2>
                </div>
                <div className="flex-1 ml-4 h-px bg-slate-600"></div>
                    <div className="max-h-screen">
                        <div className="max-w-2xl mx-auto">
                            <div className="flex">
                                {/* Lista de empresas - Columna izquierda */}
                                <div className="w-48 border-l-2 border-slate-600 mr-8">
                                    {jobs.map((job, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setActiveCompany(index)}
                                            className={`w-full text-left py-3 px-4 font-mono text-sm transition-all duration-200
                                            ${index === activeCompany 
                                                ? 'text-indigo-400-300 border-l-2 text-violet-400 -ml-[2px] bg-slate-800/50' 
                                                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'}`}
                                        >
                                            {job.company}
                                        </button>
                                    ))}
                                </div>

                                {/* Contenido del trabajo - Columna derecha */}
                                <div className="flex-1">
                                    <h3 className="text-2xl text-slate-200 mb-1">
                                        {jobs[activeCompany].title}{' '}
                                        <span className="text-indigo-400">@ {jobs[activeCompany].company}</span>
                                    </h3>
                                    <p className="text-slate-400 font-mono mb-8">{jobs[activeCompany].period}</p>

                                    <ul className="space-y-4">
                                        {jobs[activeCompany].responsibilities.map((resp, index) => (
                                            <li key={index} className="flex items-start text-slate-400 group">
                                                <span className="text-indigo-400 mr-4 mt-1.5">▹</span>
                                                <span className="text-slate-400/80 group-hover:text-slate-300 transition-colors duration-200">
                                                    {resp}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

            </div>
        </section>
    )
}