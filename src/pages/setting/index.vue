<template>
  <div class="app-container app-flex app-flex-column">
    <div class="app-flex app-flex-column">
      <span class="app-font-size-16 app-font-weight-500">Theme</span>
      <div class="app-flex mt-5">
        <span
          @click="changeThemeStatus"
          class="app_pointer px-4 py-2 app_border_radius"
          :class="{ 'app-bg-light': theme == 'dark' }"
        >
          <i class="bi bi-moon"></i> Dark</span
        >
        <span
          @click="changeThemeStatus"
          class="app_pointer px-4 py-2 app_border_radius"
          :class="{ 'app-bg-primary': theme == 'light' }"
        >
          <i class="bi bi-sun"></i> Light</span
        >
      </div>
    </div>

    <div class="app-flex app-flex-column mt-10">
      <span class="app-font-size-16 app-font-weight-500">Your Profile</span>
      <div class="app-flex mt-5">
        <CoreInput v-model="profileInfo.email" label="Email" />
        <CoreInput v-model="profileInfo.password" class="mx-4" label="Password" />
        <CoreInput v-model="profileInfo.role" label="Role" :disabled="true" />
        <CoreInput v-model="profileInfo.token" class="mx-4" label="Token" :disabled="true" />
      </div>
      <CoreBtn
        class="mt-5 app_pointer"
        background="outline-primary-hover"
        name="Submit"
        width="85px"
        height="30px"
        borderRadius="6px"
      />
    </div>
  </div>
</template>

<script setup>
import CoreBtn from "@/components/CoreBtn/index.vue";
import CoreInput from "@/components/CoreInput/index.vue";
import { computed } from "vue";
import { applicationTheme } from "@/stores/applicationTheme";
import { userDS } from "@/stores/userDS";

const themeDS = applicationTheme();
const userDSModule = userDS();

const changeThemeStatus = () => {
  themeDS.changeThemeStatus();
};

const theme = computed(() => {
  return themeDS.theme;
});

const profileInfo = computed(() => {
    return userDSModule.user
})
</script>
