// 准许，许可证

// 缓存
const role2route = {
  coustomer: [{
    name: 'Product',
  }, {
    name: 'ProductList',
  }, {
    name: 'ProductEdit',
  }, {
    name: 'ProductAdd',
  }],
  admin: [{
    name: 'ProductList',
  }, {
    name: 'ProductAdd',
  }, {
    name: 'ProductEdit',
  }, {
    name: 'Category',
  }],
};

// 接口：获取目标路由
export default function getMenuRoute(role, routes) {
  // 获取角色对应的路由
  const allowRoutesName = role2route[role].map((item) => item.name);
  // 过滤掉没有权限的路由
  const resultRoutes = routes.filter((r) => {
    const obj = r;
    if (allowRoutesName.indexOf(r.name) !== -1) {
      const { children } = obj;
      obj.children = children.filter((c) => allowRoutesName.indexOf(c.name) !== -1);
      return true;
    }
    return false;
  });
  return resultRoutes;
}
