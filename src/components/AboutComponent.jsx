import { useTechnologies } from '../hooks/useTechnologies'
import profileImage from '../assets/images/about.jpg';


import React from 'react';

export const AboutComponent = () => {
    const { toolsWeb } = useTechnologies();
    const { toolsIA } = useTechnologies();

    const TechList = ({ items }) => (
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 mt-4">
            {items && items.length  > 0 ? (
                items.map((item, index) => (
                    <div key={index} className="flex items-center">
                        <span className="text-pink-400 mr-2">▹</span>
                        <span className="font-mono text-slate-400">{item}</span>
                    </div>
                ))
            ) :(
            <div className="no-data col-span-2 p-4 rounded bg-slate-800 text-slate-300 font-mono">
                <span className="text-yellow-400">ⓘ</span>
                No hay tecnologias disponibles en este momento
            </div>
                )}
        </div>
    );

    return (
        <section id="about" className="section-about">
            <div className="container">
                <div className="max-h-screen">
                    <div className="max-w-5xl mx-auto">
                        <div className="profile flex items-center gap-4">
                            <h2 className="text-slate-200 font-semibold">
                                <span className="text-gradient-primary">{'{ '}</span>
                                About me
                                <span className="text-gradient-primary">{' }'}</span>
                            </h2>
                        </div>
                        {/* Content Grid */}
                        <div className="grid grid-cols-3 gap-12">
                            {/* Text Content - 2 columns */}
                            <div className="col-span-2 text-slate-400 space-y-4">
                                <p>
                                    Hola mi nombre es Mario y disfruto creando cosas que viven en internet.
                                    Mi interes esta enfocado en JavaScript, Python y React. 
                                    He contribuido en el desarrollo de aplicaciones, 
                                    chatbots, agentes virtuales con Gen AI y experiencias en realidad virtual durante la pandemia del 2020.
                                    Mi interes por la tecnologia siempre ha sido el motivo de aprender mas sobre el desarrollo web y la programacion.
                                </p>
                                <p>Here are a few technologies I've been working with recently:</p>
                                <div>
                                    <TechList items={toolsWeb}/>
                                </div>
                                <div>
                                    <TechList items={toolsIA}/>
                                </div>

                            </div>

                            {/* Image - 1 column */}
                            <div className="relative">
                                <div className="relative group">
                                    {/* Image wrapper with border effect */}
                                    <div
                                        className="absolute -right-4 -bottom-4 w-full h-full border-2 text-cyan-500 rounded transition-transform duration-200 group-hover:-translate-x-1 group-hover:translate-y-1"></div>

                                    {/* Image container */}
                                    <div className="relative rounded overflow-hidden bg-emerald-400/20 filter">
                                        <img src={profileImage} alt="Profile"
                                             className="w-full h-full object-cover transition-all duration-300"/>
                                    </div>
                                    <div
                                        className="absolute inset-0 bg-green-400/70 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-300"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

