import profileImage from '../public/images/about.jpg';
import React from 'react';

export const AboutComponent = () => {
    const TechList = ({ items }) => (
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 mt-4">
            {items.map((item, index) => (
                <div key={index} className="flex items-center">
                    <span className="text-green-400 mr-2">▹</span>
                    <span className="font-mono text-slate-400">{item}</span>
                </div>
            ))}
        </div>
    );

    const technologies = [
        'JavaScript (ES6+)',
        'TypeScript',
        'React',
        'Eleventy',
        'Node.js',
        'WordPress'
    ];

    return (
        <section id="about" className="section-about">
            <div className="container">
                <div className="max-h-screen">
                    <div className="max-w-5xl mx-auto">
                        <div className="profile flex items-center gap-4">
                            <h2 className="text-slate-200 font-semibold">About Me</h2>
                        </div>
                        {/* Content Grid */}
                        <div className="grid grid-cols-3 gap-12">
                            {/* Text Content - 2 columns */}
                            <div className="col-span-2 text-slate-400 space-y-4">
                                <p>
                                    Hello! My name is Brittany and I enjoy creating things that live on
                                    the internet. My interest in web development started back in 2012
                                    when I decided to try editing custom Tumblr themes — turns out
                                    hacking together a custom reblog button taught me a lot about
                                    HTML & CSS!
                                </p>

                                <p>
                                    Fast-forward to today, and I've had the privilege of working at{' '}
                                    <a href="#" className="text-violet-400 hover:underline">
                                        an advertising agency
                                    </a>
                                    ,{' '}
                                    <a href="#" className="text-violet-400 hover:underline">
                                        a start-up
                                    </a>
                                    ,{' '}
                                    <a href="#" className="text-violet-400 hover:underline">
                                        a huge corporation
                                    </a>
                                    , and{' '}
                                    <a href="#" className="text-violet-400 hover:underline">
                                        a student-led design studio
                                    </a>
                                    . My main focus these days is building accessible, inclusive products
                                    and digital experiences at{' '}
                                    <a href="#" className="text-violet-400 hover:underline">
                                        Upstatement
                                    </a>{' '}
                                    for a variety of clients.
                                </p>

                                <p>
                                    I also recently{' '}
                                    <a href="#" className="text-violet-400 hover:underline">
                                        launched a course
                                    </a>{' '}
                                    that covers everything you need to build a web app with the Spotify
                                    API using Node & React.
                                </p>

                                <p>Here are a few technologies I've been working with recently:</p>

                                <TechList items={technologies} />
                            </div>

                            {/* Image - 1 column */}
                            <div className="relative">
                                <div className="relative group">
                                    {/* Image wrapper with border effect */}
                                    <div className="absolute -right-4 -bottom-4 w-full h-full border-2 text-violet-400 rounded transition-transform duration-200 group-hover:-translate-x-1 group-hover:translate-y-1"></div>

                                    {/* Image container */}
                                    <div className="relative rounded overflow-hidden bg-emerald-400/20 filter">
                                        <img src={profileImage} alt="Profile" className="w-full h-full object-cover transition-all duration-300" />
                                    </div>
                                    <div className="absolute inset-0 bg-green-400/70 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-300"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

