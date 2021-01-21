import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

export const getData = async (dataUrl: string) => {
  try {
    const url = API_URL + dataUrl;
    const response = await axios.get(url);
    return response;
  } catch (err) {
    throw err;
  }
};
export const postData = async (dataUrl: string, formData: any) => {
  try {
    const url = API_URL + dataUrl;
    const response = await axios.post(url, formData);
    return response;
  } catch (err) {
    throw err;
  }
};

export const patchData = async (dataUrl: string, formData: any) => {
  try {
    const url = API_URL + dataUrl;
    const response = await axios.patch(url, formData);
    return response;
  } catch (err) {
    throw err;
  }
};
export const deleteData = async (dataUrl: string) => {
  try {
    const url = API_URL + dataUrl;
    const response = await axios.delete(url);
    return response;
  } catch (err) {
    throw err;
  }
};
