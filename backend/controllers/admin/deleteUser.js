import { findById } from '../../models/user';
import { uploader } from '../../config/cloudinary';

async function deleteUser(req, res) {
  try {
    const user =  findById(req.params.id);
    // delete the user resume from the cloud
    await uploader.destroy(user.resume.cloudinaryId);
    // delete the user avatar from the cloud
    await uploader.destroy(user.avatar.cloudinaryId);
    user.remove();

    if (!user)
      return res
        .status(400)
        .json({ sucess: false, message: `This user wasnt found` });

    res.status(201).json({
      sucess: true,
      message: `User with id ${req.params.id} has been deleted`,
      data: user,
    });
  } catch (err) {
    res.status(400).json({ sucess: false, message: err.message });
  }
}
export default { deleteUser };
