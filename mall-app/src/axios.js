import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://mallapi.duyiedu.com/',
});
instance.interceptors.request.use((config) => {
  console.log(config);
  return config;
}, (error) => Promise.reject(error));
instance.interceptors.response.use(({ data }) => {
  console.log(data.status);
  if (data.status === 'fail') {
    return Promise.reject(data.msg);
  }
  return data.data;
}, (error) => Promise.reject(error));

export default instance;
