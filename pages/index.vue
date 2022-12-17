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
  </div>
</template>
<script lang="ts" setup>
const router = useRouter();

const goTo = (url: string) => {
  router.push({path: url});
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/pages/index.scss";
</style>
