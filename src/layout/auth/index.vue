<template>
  <RouterView />
</template>

<script setup>
import { onMounted } from "vue";
import { usersDS } from "@/stores/usersDS";

const UsersDS = usersDS();

onMounted(async () => {
  await UsersDS.getUsers();
});
</script>
