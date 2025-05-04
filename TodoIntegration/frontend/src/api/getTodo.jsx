import { Axios } from "../utils/axiosInstance";

export const getTodoAPI = async () => {
    try {
      const response = await Axios.get("/todo"); 
      return {
        success: true,
        data: response.data
      }
    } catch (e) {
      console.log(e);
      return {
        success: false,
        data: null
      }
    }
  }