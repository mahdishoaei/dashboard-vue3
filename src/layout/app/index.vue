<template>
  <div class="wh app-bg-primary app-flex">
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
</script>

<style lang="scss" scoped>
.layout-app-container {
  width: 100%;
  height: 100vh;
}
</style>
