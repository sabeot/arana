<template>
  <div>
    <h1 class="about-section">About us page</h1>
    <p>
      <button @click="createAccount">Create Account</button>
    </p>
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
