<script setup lang="ts">
import { applicationTheme } from '@/stores/applicationTheme'
const ThemeDS = applicationTheme()

const ThemeStatus = computed<string>(() => {
    return ThemeDS.theme
})

const HandleChangeTheme = () => {
    ThemeDS.changeThemeStatus()
}
</script>

<template>
    <div class="d-flex">
        <v-icon 
            class="app_pointer __application_animation" 
            @click="HandleChangeTheme" 
            v-if="ThemeStatus === 'light'"
        >mdi-weather-night</v-icon>
        <v-icon 
            class="app_pointer __application_animation" 
            @click="HandleChangeTheme" 
            v-if="ThemeStatus === 'dark'"
        >mdi-white-balance-sunny</v-icon>
    </div>
</template>