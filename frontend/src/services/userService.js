import axios from "axios"

export default {
  async updateUserProfile(userId, tempUser) {
    console.log('the temp data is' , tempUser.data)
    const res = await axios.put(`http://localhost:5000/api/edit-profile/${userId}`, tempUser.data );

    // store user details and jwt in local storage to keep user logged in between page refreshes
    localStorage.setItem('user', JSON.stringify(tempUser));
    console.log('the result is ', res)
  }
}