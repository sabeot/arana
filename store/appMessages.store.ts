import { defineStore } from "pinia";

export interface GlobalMessageInterface {
    type: string,
    message: string,
}
export const useAppMessagesStore = defineStore('messages', {
    state: () => {
        return {
            messages: [] as GlobalMessageInterface[],
        }
    }
})