import { defineStore } from "pinia";
import { useRouter } from "vue-router";
import { usersDS } from "@/stores/usersDS";
import { errorToast, successToast } from "@/utils/toasMessage";
import { generateToken } from "@/utils/generateToken";
import { updateUser } from "@/api/users/put";
import { setLocalStorage } from "@/utils/localStorageServices";

const router = useRouter();

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
       if (result){
           if (result.password == param.password) {
            this.authenticated = true;
            const soloUser = this.user = result;
            successToast("top-center", "Wellcome to dashboard");
            soloUser.token = generateToken(30);
            setLocalStorage("token", soloUser.token);
            updateUser(soloUser.id, soloUser);
            // router.push("/dashboard");
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
