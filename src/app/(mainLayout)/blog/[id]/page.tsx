import Image from "next/image";
import Link from "next/link";



const BlogDetailsPage = async ({ params }: { params: Promise<{ id: string }> }) => {

    const { id } = await params;

    // console.log(id);

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASEURL_SERVER}/api/blogs/${id}`);
    const blogss = await res.json();

    const blog = blogss?.data

    // console.log(blog);

    // Date formatting function
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const options: Intl.DateTimeFormatOptions = {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: true
        };
        return date.toLocaleString('en-US', options);
    };


    return (
        <div>
            <div>
                <div className="text-center text-3xl p-4 font-bold">
                    <h2>Blog Details</h2>
                </div>

                <article  className="flex transition hover:shadow-xl p-2 border-2 rounded-md mb-6">

                    <div className="hidden sm:block sm:basis-56">
                        <Image
                            alt="blog..."
                            src={blog?.image}
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
                                        {blog?.title}
                                    </dd>
                                </div>


                                <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                                    <dt className="font-medium uppercase">Content</dt>
                                    <dd className="sm:col-span-2 break-words overflow-y-auto max-h-32">
                                        {blog?.content}
                                    </dd>
                                </div>


                                <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                                    <dt className="font-medium uppercase">Category</dt>
                                    <dd className="sm:col-span-2 break-words overflow-hidden">
                                        {blog?.category}
                                    </dd>
                                </div>

                                <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                                    <dt className="font-medium ">CreatedAt</dt>
                                    <dd className="sm:col-span-2 break-words overflow-hidden">
                                        {formatDate(blog?.createdAt)}
                                    </dd>
                                </div>
                                <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                                    <dt className="font-medium ">UpdatedAt</dt>
                                    <dd className="sm:col-span-2 break-words overflow-hidden">
                                        {formatDate(blog?.updatedAt)}
                                    </dd>
                                </div>

                            </dl>
                        </div>


                        <div className="flex justify-end gap-2 p-4">
                            <Link href="/blog">
                                <button
                                    className="block rounded-md bg-yellow-300 px-5 py-3 text-center text-xs font-bold text-gray-900 uppercase transition hover:bg-yellow-400"
                                >
                                    Back
                                </button>
                            </Link>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default BlogDetailsPage;
