import axios from "axios";

const apiUrl = "http://localhost:8080/api/";

export const singleFileUpload = async (data,options) => {
  try {
    await axios.post(apiUrl + "training", data,options);
  } catch (error) {
    throw error;
  }
};

export const getSingleFiles = async () => {
  try {
    const { data } = await axios.get(apiUrl + "/training");
    return data;
  } catch (error) {
    throw error;
  }
};

export const getFileById = async (id) => {
  try {
    const { data } = await axios.get(`${apiUrl}/training/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
};

// export const multipleFilesUpload = async (data,options) => {
//   try {
//     await axios.post(apiUrl + "multipleFiles", data,options);
//   } catch (error) {
//     throw error;
//   }
// };

export const getMultipleFiles = async () => {
    try {
      const { data } = await axios.get(apiUrl + "/training");
      return data;
    } catch (error) {
      throw error;
    }
  };
  export const multipleFilesUpload = async (data,id,options) => {
  try {
    await axios.put(apiUrl + "/training/"+id, data,options);
  } catch (error) {
    throw error;
  }
}

export const getUserById = async (id) => {
  try {
    const { data } = await axios.get(`${apiUrl}/getUser/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const getUserFiles = async () => {
  try {
    const { data } = await axios.get(apiUrl + "/getUser");
    return data;
  } catch (error) {
    throw error;
  }
};