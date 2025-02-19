
"use client"

import { useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { Trash2 } from "lucide-react";

const MessagesPage = () => {

    const messages = useAppSelector((state: RootState) => state.messages);
    console.log(messages.messages);


    return (
        <div>
            <header className="text-center p-2">
                <h1 className="text-xl font-bold  sm:text-3xl underline">
                    All Messages
                </h1>
            </header>

            <div className='max-w-7xl mx-auto p-4'>
                <div className="border-2 px-5 py-3 rounded-md">
                    <div className="flow-root rounded-lg border  py-3 shadow-xs p-2">
                        <div className="flex justify-end ">
                            <button
                                // onClick={() => dispatch(deleteTask(task.id))}
                                className="p-2  border-2 rounded-full">
                                <Trash2 />
                            </button>
                        </div>
                        <dl className="-my-3 divide-y  text-sm">

                            {/* Name */}
                            <div className="grid grid-cols-1 gap-1 p-3  sm:grid-cols-3 sm:gap-4">
                                <dt className="font-medium ">Name</dt>
                                <dd className=" sm:col-span-2 font-semibold">John Frusciante</dd>
                            </div>

                            {/* Email */}
                            <div className="grid grid-cols-1 gap-1 p-3  sm:grid-cols-3 sm:gap-4">
                                <dt className="font-medium ">Email</dt>
                                <dd className=" sm:col-span-2 text-blue-500 font-semibold">ami@gmail.com</dd>
                            </div>

                            {/* Message */}
                            <div className="grid grid-cols-1 gap-1 p-3  sm:grid-cols-3 sm:gap-4">
                                <dt className="font-medium ">Message</dt>
                                <dd className=" sm:col-span-2">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et facilis debitis explicabo
                                    doloremque impedit nesciunt dolorem facere, dolor quasi veritatis quia fugit aperiam
                                    aspernatur neque molestiae labore aliquam soluta architecto?
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MessagesPage;
