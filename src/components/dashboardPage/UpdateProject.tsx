/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */


"use client";

import { useUpdateProjectMutation } from '@/redux/features/projectsManagment/projectManagmentApi';
import { TProject } from '@/types';
import { TResponse } from '@/types/global';
import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';

interface TProjects {
    project: TProject;
}

const UpdateProject = ({ project }: TProjects) => {
    const [isLoading, setIsLoading] = useState(false);
    const [updateProject] = useUpdateProjectMutation();
    const [isOpen, setIsOpen] = useState(false);

    const { register, handleSubmit, reset } = useForm<TProject>({
        mode: "onBlur",
        defaultValues: {
            title: project?.title,
            descriptions: project?.descriptions,
            liveLink: project?.liveLink,
            githubClient: project?.githubClient,
            githubServer: project?.githubServer,
        },
    });

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        setIsLoading(true);

        const projectData: Partial<TProject> = {};

        if (data.title) projectData.title = data.title;
        if (data.descriptions) projectData.descriptions = data.descriptions;
        if (data.liveLink) projectData.liveLink = data.liveLink;
        if (data.githubClient) projectData.githubClient = data.githubClient;
        if (data.githubServer) projectData.githubServer = data.githubServer;

        try {

            if (data.image && data.image[0]) {
                const imageFile = data.image[0];

                const formData = new FormData();
                formData.append('file', imageFile);
                formData.append('upload_preset', process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!);

                const cloudinaryResponse = await fetch(
                    `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
                    {
                        method: 'POST',
                        body: formData,
                    }
                );

                const cloudinaryData = await cloudinaryResponse.json();
                if (cloudinaryData.secure_url) {
                    projectData.image = cloudinaryData.secure_url;
                }
            }

            const res = (await updateProject({ id: project._id, body: projectData })) as TResponse<any>;

            console.log(res);
            

            if (res.error) {
                toast.error(res.error.data.message);
            } else {
                toast.success('Project updated successfully');
                reset();
                close();
            }
        } catch (err) {
            toast.error('Something went wrong');
        } finally {
            setIsLoading(false);
        }
    };

    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);

    return (
        <>
            {/* Update Project Button */}
            <button
                onClick={open}
                className="block rounded-md bg-yellow-300 px-5 py-3 text-center text-xs font-bold text-gray-900 uppercase transition hover:bg-yellow-400"
            >
                Update Project
            </button>

            <Dialog open={isOpen} onClose={close} as="div" className="relative z-10">
                <div className="fixed inset-0 backdrop-blur-lg" aria-hidden="true" />
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <DialogPanel className="w-full border-2 max-w-md rounded-xl p-6">
                            <DialogTitle as="h3" className="font-medium flex justify-center text-2xl">
                                Update Project
                            </DialogTitle>

                            <form onSubmit={handleSubmit(onSubmit)}>
                                {/* Project Title */}
                                <label className="block mt-2 text-sm/6">
                                    <span className="mb-1">Project Title</span>
                                    <input
                                        type="text"
                                        className="block w-full p-2 border-2 border-blue-200 rounded-md shadow-sm focus:ring focus:ring-opacity-75"
                                        {...register("title")}
                                    />
                                </label>

                                {/* Project Image */}
                                <label className="block mt-2 text-sm/6">
                                    <span className="mb-1">Upload Project Image</span>
                                    <input
                                        type="file"
                                        className="block w-full p-2 border-2 border-blue-200 rounded-md shadow-sm focus:ring focus:ring-opacity-75"
                                        {...register("image")}
                                    />
                                </label>

                                {/* Project Descriptions */}
                                <label className="block mt-2 text-sm/6">
                                    <span className="mb-1">Project Descriptions</span>
                                    <textarea
                                        className="block w-full p-2 border-2 border-blue-200 rounded-md shadow-sm focus:ring focus:ring-opacity-75"
                                        {...register("descriptions")}
                                    />
                                </label>

                                {/* Project Live Link */}
                                <label className="block mt-2 text-sm/6">
                                    <span className="mb-1">Project Live Link</span>
                                    <input
                                        type="url"
                                        className="block w-full p-2 border-2 border-blue-200 rounded-md shadow-sm focus:ring focus:ring-opacity-75"
                                        {...register("liveLink")}
                                    />
                                </label>

                                {/* Project GitHub Server Link */}
                                <label className="block mt-2 text-sm/6">
                                    <span className="mb-1">Project GitHub Server Link</span>
                                    <input
                                        type="url"
                                        className="block w-full p-2 border-2 border-blue-200 rounded-md shadow-sm focus:ring focus:ring-opacity-75"
                                        {...register("githubServer")}
                                    />
                                </label>

                                {/* Project GitHub Client Link */}
                                <label className="block mt-2 text-sm/6">
                                    <span className="mb-1">Project GitHub Client Link</span>
                                    <input
                                        type="url"
                                        className="block w-full p-2 border-2 border-blue-200 rounded-md shadow-sm focus:ring focus:ring-opacity-75"
                                        {...register("githubClient")}
                                    />
                                </label>

                                {/* Submit Button */}
                                <div className="mt-4">
                                    <Button
                                        type="submit"
                                        className="inline-flex w-full justify-center items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white"
                                        disabled={isLoading}
                                    >
                                        {isLoading ? 'Updating...' : 'Submit'}
                                    </Button>
                                </div>
                            </form>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </>
    );
};

export default UpdateProject;