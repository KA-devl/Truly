import axios from "axios";

const localUrl = 'http://localhost:5000/api';

export default {
  async applyForJob(jobPackage){
    console.log('the job is', jobPackage);
    const res = await axios.post(`${localUrl}/apply-for-job`, jobPackage);
    return res.data;
  },
  async getSelectedForInterviewJobs(userId){
    const res = await axios.get(`${localUrl}/get-all-interviews/${userId}`);
    return res.data.data
  },
  async getJobAppliedFor(userId){
    const res = await axios.get(`${localUrl}/get-application-candidate/${userId}`);
    console.log('the res is', res.data.data)
    return res.data.data
  }
}