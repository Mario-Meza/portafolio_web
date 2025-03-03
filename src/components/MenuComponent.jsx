import {useActiveSection} from "../hooks/useActiveSection";
import { useState } from "react";

export const MenuComponent = () => {
    const {activeSection} = useActiveSection();
    const [codeText, setCodeText] = useState('("Hello, World!")');
    const navLinks = [
        { name: 'About', path: '#about'},
        { name: 'Experience', path: '#experience'},
        { name: 'Work', path: '#work'},
        { name: 'Contact', path: '#contact'}
    ];
    const handleCodeChange = (event) => {
        setCodeText(event.target.textContent);
    };

    return (

                <header className="header transition-colors duration-300">
                    <div className="nav-container">
                        <div className="logo-section">
                            <div className="logo dark:bg-white"></div>
                            <span className="brand-name text-white">Mario Mesa Sosa</span>
                        </div>
                        <nav>
                            <ul className="nav-links">
                                {navLinks.map((item, index) => (
                                    <li key={index} className="flex items-center">
                                        <a href={item.path}
                                           className={`text-gray-200 accent-gray-400 hover:text-green-300 dark:hover:text-green-300 ${activeSection === item.path.replace('#', '') ? 'text-indigo-300 dark:text-green-300 font-medium' : ''}`}>
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                    <div className="hero-content">
                        <h1 className="hero-title">Frontend Developer</h1>
                            <div className="font-mono bg-white/5 p-4 rounded-lg border border-white/10">
                                <div className="hero-container">
                                    <span className="hero-return">console.log</span>
                                    <span
                                        className="hero-hello-world"
                                        contentEditable={true}
                                        onInput={handleCodeChange}
                                        suppressContentEditableWarning={true}>
                                        {codeText}
                                    </span>
                                </div>
                            </div>
                    </div>
                </header>

    );
};