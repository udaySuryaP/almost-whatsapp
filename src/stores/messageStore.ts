import { defineStore } from "pinia";
import { MessageModel } from "../models";
import { getMessages } from "../api/database";

interface State {
    messages: MessageModel[];
}

export const useMessageStore = defineStore("messageStore", {
    state: () => {
        return { messages: [] } as State;
    },
    actions: {
        async getMessages(groupId: string) {
            this.messages = await getMessages(groupId);
            console.log(this.messages);
        },
        onMessageRecieved(message: MessageModel) {
            this.messages.push(message)
            console.log(this.messages);
        },
    },
    getters: {
        messagesForGroup: (state) => {
            return (groupId: string) => {
                return state.messages.filter((message) => message.groupId === groupId);
            };
        }
    }
});