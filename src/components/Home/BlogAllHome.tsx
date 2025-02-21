"use client"

import { useGetAllBlogsQuery } from "@/redux/features/blogManagmentApi/blogManagmentApi";
import LoadingProgress from "../shared/LoadingProgress";
import { Blog } from "@/types";
import Link from "next/link";


const BlogAllHome = () => {

    const { data, error, isLoading } = useGetAllBlogsQuery(undefined);

    const blogs = data?.data

    // console.log(blogs);


    if (isLoading) {
        return <LoadingProgress />;
    }

    if (error) {
        return <div>Data no fetch</div>;
    }


    return (
        <div>
            <div className="text-center text-3xl p-4 font-bold">
                <h2>All Blogs</h2>
            </div>

            <div className="p-2 mt-4 grid lg:grid-cols-3 md:grid-cols-2 gap-6">
                {blogs.length > 0 ? (
                    blogs?.map((blog: Blog) => (
                        <article key={blog._id} className="flex transition hover:shadow-xl p-2 border-2 rounded-md mb-6">

                            {/* <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                                <time
                                    dateTime="2022-10-10"
                                    className="flex items-center justify-between gap-4 text-xs font-bold text-gray-900 uppercase"
                                >
                                    <span>Create</span>
                                    <span>{formatDate(blog?.updatedAt)}</span>
                                </time>
                            </div>


                            <div className="hidden sm:block sm:basis-56">
                                <Image
                                    alt="blog..."
                                    src={blog?.image}
                                    className="aspect-square h-36 w-36 object-cover flex justify-center items-center"
                                    height={500}
                                    width={500}
                                />
                            </div> */}


                            <div className="flex flex-1 flex-col justify-between">
                                <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                                    <dl className="-my-3 divide-y text-sm">


                                        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                                            <dt className="font-medium uppercase">Title</dt>
                                            <dd className="sm:col-span-2 font-semibold text-blue-600 break-words overflow-hidden">
                                                {blog?.title}
                                            </dd>
                                        </div>


                                        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                                            <dt className="font-medium uppercase">Content</dt>
                                            <dd className="sm:col-span-2 break-words overflow-y-auto max-h-32">
                                                {blog?.content}
                                            </dd>
                                        </div>


                                        {/* <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                                            <dt className="font-medium uppercase">Category</dt>
                                            <dd className="sm:col-span-2 break-words overflow-hidden">
                                                {blog?.category}
                                            </dd>
                                        </div> */}

                                    </dl>
                                </div>


                                <div className="flex justify-center gap-2 p-4">
                                    <Link href={`/blog/${blog._id}`}>
                                        <button
                                            className="block rounded-md bg-yellow-300 px-5 py-3 text-center text-xs font-bold text-gray-900 uppercase transition hover:bg-yellow-400"
                                        >
                                            View Details
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))
                ) : (
                    <div className="text-center">
                        <p>No Blogs</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BlogAllHome;
