import axios from "axios";

const localUrl = 'http://localhost:5000/api';

export default {
    //function that deletes a job
    async deleteJob(jobId){
        const res = await axios.delete(`${localUrl}/delete-job/${jobId}`);
        return res.data;
    }
  }