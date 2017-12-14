import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu, Icon, Avatar, Dropdown, Tag, message, Spin } from 'antd';
import DocumentTitle from 'react-document-title';
import { connect } from 'dva';
import { Link, Route, Redirect, Switch } from 'dva/router';
import moment from 'moment';
import groupBy from 'lodash/groupBy';
import { ContainerQuery } from 'react-container-query';
import classNames from 'classnames';
import styles from './CarReceiveWorking.app.less';
import CarReceiveWorkingDashboard from './CarReceiveWorking.dashboard';
import HeaderSearch from '../../components/HeaderSearch';
import NoticeIcon from '../../components/NoticeIcon';
import GlobalFooter from '../../components/GlobalFooter';

import CarReceivingServiceOrderSearch from '../carreceivingserviceorder/CarReceivingServiceOrder.search'
import CarReceivingServiceOrderCreateForm from '../carreceivingserviceorder/CarReceivingServiceOrder.createform'

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;



const query = {
  'screen-xs': {
    maxWidth: 575,
  },
  'screen-sm': {
    minWidth: 576,
    maxWidth: 767,
  },
  'screen-md': {
    minWidth: 768,
    maxWidth: 991,
  },
  'screen-lg': {
    minWidth: 992,
    maxWidth: 1199,
  },
  'screen-xl': {
    minWidth: 1200,
  },
};

class CarReceiveWorkingBizApp extends React.PureComponent {
  
 constructor(props) {
    super(props);
    // 把一级 Layout 的 children 作为菜单项
    
    //this.menus = getNavData().reduce((arr, current) => arr.concat(current.children), []);
    this.state = {
      openKeys: this.getDefaultCollapsedSubMenus(props),
    };
  }

  componentDidMount() {
   
  }
  componentWillUnmount() {
    clearTimeout(this.resizeTimeout);
  }
  onCollapse = (collapsed) => {
    this.props.dispatch({
      type: 'global/changeLayoutCollapsed',
      payload: collapsed,
    });
  }

  getDefaultCollapsedSubMenus(props) {
    const currentMenuSelectedKeys = [...this.getCurrentMenuSelectedKeys(props)];
    currentMenuSelectedKeys.splice(-1, 1);
    if (currentMenuSelectedKeys.length === 0) {
      return ['/carReceiveWorking/'];
    }
    return currentMenuSelectedKeys;
  }
  getCurrentMenuSelectedKeys(props) {
    const { location: { pathname } } = props || this.props;
    const keys = pathname.split('/').slice(1);
    if (keys.length === 1 && keys[0] === '') {
      return [this.menus[0].key];
    }
    return keys;
  }
  getNavMenuItems(objectId){

    return (
      <SubMenu title={<span>
        <Icon type='dashboard' />
        <span>汽车接收工作</span>
      </span>} >
      
      
      <Menu.Item >   
        <Link to={"/carReceiveWorking/"+objectId+"/list/carReceivingServiceOrderList"}>车辆接收服务令</Link>
      </Menu.Item>
  
  
 
      
      </SubMenu>

    );

  }




  getCarReceivingServiceOrderSearch() {
 
    return connect(state => ({
      rule: state.rule,
      data: state._carReceiveWorking.carReceivingServiceOrderList,
      count: state._carReceiveWorking.carReceivingServiceOrderCount,
      currentPage: state._carReceiveWorking.carReceivingServiceOrderCurrentPageNumber,
      searchFormParameters: state._carReceiveWorking.carReceivingServiceOrderSearchFormParameters,
      loading: state._carReceiveWorking.loading,
      owner: {type:'_carReceiveWorking',id:state._carReceiveWorking.id}//this is for model namespace and 
    }))(CarReceivingServiceOrderSearch);
  }
  getCarReceivingServiceOrderCreateForm() {
 
    return connect(state => ({
      rule: state.rule,
      data: state._carReceiveWorking.carReceivingServiceOrderList,
      count: state._carReceiveWorking.carReceivingServiceOrderCount,
      currentPage: state._carReceiveWorking.carReceivingServiceOrderCurrentPageNumber,
      searchFormParameters: state._carReceiveWorking.carReceivingServiceOrderSearchFormParameters,
      loading: state._carReceiveWorking.loading,
      owner: {type:'_carReceiveWorking',id:state._carReceiveWorking.id}//this is for model namespace and 
    }))(CarReceivingServiceOrderCreateForm);
  }
  
  
  
getPageTitle() {
    const { location } = this.props;
    const { pathname } = location;
    let title = '供应链系统';
    
    return title;
  }
 
  handleOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    this.setState({
      openKeys: latestOpenKey ? [latestOpenKey] : [],
    });
  }
   toggle = () => {
    const { collapsed } = this.props;
    this.props.dispatch({
      type: 'global/changeLayoutCollapsed',
      payload: !collapsed,
    });
  }

  render() {
    const {  collapsed, fetchingNotices,loading } = this.props;
    console.log("test value",this.props)
    // Don't show popup menu when it is been collapsed
    const menuProps = collapsed ? {} : {
      openKeys: this.state.openKeys,
    };

    const layout = (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          breakpoint="md"
          onCollapse={this.onCollapse}
          width={256}
          className={styles.sider}
        >
          <div className={styles.logo}>
            <img src="/scm.svg" alt="logo" onClick={this.toggle}/>          
            <Link to="/home"> <h1>汽车接收工作</h1></Link>
          </div>
          
          <Menu
            theme="dark"
            mode="inline"
            {...menuProps}
            onOpenChange={this.handleOpenChange}
            selectedKeys={this.getCurrentMenuSelectedKeys()}
            style={{ margin: '16px 0', width: '100%' }}
          >
            {this.getNavMenuItems(this.props.carReceiveWorking.id)}
          </Menu>
        </Sider>
        <Layout>
        
          <Content style={{ margin: '24px 24px 0', height: '100%' }}>
            <Switch>
            <Route path="/carReceiveWorking/:id/dashboard" component={CarReceiveWorkingDashboard} />
          
            
    
          <Route path="/carReceiveWorking/:id/list/carReceivingServiceOrderList" component={this.getCarReceivingServiceOrderSearch()} />
          <Route path="/carReceiveWorking/:id/list/carReceivingServiceOrderCreateForm" component={this.getCarReceivingServiceOrderCreateForm()} />
          
              
             
</Switch>
           
          </Content>
        </Layout>
      </Layout>
    );

    return (
      <DocumentTitle title={this.getPageTitle()}>
        <ContainerQuery query={query}>
          {params => <div className={classNames(params)}>{layout}</div>}
        </ContainerQuery>
      </DocumentTitle>
    );
  }
}

export default connect(state => ({
  collapsed: state.global.collapsed,
  fetchingNotices: state.global.fetchingNotices,
  notices: state.global.notices,
  carReceiveWorking: state._carReceiveWorking,
  ...state
}))(CarReceiveWorkingBizApp);


