import { useJobs } from '../hooks/useJobs'
import React, { useState } from "react";

export const JobsComponent = () => {
    const { jobs, error, loading } = useJobs();
    const [activeCompany, setActiveCompany] = useState(0);

    // Añadir una verificación para ver si hay datos disponibles
    if (loading) {
        return (
            <section id="experience" className="section-jobs">
                <div className="flex-item">
                    <h2 className="text-4xl text-slate-200 font-semibold">Where I&apos;ve Worked</h2>
                </div>
                <div className="flex-1 ml-4 h-px bg-slate-600"></div>
                <div className="max-w-2xl mx-auto py-10">
                    <p className="text-slate-400 font-mono text-center">Loading job experience...</p>
                </div>
            </section>
        );
    }

    if (error || !jobs || jobs.length === 0) {
        return (
            <section id="experience" className="section-jobs">
                <div className="flex-item">
                    <h2 className="text-slate-200 font-semibold">Where I&apos;ve Worked</h2>
                </div>
                <div className="flex-1 ml-4 h-px bg-slate-600"></div>
                <div className="max-w-2xl mx-auto py-10">
                    <div className="p-4 rounded bg-slate-800 text-slate-300 font-mono">
                        <span className="text-yellow-400 mr-2">ⓘ</span>
                        {error || "No hay trabajos disponibles en este momento"}
                    </div>
                </div>
            </section>
        );
    }

    // Asegurarse de que activeCompany sea un índice válido
    const currentJob = jobs[activeCompany] || jobs[0];

    return (
        <section id="experience" className="section-jobs mb-16 md:mb-24">
            <div className="container-jobs">
                <h2 className="text-slate-200 font-semibold">
                    <span className="text-gradient-primary">{'{ '}</span>
                        Where I&apos;ve Worked
                    <span className="text-gradient-primary">{' }'}</span>
                </h2>
            </div>
            <div className="flex-1 ml-2 h-px bg-fuchsia-500"></div>
            {/* Reemplazar max-h-screen por min-h-0 para permitir que crezca según el contenido */}
            <div className="w-full">
                <div className="max-w-5xl mx-auto py-7">
                    <div className="flex flex-col md:flex-row">
                        {/* Lista de empresas - Columna izquierda */}
                        <div className="w-full md:w-40 md:border-l-2 md:border-l-fuchsia-500 md:border-t-0 border-fuchsia-500 mb-6 md:mb-0 md:mr-8">
                            {jobs.map((job, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveCompany(index)}
                                    className={`w-full text-left py-3 px-4 font-mono text-sm transition-all duration-200
                                    ${index === activeCompany 
                                        ? 'text-fuchsia-400 border-l-0 md:border-l-2 border-t-2 md:border-t-0 border-fuchsia-500 -ml-0 md:-ml-[2px] bg-slate-800/50 ' 
                                        : 'text-slate-400 hover:text-fuchsia-200 hover:bg-slate-800/30'}`}
                                >
                                    {job.company}
                                </button>
                            ))}
                        </div>

                        {/* Contenido del trabajo - Columna derecha */}
                        <div className="flex-1 px-2 md:px-4">
                            <h3 className="text-xl md:text-2xl text-slate-200 mb-2">
                                <span className="font-medium">{currentJob.title}</span>{' '}
                                <span className="x">@ {currentJob.company}</span>
                            </h3>
                            <p className="job-period font-mono mb-4 md:mb-8 text-sm md:text-base">{currentJob.period}</p>

                            {/* Añadimos una altura mínima al contenedor de responsabilidades */}
                            <div className="min-h-[250px] md:min-h-[300px]">
                                <ul className="space-y-3 md:space-y-4">
                                    {currentJob.responsibilities.map((resp, index) => (
                                        <li key={index} className="flex items-start text-slate-400 group">
                                            <span className="text-fuchsia-500 mr-2 mt-1">▹</span>
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
    );
}