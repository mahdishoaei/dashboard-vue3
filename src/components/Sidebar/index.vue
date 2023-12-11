<template>
  <div
    :class="{
      'close-sidebar-status': !isOpen,
      'app-bg-primary': ThemeStatus === 'light',
      'app-bg-secondary': ThemeStatus === 'dark',
    }"
    class="sidebar-container"
  >
    <div
      class="app-flex app-justify-end app-align-center px-3 py-3 app_pointer"
    >
      <i class="bi bi-x-lg" @click="changeSidebarStatus" v-if="isOpen"></i>
      <i class="bi bi-arrow-right" @click="changeSidebarStatus" v-else></i>
    </div>

    <div class="app-flex app-flex-column app-justify-center app-align-center">
      <img src="@/assets/images/profile-men.jpg" class="profile-img" />
      <span class="app-font-size-12 app-font-weight-600 pt-2" v-if="isOpen"
        >admin@yahoo.com</span
      >
    </div>
    <div class="w-100 d-flex flex-column px-2 mt-10">
      <div
        v-for="item in sidebarItems"
        :key="item.id"
        class="app-flex mt-5 px-2 py-1 app_border_radius app_pointer"
        :class="{ 'app-bg-light': Route.name === `${item.path}` }"
        @click="navigateTo(`${item.path}`)"
      >
        <img style="width: 25px; height: 25px" :src="`${item.icon}`" />
        <span
          class="app-font-size-14 app-font-weight-400 px-2 pt-1"
          v-if="isOpen"
          >{{ item.name }}</span
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { applicationTheme } from "@/stores/applicationTheme";
import { useRoute, useRouter } from "vue-router";

const Route = useRoute();
const Router = useRouter();
const ThemeDS = applicationTheme();

const isOpen = ref(true);

const sidebarItems = ref([
  {
    id: "0",
    name: "Dashboard",
    path: "dashboard",
    icon: "/icons/dashboard.svg",
  },
  {
    id: "1",
    name: "Tasks",
    path: "tasks",
    icon: "/icons/task.svg",
  },
  {
    id: "2",
    name: "Employes",
    path: "employes",
    icon: "/icons/employes.svg",
  },
  {
    id: "3",
    name: "Payment",
    path: "payment",
    icon: "/icons/payment.svg",
  },
  {
    id: "4",
    name: "Products",
    path: "products",
    icon: "/icons/product.svg",
  },
  {
    id: "5",
    name: "Warehouse",
    path: "Warehouse",
    icon: "/icons/warehouse.svg",
  },
  {
    id: "6",
    name: "Setting",
    path: "setting",
    icon: "/icons/setting.svg",
  },
]);

const navigateTo = (param) => {
  Router.push(param);
};

const changeSidebarStatus = () => {
  isOpen.value = !isOpen.value;
};

const ThemeStatus = computed(() => {
  return ThemeDS.theme;
});
</script>

<style lang="scss" scoped>
.sidebar-container {
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 100vh;
  transition: 0.3s;
}

.close-sidebar-status {
  display: flex;
  flex-direction: column;
  width: 65px;
  height: 100vh;
  transition: 0.3s;
}
.profile-img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
</style>
