"use client"

import { useGetAllProjectsQuery } from "@/redux/features/projectsManagment/projectManagmentApi";
import LoadingProgress from "../shared/LoadingProgress";



const ProjectHome = () => {

    const { data, error, isLoading } = useGetAllProjectsQuery(undefined);

    // const [deleteblog] = useDeleteBlogMutation();


    const projects = data?.data
    console.log(projects);
    

    if (isLoading) {
        return <LoadingProgress />;
    }

    if (error) {
        return <div>Data no fetch</div>;
    }

    return (
        <div>

            <header className=" text-center p-2">
                <h1 className="text-xl font-bold  sm:text-3xl underline">
                    All Projects - <span className="text-blue-600">
                        {/* {blogs.length} */}
                    </span>
                </h1>
            </header>
            <div>

            </div>
        </div>
    );
};

export default ProjectHome;
