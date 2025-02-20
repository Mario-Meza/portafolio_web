import {useActiveSection} from "../hooks/useActiveSection";
import { useState } from "react";
import "../styles/Menu.css"

export const MenuComponent = () => {
    const {activeSection} = useActiveSection();
    const [codeText, setCodeText] = useState('("Hello, World!")');
    const navLinks = [
        { name: 'Home', path: '#home'},
        { name: 'Projects', path: '#projects'},
        { name: 'Articles', path: '#articles'},
        { name: 'Contact', path: '#contact'}
    ];
    const handleCodeChange = (event) => {
        setCodeText(event.target.textContent);
    };

    return (
            <section id="home" className="section transition-colors duration-300">
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
                                           className={`text-gray-200 accent-gray-400 hover:text-indigo-300 dark:hover:text-indigo-300 ${activeSection === item.path.replace('#', '') ? 'text-indigo-300 dark:text-indigo-400 font-medium' : ''}`}>
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
            </section>
    );
};