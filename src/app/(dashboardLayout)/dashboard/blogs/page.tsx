"use client"



// import BlogDashboard from "@/components/dashboardPage/BlogDashboard";
import LoadingProgress from "@/components/shared/LoadingProgress";
import { useGetAllBlogsQuery } from "@/redux/features/blogManagmentApi/blogManagmentApi";
// import { useGetAllBlogQuery } from "@/redux/features/blogManagmentApi/blogManagmentApi";
// import { authOptions } from "@/utils/authOptions";
// import { getServerSession } from "next-auth";


const DashboardBlog =  () => {

    // const { data, error, isLoading } = useGetAllBlogQuery(undefined)
    const { data, error, isLoading } = useGetAllBlogsQuery(undefined)

    console.log("log", data );

    if (isLoading) {
        return <LoadingProgress />;
    }

    if (error) {
        return <div>Data no fetch</div>;
    }


    // const res = await fetch("https://blog-project-2059.vercel.app/api/blogs", {
    // const res = await fetch("http://localhost:5001/api/blogs", {
    //     next: {
    //         revalidate: 10,
    //     }
    // })

    // const session = await getServerSession(authOptions)
    // console.log(session);



    // const blogs = await res.json()
    // console.log("blogs", blogs);
    

    return (
        <div>
            <div> The Component is Start Dashboard Blog</div>
            {/* <BlogDashboard /> */}
        </div>
    );
};

export default DashboardBlog;
