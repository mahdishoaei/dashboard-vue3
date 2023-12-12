import { defineStore } from "pinia";
import { usersDS } from "@/stores/usersDS";
import { errorToast, successToast } from "@/utils/toasMessage";
import { generateToken } from "@/utils/generateToken";
// import { updateUser } from "@/api/users/index";
import { setLocalStorage } from "@/utils/localStorageServices";

export const applicationUserData = defineStore("user", {
  state: () => ({
    authenticated: false,
    token: '',
    user: {},
  }),
  

  actions: {
    checkUserAuthentication(param: any) {
        const usersDataSource = usersDS();
        const users = usersDataSource.users;
        const result: any = users.find((user: any) => {
          return user.email == param.email;
        });
        console.log(result);
        if (result) {
          if (result.password == param.password) {
            this.authenticated = true;
            this.user = result;
            successToast("bottom-center", "Wellcome to dashboard");
            // this.user.token = generateToken(30);
            // updateUser(this.user.id, this.user);
            // setLocalStorage("token", this.user.token);
            // navigateTo("/dashboard");
          } else {
            this.authenticated = false;
            errorToast("bottom-center", "Password is incorect!!!");
          }
        } else {
          errorToast("bottom-center", "User is not exist!!!");
        }
      },
  },
});
