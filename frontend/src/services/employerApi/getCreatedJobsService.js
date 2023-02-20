import axios from "axios"

export default {
  async getCreatedJobs(userId) {
    console.log('the user Id is ' , userId)
    const res = await axios.get(`http://localhost:5000/api/get-jobs/${userId}`);
    console.log(res.data.data)
    return res.data.data;
  }
}