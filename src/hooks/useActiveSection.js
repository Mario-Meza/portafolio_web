import { useEffect, useState } from "react";

export const useActiveSection = () => {
    const [activeSection, setActiveSection] = useState('about'); // Inicializamos con 'home'

    useEffect(() => {
        const handleScroll = () => {
            // Aseguramos que estamos en el cliente
            if (typeof window === 'undefined') return;

            const sections = document.querySelectorAll('section[id]');

            // Si no hay secciones, retornamos
            if (sections.length === 0) return;

            const scrollPosition = window.scrollY + 100; // Ajustamos el offset

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                const sectionId = section.getAttribute('id');

                if (
                    scrollPosition >= sectionTop &&
                    scrollPosition < sectionTop + sectionHeight
                ) {
                    setActiveSection(sectionId);
                }
            });
        };

        // Ejecutamos handleScroll inmediatamente para establecer la sección inicial
        handleScroll();

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // El array vacío significa que solo se ejecuta al montar el componente

    return {
        activeSection
    };
};