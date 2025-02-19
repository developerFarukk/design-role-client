


import { DraftMessage, IMessage } from "@/types";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

interface TMessageState {
    messages: IMessage[];
}

const initialState: TMessageState = {
    messages: [
        // {
        //     id: "234534534",
        //     name: "omar faruk",
        //     email: "ff@gmail.com",
        //     message: "amar suner bangla"
        // }
    ],
};

const createMessage = (messageData: DraftMessage): IMessage => {
    return { id: nanoid(), ...messageData };
}

const messageSlice = createSlice({
    name: "messages",
    initialState,
    reducers: {
        // Add Message
        sendMessage: (state, action: PayloadAction<DraftMessage>) => {
            const messageD = createMessage(action.payload);
            state.messages.push(messageD);
        },

        // Delete Message
        deleteMessage: (state, action: PayloadAction<string>) => {
            state.messages = state.messages.filter((message) => message.id !== action.payload);
        },
    },
});

export const { sendMessage, deleteMessage } = messageSlice.actions;

export default messageSlice.reducer;