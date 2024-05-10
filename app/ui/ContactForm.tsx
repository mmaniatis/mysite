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
    <div className="w-full mx-auto p-6 w-full items-center justify-center">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-red-400 font-black text-2xl mb-1">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 min-h-12" required />
        </div>
        <div className="mb-4 ">
          <label htmlFor="email" className="block text-red-400 font-black text-2xl mb-1">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 min-h-12" required />
        </div>
        <div className="mb-6 mx-auto">
          <label htmlFor="message" className="text-red-400 block font-black text-2xl mb-1">Message</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 min-h-36" required />
        </div>
        <button type="submit" className="flex mx-auto items-center justify-center bg-blue-400 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-md transition-colors duration-300 w-1/2 min-h-12 ">Send</button>
      </form>
    </div>
  );
};

export default ContactForm;
