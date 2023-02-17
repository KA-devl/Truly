// /store/user.js

import { defineStore } from "pinia";
import {ref} from "vue";
import { useLocalStorage } from "@vueuse/core";

export const useUserStore = defineStore("user", ()=>{
  const user = ref(
    useLocalStorage("vueUseUser"),{
      user : null
    })

    const signUp = async(username, password) => {
      const res = await fetch("https://localhost:5000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      user.value = await res.json()

    }

    const login = async(username, password)=> {
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
       user.value = await res.json();
      console.log('THE USER IS ', user.value)

    }

    return {login, user, signUp}

}
);

