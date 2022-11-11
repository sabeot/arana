<template>
  <PageHeaderComponent>
    This is an auto-imported component.
  </PageHeaderComponent>
  <NuxtPage />
</template>
<script setup lang="ts">
const appConfig = useAppConfig();
console.log(appConfig.page.title);
</script>
<style lang="scss">
@import "./assets/scss/app.scss";
</style>
