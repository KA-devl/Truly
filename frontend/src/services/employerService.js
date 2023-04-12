import axios from "axios";

const localUrl = 'http://localhost:5000/api';

export default {
  async createJob(job){
    console.log('the job is', job);
    const res = await axios.post(`${localUrl}/create-job`, job);
    return res.data;
  },
  async deleteJob(jobId){
    console.log('the job is', jobId);
    const res = await axios.delete(`${localUrl}/delete-job/${jobId}`);
    return res.data;
  },

  async getCreatedJobs(userId) {//created jobs of the employer 
    const res = await axios.get(`${localUrl}/get-jobs/${userId}`);
    return res.data.data;
  },
  async getAllJobsWhereCandidatesApplied(authorId){
    const res = await axios.get(`${localUrl}/get-application-employer/${authorId}`);
    return res.data.data;
  },
  async getAllCandidatesOfJob(jobId){
    const res = await axios.get(`${localUrl}/get-application-job/${jobId}`);
    return res.data.data;
  },
  async setApplicationToInterview(applicationId){
    console.log('the application is', applicationId);
    const res = await axios.put(`${localUrl}/update-application-interview/${applicationId}`);
    return res.data;
  },
  async setApplicationToRejected(applicationId){
    console.log('the application is', applicationId);
    const res = await axios.put(`${localUrl}/update-application-rejected/${applicationId}`);
    return res.data;
  },
  
}