import { defineStore } from "pinia";
import { GetUsers } from "@/api/users";

export const usersDS = defineStore("usersData", {
  state: () => ({
    users: [],
  }),

  actions: {
    async getUsers() {
      const response = await GetUsers();
      console.log(response);
    },
  },
});
