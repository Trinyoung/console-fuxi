import axios, { AxiosResponse } from "axios";
import { ElMessage } from "element-plus";
// import redirect
const instance = axios.create({
  // baseURL: "http://127.0.0.1:9220",
  timeout: 3000,
  headers: {},
});

axios.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

axios.interceptors.response.use(
  (
    res: AxiosResponse<{
      code: number;
      result?: any;
      error?: any;
      message?: any;
    }>
  ) => {
    console.log(res.data);
    if (res.data.code === 200) {
      return res.data.result;
    }
    if (res.data.code === 401) {
      return (location.href = "");
    }
    return Promise.reject(res.data.result);
  },
  function (error) {
    ElMessage.error(error.message);
    return Promise.reject(error);
  }
);

export default instance;
