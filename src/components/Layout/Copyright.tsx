import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Copyright = () => {
  return (
    <footer className="bg-black text-white py-8 border-t mt-14">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-gray-400">Powered by</span>
          <Link href="https://luxurypresence.com" className="text-white font-semibold hover:underline">
            Luxury Presence
          </Link>
        </div>
        <div className="text-gray-400 text-sm mt-4 md:mt-0">
          <span>Copyright © 2024 | </span>
          <Link href="/privacy-policy" className="text-white hover:underline font-semibold">
            Privacy Policy
          </Link>
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-black hover:bg-white w-8 h-8 ring-1 ring-white rounded-full flex flex-col items-center justify-center">
            <FaFacebookF />
          </Link>
          <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-black hover:bg-white w-8 h-8 ring-1 ring-white rounded-full flex flex-col items-center justify-center">
            <FaInstagram />
          </Link>
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-black hover:bg-white w-8 h-8 ring-1 ring-white rounded-full flex flex-col items-center justify-center">
            <FaLinkedinIn />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Copyright;
