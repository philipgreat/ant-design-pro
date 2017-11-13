
import Analysis from '../../routes/Dashboard/Analysis';
import Monitor from '../../routes/Dashboard/Monitor';
import Workplace from '../../routes/Dashboard/Workplace';

import BizAppLayout from '../../layouts/BizAppLayout';
import CommunityBizApp from './Community.app'

const data = [{
  component: BizAppLayout,
  layout: 'BizAppLayout',
  name: '首页', // for breadcrumb
  path: '',
  children: [{
    name: '仪表板',
    icon: 'dashboard',
    path: 'dashboard',
    children: [{
      name: '测试页',
      path: 'test',
      component: CommunityBizApp,
    }, {
      name: '分析页11',
      path: 'analysis11',
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

export function getNavData() {
  return data;
}

export default data;
