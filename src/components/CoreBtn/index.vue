<template>
  <button
    :style="{
      'border-radius': `${borderRadius}`,
      width: `${width}`,
      height: `${height}`,
    }"
    :class="{
      'app-bg-primary': background === 'primary',
      'app-bg-secondary': background === 'secondary',
      'app-bg-danger': background === 'danger',
      'app-bg-gray': background === 'gray',
      'app-bg-light': background === 'light',
      'app-bg-white': background === 'white',
      'app-bg-dark': background === 'dark',
      'app-bg-blue': background === 'blue',
      'outline-primary': background === 'outline-primary',
      'outline-primary-hover': background === 'outline-primary-hover',
    }"
  >
    <div class="d-flex">
      <span class="name" v-if="name">
        {{ name }}
      </span>
    </div>
  </button>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    default: "",
    required: false,
  },
  icon: {
    type: String,
    default: "",
    required: false,
  },
  background: {
    type: String,
    default: "",
    required: false,
  },
  borderRadius: {
    type: String,
    default: "",
    required: false,
  },
  width: {
    type: String,
    default: "",
    required: false,
  },
  height: {
    type: String,
    default: "",
    required: false,
  },
  loading: {
    type: Boolean,
    default: false,
    required: false,
  },
});
</script>

<style scoped>
button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 6px;
  border: none;
}

.name {
  padding-top: 2px;
}

.outline-primary {
  border: 1px solid #fd7403;
  background: #fd740357;
  color: #fd7403;
}

.outline-primary-hover {
  border: 1px solid #4b3ae6;
  background: #4b3ae6;
  color: #ffffff;
  transition: 1s;
}
.outline-primary-hover:hover {
  background: #ffffff;
  color: #4b3ae6;
}
</style>
