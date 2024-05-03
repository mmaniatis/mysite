import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // You can handle form submission logic here
    console.log(formData);

    // Reset form fields after successful submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="max-w-md mx-auto p-6 font-mono">
      <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block font-medium mb-1">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" required />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-medium mb-1">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" required />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block font-medium mb-1">Message</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" required />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-md transition-colors duration-300">Send</button>
      </form>
    </div>
  );
};

export default ContactForm;
