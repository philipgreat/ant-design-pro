
import Analysis from '../../routes/Dashboard/Analysis';
import Monitor from '../../routes/Dashboard/Monitor';
import Workplace from '../../routes/Dashboard/Workplace';

import BizAppLayout from '../../layouts/BizAppLayout';


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
      name: '分析页',
      path: 'analysis',
      component: Analysis,
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
