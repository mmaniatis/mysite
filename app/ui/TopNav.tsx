"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { XIcon, MenuIcon } from '@heroicons/react/solid';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (<>
    <nav className="bg-white py-7 rounded-3xl mx-auto mt-4 max-w-6xl z-10 shadow-2xl relative text-blue-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between">
            <div>
                <Link href="/" onClick={() => setIsOpen(false)}>
                    <div className="flex flex-row block">
                        <Image className="" alt="" src="/cog.png"  width={52} height={52}/>
                        <span className="hover:text-blue-200 cursor-pointer text-3xl transition-all">americacoding.com</span>
                    </div>
                </Link>
            </div>
          <div className="gap-5 hidden md:flex space-x-4 items-center">

            <Link href="/">
              <span className="hover:text-blue-500 cursor-pointer">Home</span>
            </Link>

            <Link href="/aboutme">
              <span className="hover:text-blue-500 cursor-pointer">About Us</span>
            </Link>

            <Link href="/contact">
              <span className="hover:text-blue-500 cursor-pointer">Consultation</span>
            </Link>

            <Link href="/contact">
              <span className="hover:text-blue-500 cursor-pointer">Our Promise</span>
            </Link>

            <Link href="/contact">
              <span className="hover:text-blue-500 cursor-pointer">Support</span>
            </Link>
            
          </div>
          <div></div>
          <div></div>
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
