import { useState } from 'react';
import "../styles/Contact.css"

export const ContactComponent = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Formulario enviado:', formData);
    };

    return (
        <section id="contact" className="section min-h-screen flex items-center justify-center mb-20">
            <div className="max-w-2xl w-full mx-auto px-6">
                <h2 className="text-2xl mb-6 text-[#4b4b4b] text-center">Send me</h2>
                <p className="text-[#a1a1a1] mb-8 text-center">
                    Send me a message and I will get back to you as soon as possible.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <input
                            type="text"
                            name="name"
                            placeholder="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                            required
                        />
                    </div>

                    <div>
                        <input
                            type="email"
                            name="email"
                            placeholder="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                            required
                        />
                    </div>

                    <div>
                        <input
                            type="text"
                            name="subject"
                            placeholder="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                            required
                        />
                    </div>

                    <div>
                        <textarea
                            name="message"
                            placeholder="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="block w-full shadow-sm focus:ring-indigo-500   rounded-md"
                            required
                        />
                    </div>

                    <button type="submit" className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-300">
                        Enviar mensaje
                    </button>
                </form>
            </div>
        </section>
    );
};