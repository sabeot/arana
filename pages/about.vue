<template>
  <div>
    <h1 class="about-section">About us page</h1>
    <p>
      <button
        type="button"
        class="btn btn-dark"
        @click="showRegisterFormModal()"
      >
        Create Account
      </button>
    </p>
    <NuxtLink to="/">Dashboard</NuxtLink>
    <br />
    <div
      v-for="(message, index) in messages"
      :key="index"
      class="message text-bg-danger p-3"
    >
      <span class="code">{{ message.code }}</span>
      <span class="text">{{ message.message }}</span>
    </div>
  </div>
</template>
<script lang="ts">
import { Account, ID } from "appwrite";
import { useAppMessagesStore } from "~/store/appMessages.store";
import { useModalsStateStore } from "~/store/modalsStateStore";

export default defineComponent({
  name: "About",
  setup() {
    const appMessageStore = useAppMessagesStore();
    const modalsStateStore = useModalsStateStore();
    const { $appwireClient } = useNuxtApp();

    const account = new Account($appwireClient);
    const messages = appMessageStore.messages;

    // Register User
    const showRegisterFormModal = () => {
      modalsStateStore.toggleRegisterModalForm();
    };

    const createAccount = () =>
      account
        .create(ID.unique(), "me@example.com", "password", "Jane Doe")
        .then(
          (response) => {
            appMessageStore.raiseNewMessage({
              message: `Account with email: ${response.email} created!`,
              type: "SUCCESS",
            });
          },
          (error) => {
            appMessageStore.raiseNewMessage({
              message: error.message,
              type: error.type,
              code: error.code,
            });
          }
        );

    return {
      messages,
      showRegisterFormModal,
      createAccount,
    };
  },
});
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
