"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useTheme } from "next-themes"; 
import { FaSun, FaMoon } from "react-icons/fa"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme(); 
  return (
    <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
        <Link href="/" className="flex items-center">
          <Image
            src="https://www.svgrepo.com/show/499962/music.svg"
            width={36}
            height={36}
            alt="Landwind Logo"
            className="h-6 mr-3 sm:h-9"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Landwind
          </span>
        </Link>

        {/* Menu toggle button (Mobile) */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-gray-500 rounded-lg hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`lg:flex items-center lg:w-auto lg:order-1 ${
            isOpen ? "block" : "hidden"
          } w-full lg:block`}
        >
          <ul className="flex flex-col mt-4 lg:flex-row lg:space-x-8 lg:mt-0">
            {[
              { href: "/", label: "Home" },
              { href: "/company", label: "Company" },
              { href: "/marketplace", label: "Marketplace" },
              { href: "/features", label: "Features" },
              { href: "/team", label: "Team" },
              { href: "/contact", label: "Contact" },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Download Button and Theme Toggle */}
        <div className="hidden lg:flex items-center lg:order-2 space-x-4">
          {/* Theme Toggle Button */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 text-gray-500 rounded-lg hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
          >
            {theme === "dark" ? <FaSun className="w-6 h-6" /> : <FaMoon className="w-6 h-6" />}
          </button>

          {/* Download Button */}
          <Link
            href="https://themesberg.com/product/tailwind-css/landing-page"
            className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5"
          >
            Download
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;