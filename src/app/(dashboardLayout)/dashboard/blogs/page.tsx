"use client"

import LoadingProgress from "@/components/shared/LoadingProgress";
import { useGetAllBlogsQuery } from "@/redux/features/blogManagmentApi/blogManagmentApi";
import { Blog } from "@/types";
import Image from "next/image";


const DashboardBlog = () => {

    const { data, error, isLoading } = useGetAllBlogsQuery(undefined)

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



    return (
        <div>
            <header className="text-center p-2">
                <h1 className="text-xl font-bold  sm:text-3xl underline">
                    All Blogs
                </h1>
            </header>

            <div className="p-2 mt-4  ">
                {
                    blogs.length > 0 ? (
                        blogs.map((blog: Blog) => <>
                            <article key={blog._id} className="flex bg-white transition hover:shadow-xl p-2 border-2 rounded-md mb-6">
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

                                        <h3 className="font-bold text-gray-900 uppercase">
                                            {blog.title}
                                        </h3>

                                        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                                            {blog.content}
                                        </p>
                                    </div>

                                    <div className="sm:flex sm:items-end sm:justify-end">
                                        <a
                                            href="#"
                                            className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold text-gray-900 uppercase transition hover:bg-yellow-400"
                                        >
                                            Update Blog
                                        </a>
                                    </div>
                                </div>
                            </article>
                        </>)

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
