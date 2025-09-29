import React, { useState, FormEvent } from 'react';

const FaqItem: React.FC<{ question: string; children: React.ReactNode }> = ({ question, children }) => (
  <details className="group border-b border-gray-200 dark:border-gray-700 py-4">
    <summary className="flex items-center justify-between w-full cursor-pointer list-none">
      <span className="text-lg font-medium text-gray-800 dark:text-gray-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
        {question}
      </span>
      <span className="ml-4 transition-transform duration-200 transform group-open:rotate-180">
        <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
      </span>
    </summary>
    <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
      {children}
    </p>
  </details>
);

const SupportPage: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setError('Please fill out all fields.');
      return;
    }
    setError('');
    console.log('Form submitted:', formState);
    setIsSubmitted(true);
  };

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-2 tracking-tight">
        Support & FAQ
      </h1>
      <p className="text-center text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
        We're here to help. Find answers to common questions or get in touch with us.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        {/* FAQ Section */}
        <div className="lg:col-span-3">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h2>
          <div className="space-y-2">
            <FaqItem question="What is the purpose of this website?">
              This website aims to be a comprehensive, unbiased resource exploring the differences, similarities, and potential integrations between traditional and modern healthcare methods. Our goal is to foster understanding and empower you to make informed decisions about your health.
            </FaqItem>
            <FaqItem question="How is the information on this site verified?">
              Our content is based on extensive research from academic journals, reputable medical publications, and historical texts. We strive for accuracy and balance, but this information should not replace professional medical advice.
            </FaqItem>
            <FaqItem question="Can I suggest a topic or correction?">
              Absolutely! We welcome feedback and suggestions from our community. Please use the contact form on this page to send us your thoughts. We review all submissions and appreciate your help in making this resource better.
            </FaqItem>
             <FaqItem question="Is this website offering medical advice?">
              No. The content provided here is for informational purposes only and is not intended as a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
            </FaqItem>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800/50 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">Contact Us</h2>
                {isSubmitted ? (
                    <div className="text-center p-4 bg-emerald-50 dark:bg-emerald-900/50 border border-emerald-200 dark:border-emerald-700 rounded-lg">
                        <h3 className="text-xl font-semibold text-emerald-800 dark:text-emerald-300">Thank You!</h3>
                        <p className="text-emerald-700 dark:text-emerald-200 mt-2">Your message has been sent successfully. We'll get back to you shortly.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} noValidate>
                        <div className="space-y-5">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formState.name}
                                    onChange={handleInputChange}
                                    className="block w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formState.email}
                                    onChange={handleInputChange}
                                    className="block w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    placeholder="you@example.com"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    value={formState.message}
                                    onChange={handleInputChange}
                                    className="block w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    placeholder="How can we help?"
                                    required
                                ></textarea>
                            </div>
                            {error && <p className="text-sm text-red-600 dark:text-red-400">{error}</p>}
                            <div>
                                <button
                                    type="submit"
                                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </form>
                )}
            </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;