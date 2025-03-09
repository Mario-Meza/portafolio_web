export const useJobs = () => {
            const listJobs = [
                {
                    company: 'Staff IT',
                    title: 'Custom Software Engineering',
                    period: 'Feb 2019 - August 2021',
                    responsibilities: [
                        'Gracias al premio de un hackathon en 2018, pude realizar mi pasantía de la universidad en la empresa de Staff IT',
                        'como outsourcing prestando mis servicios en Accenture México donde mis tareas fueron integrar funcionalidades a demos existentes',
                        'Mis tareas fueron implementar nuevas funcionalidades a demos exitentes, además de realizar pruebas de usabilidad',
                        'Las tecnologias que utilice fueron JavaScript, Ionic, Unity, C#, MQTT, Python, Computer Vision y Docker.'
                    ]
                },
                {
                    company: 'Accenture México',
                    title: 'Application Development',
                    period: 'August 2021 - February 2025',
                    responsibilities: [
                        'Mi experiencia en Accenture me permitio trabajar en proyectos multidiciplinarios para diversos sectores, combinando habilidades tecnicas y creatividad para desarrollar',
                        'interfaces que mejoran la experiencia de usuario.',
                        'Tuve la oportunidad de colaborar con distintos equipos de trabajo, como diseñadores, desarrolladores y clientes, para crear soluciones de software de alta calidad.',
                        'Los proyectos en los que participe al principio fueron apegados a realidad viertual, realidad aumentada.',
                        'Mas tarde cuando entro ChattGPT, puede trabajar en diversas demos, desarrollando pruebas de concpeto para clientes apegados a Marketing e instituciones bancarias.',
                        'Estas demos fueron enfocadas en ayudar a los clientes mediante chatbots, agentes virtuales',
                        'Las tecnologias que utilizamos para el desarrollo de los bots y agentes virtuales, en cuanto a uso de APIS fue, la API de Whatsapp y Azure Open AI. En caunto a herramientas de Azure (Azure Container(Docker), Storage Account, AI Search, App Services con Azure DevOps',
                        'Todo esto en conjunto con Python, FastAPI y langChain par alograr el desarrollo.'
                    ]
                }
            ];

 

    return {
        jobs: listJobs
    }
}