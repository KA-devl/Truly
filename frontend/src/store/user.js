// /store/user.js

import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: JSON.parse(localStorage.getItem('user')),
  }),

  actions: {
    async fetchUser() {
      const res = await fetch("http://localhost:5000/user");

      const user = await res.json();
      this.user = user;
    },
    async signUp(username, password) {
      const res = await fetch("http://localhost:5000/api/signup", {
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
       // store user details and jwt in local storage to keep user logged in between page refreshes
       localStorage.setItem('user', JSON.stringify(user));
    },
  },
});