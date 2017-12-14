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
import styles from './CarInspectionOrder.app.less';
import CarInspectionOrderDashboard from './CarInspectionOrder.dashboard';
import HeaderSearch from '../../components/HeaderSearch';
import NoticeIcon from '../../components/NoticeIcon';
import GlobalFooter from '../../components/GlobalFooter';

import CarReceivingServiceOrderSearch from '../carreceivingserviceorder/CarReceivingServiceOrder.search'
import CarReceivingServiceOrderCreateForm from '../carreceivingserviceorder/CarReceivingServiceOrder.createform'
import CarInspectionServiceOrderSearch from '../carinspectionserviceorder/CarInspectionServiceOrder.search'
import CarInspectionServiceOrderCreateForm from '../carinspectionserviceorder/CarInspectionServiceOrder.createform'
import CarRepairingServiceOrderSearch from '../carrepairingserviceorder/CarRepairingServiceOrder.search'
import CarRepairingServiceOrderCreateForm from '../carrepairingserviceorder/CarRepairingServiceOrder.createform'

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

class CarInspectionOrderBizApp extends React.PureComponent {
  
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
      return ['/carInspectionOrder/'];
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
        <span>审车订单</span>
      </span>} >
      
      
      <Menu.Item >   
        <Link to={"/carInspectionOrder/"+objectId+"/list/carReceivingServiceOrderList"}>接车服务订单</Link>
      </Menu.Item>
  

      <Menu.Item >   
        <Link to={"/carInspectionOrder/"+objectId+"/list/carInspectionServiceOrderList"}>汽车检查服务单</Link>
      </Menu.Item>
  

      <Menu.Item >   
        <Link to={"/carInspectionOrder/"+objectId+"/list/carRepairingServiceOrderList"}>汽车修理服务单</Link>
      </Menu.Item>
  
  
 
      
      </SubMenu>

    );

  }




  getCarReceivingServiceOrderSearch() {
 
    return connect(state => ({
      rule: state.rule,
      data: state._carInspectionOrder.carReceivingServiceOrderList,
      count: state._carInspectionOrder.carReceivingServiceOrderCount,
      currentPage: state._carInspectionOrder.carReceivingServiceOrderCurrentPageNumber,
      searchFormParameters: state._carInspectionOrder.carReceivingServiceOrderSearchFormParameters,
      loading: state._carInspectionOrder.loading,
      owner: {type:'_carInspectionOrder',id:state._carInspectionOrder.id}//this is for model namespace and 
    }))(CarReceivingServiceOrderSearch);
  }
  getCarReceivingServiceOrderCreateForm() {
 
    return connect(state => ({
      rule: state.rule,
      data: state._carInspectionOrder.carReceivingServiceOrderList,
      count: state._carInspectionOrder.carReceivingServiceOrderCount,
      currentPage: state._carInspectionOrder.carReceivingServiceOrderCurrentPageNumber,
      searchFormParameters: state._carInspectionOrder.carReceivingServiceOrderSearchFormParameters,
      loading: state._carInspectionOrder.loading,
      owner: {type:'_carInspectionOrder',id:state._carInspectionOrder.id}//this is for model namespace and 
    }))(CarReceivingServiceOrderCreateForm);
  }
  

  getCarInspectionServiceOrderSearch() {
 
    return connect(state => ({
      rule: state.rule,
      data: state._carInspectionOrder.carInspectionServiceOrderList,
      count: state._carInspectionOrder.carInspectionServiceOrderCount,
      currentPage: state._carInspectionOrder.carInspectionServiceOrderCurrentPageNumber,
      searchFormParameters: state._carInspectionOrder.carInspectionServiceOrderSearchFormParameters,
      loading: state._carInspectionOrder.loading,
      owner: {type:'_carInspectionOrder',id:state._carInspectionOrder.id}//this is for model namespace and 
    }))(CarInspectionServiceOrderSearch);
  }
  getCarInspectionServiceOrderCreateForm() {
 
    return connect(state => ({
      rule: state.rule,
      data: state._carInspectionOrder.carInspectionServiceOrderList,
      count: state._carInspectionOrder.carInspectionServiceOrderCount,
      currentPage: state._carInspectionOrder.carInspectionServiceOrderCurrentPageNumber,
      searchFormParameters: state._carInspectionOrder.carInspectionServiceOrderSearchFormParameters,
      loading: state._carInspectionOrder.loading,
      owner: {type:'_carInspectionOrder',id:state._carInspectionOrder.id}//this is for model namespace and 
    }))(CarInspectionServiceOrderCreateForm);
  }
  

  getCarRepairingServiceOrderSearch() {
 
    return connect(state => ({
      rule: state.rule,
      data: state._carInspectionOrder.carRepairingServiceOrderList,
      count: state._carInspectionOrder.carRepairingServiceOrderCount,
      currentPage: state._carInspectionOrder.carRepairingServiceOrderCurrentPageNumber,
      searchFormParameters: state._carInspectionOrder.carRepairingServiceOrderSearchFormParameters,
      loading: state._carInspectionOrder.loading,
      owner: {type:'_carInspectionOrder',id:state._carInspectionOrder.id}//this is for model namespace and 
    }))(CarRepairingServiceOrderSearch);
  }
  getCarRepairingServiceOrderCreateForm() {
 
    return connect(state => ({
      rule: state.rule,
      data: state._carInspectionOrder.carRepairingServiceOrderList,
      count: state._carInspectionOrder.carRepairingServiceOrderCount,
      currentPage: state._carInspectionOrder.carRepairingServiceOrderCurrentPageNumber,
      searchFormParameters: state._carInspectionOrder.carRepairingServiceOrderSearchFormParameters,
      loading: state._carInspectionOrder.loading,
      owner: {type:'_carInspectionOrder',id:state._carInspectionOrder.id}//this is for model namespace and 
    }))(CarRepairingServiceOrderCreateForm);
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
            <Link to="/home"> <h1>审车订单</h1></Link>
          </div>
          
          <Menu
            theme="dark"
            mode="inline"
            {...menuProps}
            onOpenChange={this.handleOpenChange}
            selectedKeys={this.getCurrentMenuSelectedKeys()}
            style={{ margin: '16px 0', width: '100%' }}
          >
            {this.getNavMenuItems(this.props.carInspectionOrder.id)}
          </Menu>
        </Sider>
        <Layout>
        
          <Content style={{ margin: '24px 24px 0', height: '100%' }}>
            <Switch>
            <Route path="/carInspectionOrder/:id/dashboard" component={CarInspectionOrderDashboard} />
          
            
    
          <Route path="/carInspectionOrder/:id/list/carReceivingServiceOrderList" component={this.getCarReceivingServiceOrderSearch()} />
          <Route path="/carInspectionOrder/:id/list/carReceivingServiceOrderCreateForm" component={this.getCarReceivingServiceOrderCreateForm()} />
          

          <Route path="/carInspectionOrder/:id/list/carInspectionServiceOrderList" component={this.getCarInspectionServiceOrderSearch()} />
          <Route path="/carInspectionOrder/:id/list/carInspectionServiceOrderCreateForm" component={this.getCarInspectionServiceOrderCreateForm()} />
          

          <Route path="/carInspectionOrder/:id/list/carRepairingServiceOrderList" component={this.getCarRepairingServiceOrderSearch()} />
          <Route path="/carInspectionOrder/:id/list/carRepairingServiceOrderCreateForm" component={this.getCarRepairingServiceOrderCreateForm()} />
          
              
             
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
  carInspectionOrder: state._carInspectionOrder,
  ...state
}))(CarInspectionOrderBizApp);



