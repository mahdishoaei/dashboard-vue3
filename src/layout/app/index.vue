<template>
  <div class="wh app-flex">
    <div>
      <sidebar />
    </div>
    <div class="w-100" :class="{ 'app-bg-dark': theme == 'dark' }">
      <div class="app-flex app-justify-end w-100 px-8 py-4">
        <div
          class="app-bg-info py-2 px-2 mx-2 app_border_radius app-font-size-14"
        >
          <i class="bi bi-list"></i>
          Total Tasks 10
        </div>
        <div
          class="app-bg-gray py-2 px-2 mx-2 app_border_radius app-font-size-14"
        >
          <i class="bi bi-person"></i>
          Total Employe 118
        </div>
        <div
          class="app-bg-secondary py-2 px-2 mx-2 app_border_radius app-font-size-14"
        >
          <i class="bi bi-shop"></i>
          Total Products 3654
        </div>
        <div
          class="app-bg-danger py-2 px-2 mx-2 app_border_radius app-font-size-14"
        >
          <i class="bi bi-cash-coin"></i>
          Payment 100,235,000
        </div>
        <div
          class="app-bg-warning py-2 px-2 mx-2 app_border_radius app-font-size-14"
        >
          <i class="bi bi-house-door"></i>
          All Warehouses 8
        </div>
      </div>
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import sidebar from "@/components/Sidebar/index.vue";

import { useRouter } from "vue-router";
import { usersDS } from "@/stores/usersDS";
import { userDS } from "@/stores/userDS";
import { applicationTheme } from "@/stores/applicationTheme";
import { onMounted, computed } from "vue";
import { getLoacalStorage } from "@/utils/localStorageServices";
import { detectedUserByToken } from "@/utils/detectUser";

const usersDSModule = usersDS();
const userDSModule = userDS();
const themeDS = applicationTheme();
const router = useRouter();

const theme = computed(() => {
  return themeDS.theme;
});

onMounted(async () => {
  await usersDSModule.getUsers();
  const token = getLoacalStorage("token");
  const targetUser = await detectedUserByToken(token);
  if (targetUser.flag) {
    userDSModule.updateAuthenticated(true);
    userDSModule.updateUserInClient(targetUser);
  } else {
    userDSModule.logOutUser();
    router.push("/auth/login");
  }
});
</script>

<style lang="scss" scoped>
.layout-app-container {
  width: 100%;
  height: 100vh;
}
</style>
