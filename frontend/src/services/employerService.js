import axios from "axios";

const localUrl = 'http://localhost:5000/api';

export default {
  async getCreatedJobs(userId) {
    const res = await axios.get(`${localUrl}/get-jobs/${userId}`);
    return res.data.data;
  }
}