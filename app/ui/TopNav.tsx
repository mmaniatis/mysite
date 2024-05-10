"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { XIcon, MenuIcon } from '@heroicons/react/solid';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (<>
    <nav className="bg-white py-7 rounded-3xl mx-auto mt-4 max-w-6xl z-10 shadow-2xl relative text-blue-900 sticky top-0">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between">
            <div>
                <Link href="/" onClick={() => setIsOpen(false)}>
                    <div className="flex flex-row items-center">
                        <Image className="" alt="" src="/flag.png"  width={72} height={72}/>
                        <span className="hover:text-blue-200 cursor-pointer text-3xl transition-all">americacoding.com</span>
                    </div>
                </Link>
            </div>
          <div className="gap-5 hidden md:flex space-x-4 items-center">

            <Link href="/">
              <span className="hover:text-blue-500 cursor-pointer">Home</span>
            </Link>


            <Link href="/contact">
              <span className="hover:text-blue-500 cursor-pointer">Contact</span>
            </Link>

            <Link href="/promise">
              <span className="hover:text-blue-500 cursor-pointer">Our Promise</span>
            </Link>

            <Link href="/plan">
              <span className="hover:text-blue-500 cursor-pointer">The Strategy</span>
            </Link>

            <Link href="/support">
              <span className="hover:text-blue-500 cursor-pointer">Support</span>
            </Link>

            <Link href="/pricing">
              <span className="hover:text-blue-500 cursor-pointer">Pricing</span>
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
      <nav>
        {isOpen && (
          <div className="flex md:hidden max-w-lg bg-white mx-auto z-100 items-center flex-col gap-5">


            <Link href="/" onClick={() => setIsOpen(!isOpen)}>
              <span className="hover:text-blue-500 cursor-pointer w-full">Home</span>
            </Link>


            <Link href="/contact" onClick={() => setIsOpen(!isOpen)}>
              <span className="hover:text-blue-500 cursor-pointer">Contact</span>
            </Link>

            <Link href="/promise" onClick={() => setIsOpen(!isOpen)}>
              <span className="hover:text-blue-500 cursor-pointer">Our Promise</span>
            </Link>

            <Link href="/plan" onClick={() => setIsOpen(!isOpen)}>
              <span className="hover:text-blue-500 cursor-pointer">The Strategy</span>
            </Link>

            <Link href="/support" onClick={() => setIsOpen(!isOpen)}>
              <span className="hover:text-blue-500 cursor-pointer">Support</span>
            </Link>

            <Link href="/pricing" onClick={() => setIsOpen(!isOpen)}>
              <span className="hover:text-blue-500 cursor-pointer">Pricing</span>
            </Link>
          </div>
        )}
    </nav>
    </nav>
    </>
  );
};

export default Navbar;
