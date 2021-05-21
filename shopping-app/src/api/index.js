import axios from 'axios';

const URLS = {
  getSide: '/getsidebar',
  getGoodsList: '/getGoodsList',
  search: '/search',
  likeSearch: '/likeSearch',
  getGoodsByIds: '/getGoodsByIds',
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

const likeSearch = (val) => request.get(
  URLS.likeSearch,
  { params: { likeValue: val } },
);

const search = (type, page, size) => request.get(
  URLS.search,
  { params: { type, page, size } },
);

const getGoodsByIds = (value) => request.get(
  URLS.getGoodsByIds,
  { params: { value } },
);

export default {
  getSideList,
  getGoodsList,
  likeSearch,
  search,
  getGoodsByIds,
};
