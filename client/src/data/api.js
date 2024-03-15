import axios from "axios";

const apiUrl = "/api/";

export const singleFileUpload = async (data,options) => {
  try {
    await axios.post(apiUrl + "training", data,options);
  } catch (error) {
    throw error;
  }
};

export const getSingleFiles = async () => {
  try {
    const { data } = await axios.get(apiUrl + "training");
    return data;
  } catch (error) {
    throw error;
  }
};

export const getFileById = async (id) => {
  try {
    const { data } = await axios.get(`${apiUrl}training/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const getTestById = async (id) => {
  try {
    const { data } = await axios.get(`${apiUrl}training/${id}`);
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
      const { data } = await axios.get(apiUrl + "training");
      return data;
    } catch (error) {
      throw error;
    }
  };
  export const multipleFilesUpload = async (data,id,options) => {
  try {
    await axios.put(apiUrl + "training/"+id, data,options);
  } catch (error) {
    throw error;
  }
}

export const singleTestUpload = async (data,id,options) => {
  try {
    await axios.put(apiUrl + "training/"+id+"/test", data,options);
  } catch (error) {
    throw error;
  }
}

export const marksTestUpload = async (data,id,options) => {
  try {
    await axios.post(apiUrl + "quiz/"+id+"/markscored", data,options);
  } catch (error) {
    throw error;
  }
}

export const getUserById = async (id) => {
  try {
    const { data } = await axios.get(`${apiUrl}getUser/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const putUserById = async (data,id) => {
  try {
    const { data } = await axios.put(`${apiUrl}putUser/${id}`,data);
    return data;
  } catch (error) {
    throw error;
  }
};

export const deleteCourseById = async (id) => {
  try {
   await axios.delete(`${apiUrl}delete/training/${id}`);
  } catch (error) {
    throw error;
  }
};

export const questionsdeleteById = async (id) => {
  try {
   await axios.delete(`${apiUrl}delete/training/test/${id}`);
  } catch (error) {
    throw error;
  }
};

export const filedeleteById = async (id) => {
  try {
   await axios.delete(`${apiUrl}delete/training/file/${id}`);
  } catch (error) {
    throw error;
  }
};

export const userdeleteById = async (id) => {
  try {
   await axios.delete(`${apiUrl}delete/user/${id}`);
  } catch (error) {
    throw error;
  }
};

export const UpdateUserById = async (data,id,options) => {
  try {
    await axios.put(`${apiUrl}user/${id}/updateUser`,data,options);
  } catch (error) {
    throw error;
  }
};

export const getUserFiles = async () => {
  try {
    const { data } = await axios.get(apiUrl + "getAllUser");
    return data;
  } catch (error) {
    throw error;
  }
};

export const getUserFilesByCompany = async (comp) => {
  try {
    const { data } = await axios.get(apiUrl + `getAllUser/${comp}`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const getMarksFiles = async (id) => {
  try {
    const { data } = await axios.get(`${apiUrl}marks/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const AssignCourseToUser = async (data,id) => {
  try {
    await axios.put(`${apiUrl}assign/course/${id}`,data);
  } catch (error) {
    throw error;
  }
};

export const AssignRoleToUser = async (data,id) => {
  try {
    await axios.put(`${apiUrl}assign/Role/${id}`,data);
  } catch (error) {
    throw error;
  }
};