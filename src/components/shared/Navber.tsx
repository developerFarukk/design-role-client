/* eslint-disable @typescript-eslint/no-unused-vars */


"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { FaSun, FaMoon } from "react-icons/fa";
import iconss from "../../app/favicon.ico";
import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import { toast } from "sonner";

export type UserProps = {
  user?: {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
  }
}

const isNotNull = <T,>(item: T | null): item is T => item !== null;

const Navbar = ({ session }: { session: UserProps | null }) => {
  // console.log(session);

  const [isOpen, setIsOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    setIsClient(true);
    document.querySelectorAll('[fdprocessedid]').forEach(el => {
      el.removeAttribute('fdprocessedid');
    });
  }, []);


  const handleSignOut = async () => {
    try {
      await signOut()
      toast.success("LogOut Successful!", {
        duration: 1000,
      });
    } catch (error) {
      toast.error("LogOut Failed!", {
        duration: 1000,
      });
    }
  };


  return (
    <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900 rounded-2xl">
      <div className="flex flex-wrap items-center justify-between px-4 mx-auto">

        <Link href="/" className="flex items-center">
          <Image
            src={iconss}
            width={36}
            height={36}
            alt="PortfolioRole"
            className="h-6 mr-3 sm:h-9"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            PortfolioRole
          </span>
        </Link>

        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-gray-500 rounded-lg hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <div
          className={`lg:flex items-center lg:w-auto lg:order-1 ${isOpen && isClient ? "block" : "hidden"
            } w-full lg:block`}
        >
          <ul className="flex flex-col mt-4 lg:flex-row lg:space-x-8 lg:mt-0">
            {[
              { href: "/", label: "Home" },
              { href: "/projects", label: "Projects" },
              { href: "/blog", label: "Blogs" },
              { href: "/contact", label: "contact" },
              session?.user ? { href: "/dashboard", label: "Dashboard" } : null
            ]
              .filter(isNotNull)
              .map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`${pathname === href
                      ? "text-fuchsia-500 font-bold"
                      : "text-white hover:text-blue-400"
                      }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}

            <li className="lg:hidden">
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                {theme === "dark" ? <FaSun className="w-6 h-6" /> : <FaMoon className="w-6 h-6" />}
              </button>
            </li>
            {
              session?.user ?
                <li className="lg:hidden">
                  <button
                    // onClick={() => signOut()}
                    onClick={handleSignOut}
                  >
                    <Link
                      href="/login"
                      className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      LogOut
                    </Link>
                  </button>
                </li> :
                <li className="lg:hidden">
                  <Link
                    href="/login"
                    className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Login
                  </Link>
                </li>
            }

          </ul>
        </div>

        <div className="hidden lg:flex items-center lg:order-2 space-x-4">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 text-gray-500 rounded-lg hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
          >
            {theme === "dark" ? <FaSun className="w-6 h-6" /> : <FaMoon className="w-6 h-6" />}
          </button>

          {
            session?.user ?
              <button
                onClick={handleSignOut}
              // onClick={() => signOut()}
              >
                <Link
                  href="/"
                  className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5"
                >
                  LogOut
                </Link>
              </button>
              :
              <Link
                href="/login"
                className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5"
              >
                Login
              </Link>
          }

        </div>
      </div>
    </nav>
  );
};

export default Navbar;