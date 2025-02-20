/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useDeletePeojectMutation, useGetAllProjectsQuery } from "@/redux/features/projectsManagment/projectManagmentApi";
import LoadingProgress from "../shared/LoadingProgress";
import { TProject } from "@/types";
import Image from "next/image";
import { Trash2 } from "lucide-react";
import Swal from "sweetalert2";
import { toast } from "sonner";
import { TExtraError } from "@/types/global";



const ProjectHome = () => {

    const { data, error, isLoading } = useGetAllProjectsQuery(undefined);

    const [deleteProject] = useDeletePeojectMutation();


    const projects = data?.data
    console.log(projects);


    if (isLoading) {
        return <LoadingProgress />;
    }

    if (error) {
        return <div>Data no fetch</div>;
    }

    // Date formatting function
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString();
    };


    // Blog Delete Function
    const handleDeleteProject = async (project: any) => {
        // console.log(project._id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {

                    await deleteProject({ id: project._id }).unwrap();
                    // console.log(blogs);

                    Swal.fire({
                        title: "Deleted!",
                        text: "The project has been deleted.",
                        icon: "success"
                    });
                } catch (error) {
                    console.error("Delete Error:", error);
                    toast.error((error as TExtraError)?.data?.message || 'Failed to delete project');
                    Swal.fire({
                        title: "Error!",
                        text: (error as TExtraError)?.data?.message || 'Failed to delete project',
                        icon: "error"
                    });
                }
            }
        });
    };


    return (
        <div>

            <header className=" text-center p-2">
                <h1 className="text-xl font-bold  sm:text-3xl underline">
                    All Projects - <span className="text-blue-600">
                        {projects.length}
                    </span>
                </h1>
            </header>
            <div>
                <div className="p-2 mt-4">
                    {projects.length > 0 ? (
                        projects?.map((project: TProject) => (
                            <article key={project._id} className="flex transition hover:shadow-xl p-2 border-2 rounded-md mb-6">

                                <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                                    <time
                                        dateTime="2022-10-10"
                                        className="flex items-center justify-between gap-4 text-xs font-bold text-gray-900 uppercase"
                                    >
                                        <span>Create</span>
                                        <span>{formatDate(project?.updatedAt)}</span>
                                    </time>
                                </div>


                                <div className="hidden sm:block sm:basis-56">
                                    <Image
                                        alt="project..."
                                        src={project?.image}
                                        className="aspect-square h-36 w-36 object-cover flex justify-center items-center"
                                        height={500}
                                        width={500}
                                    />
                                </div>


                                <div className="flex flex-1 flex-col justify-between">
                                    <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                                        <dl className="-my-3 divide-y text-sm">


                                            <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                                                <dt className="font-medium uppercase">Title</dt>
                                                <dd className="sm:col-span-2 font-semibold text-blue-600 break-words overflow-hidden">
                                                    {project?.title}
                                                </dd>
                                            </div>


                                            <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                                                <dt className="font-medium uppercase">Description</dt>
                                                <dd className="sm:col-span-2 break-words overflow-y-auto max-h-32">
                                                    {project?.descriptions}
                                                </dd>
                                            </div>


                                            <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                                                <dt className="font-medium uppercase">Live Link</dt>
                                                <dd className="sm:col-span-2 break-words overflow-hidden">
                                                    {project?.liveLink}
                                                </dd>
                                            </div>

                                            <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                                                <dt className="font-medium uppercase">GitHub Client</dt>
                                                <dd className="sm:col-span-2 break-words overflow-hidden">
                                                    {project?.githubClient}
                                                </dd>
                                            </div>

                                            <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                                                <dt className="font-medium uppercase">GitHub Server</dt>
                                                <dd className="sm:col-span-2 break-words overflow-hidden">
                                                    {project?.githubServer}
                                                </dd>
                                            </div>

                                        </dl>
                                    </div>


                                    <div className="flex justify-end gap-2 p-4">
                                        <button
                                            onClick={() => handleDeleteProject(project)}
                                            className="p-2 border-2 rounded-full"
                                        >
                                            <Trash2 />
                                        </button>
                                        {/* <Updateproject project={project} /> */}
                                    </div>
                                </div>
                            </article>
                        ))
                    ) : (
                        <div className="text-center">
                            <p>No Projects</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectHome;
