import {useEffect, useState} from 'react';

export const useReviews = () => {
    const [ reviews, setReviews ] = useState([])
    const [ error, setError ] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadReviews = async () => {
            try {
                const initialReviews = [
                    {
                        content: "The Quiz App developed by this student demonstrates exceptional understanding of user interface design and clean code principles. The implementation of real-time feedback and adaptive questioning shows great promise.",
                        name: "Saul Campos",
                        role: "Ingeniero en sistemas",
                        project: "Quiz App",
                        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7gVeVDOVJIKTiN0s47bEk08HQO2Bbz.png"
                    },
                    {
                        content: "The Quiz App developed by this student demonstrates exceptional understanding of user interface design and clean code principles. The implementation of real-time feedback and adaptive questioning shows great promise.",
                        name: "Jose Castellanos",
                        role: "Ingeniero en sistemas",
                        project: "Quiz App",
                        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7gVeVDOVJIKTiN0s47bEk08HQO2Bbz.png"
                    },
                    {
                        content: "The Quiz App developed by this student demonstrates exceptional understanding of user interface design and clean code principles. The implementation of real-time feedback and adaptive questioning shows great promise.",
                        name: "Erick Carvajal",
                        role: "Ingeniero en sistemas",
                        project: "Quiz App",
                        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7gVeVDOVJIKTiN0s47bEk08HQO2Bbz.png"
                    }
                ];
                setReviews(initialReviews);
                setLoading(false)
            } catch (err) {
                setError("Error al cargar los reviews")
                setLoading(false)
            }
        };

        loadReviews();
    }, []);

    return {
        reviews,
        loading,
        error
    };
};