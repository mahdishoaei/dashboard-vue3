<template>
  <div class="wh app-flex">
    <div>
      <sidebar />
    </div>
    <div>
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import sidebar from "@/components/Sidebar/index.vue";

import { useRouter } from "vue-router";
import { usersDS } from "@/stores/usersDS";
import { userDS } from "@/stores/userDS";
import { onMounted } from "vue";
import { getLoacalStorage } from "@/utils/localStorageServices";
import { detectedUserByToken } from "@/utils/detectUser";

const usersDSModule = usersDS();
const userDSModule = userDS();
const router = useRouter();

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
