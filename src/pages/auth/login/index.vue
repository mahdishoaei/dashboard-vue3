<script setup>
import { ref } from "vue";
import CoreInput from "@/components/CoreInput/index.vue";
import CoreBtn from "@/components/CoreBtn/index.vue";
import { validEmail, validPassword } from "@/utils/validate";
// import { applicationUserData } from "@/stores/applicationUserData.ts";

// const userDataSource = applicationUserData();
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
  // if (AccessToLogin) {
  //   userDataSource.checkUserAuthentication(form.value);
  // }
};
</script>

<template>
  <div class="login-page-container">
    <div class="w-50 app-flex app-justify-center app-align-center">
      <img src="/images/auth-bg.png" alt="image" />
    </div>
    <div class="w-50 app-flex app-flex-column app-justify-center px-8">
      <span class="app-font-size-18 app-font-weight-500 app-color-primary pb-6"
        >SignIn To Dashboard</span
      >
      <CoreInput
        class="mt-2 mb-2"
        v-model="form.email"
        :error="error.email.status"
        :messageError="error.email.message"
        placeholder="Email"
      />
      <CoreInput
        class="mt-2 mb-2"
        v-model="form.password"
        :error="error.password.status"
        :messageError="error.password.message"
        placeholder="Password"
      />
      <CoreBtn
        class="mt-4 app_pointer"
        background="outline-primary-hover"
        name="submit"
        width="85px"
        height="30px"
        borderRadius="6px"
        @click="handleLogin()"
      />
      <div
        class="w-100 app-flex app-flex-column app-justify-center app-align-center mt-10"
      >
        <span class="app-color-gray app-font-size-10 app-font-weight-100 pt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit
        </span>
        <span class="app-color-gray app-font-size-10 app-font-weight-100 pt-2">
          Version 1.0.0
        </span>
        <div class="app-flex mt-2">
          <img class="icon" src="/icons/instagram.svg" alt="image" />
          <img class="icon" src="/icons/youtube.svg" alt="image" />
          <img class="icon" src="/icons/instagram.svg" alt="image" />
          <img class="icon" src="/icons/instagram.svg" alt="image" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.login-page-container {
  width: 100%;
  height: 100vh;
  display: flex;
}

.icon {
  width: 15px;
  height: 15px;
  margin: 5px 5px;
}
</style>
