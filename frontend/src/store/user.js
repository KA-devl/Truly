import { defineStore } from "pinia";
import axios from "axios";
export const useUserStore = defineStore("user", {
  state: () => ({
    user: localStorage.getItem("user") ? localStorage.getItem("user") : null ,
  }),

  actions: {
    async fetchUser() {
      if(!this.user){
      return;
      }
      const {data} = await axios.get(`http://localhost:5000/api/get-user/${this.user}`);
      console.log('fetch user in store is  ', data.data)
    
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
      const res = await axios.post( `http://localhost:5000/api/login`,
      JSON.stringify({ username, password }), 
      {
        headers: { "Content-Type": "application/json" }
      } );
     
      const userData = res.data.data
      console.log('user data is ', userData)
     
      if (userData) {
        this.user = userData.id;
        // store user details and jwt in local storage to keep user logged in between page refreshes
        localStorage.setItem("user", userData.id);
      }
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
