import { defineStore } from "pinia";

export interface GlobalMessageInterface {
    type: string,
    message: string,
    code?: number,
}
export const useAppMessagesStore = defineStore('messages', {
    state: () => {
        return {
            messages: [] as GlobalMessageInterface[],
        }
    },
    actions: {
        raiseNewMessage(message: GlobalMessageInterface) {
            if (!this.messages.find(m => m.code === message.code && m.type === message.type)){
                this.messages.push(message);
            }
        }
    }
})