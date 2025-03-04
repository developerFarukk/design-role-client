/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */


"use client";

import { useCreateProjectMutation } from '@/redux/features/projectsManagment/projectManagmentApi';
import { TProject } from '@/types';
import { TResponse } from '@/types/global';
import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';

const CreateProject = () => {
    const [createProject] = useCreateProjectMutation();
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const { register, handleSubmit, reset, formState: { errors } } = useForm<TProject>({
        mode: "onBlur",
    });


    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        setIsLoading(true); 

     
        const projectData: Partial<TProject> = {
            title: data.title,
            descriptions: data.descriptions,
            liveLink: data.liveLink,
            githubClient: data.githubClient,
            githubServer: data.githubServer,
        };

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

                console.log(cloudinaryData.secure_url);

                if (cloudinaryData.secure_url) {
                    projectData.image = cloudinaryData.secure_url; 
                }
            }

            const res = (await createProject(projectData)) as TResponse<any>;

            console.log(res);


            if (res.error) {
                toast.error(res.error.data.message);
            } else {
                toast.success('Project created Successfully');
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
            {/* Create Project Button */}
            <button
                onClick={open}
                className="block rounded-md bg-blue-500 px-5 py-3 text-center text-xs font-bold hover:text-gray-900 uppercase transition hover:bg-blue-200 text-white"
            >
                Create Project
            </button>

            <Dialog open={isOpen} onClose={close} as="div" className="relative z-10">
                <div className="fixed inset-0 backdrop-blur-lg" aria-hidden="true" />
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <DialogPanel className="w-full max-w-md rounded-xl border-2 p-6">
                            <DialogTitle as="h3" className="font-medium flex justify-center text-2xl">
                                Create Project
                            </DialogTitle>

                            <form onSubmit={handleSubmit(onSubmit)}>

                                {/* Project Title */}
                                <label className="block mt-2 text-sm/6">
                                    <span className="mb-1">Project Title</span>
                                    <input
                                        type="text"
                                        placeholder="Input project title"
                                        className="block w-full p-2 border-2 border-blue-200 rounded-md shadow-sm focus:ring focus:ring-opacity-75"
                                        {...register("title", { required: "Title is required" })}
                                    />
                                    <div className="flex justify-end mt-1">
                                        <label className={errors.title ? "text-red-700 text-sm" : "hidden"}>
                                            {errors.title?.message}
                                        </label>
                                    </div>
                                </label>

                                {/* Project Image */}
                                <label className="block mt-2 text-sm/6">
                                    <span className="mb-1">Upload Project Image</span>

                                    {
                                        isLoading ? "uploading..." : <input
                                            type="file"
                                            className="block w-full p-2 border-2 border-blue-200 rounded-md shadow-sm focus:ring focus:ring-opacity-75"
                                            {...register("image", { required: "Image is required" })}
                                        />
                                    }


                                    <div className="flex justify-end mt-1">
                                        <label className={errors.image ? "text-red-700 text-sm" : "hidden"}>
                                            {errors.image?.message}
                                        </label>
                                    </div>
                                </label>

                                {/* Project Descriptions */}
                                <label className="block mt-2 text-sm/6">
                                    <span className="mb-1">Project Descriptions</span>
                                    <textarea
                                        placeholder="Input project descriptions"
                                        className="block w-full p-2 border-2 border-blue-200 rounded-md shadow-sm focus:ring focus:ring-opacity-75"
                                        {...register("descriptions", { required: "Descriptions is required" })}
                                    />
                                    <div className="flex justify-end mt-1">
                                        <label className={errors.descriptions ? "text-red-700 text-sm" : "hidden"}>
                                            {errors.descriptions?.message}
                                        </label>
                                    </div>
                                </label>

                                {/* Project Live Link */}
                                <label className="block mt-2 text-sm/6">
                                    <span className="mb-1">Project Live Link</span>
                                    <input
                                        type="url"
                                        placeholder="Input project liveLink"
                                        className="block w-full p-2 border-2 border-blue-200 rounded-md shadow-sm focus:ring focus:ring-opacity-75"
                                        {...register("liveLink", { required: "Live Link is required" })}
                                    />
                                    <div className="flex justify-end mt-1">
                                        <label className={errors.liveLink ? "text-red-700 text-sm" : "hidden"}>
                                            {errors.liveLink?.message}
                                        </label>
                                    </div>
                                </label>

                                {/* Project GitHub Server Link */}
                                <label className="block mt-2 text-sm/6">
                                    <span className="mb-1">Project GitHub Server Link</span>
                                    <input
                                        type="url"
                                        placeholder="Input project githubServer"
                                        className="block w-full p-2 border-2 border-blue-200 rounded-md shadow-sm focus:ring focus:ring-opacity-75"
                                        {...register("githubServer")}
                                    />
                                </label>

                                {/* Project GitHub Client Link */}
                                <label className="block mt-2 text-sm/6">
                                    <span className="mb-1">Project GitHub Client Link</span>
                                    <input
                                        type="url"
                                        placeholder="Input project githubClient"
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
                                        {isLoading ? 'Creating...' : 'Submit'}
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

export default CreateProject;