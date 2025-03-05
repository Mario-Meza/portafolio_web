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
        <section id="experience" className="section-jobs">
            <div className="container-jobs">
                <h2 className="text-slate-200 font-semibold">
                    <span className="text-gradient-primary">{'{ '}</span>
                        Where I&apos;ve Worked
                    <span className="text-gradient-primary">{' }'}</span>
                </h2>
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
                                        ? 'text-indigo-400-300 border-l-2 text-cyan-400 -ml-[2px] bg-slate-800/50' 
                                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'}`}
                                >
                                    {job.company}
                                </button>
                            ))}
                        </div>

                        {/* Contenido del trabajo - Columna derecha */}
                        <div className="flex-1">
                            <h3 className="text-2xl text-slate-200 mb-1">
                                {currentJob.title}{' '}
                                <span className="text-cyan-400">@ {currentJob.company}</span>
                            </h3>
                            <p className="text-slate-400 font-mono mb-8">{currentJob.period}</p>

                            <ul className="space-y-4">
                                {currentJob.responsibilities.map((resp, index) => (
                                    <li key={index} className="flex items-start text-slate-400 group">
                                        <span className="text-green-400 mr-4 mt-1.5">▹</span>
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
        </section>
    );
}