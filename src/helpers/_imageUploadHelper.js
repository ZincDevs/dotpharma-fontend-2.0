/* eslint-disable import/prefer-default-export */
import axios from 'axios';

export const uploadMedicineImage = async (file, callback) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'uploads');
  try {
    const res = await axios.post('https://api.cloudinary.com/v1_1/dqpwqfbjf/image/upload', formData);
    callback(null, res.data.url);
    return;
  } catch (error) {
    callback(error, null);
  }
};
