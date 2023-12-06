<template>
    <div class="d-flex flex-column">
        <span class="app-font-size-12 app-color-white">
         {{ label }}
        </span>
        <input
            class="mt-1 mb-1"
            :class="{
            'app-color-white': ThemeStatus === 'dark', 
            'core-input-error': error
            }"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
            :type="type"
            :placeholder="placeholder"
        >
        <span
         v-if="error"
         class="app-font-size-12 app-font-weight-800 app-color-danger"
        >
           {{ messageError }}
        </span>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
const props = defineProps({
    label: {
        type: String,
        default: '',
        required: false
    },
    type: {
        type: String,
        default: '',
        required: false
    },
    error: {
        type: Boolean,
        default: false,
        required: false,
    },
    messageError: {
        type: String,
        default: "",
        required: false,
    },
    modelValue: {
        type: String,
        default: "",
        required: false,
    },
    placeholder: {
        type: String,
        default: "",
        required: false,
    }
})

import { applicationTheme } from '@/stores/applicationTheme'
const ThemeDS = applicationTheme()

const ThemeStatus = computed<string>(() => {
    return ThemeDS.theme
})
</script>

<style lang="scss" scoped>
input{
    width: 100%;
    height: 32px;
    outline: none;
    border-radius: 5px;
    padding: 5px 5px;
    background: #dbdbdb;
    color: #111111;
    font-size: 14px;
}    
.core-input-error{
    border: 1px solid #f30000;
    box-shadow: 0px 0px 0px 0px #fff;
}
</style>