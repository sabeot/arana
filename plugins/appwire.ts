import { Client } from 'appwrite';

export default defineNuxtPlugin(() => {
    return {
        provide: {
            appwireClient: new Client()
            .setEndpoint('http://localhost/v1')             // Your API Endpoint
            .setProject('636bf63bd737141c7c49')             // Your project ID
        }
    }
});