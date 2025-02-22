/* eslint-disable @typescript-eslint/no-unused-vars */


"use client";

import Image from "next/image";
import Link from "next/link";
import designrole from "../favicon.ico";
import { signIn } from "next-auth/react";
import { toast } from "sonner";

const Login = () => {
  
    const handleGoogleLogin = async () => {
        try {
            await signIn("google", {
                callbackUrl: `{${process.env.NEXT_PUBLIC_BASEURL}}`,
            });
            toast.success("Google Login Successful!");
        } catch (error) {
            toast.error("Google Login Failed!");
        }
    };

    
    const handleGithubLogin = async () => {
        try {
            await signIn("github", {
                callbackUrl: `{${process.env.NEXT_PUBLIC_BASEURL}}`,
            });
            toast.success("GitHub Login Successful!");
        } catch (error) {
            toast.error("GitHub Login Failed!");
        }
    };

    return (
        <div>

            <div className="flex justify-center items-center h-screen flex-col md:flex-row lg:mb-0">
                <div className="relative flex-1">
                    <div className=" w-full">
                        <Image
                            src={"https://pitchmark.net/client/images/img-12.png"}
                            priority
                            height={100}
                            width={1000}
                            alt="shoe.png"
                        />
                    </div>
                </div>

                <div className="mx-auto flex flex-1 flex-col items-center justify-center">
                    <div className="text-3xl">
                        <Link href={"/"} className="flex items-center ">
                            {" "}
                            <Image
                                src={designrole}
                                alt="designrole"
                                className="me-3 text-5xl animate-bounce"
                                height={30}
                                width={30}
                            />
                            <p className="font-medium">
                                <span className="font-light lg:text-slate-400">DESIGN </span>
                                ROLE
                            </p>{" "}
                        </Link>{" "}
                    </div>

                    <div className="divider text-xs font-medium text-secondary md:mx-36">
                        {" "}
                        LOGIN WITH
                    </div>
                    <div className="flex items-center justify-between gap-2 mt-10">
                        <div>
                            <div className="flex gap-6">
                    
                                <button
                                    onClick={handleGoogleLogin}
                                    className="flex gap-3 cursor-pointer text-white font-semibold bg-gradient-to-r from-fuchsia-500 to-green-500 px-7 py-3 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-yellow-400 hover:border-gray-800 hover:from-slate-400 hover:to-blue-500"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        x="0px"
                                        y="0px"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 48 48"
                                    >
                                        <path
                                            fill="#FFC107"
                                            d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                                        ></path>
                                        <path
                                            fill="#FF3D00"
                                            d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                                        ></path>
                                        <path
                                            fill="#4CAF50"
                                            d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                                        ></path>
                                        <path
                                            fill="#1976D2"
                                            d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                                        ></path>
                                    </svg>
                                    Google
                                </button>

                   
                                <button
                                    onClick={handleGithubLogin}
                                    className="flex gap-3 cursor-pointer text-white font-semibold bg-gradient-to-r from-blue-500 to-green-500 px-7 py-3 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-yellow-400 hover:border-gray-800 hover:from-green-500 hover:to-blue-500"
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        height="24"
                                        width="24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill="#FFFFFF"
                                            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                                        ></path>
                                    </svg>
                                    Github
                                </button>
                            </div>
                            <div className="mt-6  flex justify-center">
                                <Link href="/">
                                    <button className="cursor-pointer text-white hover:text-black font-bold relative text-[14px] w-[9em] h-[3em] text-center bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-[35px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700 hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
                                        Back to home
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;