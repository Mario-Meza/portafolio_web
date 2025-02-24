import { useState } from 'react';

export const ContactComponent = () => {
    const [errors, setErrors] = useState({});
    const [submitStatus, setSubmitStatus] = useState(null);
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

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'El nombre es requerido';
        if (!formData.email.trim()) {
            newErrors.email = 'El email es requerido';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email inválido';
        }
        if (!formData.subject.trim()) newErrors.subject = 'El asunto es requerido';
        if (!formData.message.trim()) newErrors.message = 'El mensaje es requerido';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            setSubmitStatus('sending');

            setTimeout(() => {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
                }, 1500);
        }
    };


    return (
        <section id="contact" className="section-contact">
            <div className="max-w-2xl w-full mx-auto px-6">
                <h2 className="text-2xl mb-6 text-[#4b4b4b] text-center">Send me</h2>
                <p className="text-[#a1a1a1] mb-8 text-center">
                    Send me a message and I will get back to you as soon as possible.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                            Nombre
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-md bg-gray-700 border ${
                                errors.name ? 'border-red-500' : 'border-gray-600'
                            } focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition`}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-md bg-gray-700 border ${
                                errors.name ? 'border-red-500' : 'border-gray-600'
                            } focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition`}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                            Subject
                        </label>
                        <input
                            type="text"
                            name="subject"
                            placeholder="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-md bg-gray-700 border ${
                                errors.name ? 'border-red-500' : 'border-gray-600'
                            } focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition`}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                            Message
                        </label>
                        <textarea
                            name="message"
                            placeholder="message"
                            value={formData.message}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-md bg-gray-700 border ${
                                errors.name ? 'border-red-500' : 'border-gray-600'
                            } focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition`}
                            required
                        />
                    </div>

              <button
                  type="submit"
                  disabled={submitStatus === 'sending'}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium py-3 px-4 rounded-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:ring-opacity-50 transition transform hover:-translate-y-1 shadow-lg disabled:opacity-70 flex justify-center items-center"
                >
                  {submitStatus === 'sending' ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    'Enviar mensaje'
                  )}
                </button>
                </form>
            </div>
        </section>
    );
};