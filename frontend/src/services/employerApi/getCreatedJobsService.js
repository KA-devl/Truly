import axios from "axios"

export default {
  async getCreatedJobs(userId) {
    const res = await axios.get(`http://localhost:5000/api/get-jobs/${userId}`);
    return res.data.data;
  }
}