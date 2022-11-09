<template>
  <div>
    <section class="about-section">About us page</section>
    <button @click="createAccount">Create Account</button>
    <NuxtLink to="/">Dashboard</NuxtLink>
  </div>
</template>
<script setup lang="ts">
import { Client, Account, ID } from "appwrite";

const { $appwireClient } = useNuxtApp();

const account = new Account($appwireClient);

// Register User
const createAccount = () =>
  account.create(ID.unique(), "me@example.com", "password", "Jane Doe").then(
    (response) => {
      console.log(response);
    },
    (error) => {
      console.log(error);
    }
  );
</script>
<style lang="scss"></style>
