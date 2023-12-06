<template>
  <div class="app-flex app-flex-column">
    <span class="app-font-size-14 app-font-weight-500">
      {{ label }}
    </span>
    <input
      :class="{
        'core-input-error': error,
      }"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :type="type"
      :placeholder="placeholder"
    />
    <span
      v-if="error"
      class="app-font-size-12 app-font-weight-600 app-color-danger"
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
    default: "",
    required: false,
  },
  type: {
    type: String,
    default: "",
    required: false,
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
  },
});

import { applicationTheme } from "@/stores/applicationTheme";
const ThemeDS = applicationTheme();

const ThemeStatus = computed<string>(() => {
  return ThemeDS.theme;
});
</script>

<style lang="scss" scoped>
input {
  width: 100%;
  height: 32px;
  outline: none;
  border-radius: 5px;
  padding: 5px 5px;
  color: #000;
  font-size: 14px;
  font-weight: 100;
  border: none;
  border: 1px solid #dbd7d7;
}
.core-input-error {
  border: 1px solid #f30000;
  box-shadow: 0px 0px 0px 0px #fff;
}
</style>
