<template>
  <div class="container">
    <h1 class="about-section">About us page</h1>
    <p>
      <button type="button" class="btn btn-dark" @click="createAccount">Create Account</button>
    </p>
    <NuxtLink to="/">Dashboard</NuxtLink>
    <br />
    <div v-for="message in messages" class="message text-bg-danger p-3" >
      <span class="code">{{ message.code }}</span>
      <span class="text">{{ message.message }}</span>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Account, ID } from "appwrite";
import {useAppMessagesStore} from "~/store/appMessages.store";

const appMessageStore = useAppMessagesStore();
const { $appwireClient } = useNuxtApp();


const account = new Account($appwireClient);
const messages = appMessageStore.messages;

// Register User
const createAccount = () =>
  account.create(ID.unique(), "me@example.com", "password", "Jane Doe").then(
    (response) => {
      console.log(response);
    },
    (error) => {
      console.log(error);
      appMessageStore.raiseNewMessage({
        message: error.message,
        type: error.type,
        code: error.code,
      });
    }
  );
</script>
<style lang="scss">
.message {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: flex-end;

  .code,
  .text {
    font-weight: bold;
  }

  .code {
    font-size: 2rem;
  }

}
</style>
