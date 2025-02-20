"use client"

import { useGetAllProjectsQuery } from "@/redux/features/projectsManagment/projectManagmentApi";
import LoadingProgress from "../shared/LoadingProgress";
import { TProject } from "@/types";
import Link from "next/link";

const Projects = () => {
    const { data, error, isLoading } = useGetAllProjectsQuery(undefined);

    const projects = data?.data;

    if (isLoading) {
        return <LoadingProgress />;
    }

    if (error) {
        return <div>Data not fetched</div>;
    }

    return (
        <div>
            <div className="text-center text-3xl p-4 font-bold">
                <h2>My Projects</h2>
            </div>
            <div>
                <section className="">
                    <div className="container mx-auto">
                        <div className="grid grid-cols-1 gap-4 mt-2 xl:mt-12 xl:gap-8 lg:grid-cols-3 md:grid-cols-2">
                            {projects?.length > 0 ? (
                                projects.map((item: TProject) => (
                                    <div
                                        key={item?._id}
                                        className="flex items-end overflow-hidden bg-cover rounded-lg h-96"
                                        style={{ backgroundImage: `url(${item?.image})` }}
                                    >
                                        <div className="w-full px-4 py-2 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                                            <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">
                                                {item.title}
                                            </h2>
                                            <div className="flex justify-between mt-4">
                                                <a
                                                    href={item.liveLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="block rounded-md bg-blue-500 px-5 py-3 text-center text-xs font-bold hover:text-gray-900 uppercase transition hover:bg-blue-200 text-white"
                                                >
                                                    Live Demo
                                                </a>
                                                <Link href={`/projects/${item._id}`}>
                                                    <button
                                                        className="block rounded-md bg-yellow-300 px-5 py-3 text-center text-xs font-bold text-gray-900 uppercase transition hover:bg-yellow-400"
                                                    >
                                                        View Details
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="col-span-full text-center text-gray-600 dark:text-gray-400">
                                    No projects found.
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Projects;