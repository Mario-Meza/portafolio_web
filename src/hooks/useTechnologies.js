import { useState, useEffect } from 'react';

export const useTechnologies = () => {
    const [ error, setError ] = useState(null);
    const [ loading, setLoading ] = useState(true);
    const [ technologies, setTechnologies ] = useState([]);

    useEffect(() => {
        try {
            const techList = [
                'JavaScript (ES6+)',
                'TypeScript',
                'React',
                'Eleventy',
                'Node.js',
                'WordPress',
                'Tailwind CSS',
            ];
            setTechnologies(techList);
            setLoading(false);
        } catch (err) {
            setError('Error al cargar lista de tecnologias');
            setLoading(false);
        }
    }, []);

    return {
        technologies,
        error,
        loading
    }
}
