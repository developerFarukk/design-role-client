/* eslint-disable @typescript-eslint/no-unused-vars */


"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import iconss from "@/app/favicon.ico";
import { CiLogout } from "react-icons/ci";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "next-themes";
import { UserProps } from "./Navber";
import { signOut } from "next-auth/react";
import { toast } from "sonner";


const isNotNull = <T,>(item: T | null): item is T => item !== null;


const Sidebar = ({ session }: { session: UserProps | null }) => {

    const pathname = usePathname();
    const { theme, setTheme } = useTheme();


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
        <aside className="fixed top-0 left-0 z-40 w-[20%] h-screen pt-6 items-center bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex justify-center ">
                <Link href="/" className="flex items-center">
                    <Image
                        src={iconss}
                        width={30}
                        height={30}
                        alt="PortfolioRole"
                        className=" lg:mr-3 md:mr-3"
                    />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white md:block sm:block hidden">
                        PortfolioRole
                    </span>
                </Link>
            </div>
            <div className="hidden sm:block">

                <div className="flex flex-col items-center mt-6 mx-2">
                    <Image alt="image" className="object-cover w-24 h-24 mx-2 rounded-full" height={50} width={50} src={session?.user?.image || "default-image"} />
                    <h4 className="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200">{session?.user?.name}</h4>
                    <p className="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">{session?.user?.email}</p>
                </div>
            </div>
            <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800 pt-6">
                <ul className="space-y-2 font-medium">
                    {[
                        { href: "/dashboard", label: "Dashboard", icon: "M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" },
                        { href: "/dashboard/projects", label: "Projects", icon: "M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" },
                        { href: "/dashboard/blogs", label: "Blogs", icon: "M17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" },
                        { href: "/dashboard/messages", label: "Messages", icon: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z" },
                        { href: "/", label: "Home", icon: "M10.707 2.293a1 1 0 0 0-1.414 0l-7 7a1 1 0 0 0 1.414 1.414L4 10.414V17a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-6.586l.293.293a1 1 0 0 0 1.414-1.414l-7-7z" },
                    ]
                        .filter(isNotNull)
                        .map((item) => (
                            <li key={item.label}>
                                <Link
                                    href={item.href}
                                    className={`flex items-center p-2  rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-700 group ${pathname === item.href ? "bg-gray-100 dark:bg-gray-700 text-fuchsia-500 font-bold" : "text-white hover:text-blue-400"
                                        }`}
                                >
                                    <svg
                                        className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d={item.icon} />
                                    </svg>
                                    <span className="ms-3 whitespace-nowrap hidden sm:block">
                                        {item.label}
                                    </span>
                                </Link>
                            </li>
                        ))}
                </ul>
                <div className="flex justify-start p-4">
                    <button
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                    >
                        {theme === "dark" ? <FaSun className="w-6 h-6" /> : <FaMoon className="w-6 h-6" />}
                    </button>
                </div>
                <div className="pt-2 ">
                    <div
                    // onClick={() => signOut({
                    //     callbackUrl: `${process.env.NEXT_PUBLIC_BASEURL}`
                    // })}
                    >
                        <div className="flex gap-3">
                            <div><CiLogout className="text-white h-6 w-6" /></div>
                            <button
                                // onClick={() => signOut()}
                                onClick={handleSignOut}
                                className="text-white hidden sm:block"
                            >
                                LogOut
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </aside>
    );
};

export default Sidebar;