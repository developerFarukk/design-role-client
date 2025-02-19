import BlogDashboard from "@/components/dashboardPage/BlogDashboard";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";


const DashboardBlog = async () => {

    const res = await fetch("https://blog-project-2059.vercel.app/api/blogs", {
        next: {
            revalidate: 10,
        }
    })

    const session = await getServerSession(authOptions)
    console.log(session);
    


    const blogs = await res.json()

        return (
            <div>
                <div> The Component is Start Dashboard Blog </div>
                <BlogDashboard blogs={blogs} />
            </div>
        );
    };

export default DashboardBlog;
