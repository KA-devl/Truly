import axios from "axios";
const localUrl = 'http://localhost:5000/api';

export default {
  async createUser(user) {
    const res = await axios.post(`${localUrl}/signup`, user);
    return res;
  },
  async getJob(jobId){
    const res = await axios.get(`${localUrl}/get-job/${jobId}`);
    return res.data.data
  },
  async getAllJobs() {
    const res = await axios.get(`${localUrl}/get-jobs`);
    return res.data.data;
  },
  async updateUserProfile(userId, tempUser) {
    const res = await axios.put(
      `${localUrl}/edit-profile/${userId}`,
      tempUser.data
    );
   
    return res;
  },
  async updateUserResume(userId, resume) {
    const res = await axios.put(
      `${localUrl}/update-resume/${userId}`,
      resume,
      {
        headers: {
            'Content-Type': 'multipart/resume'
        }
      }
    );
    return res;
  },
  async updateUserAvatar(userId, resume) {
    const res = await axios.put(
      `${localUrl}/update-avatar/${userId}`,
      resume,
      {
        headers: {
            'Content-Type': 'multipart/image'
        }
      }
    );
    return res;
  },
};
