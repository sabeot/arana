<template>
  <NuxtPage />
</template>
<script setup lang="ts">
const appConfig = useAppConfig();
console.log(appConfig.page.title);
</script>
<style lang="scss">
body {
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 300;
}
</style>
