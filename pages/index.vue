<template>
  <div class="container">
    <h1>Arana - powered by Nuxt3</h1>
    <button type="button" class="btn btn-primary" @click="goTo('/about')">About</button>

    <div class="btn-group" role="group" aria-label="Basic example">
    <button type="button" class="btn btn-primary" @click="riseMessage()" name="message">
      Add message to queue
    </button>
    <button type="button" class="btn btn-secondary" @click="clearMessages()">
      Delete Messages
    </button>
    </div>

    <div v-for="message in appMessageStore.messages">
      {{ message.message }}
    </div>
  </div>
</template>
<script lang="ts" setup>
import {useAppMessagesStore} from "~/store/appMessages.store";

const appMessageStore = useAppMessagesStore();
const counter = ref(0);
const router = useRouter();

const goTo = (url: string) => {
  router.push({path: url});
}

const riseMessage = () => {
  appMessageStore.$patch((state) => {
    state.messages.push({
      message: `Message ${++counter.value}`,
      type: `TYPE_${counter.value}`
    })
  });
}

const clearMessages = () => {
  appMessageStore.$reset();
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/pages/index.scss";
</style>
