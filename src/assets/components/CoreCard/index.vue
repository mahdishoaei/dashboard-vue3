<template>
    <div
      class="
      core-card 
      core-card-hover 
      app_pointer"
      :class="{
        'app-bg-white': ThemeStatus === 'light',
        'app-bg-dark': ThemeStatus === 'dark',
      }"
      :style="{
      'width': `${width}`,
      'height': `${height}`
      }"
    >
      <slot name="cardContent"></slot>
    </div>
</template>

<script setup lang="ts">
import { applicationTheme } from '@/stores/applicationTheme'
const ThemeDS = applicationTheme()

const ThemeStatus = computed<string>(() => {
    return ThemeDS.theme
})

const props = defineProps({
    width: {
        type: String,
        default : "",
        required : false
    },
    height: {
        type: String,
        default : "",
        required : false
    }
})
</script>
  
<style lang="scss" scoped>
.core-card {
    transition: 0.5s;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 0 5px 0 #fd7403;
}

.core-card-hover:hover {
  background: #fd740357;
}
</style>