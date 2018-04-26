import React from 'react'
import PropTypes from 'prop-types'
import {
  Layout,
  Menu,
  Icon,
  Avatar,
  Dropdown,
  Tag,
  message,
  Spin,
  Breadcrumb,
  AutoComplete,
  Input,
} from 'antd'
import DocumentTitle from 'react-document-title'
import { connect } from 'dva'
import { Link, Route, Redirect, Switch } from 'dva/router'
import moment from 'moment'
import groupBy from 'lodash/groupBy'
import { ContainerQuery } from 'react-container-query'
import classNames from 'classnames'
import styles from './InterviewType.app.less'


import HeaderSearch from '../../components/HeaderSearch';
import NoticeIcon from '../../components/NoticeIcon';
import GlobalFooter from '../../components/GlobalFooter';


import GlobalComponents from '../../custcomponents';

const { Header, Sider, Content } = Layout
const { SubMenu } = Menu

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
}

class InterviewTypeBizApp extends React.PureComponent {
  constructor(props) {
    super(props)
    // 把一级 Layout 的 children 作为菜单项
    // this.menus = getNavData().reduce((arr, current) => arr.concat(current.children), [])
    this.state = {
      openKeys: this.getDefaultCollapsedSubMenus(props),
    }
  }

  componentDidMount() {}
  componentWillUnmount() {
    clearTimeout(this.resizeTimeout)
  }
  onCollapse = (collapsed) => {
    this.props.dispatch({
      type: 'global/changeLayoutCollapsed',
      payload: collapsed,
    })
  }

  getDefaultCollapsedSubMenus = (props) => {
    const currentMenuSelectedKeys = [...this.getCurrentMenuSelectedKeys(props)]
    currentMenuSelectedKeys.splice(-1, 1)
    if (currentMenuSelectedKeys.length === 0) {
      return ['/interviewType/']
    }
    return currentMenuSelectedKeys
  }
  getCurrentMenuSelectedKeys = (props) => {
    const { location: { pathname } } = props || this.props
    const keys = pathname.split('/').slice(1)
    if (keys.length === 1 && keys[0] === '') {
      return [this.menus[0].key]
    }
    return keys
  }
  getNavMenuItems = (objectId) => {
    return (
      <SubMenu title={
        <span>
          <Icon type="profile" />
          <span>面试类型</span>
        </span>}
      >

        <Menu.Item>
          <Link to={`/interviewType/${objectId}/list/employeeInterviewList`}>员工面试</Link>
        </Menu.Item>
      </SubMenu>
    )
  }


  getEmployeeInterviewSearch = () => {
    const {EmployeeInterviewSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._interviewType.employeeInterviewList,
      count: state._interviewType.employeeInterviewCount,
      currentPage: state._interviewType.employeeInterviewCurrentPageNumber,
      searchFormParameters: state._interviewType.employeeInterviewSearchFormParameters,
      loading: state._interviewType.loading,
      owner: { type: '_interviewType', id: state._interviewType.id, listName: 'employeeInterviewList', ref:state._interviewType, listDisplayName: '员工面试列表' }, // this is for model namespace and
    }))(EmployeeInterviewSearch)
  }
  getEmployeeInterviewCreateForm = () => {
   	const {EmployeeInterviewCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._interviewType.employeeInterviewList,
      count: state._interviewType.employeeInterviewCount,
      currentPage: state._interviewType.employeeInterviewCurrentPageNumber,
      searchFormParameters: state._interviewType.employeeInterviewSearchFormParameters,
      loading: state._interviewType.loading,
      owner: { type: '_interviewType', id: state._interviewType.id, listName: 'employeeInterviewList', ref:state._interviewType, listDisplayName: '员工面试列表'}, // this is for model namespace and
    }))(EmployeeInterviewCreateForm)
  }
  
  getEmployeeInterviewUpdateForm = () => {
  	const {EmployeeInterviewUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._interviewType.selectedRows,
      currentUpdateIndex: state._interviewType.currentUpdateIndex,
      owner: { type: '_interviewType', id: state._interviewType.id, listName: 'employeeInterviewList', ref:state._interviewType, listDisplayName: '员工面试列表' }, // this is for model namespace and
    }))(EmployeeInterviewUpdateForm)
  }

  getPageTitle = () => {
    // const { location } = this.props
    // const { pathname } = location
    const title = '全国装修加速器运营系统'
    return title
  }
 
  handleOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1)
    this.setState({
      openKeys: latestOpenKey ? [latestOpenKey] : [],
    })
  }
   toggle = () => {
     const { collapsed } = this.props
     this.props.dispatch({
       type: 'global/changeLayoutCollapsed',
       payload: !collapsed,
     })
   }

   render() {
     // const { collapsed, fetchingNotices,loading } = this.props
     const { collapsed } = this.props
     const { breadcrumb }  = this.props
     const {InterviewTypeDashboard} = GlobalComponents
     const {InterviewTypeEditDetail} = GlobalComponents
     const {InterviewTypeViewDetail} = GlobalComponents
     
     const currentBreadcrumb = breadcrumb[breadcrumb.currentApp]
     
     
     // Don't show popup menu when it is been collapsed
     const menuProps = collapsed ? {} : {
       openKeys: this.state.openKeys,
     }
     const layout = (
     <Layout>
        <Header>
          
          <div className={styles.left}>
          <img
            src="./scm.svg"
            alt="logo"
            onClick={this.toggle}
            className={styles.logo}
          />
          {currentBreadcrumb.map((item)=>{
            return (<a href={`#${item.link}`} className={styles.breadcrumbLink}> &gt;{item.name}</a>)

          })}
         </div>
          <div className={styles.right}>
          
          <AutoComplete
            className="certain-category-search"
            placeholder="请输入名称"
            optionLabelProp="value"
            
          >
            <Input
              suffix={<Icon type="search" className="certain-category-icon" />}
            />
          </AutoComplete> </div>
        </Header>
       <Layout>
         <Sider
           trigger={null}
           collapsible
           collapsed={collapsed}
           breakpoint="md"
           onCollapse={()=>this.onCollapse(collapsed)}
           collapsedWidth={56}
           className={styles.sider}
         >
           

           <Menu
             theme="dark"
             mode="inline"
             {...menuProps}
             onOpenChange={this.handleOpenChange}
             selectedKeys={this.getCurrentMenuSelectedKeys()}
             style={{ margin: '16px 0', width: '100%' }}
           >
           

             <Menu.Item >
               <Link to={`/interviewType/${this.props.interviewType.id}/dashboard`}><Icon type="dashboard" /><span>仪表板</span></Link>
             </Menu.Item>
             

             {this.getNavMenuItems(this.props.interviewType.id)}
             <Menu.Item >
               <Link to={"/home"}><Icon type="home" /><span>回到主页</span></Link>
             </Menu.Item>
           </Menu>
         </Sider>
         <Layout>
           <Content style={{ margin: '24px 24px 0', height: '100%' }}>
             <Switch>
             
               <Route path="/interviewType/:id/dashboard" component={InterviewTypeDashboard} />
               
               <Route path="/interviewType/:id/editDetail" component={InterviewTypeEditDetail} />
               <Route path="/interviewType/:id/viewDetail" component={InterviewTypeViewDetail} /> 
               

               <Route path="/interviewType/:id/list/employeeInterviewList" component={this.getEmployeeInterviewSearch()} />
               <Route path="/interviewType/:id/list/employeeInterviewCreateForm" component={this.getEmployeeInterviewCreateForm()} />
               <Route path="/interviewType/:id/list/employeeInterviewUpdateForm" component={this.getEmployeeInterviewUpdateForm()} />
              
             </Switch>
           </Content>
          </Layout>
        </Layout>
      </Layout>
     )
     return (
       <DocumentTitle title={this.getPageTitle()}>
         <ContainerQuery query={query}>
           {params => <div className={classNames(params)}>{layout}</div>}
         </ContainerQuery>
       </DocumentTitle>
     )
   }
}

export default connect(state => ({
  collapsed: state.global.collapsed,
  fetchingNotices: state.global.fetchingNotices,
  notices: state.global.notices,
  interviewType: state._interviewType,
  ...state,
}))(InterviewTypeBizApp)



