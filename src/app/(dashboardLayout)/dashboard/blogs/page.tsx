import BlogDashboard from "@/components/dashboardPage/BlogDashboard";



const DashboardBlog = async () => {

    const res = await fetch("https://blog-project-2059.vercel.app/api/blogs", {
        next: {
            revalidate: 10,
        }
    })

    const blogs = await res.json()

        return (
            <div>
                <div> The Component is Start Dashboard Blog </div>
                <BlogDashboard blogs={blogs} />
            </div>
        );
    };

export default DashboardBlog
    ;
