
import cloneDeep from 'lodash/cloneDeep';

import Analysis from '../../routes/Dashboard/Analysis';
import Monitor from '../../routes/Dashboard/Monitor';
import Workplace from '../../routes/Dashboard/Workplace';

import CommunityBizApp from './Community.app'
const path="CommunityBizApp"
const pathHeader='community';
const data = [{
  component: CommunityBizApp,
  layout: path,
  name: '首页', // for breadcrumb
  path: '/'+pathHeader,
  children: [{
    name: '仪表板',
    icon: 'dashboard',
    path: 'dashboard',
    children: [{
      name: '测试页',
      path: 'test',
      component: Monitor,
    }, {
      name: '分析页',
      path: 'analysis',
      component: Workplace,
    }, {
      name: '监控页',
      path: 'monitor',
      component: Monitor,
    }, {
      name: '工作台',
      path: 'workplace',
      component: Workplace,
    }],
  }],
}];


function getPlainNode(nodeList, parentPath = 'community') {
  const arr = [];
  nodeList.forEach((node) => {
    const item = node;
    item.path = `/${parentPath}/${item.path || ''}`.replace(/\/+/g, '/');
    item.exact = true;
    if (item.children && !item.component) {
      //console.log("item.path",item.path)
      arr.push(...getPlainNode(item.children, item.path));
    } else {
      if (item.children && item.component) {
        item.exact = false;
      }
      arr.push(item);
    }
  });
  return arr;
}

export function getNavData() {
  return data;
}



export function getRouteData() {
  if (!data.some(item => item.layout === path) ||
      !(data.filter(item => item.layout === path)[0].children)) {
    return null;
  }
  const dataList = cloneDeep(data.filter(item => item.layout === path)[0]);
  const nodeList = getPlainNode(dataList.children,pathHeader);
  return nodeList;
}
export default data;
