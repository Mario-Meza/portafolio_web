import {useEffect, useState} from "react";

export const useJobs = () => {
    const [ error, setError ] = useState(null);
    const [ loading, setLoading ] = useState(true)
    const [ jobs, setJobs ] = useState([]);

    useEffect(() => {
        try {
            const listJobs = [
                {
                    company: 'Upstatement',
                    title: 'Lead Engineer',
                    period: 'May 2018 - Present',
                    responsibilities: [
                        'Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more',
                        'Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements',
                        'Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders',
                        'Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship'
                    ]
                },
                {
                    company: 'Apple',
                    title: 'Software Engineer',
                    period: 'July 2017 - May 2018',
                    responsibilities: [
                        'Developed and shipped highly interactive web applications for Apple Music',
                        'Built and shipped the Apple Music Extension within Facebook Messenger',
                        'Architected and implemented the user interface of CustomerHub'
                    ]
                },
                {
                    company: 'Scout Studio',
                    title: 'Studio Developer',
                    period: 'January 2017 - July 2017',
                    responsibilities: [
                        'Collaborated with designers and clients to deliver high-quality websites',
                        'Implemented responsive designs and ensured cross-browser compatibility',
                        'Managed multiple project deadlines and communicated with stakeholders'
                    ]
                },
                {
                    company: 'Starry',
                    title: 'Software Engineer',
                    period: 'October 2016 - January 2017',
                    responsibilities: [
                        'Engineered and maintained major features of customer-facing web app',
                        'Proposed and implemented scalable solutions to issues identified with cloud services',
                        'Interfaced with user experience designers and other developers'
                    ]
                },
                {
                    company: 'MullenLowe',
                    title: 'Creative Technologist',
                    period: 'July 2015 - September 2016',
                    responsibilities: [
                        'Developed and maintained code for in-house and client websites',
                        'Tested sites in various browsers and devices to ensure cross-browser compatibility',
                        'Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense'
                    ]
                }
            ];
            setJobs(listJobs);
            setLoading(false);

        }catch (err){
            setError('Error al cargar la lista de trabajos');
            setLoading(false);
        }
    }, []);

    return {
        jobs,
        error,
        loading
    }
}