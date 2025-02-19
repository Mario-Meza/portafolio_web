import {useActiveSection} from "../hooks/useActiveSection";

export const HomePage = () => {
    const {activeSection} = useActiveSection();

    const navLinks = [
        { name: 'Home', path: '#home'},
        { name: 'Projects', path: '#projects'},
        { name: 'Articles', path: '#articles'},
        { name: 'Contact', path: '#contact'}
    ];

    return (
            <section id="home" className="section bg-white  transition-colors duration-300">
                <header className="header bg-white dark:bg-gray-900 transition-colors duration-300">
                    <div className="nav-container">
                        <div className="logo-section">
                            <div className="logo dark:bg-white"></div>
                            <span className="brand-name text-gray-900 dark:text-white">Mario Mesa Sosa</span>
                        </div>
                        <nav>
                            <ul className="nav-links">
                                {navLinks.map((item, index) => (
                                    <li key={index} className="flex items-center">
                                        <a href={item.path}
                                           className={`text-gray-900 accent-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 ${activeSection === item.path.replace('#', '') ? 'text-indigo-600 dark:text-indigo-400 font-medium' : ''}`}>
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                    <div className="hero-content">
                        <h1 className="hero-title text-gray-900 dark:text-white">Frontend Developer</h1>
                        <p className="hero-subtitle text-gray-600 dark:text-gray-400">
                            Un apasionado de la tecnologia y de la vida
                        </p>
                    </div>
                </header>
            </section>
    );
};