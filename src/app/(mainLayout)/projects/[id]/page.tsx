import Image from "next/image";


const ProjectDetailPage = async ({ params }: { params: Promise<{ id: string }> }) => {

    const { id } = await params;

    console.log(id);


    const res = await fetch(`${process.env.NEXT_PUBLIC_BASEURL_SERVER}/api/projects/${id}`);
    const project = await res.json();

    console.log(project);


    return (
        <div>
            <div className="mt-6 flex p-4 mx-auto">

                <section className="overflow-hidden  sm:grid sm:grid-cols-2 border-2 p-4 rounded-lg">

                    <Image
                        alt="imag"
                        height={500}
                        width={500}
                        src="https://images.unsplash.com/photo-1464582883107-8adf2dca8a9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                        className="h-56 w-full object-cover sm:h-full rounded-lg"
                    />

                    <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                        <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit
                            </h2>

                            <p className="hidden text-gray-500 md:mt-4 md:block">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam
                                sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat
                                quisque ut interdum tincidunt duis.
                            </p>

                            <div className="mt-4 md:mt-8">
                                <a
                                    href="#"
                                    className="inline-block rounded-sm bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:ring-3 focus:ring-yellow-400 focus:outline-hidden"
                                >
                                    Get Started Today
                                </a>
                            </div>
                        </div>
                    </div>


                </section>
            </div>
        </div>
    );
};

export default ProjectDetailPage;
