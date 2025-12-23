"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  // prevent scrolling when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <header className="bg-white border-b sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-4">
          <Image src="/logo.svg" alt="Skool Nexus" width={80} height={36} />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-16 text-gray-700">
          <Link className="hover:text-black" href="/">Home</Link>
          <Link className="hover:text-black" href="about">About</Link>
          <Link className="hover:text-black" href="features">Features</Link>
          <Link className="hover:text-black" href="pricing">Pricing</Link>
          <Link className="hover:text-black" href="contact">Contact</Link>
          <Link
            href="#book"
            className="ml-4 inline-block bg-accent text-white px-4 py-2 rounded-md text-sm"
          >
            Book a Demo
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          aria-label="Toggle Menu"
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
        >
          <div className="transition-all duration-300">
            {open ? (
              // X icon
              <svg width="24" height="24" fill="none" stroke="currentColor">
                <path
                  d="M6 6l12 12M18 6l-12 12"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              // Hamburger icon
              <svg width="24" height="24" fill="none" stroke="currentColor">
                <path d="M4 7h16M4 12h16M4 17h16" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </div>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`
          md:hidden 
          bg-white 
          overflow-hidden 
          transition-all 
          duration-300 
          ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <nav className="flex flex-col px-6 py-4 text-gray-700 gap-4 text-[17px]">
          <Link className="hover:text-black transition" href="/">Home</Link>
          <Link className="hover:text-black transition" href="/about">About</Link>
          <Link className="hover:text-black transition" href="/features">Features</Link>
          <Link className="hover:text-black transition" href="/pricing">Pricing</Link>
          <Link className="hover:text-black transition" href="/contact">Contact</Link>

          <Link
            href="#book"
            className="bg-accent text-white px-4 py-2 w-fit rounded-md text-center mt-2"
          >
            Book a Demo
          </Link>
        </nav>
      </div>
    </header>
  );
}
