import Link from "next/link";



const DashboardMain = () => {

    return (
        <div>
            <div> The Component is Start Dashboard </div>
            <Link href="/" className="text-blue-400 hover:underline">Back to home</Link>
        </div>
    );
};

export default DashboardMain;
