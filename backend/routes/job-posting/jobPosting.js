
const jobPosting = require("../../models/jobpost");

//CREATE A JOBPOSTING ( its better to define a name to the function so that we can understand what it does)
const createJobPosting = (app) =>
app.post("/api/create-job-post", async (req, res) => {
    const jobpost=  await jobPosting.create(req.body);
    res.status(200).json({sucess:true,data:jobpost})
})

module.exports =createJobPosting;