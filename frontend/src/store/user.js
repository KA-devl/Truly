// /store/user.js

import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null,
  }),

  actions: {
    // async fetchUser() {
    //   const res = await fetch("https://localhost:5000/user");

    //   const user = await res.json();
    //   this.user = user;
    // },
    async signUp(username, password) {
      const res = await fetch("https://localhost:5000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      const user = await res.json()
      this.user = user;
    },
    async login(username, password) {
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      const user = await res.json();
      console.log('THE USER IS ', user)
      this.user = user;
    },
  },
});