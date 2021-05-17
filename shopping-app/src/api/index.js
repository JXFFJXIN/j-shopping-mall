import axios from 'axios';

const URLS = {
  getSide: '/getsidebar',
  getGoodsList: '/getGoodsList',
};
const baseURL = 'https://mallapi.duyiedu.com/goods/';
const appkey = 'JXFF_1620797315462';
const request = axios.create({
  baseURL,
  params: {
    appkey,
  },
});

request.interceptors.response.use((value) => value.data);

const getSideList = (type) => request.get(
  URLS.getSide,
  { params: { type } },
);

const getGoodsList = (type, page, size, sort) => request.get(
  URLS.getGoodsList,
  {
    params: {
      type, size, sort, page,
    },
  },
);

export default {
  getSideList,
  getGoodsList,
};
