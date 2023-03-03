import { defineStore } from "pinia";
import axios from "axios";
export const useUserStore = defineStore("user", {
  state: () => ({
    user: JSON.parse(localStorage.getItem("user")),
  }),

  actions: {
    async fetchUser() {
      console.log(this.user.data.id)
      const res = await axios.get(`http://localhost:5000/api/get-user/${this.user.data.id}`);
      console.log('the new user is ', res.data)
      const user = res.data;
      this.user = user;
      localStorage.setItem("user", this.user)
    },
    async signUp(username, password) {
      const res = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      const user = await res.json();
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
      console.log("THE USER IS ", user);
      this.user = user;
      // store user details and jwt in local storage to keep user logged in between page refreshes
      localStorage.setItem("user", JSON.stringify(user));
    },
    logout() {
      this.user = null;
      localStorage.removeItem("user");
      console.log("the user is now", this.user);
    },
    setUser(payload) {
      this.user = payload ? payload : null;
      localStorage.setItem("user", this.user);
      console.log("the user is now", this.user);
    },
  },
});
