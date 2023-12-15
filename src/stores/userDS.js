import { defineStore } from "pinia";
import { errorToast, successToast } from "@/utils/toasMessage";
import { generateToken } from "@/utils/generateToken";
import { UpdateUser } from "@/api/users/index";
import { detectedUserByEmail } from "@/utils/detectUser";
import { setLocalStorage } from "@/utils/localStorageServices";

export const userDS = defineStore("user", {
  state: () => ({
    authenticated: false,
    token: "",
    user: {},
  }),

  actions: {
    async checkUserAuthentication(param) {
      const result = await detectedUserByEmail(param.email);
      if (result) {
        if (result.password == param.password) {
          this.authenticated = true;
          successToast("top-center", "The login operation was successful");
          this.user = result;
          this.user.token = generateToken(30);
          setLocalStorage("token", this.user.token);
          UpdateUser(this.user.id, this.user);
        } else {
          this.authenticated = false;
          errorToast("top-center", "Password is incorect!");
        }
      } else {
        errorToast("top-center", "User not found please try again!");
      }
    },
  },
});
