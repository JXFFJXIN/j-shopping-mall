// 用户操作相关接口
import axios from '@/axios';

export default {
  login(params) {
    return axios.post('/passport/login', params);
  },
};
