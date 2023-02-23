import axios from "axios"

export default {
  async createUser(user) {
    console.log('the user to be created is ' , user)
    try{
      const res = await axios.post(`http://localhost:5000/api/signup`, user);
    }catch(error){
      console.log(error.message)
    }
  },
  async updateUserProfile(userId, tempUser) {
    console.log('the temp data is' , tempUser.data)
    const res = await axios.put(`http://localhost:5000/api/edit-profile/${userId}`, tempUser.data );

    // store user details and jwt in local storage to keep user logged in between page refreshes
    localStorage.setItem('user', JSON.stringify(tempUser));
    console.log('the result is ', res)
  }
}