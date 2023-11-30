<script setup>
definePageMeta({
  layout: "auth",
});

import { validEmail, validPassword } from "@/utils/validate";
import { applicationUserData } from "@/stores/applicationUserData.ts";

const userDataSource = applicationUserData();
const form = ref({
  email: "",
  password: "",
});
const error = ref({
  email: {
    status: false,
    message: "",
  },
  password: {
    status: false,
    message: "",
  },
});

const handleLogin = () => {
  let AccessToLogin = true;
  if (!validEmail(form.value.email)) {
    AccessToLogin = false;
    error.value.email.status = true;
    error.value.email.message = "Invalid email !!!";
  } else {
    AccessToLogin = true;
    error.value.email.status = false;
    error.value.email.message = "";
  }
  if (!validPassword(form.value.password)) {
    AccessToLogin = false;
    error.value.password.status = true;
    error.value.password.message = "Password  must be more than 8 charecter";
  } else {
    AccessToLogin = true;
    error.value.password.status = false;
    error.value.password.message = "";
  }
  if (AccessToLogin) {
    userDataSource.checkUserAuthentication(form.value);
  }
};
</script>

<template>
  <div class="login-container">
    <div class="form-container d-flex flex-column px-6 py-8">
      <span class="app-font-size-16 app-font-weight-500 app-color-white">
        Sign in</span
      >
      <CoreInput
        class="mt-6"
        label="Email"
        v-model="form.email"
        :error="error.email.status"
        :messageError="error.email.message"
      />
      <CoreInput
        class="mt-2"
        label="Password"
        v-model="form.password"
        :error="error.password.status"
        :messageError="error.password.message"
      />
      <CoreBtn
        class="mt-4"
        background="primary"
        name="submit"
        width="85px"
        height="30px"
        borderRadius="5px"
        @click="handleLogin"
      />
    </div>
  </div>
</template>

<style scoped>
.login-container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("/images/auth-bg.jpg");
  background-size: cover;
  background-attachment: fixed;
}
.form-container {
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px);
  border-radius: 10px;
  width: 330px;
  height: 300px;
}
</style>
