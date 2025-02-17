import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";



const Dashboard = async () => {

    const session = await getServerSession(authOptions);

    return (
        <div>
            <div> The Component is Start Dashboard {session?.user?.name} </div>
        </div>
    );
};

export default Dashboard;
