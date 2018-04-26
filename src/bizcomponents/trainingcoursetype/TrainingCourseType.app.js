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
import styles from './TrainingCourseType.app.less'


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

class TrainingCourseTypeBizApp extends React.PureComponent {
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
      return ['/trainingCourseType/']
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
          <span>培训课程类型</span>
        </span>}
      >

        <Menu.Item>
          <Link to={`/trainingCourseType/${objectId}/list/companyTrainingList`}>公司培训</Link>
        </Menu.Item>
      </SubMenu>
    )
  }


  getCompanyTrainingSearch = () => {
    const {CompanyTrainingSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._trainingCourseType.companyTrainingList,
      count: state._trainingCourseType.companyTrainingCount,
      currentPage: state._trainingCourseType.companyTrainingCurrentPageNumber,
      searchFormParameters: state._trainingCourseType.companyTrainingSearchFormParameters,
      loading: state._trainingCourseType.loading,
      owner: { type: '_trainingCourseType', id: state._trainingCourseType.id, listName: 'companyTrainingList', ref:state._trainingCourseType, listDisplayName: '公司培训列表' }, // this is for model namespace and
    }))(CompanyTrainingSearch)
  }
  getCompanyTrainingCreateForm = () => {
   	const {CompanyTrainingCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._trainingCourseType.companyTrainingList,
      count: state._trainingCourseType.companyTrainingCount,
      currentPage: state._trainingCourseType.companyTrainingCurrentPageNumber,
      searchFormParameters: state._trainingCourseType.companyTrainingSearchFormParameters,
      loading: state._trainingCourseType.loading,
      owner: { type: '_trainingCourseType', id: state._trainingCourseType.id, listName: 'companyTrainingList', ref:state._trainingCourseType, listDisplayName: '公司培训列表'}, // this is for model namespace and
    }))(CompanyTrainingCreateForm)
  }
  
  getCompanyTrainingUpdateForm = () => {
  	const {CompanyTrainingUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._trainingCourseType.selectedRows,
      currentUpdateIndex: state._trainingCourseType.currentUpdateIndex,
      owner: { type: '_trainingCourseType', id: state._trainingCourseType.id, listName: 'companyTrainingList', ref:state._trainingCourseType, listDisplayName: '公司培训列表' }, // this is for model namespace and
    }))(CompanyTrainingUpdateForm)
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
     const {TrainingCourseTypeDashboard} = GlobalComponents
     const {TrainingCourseTypeEditDetail} = GlobalComponents
     const {TrainingCourseTypeViewDetail} = GlobalComponents
     
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
               <Link to={`/trainingCourseType/${this.props.trainingCourseType.id}/dashboard`}><Icon type="dashboard" /><span>仪表板</span></Link>
             </Menu.Item>
             

             {this.getNavMenuItems(this.props.trainingCourseType.id)}
             <Menu.Item >
               <Link to={"/home"}><Icon type="home" /><span>回到主页</span></Link>
             </Menu.Item>
           </Menu>
         </Sider>
         <Layout>
           <Content style={{ margin: '24px 24px 0', height: '100%' }}>
             <Switch>
             
               <Route path="/trainingCourseType/:id/dashboard" component={TrainingCourseTypeDashboard} />
               
               <Route path="/trainingCourseType/:id/editDetail" component={TrainingCourseTypeEditDetail} />
               <Route path="/trainingCourseType/:id/viewDetail" component={TrainingCourseTypeViewDetail} /> 
               

               <Route path="/trainingCourseType/:id/list/companyTrainingList" component={this.getCompanyTrainingSearch()} />
               <Route path="/trainingCourseType/:id/list/companyTrainingCreateForm" component={this.getCompanyTrainingCreateForm()} />
               <Route path="/trainingCourseType/:id/list/companyTrainingUpdateForm" component={this.getCompanyTrainingUpdateForm()} />
              
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
  trainingCourseType: state._trainingCourseType,
  ...state,
}))(TrainingCourseTypeBizApp)



