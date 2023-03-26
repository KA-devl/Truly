import axios from "axios";

const localUrl = "http://localhost:5000/api";

export default {
  async getUsers() {
    const res = await axios.get(`${localUrl}/get-users`);
    return res.data.data;
  },

  //function that deletes a job
  async deleteJob(jobId) {
    const res = await axios.delete(`${localUrl}/delete-job/${jobId}`);
    return res.data;
  },

  //function that deletes a user
  async deleteUser(userId) {
    const res = await axios.delete(`${localUrl}/delete-user/${userId}`);
    return res.data;
  },
};
