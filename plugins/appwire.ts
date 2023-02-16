import { Client } from "appwrite";

export default defineNuxtPlugin(() => {
  return {
    provide: {
      appwireClient: new Client()
        .setEndpoint("http://localhost/v1") // Your API Endpoint
        .setProject("arana-dev"), // Your project ID
    },
  };
});
