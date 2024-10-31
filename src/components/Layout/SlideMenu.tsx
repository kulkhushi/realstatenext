'use client'
import { X } from 'lucide-react';
import Link from 'next/link';


const pages = [
    { url: '/', label: 'HOME' },
    { url: '/about-rahul', label: 'ABOUT RAHUL' },
    { url: '/portfolio', label: 'PORTFOLIO' },
    { url: '/past-transactions', label: 'PAST TRANSACTIONS' },
    { url: '/home-search', label: 'HOME SEARCH' },
    { url: '/home-valuation', label: 'HOME VALUATION' },
    { url: '/neighborhoods', label: 'NEIGHBORHOODS' },
    { url: '/resources', label: 'RESOURCES' },
    { url: '/press-media', label: 'PRESS & MEDIA' },
    { url: '/testimonials', label: 'TESTIMONIALS' },
    { url: '/lets-connect', label: "LET'S CONNECT" },
    { url: '/my-search-portal', label: 'MY SEARCH PORTAL' }
  ];

  type subMenuProps = {
    isMenuOpen: boolean;  
    onCLick:()=>void; 
  }


const SlideMenu = ({isMenuOpen,onCLick}:subMenuProps) => {
   

   
  return (
    <div className="relative">
      {/* Menu Icon */}
     

      {/* Slide Navigation */}
      <div
        className={`fixed top-0 right-0 h-full w-[400px] bg-white text-black transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } z-40`}
      >
        {/* Close Button */}
        <button
          className="p-4 bg-transparent text-black absolute top-4 right-4"
           onClick={onCLick}
        >
          <X size={32}/>
        </button>

        {/* Navigation Links */}
        <nav className="flex flex-col items-center mt-20 px-10 h-full">
            {
                pages.map((item)=>(
                    <Link href={item.url} key={item.label} className="py-3 text-[21px] text-black tenor_Sans border-b w-full text-center">
                    {item.label}
                  </Link>
                ))
            }
        </nav>
      </div>
    </div>
  )
}

export default SlideMenu