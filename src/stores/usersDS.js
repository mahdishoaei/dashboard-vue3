import { defineStore } from "pinia";
import { GetUsers } from "@/api/users/index";

export const usersDS = defineStore("usersData", {
  state: () => ({
    users: [],
  }),

  actions: {
    async getUsers() {
      const response = await GetUsers();
      this.users = response
    },
  },
});
