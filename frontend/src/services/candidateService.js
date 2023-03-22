import axios from "axios";

const localUrl = 'http://localhost:5000/api';

export default {
  async applyForJob(jobPackage){
    console.log('the job is', jobPackage);
    const res = await axios.post(`${localUrl}/apply-for-job`, jobPackage);
    return res.data;
  }
}