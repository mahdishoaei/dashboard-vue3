import { defineStore } from "pinia";
import { usersDS } from "@/stores/usersDS";
import { errorToast, successToast } from "@/utils/toasMessage";
import { generateToken } from "@/utils/generateToken";
import { UpdateUser } from "@/api/users/index";
import { setLocalStorage } from "@/utils/localStorageServices";

export const userDS = defineStore("user", {
  state: () => ({
    authenticated: false,
    token: "",
    user: {},
  }),

  actions: {
    checkUserAuthentication(param) {
      const usersDSModule = usersDS();
      const users = usersDSModule.users;
      const result = users.find((user) => {
        return user.email == param.email;
      });
      if (result) {
        if (result.password == param.password) {
          this.authenticated = true;
          successToast("top-center", "Wellcome to dashboard");
          this.user = result;
          this.user.token = generateToken(30);
          setLocalStorage("token", this.user.token);
          UpdateUser(this.user.id, this.user);
        } else {
          this.authenticated = false;
          errorToast("top-center", "Password is incorect!!!");
        }
      } else {
        errorToast("top-center", "User is not exist!!!");
      }
    },
  },
});
