const cloudinary = require('../../config/cloudinary');
const User = require('../../models/user');
const path = require('path');

// UPDATE CANDIDATE RESUME
async function updateResume(req, res) {
  //array of accepted files
  const authorizedMimeTypes = ['.pdf', '.txt'];
  // get the extension of the uploaded file
  const fileExtension = path.extname(req.file.originalname);

  try {
    // if file .ext is in the authorizedMimeTypes list
    if (authorizedMimeTypes.includes(fileExtension)) {
      let user = await User.findById(req.params.id);
      // if user not a candidate ---> error
      if (!user || user.userType === 'employer') {
        res.status(400).json({
          sucess: false,
          message: `Not a candidate Id`,
        });
        return;
      }

      // delete resume file from database if there is already one
      await cloudinary.uploader.destroy(user.resume.cloudinaryId);
      // upload the new image
      const result = await cloudinary.uploader.upload(req.file.path);
      // set the new data of  the resume
      const data = {
        resume: {
          resumeUrl: result.secure_url,
          cloudinaryId: result.public_id,
        },
      };
      // update the resume with the new data
      user = await User.findByIdAndUpdate(req.params.id, data, { new: true });
      res.status(201).json({
        sucess: true,
        message: `resume updated successfully`,
        data: user.resume,
      });
    }
    // if file is not a docx,doc,txt,or pdf ---> message error
    else
      res.status(400).json({
        sucess: false,
        message: `Please upload txt or pdf file`,
      });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      sucess: false,
      message: `Please upload txt or pdf file`,
    });
  }
}

module.exports = { updateResume };
