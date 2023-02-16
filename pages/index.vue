<template>
  <div class="container">
    <h1>Arana - powered by Nuxt3</h1>
    <p>
      <button type="button" class="btn btn-primary" @click="goTo('/about')">About</button>
      <!-- <NuxtLink to="/about">About</NuxtLink> -->
      </p>
      <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-primary">Left</button>
        <button type="button" class="btn btn-primary">Middle</button>
        <button type="button" class="btn btn-primary">Right</button>
      </div>
    <div>
      {{ appMessageStore.messages }}
    </div>
    <button type="button" @click="riseMessage()" name="message">
      Add message to queue
    </button>
    <button type="button" @click="clearMessages()">
      Delete Messages
    </button>
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
