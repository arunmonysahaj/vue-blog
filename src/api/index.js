import axiosInstance from './axiosconfig';

const getHtmlFile = (fileUrl) => axiosInstance.get(fileUrl);

export default {
  getHtmlFile,
};
