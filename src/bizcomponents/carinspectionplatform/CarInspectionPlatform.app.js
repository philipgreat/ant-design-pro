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
import styles from './CarInspectionPlatform.app.less';
import CarInspectionPlatformDashboard from './CarInspectionPlatform.dashboard';
import HeaderSearch from '../../components/HeaderSearch';
import NoticeIcon from '../../components/NoticeIcon';
import GlobalFooter from '../../components/GlobalFooter';

import CustomerInfoSearch from '../customerinfo/CustomerInfo.search'
import CustomerInfoCreateForm from '../customerinfo/CustomerInfo.createform'
import CustomerInfoUpdateForm from '../customerinfo/CustomerInfo.updateform'

import CarReceivingServiceCompanySearch from '../carreceivingservicecompany/CarReceivingServiceCompany.search'
import CarReceivingServiceCompanyCreateForm from '../carreceivingservicecompany/CarReceivingServiceCompany.createform'
import CarReceivingServiceCompanyUpdateForm from '../carreceivingservicecompany/CarReceivingServiceCompany.updateform'

import CarInspectionServiceCompanySearch from '../carinspectionservicecompany/CarInspectionServiceCompany.search'
import CarInspectionServiceCompanyCreateForm from '../carinspectionservicecompany/CarInspectionServiceCompany.createform'
import CarInspectionServiceCompanyUpdateForm from '../carinspectionservicecompany/CarInspectionServiceCompany.updateform'

import CarRepairingServiceCompanySearch from '../carrepairingservicecompany/CarRepairingServiceCompany.search'
import CarRepairingServiceCompanyCreateForm from '../carrepairingservicecompany/CarRepairingServiceCompany.createform'
import CarRepairingServiceCompanyUpdateForm from '../carrepairingservicecompany/CarRepairingServiceCompany.updateform'

import CarInfoSearch from '../carinfo/CarInfo.search'
import CarInfoCreateForm from '../carinfo/CarInfo.createform'
import CarInfoUpdateForm from '../carinfo/CarInfo.updateform'

import CarInspectionOrderSearch from '../carinspectionorder/CarInspectionOrder.search'
import CarInspectionOrderCreateForm from '../carinspectionorder/CarInspectionOrder.createform'
import CarInspectionOrderUpdateForm from '../carinspectionorder/CarInspectionOrder.updateform'

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

class CarInspectionPlatformBizApp extends React.PureComponent {
  
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
      return ['/carInspectionPlatform/'];
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
        <span>审车平台</span>
      </span>} >
      
      
      <Menu.Item >   
        <Link to={"/carInspectionPlatform/"+objectId+"/list/customerInfoList"}>客户信息</Link>
      </Menu.Item>
  

      <Menu.Item >   
        <Link to={"/carInspectionPlatform/"+objectId+"/list/carReceivingServiceCompanyList"}>汽车接收服务公司</Link>
      </Menu.Item>
  

      <Menu.Item >   
        <Link to={"/carInspectionPlatform/"+objectId+"/list/carInspectionServiceCompanyList"}>汽车代检服务公司</Link>
      </Menu.Item>
  

      <Menu.Item >   
        <Link to={"/carInspectionPlatform/"+objectId+"/list/carRepairingServiceCompanyList"}>汽车维修服务公司</Link>
      </Menu.Item>
  

      <Menu.Item >   
        <Link to={"/carInspectionPlatform/"+objectId+"/list/carInfoList"}>汽车信息</Link>
      </Menu.Item>
  

      <Menu.Item >   
        <Link to={"/carInspectionPlatform/"+objectId+"/list/carInspectionOrderList"}>审车订单</Link>
      </Menu.Item>
  
  
 
      
      </SubMenu>

    );

  }




  getCustomerInfoSearch() {
 
    return connect(state => ({
      rule: state.rule,
      data: state._carInspectionPlatform.customerInfoList,
      count: state._carInspectionPlatform.customerInfoCount,
      currentPage: state._carInspectionPlatform.customerInfoCurrentPageNumber,
      searchFormParameters: state._carInspectionPlatform.customerInfoSearchFormParameters,
      loading: state._carInspectionPlatform.loading,
      owner: {type:'_carInspectionPlatform',id:state._carInspectionPlatform.id}//this is for model namespace and 
    }))(CustomerInfoSearch);
  }
  getCustomerInfoCreateForm() {
 
    return connect(state => ({
      rule: state.rule,
      data: state._carInspectionPlatform.customerInfoList,
      count: state._carInspectionPlatform.customerInfoCount,
      currentPage: state._carInspectionPlatform.customerInfoCurrentPageNumber,
      searchFormParameters: state._carInspectionPlatform.customerInfoSearchFormParameters,
      loading: state._carInspectionPlatform.loading,
      owner: {type:'_carInspectionPlatform',id:state._carInspectionPlatform.id}//this is for model namespace and 
    }))(CustomerInfoCreateForm);
  }
  
  getCustomerInfoUpdateForm() {
 
    return connect(state => ({
      
      selectedRows: state._carInspectionPlatform.selectedRows,
      currentUpdateIndex: state._carInspectionPlatform.currentUpdateIndex,
      owner: {type:'_carInspectionPlatform',id:state._carInspectionPlatform.id}//this is for model namespace and 
    }))(CustomerInfoUpdateForm);
    

  }

  

  getCarReceivingServiceCompanySearch() {
 
    return connect(state => ({
      rule: state.rule,
      data: state._carInspectionPlatform.carReceivingServiceCompanyList,
      count: state._carInspectionPlatform.carReceivingServiceCompanyCount,
      currentPage: state._carInspectionPlatform.carReceivingServiceCompanyCurrentPageNumber,
      searchFormParameters: state._carInspectionPlatform.carReceivingServiceCompanySearchFormParameters,
      loading: state._carInspectionPlatform.loading,
      owner: {type:'_carInspectionPlatform',id:state._carInspectionPlatform.id}//this is for model namespace and 
    }))(CarReceivingServiceCompanySearch);
  }
  getCarReceivingServiceCompanyCreateForm() {
 
    return connect(state => ({
      rule: state.rule,
      data: state._carInspectionPlatform.carReceivingServiceCompanyList,
      count: state._carInspectionPlatform.carReceivingServiceCompanyCount,
      currentPage: state._carInspectionPlatform.carReceivingServiceCompanyCurrentPageNumber,
      searchFormParameters: state._carInspectionPlatform.carReceivingServiceCompanySearchFormParameters,
      loading: state._carInspectionPlatform.loading,
      owner: {type:'_carInspectionPlatform',id:state._carInspectionPlatform.id}//this is for model namespace and 
    }))(CarReceivingServiceCompanyCreateForm);
  }
  
  getCarReceivingServiceCompanyUpdateForm() {
 
    return connect(state => ({
      
      selectedRows: state._carInspectionPlatform.selectedRows,
      currentUpdateIndex: state._carInspectionPlatform.currentUpdateIndex,
      owner: {type:'_carInspectionPlatform',id:state._carInspectionPlatform.id}//this is for model namespace and 
    }))(CarReceivingServiceCompanyUpdateForm);
    

  }

  

  getCarInspectionServiceCompanySearch() {
 
    return connect(state => ({
      rule: state.rule,
      data: state._carInspectionPlatform.carInspectionServiceCompanyList,
      count: state._carInspectionPlatform.carInspectionServiceCompanyCount,
      currentPage: state._carInspectionPlatform.carInspectionServiceCompanyCurrentPageNumber,
      searchFormParameters: state._carInspectionPlatform.carInspectionServiceCompanySearchFormParameters,
      loading: state._carInspectionPlatform.loading,
      owner: {type:'_carInspectionPlatform',id:state._carInspectionPlatform.id}//this is for model namespace and 
    }))(CarInspectionServiceCompanySearch);
  }
  getCarInspectionServiceCompanyCreateForm() {
 
    return connect(state => ({
      rule: state.rule,
      data: state._carInspectionPlatform.carInspectionServiceCompanyList,
      count: state._carInspectionPlatform.carInspectionServiceCompanyCount,
      currentPage: state._carInspectionPlatform.carInspectionServiceCompanyCurrentPageNumber,
      searchFormParameters: state._carInspectionPlatform.carInspectionServiceCompanySearchFormParameters,
      loading: state._carInspectionPlatform.loading,
      owner: {type:'_carInspectionPlatform',id:state._carInspectionPlatform.id}//this is for model namespace and 
    }))(CarInspectionServiceCompanyCreateForm);
  }
  
  getCarInspectionServiceCompanyUpdateForm() {
 
    return connect(state => ({
      
      selectedRows: state._carInspectionPlatform.selectedRows,
      currentUpdateIndex: state._carInspectionPlatform.currentUpdateIndex,
      owner: {type:'_carInspectionPlatform',id:state._carInspectionPlatform.id}//this is for model namespace and 
    }))(CarInspectionServiceCompanyUpdateForm);
    

  }

  

  getCarRepairingServiceCompanySearch() {
 
    return connect(state => ({
      rule: state.rule,
      data: state._carInspectionPlatform.carRepairingServiceCompanyList,
      count: state._carInspectionPlatform.carRepairingServiceCompanyCount,
      currentPage: state._carInspectionPlatform.carRepairingServiceCompanyCurrentPageNumber,
      searchFormParameters: state._carInspectionPlatform.carRepairingServiceCompanySearchFormParameters,
      loading: state._carInspectionPlatform.loading,
      owner: {type:'_carInspectionPlatform',id:state._carInspectionPlatform.id}//this is for model namespace and 
    }))(CarRepairingServiceCompanySearch);
  }
  getCarRepairingServiceCompanyCreateForm() {
 
    return connect(state => ({
      rule: state.rule,
      data: state._carInspectionPlatform.carRepairingServiceCompanyList,
      count: state._carInspectionPlatform.carRepairingServiceCompanyCount,
      currentPage: state._carInspectionPlatform.carRepairingServiceCompanyCurrentPageNumber,
      searchFormParameters: state._carInspectionPlatform.carRepairingServiceCompanySearchFormParameters,
      loading: state._carInspectionPlatform.loading,
      owner: {type:'_carInspectionPlatform',id:state._carInspectionPlatform.id}//this is for model namespace and 
    }))(CarRepairingServiceCompanyCreateForm);
  }
  
  getCarRepairingServiceCompanyUpdateForm() {
 
    return connect(state => ({
      
      selectedRows: state._carInspectionPlatform.selectedRows,
      currentUpdateIndex: state._carInspectionPlatform.currentUpdateIndex,
      owner: {type:'_carInspectionPlatform',id:state._carInspectionPlatform.id}//this is for model namespace and 
    }))(CarRepairingServiceCompanyUpdateForm);
    

  }

  

  getCarInfoSearch() {
 
    return connect(state => ({
      rule: state.rule,
      data: state._carInspectionPlatform.carInfoList,
      count: state._carInspectionPlatform.carInfoCount,
      currentPage: state._carInspectionPlatform.carInfoCurrentPageNumber,
      searchFormParameters: state._carInspectionPlatform.carInfoSearchFormParameters,
      loading: state._carInspectionPlatform.loading,
      owner: {type:'_carInspectionPlatform',id:state._carInspectionPlatform.id}//this is for model namespace and 
    }))(CarInfoSearch);
  }
  getCarInfoCreateForm() {
 
    return connect(state => ({
      rule: state.rule,
      data: state._carInspectionPlatform.carInfoList,
      count: state._carInspectionPlatform.carInfoCount,
      currentPage: state._carInspectionPlatform.carInfoCurrentPageNumber,
      searchFormParameters: state._carInspectionPlatform.carInfoSearchFormParameters,
      loading: state._carInspectionPlatform.loading,
      owner: {type:'_carInspectionPlatform',id:state._carInspectionPlatform.id}//this is for model namespace and 
    }))(CarInfoCreateForm);
  }
  
  getCarInfoUpdateForm() {
 
    return connect(state => ({
      
      selectedRows: state._carInspectionPlatform.selectedRows,
      currentUpdateIndex: state._carInspectionPlatform.currentUpdateIndex,
      owner: {type:'_carInspectionPlatform',id:state._carInspectionPlatform.id}//this is for model namespace and 
    }))(CarInfoUpdateForm);
    

  }

  

  getCarInspectionOrderSearch() {
 
    return connect(state => ({
      rule: state.rule,
      data: state._carInspectionPlatform.carInspectionOrderList,
      count: state._carInspectionPlatform.carInspectionOrderCount,
      currentPage: state._carInspectionPlatform.carInspectionOrderCurrentPageNumber,
      searchFormParameters: state._carInspectionPlatform.carInspectionOrderSearchFormParameters,
      loading: state._carInspectionPlatform.loading,
      owner: {type:'_carInspectionPlatform',id:state._carInspectionPlatform.id}//this is for model namespace and 
    }))(CarInspectionOrderSearch);
  }
  getCarInspectionOrderCreateForm() {
 
    return connect(state => ({
      rule: state.rule,
      data: state._carInspectionPlatform.carInspectionOrderList,
      count: state._carInspectionPlatform.carInspectionOrderCount,
      currentPage: state._carInspectionPlatform.carInspectionOrderCurrentPageNumber,
      searchFormParameters: state._carInspectionPlatform.carInspectionOrderSearchFormParameters,
      loading: state._carInspectionPlatform.loading,
      owner: {type:'_carInspectionPlatform',id:state._carInspectionPlatform.id}//this is for model namespace and 
    }))(CarInspectionOrderCreateForm);
  }
  
  getCarInspectionOrderUpdateForm() {
 
    return connect(state => ({
      
      selectedRows: state._carInspectionPlatform.selectedRows,
      currentUpdateIndex: state._carInspectionPlatform.currentUpdateIndex,
      owner: {type:'_carInspectionPlatform',id:state._carInspectionPlatform.id}//this is for model namespace and 
    }))(CarInspectionOrderUpdateForm);
    

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
            <Link to="/home"> <h1>审车平台</h1></Link>
          </div>
          
          <Menu
            theme="dark"
            mode="inline"
            {...menuProps}
            onOpenChange={this.handleOpenChange}
            selectedKeys={this.getCurrentMenuSelectedKeys()}
            style={{ margin: '16px 0', width: '100%' }}
          >
            {this.getNavMenuItems(this.props.carInspectionPlatform.id)}
          </Menu>
        </Sider>
        <Layout>
        
          <Content style={{ margin: '24px 24px 0', height: '100%' }}>
            <Switch>
            <Route path="/carInspectionPlatform/:id/dashboard" component={CarInspectionPlatformDashboard} />
          
            
    
          <Route path="/carInspectionPlatform/:id/list/customerInfoList" component={this.getCustomerInfoSearch()} />
          <Route path="/carInspectionPlatform/:id/list/customerInfoCreateForm" component={this.getCustomerInfoCreateForm()} />
          <Route path="/carInspectionPlatform/:id/list/customerInfoUpdateForm" component={this.getCustomerInfoUpdateForm()} />
          

          <Route path="/carInspectionPlatform/:id/list/carReceivingServiceCompanyList" component={this.getCarReceivingServiceCompanySearch()} />
          <Route path="/carInspectionPlatform/:id/list/carReceivingServiceCompanyCreateForm" component={this.getCarReceivingServiceCompanyCreateForm()} />
          <Route path="/carInspectionPlatform/:id/list/carReceivingServiceCompanyUpdateForm" component={this.getCarReceivingServiceCompanyUpdateForm()} />
          

          <Route path="/carInspectionPlatform/:id/list/carInspectionServiceCompanyList" component={this.getCarInspectionServiceCompanySearch()} />
          <Route path="/carInspectionPlatform/:id/list/carInspectionServiceCompanyCreateForm" component={this.getCarInspectionServiceCompanyCreateForm()} />
          <Route path="/carInspectionPlatform/:id/list/carInspectionServiceCompanyUpdateForm" component={this.getCarInspectionServiceCompanyUpdateForm()} />
          

          <Route path="/carInspectionPlatform/:id/list/carRepairingServiceCompanyList" component={this.getCarRepairingServiceCompanySearch()} />
          <Route path="/carInspectionPlatform/:id/list/carRepairingServiceCompanyCreateForm" component={this.getCarRepairingServiceCompanyCreateForm()} />
          <Route path="/carInspectionPlatform/:id/list/carRepairingServiceCompanyUpdateForm" component={this.getCarRepairingServiceCompanyUpdateForm()} />
          

          <Route path="/carInspectionPlatform/:id/list/carInfoList" component={this.getCarInfoSearch()} />
          <Route path="/carInspectionPlatform/:id/list/carInfoCreateForm" component={this.getCarInfoCreateForm()} />
          <Route path="/carInspectionPlatform/:id/list/carInfoUpdateForm" component={this.getCarInfoUpdateForm()} />
          

          <Route path="/carInspectionPlatform/:id/list/carInspectionOrderList" component={this.getCarInspectionOrderSearch()} />
          <Route path="/carInspectionPlatform/:id/list/carInspectionOrderCreateForm" component={this.getCarInspectionOrderCreateForm()} />
          <Route path="/carInspectionPlatform/:id/list/carInspectionOrderUpdateForm" component={this.getCarInspectionOrderUpdateForm()} />
          
              
             
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
  carInspectionPlatform: state._carInspectionPlatform,
  ...state
}))(CarInspectionPlatformBizApp);



