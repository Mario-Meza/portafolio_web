import { useState, useEffect } from 'react';

export const useTechnologies = () => {
    const webDevelopment = [
        'JavaScript',
        'React',
        'Tailwind CSS'
    ]
    const genAI = [
        'Python',
        'Langchain',
        'FastAPI',
        'PostgreSQL',
        'Azure OpenAI',
        'Azure AI Search',
        'Azure Containers',
        'Azure App Services',
        'Azure Storage Accounts',
    ]


    return {
        toolsWeb: webDevelopment,
        toolsIA: genAI
    }
}
