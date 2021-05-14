import axios from 'axios';
import store from './store';

const instance = axios.create({
  baseURL: 'https://mallapi.duyiedu.com/',
});
instance.interceptors.request.use((config) => {
  if (config.url.includes('/passport')) {
    return config;
  }
  return {
    ...config,
    params: {
      ...config.params,
      appkey: store.state.user.appkey,
    },
  };
}, (error) => Promise.reject(error));
instance.interceptors.response.use(({ data }) => {
  if (data.status === 'fail') {
    return Promise.reject(data.msg);
  }
  return data.data;
}, (error) => Promise.reject(error));

export default instance;
