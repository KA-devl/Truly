import axios from "axios";

const localUrl = 'http://localhost:5000/api';

export default {
  async createJob(job){
    console.log('the job is', job);
    const res = await axios.post(`${localUrl}/create-job`, job);
    return res.data;
  },
  async getCreatedJobs(userId) {
    const res = await axios.get(`${localUrl}/get-jobs/${userId}`);
    return res.data.data;
  }
}