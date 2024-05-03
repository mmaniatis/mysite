"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { XIcon, MenuIcon } from '@heroicons/react/solid';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (<>
    <nav className="bg-white py-7 rounded-3xl mx-auto mt-4 max-w-6xl z-10 shadow-2xl relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between">
           <div>
                <Link href="/" onClick={() => setIsOpen(false)}>
                    <span className="hover:text-blue-500 cursor-pointer">mikemaniatis.com</span>
                </Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link href="/">
              <span className="hover:text-blue-500 cursor-pointer">Home</span>
            </Link>

            <Link href="/aboutme">
              <span className="hover:text-blue-500 cursor-pointer">About Me</span>
            </Link>

            <Link href="/contact">
              <span className="hover:text-blue-500 cursor-pointer">Contact</span>
            </Link>

          </div>
          <div className="flex md:hidden">
            <button
              className="focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <XIcon className="h-6 w-6" />  : <MenuIcon className="h-6 w-6" />} 
            </button>
          </div>
        </div>
      </div>
    </nav>
    <nav>
        {isOpen && (
          <div className="md:hidden duration-500 transition-all duration-500 ease-in-out overflow-hidden max-w-lg bg-white rounded-2xl mx-auto flex z-0 items-center flex-col">
                <Link href="/"  onClick={() => setIsOpen(!isOpen)}>
                    <span className="hover:text-blue-500 cursor-pointer">Home</span>
                </Link>
                <Link href="/aboutme"  onClick={() => setIsOpen(!isOpen)}>
                <span className="block hover:text-blue-500 cursor-pointer py-2">About Me</span>
                </Link>
                <Link href="/contact"  onClick={() => setIsOpen(!isOpen)}>
                <span className="block hover:text-blue-500 cursor-pointer py-2">Contact</span>
                </Link>
          </div>
        )}
    </nav>
    </>
  );
};

export default Navbar;
