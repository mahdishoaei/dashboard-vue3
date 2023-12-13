<template>
  <RouterView />
</template>

<script setup>
import { onMounted } from "vue";
import { usersDS } from "@/stores/usersDS";

const usersDSModule = usersDS();

onMounted(async () => {
  await usersDSModule.getUsers();
});
</script>
