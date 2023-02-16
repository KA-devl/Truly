// /store/user.js

import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null,
  }),

  actions: {
    async fetchUser() {
      const res = await fetch("https://localhost:5000/user");

      const user = await res.json();
      this.user = user;
    },
    async signUp(email, password) {
      const res = await fetch("https://localhost:5000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const user = await res.json()
      this.user = user;
    },
    async login(email, password) {
      const res = await fetch("https://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const user = await res.json();
      this.user = user;
    },
  },
});