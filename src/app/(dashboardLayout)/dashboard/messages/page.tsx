
"use client"

import { deleteMessage } from "@/redux/features/message/messageSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { Trash2 } from "lucide-react";


const MessagesPage = () => {

    const messages = useAppSelector((state: RootState) => state.messages);
    const massage = messages.messages;

    const dispatch = useAppDispatch();




    return (
        <div>
            <header className="text-center p-2">
                <h1 className="text-xl font-bold  sm:text-3xl underline">
                    All Messages
                </h1>
            </header>

            <div className=' p-2 ' style={{ height: "90vh", overflowY: "auto" }}>
                {massage.length > 0 ?
                    (massage.map((massage) => <>
                        <div className="border-2 border-blue-600 px-5 py-3 rounded-md mb-8" key={massage?.id}>
                            <div className="flow-root rounded-lg border  py-3 shadow-xs p-2">

                                <div className="flex justify-end ">
                                    <button
                                        onClick={() => dispatch(deleteMessage(massage.id))}
                                        className="p-2  border-2 rounded-full">
                                        <Trash2 />
                                    </button>
                                </div>

                                <dl className="-my-3 divide-y  text-sm">

                                    {/* Name */}
                                    <div className="grid grid-cols-1 gap-1 p-3  sm:grid-cols-3 sm:gap-4">
                                        <dt className="font-medium ">Name</dt>
                                        <dd className=" sm:col-span-2 font-semibold">{massage?.name}</dd>
                                    </div>

                                    {/* Email */}
                                    <div className="grid grid-cols-1 gap-1 p-3  sm:grid-cols-3 sm:gap-4">
                                        <dt className="font-medium ">Email</dt>
                                        <dd className=" sm:col-span-2 text-blue-500 font-semibold">{massage?.email}</dd>
                                    </div>

                                    {/* Message */}
                                    <div className="grid grid-cols-1 gap-1 p-3  sm:grid-cols-3 sm:gap-4">
                                        <dt className="font-medium ">Message</dt>
                                        <dd className=" sm:col-span-2">{massage?.message}</dd>
                                    </div>
                                </dl>

                            </div>
                        </div>
                    </>))
                    :
                    (
                        <div className="text-center ">
                            <p> No message </p>
                        </div>
                    )
                }

            </div>
        </div>
    );
};

export default MessagesPage;
