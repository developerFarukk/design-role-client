/* eslint-disable @typescript-eslint/no-unused-vars */


"use client";

import { useUpdateBlogMutation } from '@/redux/features/blogManagmentApi/blogManagmentApi';
import { Blog } from '@/types';
import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';

interface TBlogs {
    blog: Blog;
}

const UpdateBlog = (blog: TBlogs) => {


    const [updateBlog] = useUpdateBlogMutation();

    const [isOpen, setIsOpen] = useState(false);

    const { register, handleSubmit, reset, formState: { errors } } = useForm<Blog>({
        mode: "onBlur",
    });

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {

        const toastId = toast.loading("Updating...");

        try {
            const res = await updateBlog({ id: blog?.blog?._id, body: data }).unwrap();

            if (res.error) {
                toast.error(res.error.data.message, { id: toastId });
            } else {
                toast.success("Blog updated successfully", { id: toastId });
                reset();
                close();
            }
        } catch (err) {
            toast.error("Something went wrong", { id: toastId });
        }
    };

    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);

    return (
        <>
            {/* Uodate Blog Button */}
            <button
                onClick={open}
                className="block rounded-md bg-yellow-300 px-5 py-3 text-center text-xs font-bold text-gray-900 uppercase transition hover:bg-yellow-400"
            >
                Update Blog
            </button>

            <Dialog open={isOpen} onClose={close} as="div" className="relative z-10">

                <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" aria-hidden="true" />


                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <DialogPanel className="w-full max-w-md rounded-xl bg-white p-6">
                            <DialogTitle as="h3" className="font-medium flex justify-center text-2xl">
                                Update Blog
                            </DialogTitle>


                            <form onSubmit={handleSubmit(onSubmit)}>

                                {/* Blog Title */}
                                <label className="block mt-2 text-sm/6">
                                    <span className="mb-1">Blog Title</span>
                                    <input
                                        type="text"
                                        defaultValue={blog?.blog?.title}
                                        className="block w-full p-2 border-2 border-blue-200 rounded-md shadow-sm focus:ring focus:ring-opacity-75"
                                        {...register("title")}
                                    />
                                    <div className="flex justify-end mt-1">
                                        <label className={errors.title ? "text-red-700 text-sm" : "hidden"}>
                                            {errors.title?.message}
                                        </label>
                                    </div>
                                </label>

                                {/* Blog Image */}
                                <label className="block mt-2 text-sm/6">
                                    <span className="mb-1">Blog Image Link</span>
                                    <input
                                        type="url"
                                        defaultValue={blog?.blog?.image}
                                        className="block w-full p-2 border-2 border-blue-200 rounded-md shadow-sm focus:ring focus:ring-opacity-75"
                                        {...register("image")}
                                    />
                                    <div className="flex justify-end mt-1">
                                        <label className={errors.image ? "text-red-700 text-sm" : "hidden"}>
                                            {errors.image?.message}
                                        </label>
                                    </div>
                                </label>

                                {/* Blog Category */}
                                <label className="block mt-2 text-sm/6">
                                    <span className="mb-1">Blog Category</span>
                                    <input
                                        type="text"
                                        defaultValue={blog?.blog?.category}
                                        className="block w-full p-2 border-2 border-blue-200 rounded-md shadow-sm focus:ring focus:ring-opacity-75"
                                        {...register("category")}
                                    />
                                    <div className="flex justify-end mt-1">
                                        <label className={errors.category ? "text-red-700 text-sm" : "hidden"}>
                                            {errors.category?.message}
                                        </label>
                                    </div>
                                </label>

                                {/* Blog Content */}
                                <label className="block mt-2 text-sm/6">
                                    <span className="mb-1">Blog Content</span>
                                    <textarea
                                        {...register("content")}
                                        rows={3}
                                        defaultValue={blog?.blog?.content}
                                        className="block w-full p-2 border-2 border-blue-200 rounded-md shadow-sm focus:ring focus:ring-opacity-75"
                                    />
                                    <div className="flex justify-end mt-1">
                                        <label className={errors.content ? "text-red-700 text-sm" : "hidden"}>
                                            {errors.content?.message}
                                        </label>
                                    </div>
                                </label>

                                {/* Submit Button */}
                                <div className="mt-4">
                                    <Button
                                        type="submit"
                                        className="inline-flex w-full justify-center items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white"
                                    >
                                        Submit
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

export default UpdateBlog;
