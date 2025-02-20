
import Sidebar from "@/components/shared/Sidebar";
import { authOptions } from "@/utils/authOptions";
import type { Metadata } from "next";
import { getServerSession } from "next-auth";

export const metadata: Metadata = {
    title: "Design Role | Dashboard",
    description: "Generated by Design Role",
};

export default async function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

     const session = await getServerSession(authOptions)

    return (
        <div>
            {/* <div><Sidebar  /></div>
            <div className="min-h-screen">
                {children}
            </div> */}
            <div className="flex">
                <div className="fixed top-0 left-0 h-full">
                    <Sidebar session={session} />
                </div>
                <div className="ml-[20%] min-h-screen w-full">
                    {children}
                </div>
            </div>
        </div>
    );
}