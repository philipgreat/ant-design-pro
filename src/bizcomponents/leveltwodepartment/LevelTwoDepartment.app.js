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
import styles from './LevelTwoDepartment.app.less'


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

class LevelTwoDepartmentBizApp extends React.PureComponent {
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
      return ['/levelTwoDepartment/']
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
          <span>二级部门</span>
        </span>}
      >

        <Menu.Item>
          <Link to={`/levelTwoDepartment/${objectId}/list/levelThreeDepartmentList`}>三级部门</Link>
        </Menu.Item>
      </SubMenu>
    )
  }


  getLevelThreeDepartmentSearch = () => {
    const {LevelThreeDepartmentSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._levelTwoDepartment.levelThreeDepartmentList,
      count: state._levelTwoDepartment.levelThreeDepartmentCount,
      currentPage: state._levelTwoDepartment.levelThreeDepartmentCurrentPageNumber,
      searchFormParameters: state._levelTwoDepartment.levelThreeDepartmentSearchFormParameters,
      loading: state._levelTwoDepartment.loading,
      owner: { type: '_levelTwoDepartment', id: state._levelTwoDepartment.id, listName: 'levelThreeDepartmentList', ref:state._levelTwoDepartment, listDisplayName: '三级部门列表' }, // this is for model namespace and
    }))(LevelThreeDepartmentSearch)
  }
  getLevelThreeDepartmentCreateForm = () => {
   	const {LevelThreeDepartmentCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._levelTwoDepartment.levelThreeDepartmentList,
      count: state._levelTwoDepartment.levelThreeDepartmentCount,
      currentPage: state._levelTwoDepartment.levelThreeDepartmentCurrentPageNumber,
      searchFormParameters: state._levelTwoDepartment.levelThreeDepartmentSearchFormParameters,
      loading: state._levelTwoDepartment.loading,
      owner: { type: '_levelTwoDepartment', id: state._levelTwoDepartment.id, listName: 'levelThreeDepartmentList', ref:state._levelTwoDepartment, listDisplayName: '三级部门列表'}, // this is for model namespace and
    }))(LevelThreeDepartmentCreateForm)
  }
  
  getLevelThreeDepartmentUpdateForm = () => {
  	const {LevelThreeDepartmentUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._levelTwoDepartment.selectedRows,
      currentUpdateIndex: state._levelTwoDepartment.currentUpdateIndex,
      owner: { type: '_levelTwoDepartment', id: state._levelTwoDepartment.id, listName: 'levelThreeDepartmentList', ref:state._levelTwoDepartment, listDisplayName: '三级部门列表' }, // this is for model namespace and
    }))(LevelThreeDepartmentUpdateForm)
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
     const {LevelTwoDepartmentDashboard} = GlobalComponents
     const {LevelTwoDepartmentEditDetail} = GlobalComponents
     const {LevelTwoDepartmentViewDetail} = GlobalComponents
     
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
               <Link to={`/levelTwoDepartment/${this.props.levelTwoDepartment.id}/dashboard`}><Icon type="dashboard" /><span>仪表板</span></Link>
             </Menu.Item>
             

             {this.getNavMenuItems(this.props.levelTwoDepartment.id)}
             <Menu.Item >
               <Link to={"/home"}><Icon type="home" /><span>回到主页</span></Link>
             </Menu.Item>
           </Menu>
         </Sider>
         <Layout>
           <Content style={{ margin: '24px 24px 0', height: '100%' }}>
             <Switch>
             
               <Route path="/levelTwoDepartment/:id/dashboard" component={LevelTwoDepartmentDashboard} />
               
               <Route path="/levelTwoDepartment/:id/editDetail" component={LevelTwoDepartmentEditDetail} />
               <Route path="/levelTwoDepartment/:id/viewDetail" component={LevelTwoDepartmentViewDetail} /> 
               

               <Route path="/levelTwoDepartment/:id/list/levelThreeDepartmentList" component={this.getLevelThreeDepartmentSearch()} />
               <Route path="/levelTwoDepartment/:id/list/levelThreeDepartmentCreateForm" component={this.getLevelThreeDepartmentCreateForm()} />
               <Route path="/levelTwoDepartment/:id/list/levelThreeDepartmentUpdateForm" component={this.getLevelThreeDepartmentUpdateForm()} />
              
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
  levelTwoDepartment: state._levelTwoDepartment,
  ...state,
}))(LevelTwoDepartmentBizApp)



