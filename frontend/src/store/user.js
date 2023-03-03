import { defineStore } from "pinia";
import axios from "axios";
export const useUserStore = defineStore("user", {
  state: () => ({
    user: localStorage.getItem("user"),
  }),

  actions: {
    async fetchUser() {
      if(!this.user){
      return;
      }
      const {data} = await axios.get(`http://localhost:5000/api/get-user/${this.user}`);
      console.log('the new user is ', data)
    
      return data.data;
      
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
      const {data} = await res.json();
      console.log("THE USER IS ", data.id);
      this.user = data.id;
      console.log('LOGINNNNN this.user ', this.user)
      // store user details and jwt in local storage to keep user logged in between page refreshes
      localStorage.setItem("user", data.id);
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
