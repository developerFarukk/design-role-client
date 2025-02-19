/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import CreateBlog from "@/components/dashboardPage/CreateBlog";
import LoadingProgress from "@/components/shared/LoadingProgress";
import { useDeleteBlogMutation, useGetAllBlogsQuery } from "@/redux/features/blogManagmentApi/blogManagmentApi";
import { Blog } from "@/types";
import { TExtraError } from "@/types/global";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";
import Swal from "sweetalert2";


const DashboardBlog = () => {

    const { data, error, isLoading } = useGetAllBlogsQuery(undefined);

    const [deleteblog] = useDeleteBlogMutation();


    const blogs = data?.data

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
    const handleDeleteProduct = async (blog: any) => {
        // console.log(blog._id);

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

                    await deleteblog({ id: blog._id }).unwrap();
                    // console.log(blogs);

                    Swal.fire({
                        title: "Deleted!",
                        text: "The blog has been deleted.",
                        icon: "success"
                    });
                } catch (error) {
                    console.error("Delete Error:", error);
                    toast.error((error as TExtraError)?.data?.message || 'Failed to delete blog');
                    Swal.fire({
                        title: "Error!",
                        text: (error as TExtraError)?.data?.message || 'Failed to delete blog',
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
                    All Blogs - <span className="text-blue-600">{blogs.length}</span>
                </h1>
            </header>

            <div className="flex justify-end">
                <button
                // className="block rounded-md bg-blue-500 px-5 py-3 text-center text-xs font-bold hover:text-gray-900 uppercase transition hover:bg-blue-200 text-white"
                >
                    {/* Create Blog */}
                    <CreateBlog />
                </button>
            </div>

            <div className="p-2 mt-4  ">
                {
                    blogs.length > 0 ? (
                        blogs.map((blog: Blog) =>
                            <article key={blog._id} className="flex  transition hover:shadow-xl p-2 border-2 rounded-md mb-6">
                                <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                                    <time
                                        dateTime="2022-10-10"
                                        className="flex items-center justify-between gap-4 text-xs font-bold text-gray-900 uppercase"
                                    >
                                        <span>Create</span>
                                        {/* <span className="w-px flex bg-gray-900/10"></span> */}
                                        <span> {formatDate(blog?.updatedAt)}</span>
                                    </time>
                                </div>

                                <div className="hidden sm:block sm:basis-56">
                                    <Image
                                        alt="blog..."
                                        src={blog.image}
                                        className="aspect-square h-36 w-36 object-cover flex justify-center items-center"
                                        height={500}
                                        width={500}
                                    />
                                </div>

                                <div className="flex flex-1 flex-col justify-between">
                                    <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">

                                        <h3 className="font-bold  uppercase">
                                            {blog.title}
                                        </h3>

                                        <p className="mt-2 line-clamp-3 text-sm/relaxed ">
                                            {blog.content}
                                        </p>
                                    </div>

                                    <div className="flex justify-end gap-2">
                                        <button
                                            onClick={() => handleDeleteProduct(blog)}
                                            className="p-2  border-2 rounded-full">
                                            <Trash2 />
                                        </button>
                                        <button
                                            className="block rounded-md bg-yellow-300 px-5 py-3 text-center text-xs font-bold text-gray-900 uppercase transition hover:bg-yellow-400"
                                        >
                                            Update Blog
                                        </button>
                                    </div>
                                </div>
                            </article>
                        )

                    ) :
                        (
                            <div className="text-center ">
                                <p> No Blogs </p>
                            </div>
                        )
                }

            </div>
        </div>
    );
};

export default DashboardBlog;
