import Image from "next/image";
import Link from "next/link";


const ProjectDetailPage = async ({ params }: { params: Promise<{ id: string }> }) => {

    const { id } = await params;

    // console.log(id);


    const res = await fetch(`${process.env.NEXT_PUBLIC_BASEURL_SERVER}/api/projects/${id}`);
    const project = await res.json();

    const pro = project?.data

    console.log(pro);

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
            <div className="mt-6 flex p-4 justify-center items-center">

                <section className="overflow-hidden  sm:grid sm:grid-cols-2 border-2 p-4 rounded-lg">

                    <Image
                        alt="imag"
                        height={500}
                        width={500}
                        src={pro?.image}
                        className="h-56 w-full object-cover sm:h-full rounded-lg"
                    />

                    <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                        <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">

                            <h2 className="text-2xl font-bold  md:text-3xl">
                                {pro?.title}
                            </h2>

                            <p className=" text-start  md:mt-4  font-semibold"> Description :
                                <span className="ml-2 font-normal">{pro?.descriptions}</span>
                            </p>
                            <p className=" text-start  md:mt-4  font-semibold"> CreatedAt :
                                <span className="ml-2 font-normal">{formatDate(pro?.createdAt)}</span>
                            </p>
                            <p className=" text-start  md:mt-4  font-semibold"> UpdatedAt :
                                <span className="ml-2 font-normal">{formatDate(pro?.updatedAt)}</span>
                            </p>

                            <div className="grid gap-4 mt-4 lg:grid-cols-3 md:grid-cols-2 ">
                                {/* Base - Right */}

                                <Link target="_blank"
                                    className="inline-block rounded-sm bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:rotate-2 focus:ring-3 focus:outline-hidden"
                                    href={pro?.liveLink}
                                >
                                    Live Demo
                                </Link>

                                {/* Border - Right */}

                                <Link
                                    target="_blank"
                                    className="inline-block rounded-sm border border-current px-8 py-3 text-sm font-medium text-indigo-600 transition hover:scale-110 hover:rotate-2 focus:ring-3 focus:outline-hidden"
                                    href={pro?.githubClient}
                                >
                                    Github Client
                                </Link>

                                {/* Base - Left */}

                                <Link
                                    target="_blank"
                                    className="inline-block rounded-sm bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:-rotate-2 focus:ring-3 focus:outline-hidden"
                                    href={pro?.githubServer}
                                >
                                    Github Server
                                </Link>
                            </div>

                            <div className="mt-4 md:mt-8">
                                <Link
                                    href="/projects"
                                    className="inline-block rounded-sm bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:ring-3 focus:ring-yellow-400 focus:outline-hidden"
                                >
                                    Back
                                </Link>
                            </div>
                        </div>
                    </div>


                </section>
            </div>
        </div>
    );
};

export default ProjectDetailPage;
