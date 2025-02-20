"use client"

import LoadingProgress from "@/components/shared/LoadingProgress";
import { useGetAllBlogsQuery } from "@/redux/features/blogManagmentApi/blogManagmentApi";
// import { authOptions } from "@/utils/authOptions";
// import { getServerSession } from "next-auth";

import { useGetAllProjectsQuery } from "@/redux/features/projectsManagment/projectManagmentApi";



const Dashboard = () => {

    // const session = await getServerSession(authOptions);

    const { data: projects, error, isLoading } = useGetAllProjectsQuery(undefined);

    const { data: blogs } = useGetAllBlogsQuery(undefined);

    const project = projects?.data.length

    const blog = blogs?.data.length


    if (isLoading) {
        return <LoadingProgress />;
    }

    if (error) {
        return <div>Data no fetch</div>;
    }

    return (
        <div>
            <div className=" lg:p-12 md:p-8 p-4">
                <header className=" text-center p-2">
                    <h1 className="text-4xl font-extrabold   uppercase text-blue-600">
                        Dashboard
                    </h1>
                </header>
                <div className="lg:flex justify-center  items-center gap-6  mt-12">

                    <div
                        className="hover:-translate-y-2 group border-2 bg-neutral-50 duration-500 w-44 h-44 flex text-neutral-600 flex-col justify-center items-center relative rounded-xl overflow-hidden shadow-md lg:mb-0 mb-12"
                    >
                        <svg
                            viewBox="0 0 200 200"
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute blur z-10 fill-red-300 duration-500 group-hover:blur-none group-hover:scale-105"
                        >
                            <path
                                transform="translate(100 100)"
                                d="M39.5,-49.6C54.8,-43.2,73.2,-36.5,78.2,-24.6C83.2,-12.7,74.8,4.4,69,22.5C63.3,40.6,60.2,59.6,49.1,64.8C38.1,70,19,61.5,0.6,60.7C-17.9,59.9,-35.9,67,-47.2,61.9C-58.6,56.7,-63.4,39.5,-70,22.1C-76.6,4.7,-84.9,-12.8,-81.9,-28.1C-79,-43.3,-64.6,-56.3,-49.1,-62.5C-33.6,-68.8,-16.8,-68.3,-2.3,-65.1C12.1,-61.9,24.2,-55.9,39.5,-49.6Z"
                            ></path>
                        </svg>

                        <div className="z-20 flex flex-col justify-center items-center">
                            <span className="font-bold text-6xl ml-2">{project}+</span>
                            <p className="font-bold">Total Projects </p>
                        </div>
                    </div>

                    <div
                        className="hover:-translate-y-2 group border-2 bg-neutral-50 duration-500 w-44 h-44 flex text-neutral-600 flex-col justify-center items-center relative rounded-xl overflow-hidden shadow-md"
                    >
                        <svg
                            viewBox="0 0 200 200"
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute blur z-10 fill-red-300 duration-500 group-hover:blur-none group-hover:scale-105"
                        >
                            <path
                                transform="translate(100 100)"
                                d="M39.5,-49.6C54.8,-43.2,73.2,-36.5,78.2,-24.6C83.2,-12.7,74.8,4.4,69,22.5C63.3,40.6,60.2,59.6,49.1,64.8C38.1,70,19,61.5,0.6,60.7C-17.9,59.9,-35.9,67,-47.2,61.9C-58.6,56.7,-63.4,39.5,-70,22.1C-76.6,4.7,-84.9,-12.8,-81.9,-28.1C-79,-43.3,-64.6,-56.3,-49.1,-62.5C-33.6,-68.8,-16.8,-68.3,-2.3,-65.1C12.1,-61.9,24.2,-55.9,39.5,-49.6Z"
                            ></path>
                        </svg>

                        <div className="z-20 flex flex-col justify-center items-center">
                            <span className="font-bold text-6xl ml-2">{blog}+</span>
                            <p className="font-bold">Total Blogs </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;
