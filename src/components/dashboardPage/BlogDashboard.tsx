import { Blog } from "@/types";



const BlogDashboard = ({ blogs }: { blogs: Blog[] }) => {

    console.log(blogs);
    

    return (
        <div>
            <div> The Component is Start BlogDashboard </div>
        </div>
    );
};

export default BlogDashboard;
