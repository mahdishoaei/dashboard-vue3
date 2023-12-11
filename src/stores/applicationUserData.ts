import { defineStore } from "pinia";
// import { errorToast } from "@/utils/toasMessage";
// import { generateToken } from "@/utils/generateToken";

export const applicationUserData = defineStore("user", {
  state: () => ({
    authenticated: false,
    token: '',
    user: {},
  }),

  actions: {
    checkUserAuthentication(param: any) {},
  },
});
