// pages/contact.tsx

import React from 'react';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { FiMail, FiTwitter, FiLinkedin } from 'react-icons/fi';

const ContactPage: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Contact Me"
        description="Get in touch with me via email, Twitter, or LinkedIn."
      />
      <div className="mt-10 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-semibold text-blue-800 mb-6 text-center">Contact Me</h1>
        <div className="flex justify-between items-center w-1/2 px-20">
          {/* Email Icon */}
          <a
            href="mailto:mikejohnmaniatis@gmail.com"
            className="text-blue-900 hover:text-blue-500 transition duration-300"
          >
            <FiMail className="text-8xl" />
          </a>

          {/* Twitter Icon */}
          <a
            href="https://twitter.com/michaelmaniatis"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-900 hover:text-blue-500 transition duration-300"
          >
            <FiTwitter className="text-8xl" />
          </a>

          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com/in/mike-maniatis-2b178bb7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-900 hover:text-blue-500 transition duration-300"
          >
            <FiLinkedin className="text-8xl" />
          </a>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
