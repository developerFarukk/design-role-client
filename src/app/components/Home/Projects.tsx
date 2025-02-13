


const Projects = () => {

    return (
        <div>
            <div className="text-center text-3xl p-4">
                <h2>My Project</h2>
            </div>
            <div>
                <section className="">
                    <div className="container  mx-auto">

                        <div className="grid grid-cols-1 gap-4 mt-2 xl:mt-12 xl:gap-8 lg:grid-cols-3 md:grid-cols-2">
                            {portfolioItems.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-end overflow-hidden bg-cover rounded-lg h-96"
                                    style={{ backgroundImage: `url(${item.image})` }}
                                >
                                    <div className="w-full px-4 py-2 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                                        <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">
                                            {item.title}
                                        </h2>
                                        <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400">
                                            {item.category}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Projects;


const portfolioItems = [
    {
        title: "Best website collections",
        category: "Website",
        image:
            "https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80",
    },
    {
        title: "Block of Ui kit collections",
        category: "Ui kit",
        image:
            "https://images.unsplash.com/photo-1621609764180-2ca554a9d6f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    },
    {
        title: "Ton’s of mobile mockup",
        category: "Mockups",
        image:
            "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
        title: "Huge collection of animation",
        category: "Animation",
        image:
            "https://images.unsplash.com/photo-1603380353725-f8a4d39cc41e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
];
