import React from 'react'
import PropTypes from 'prop-types'
import { Layout, Menu, Icon, Avatar, Dropdown, Tag, message, Spin } from 'antd'
import DocumentTitle from 'react-document-title'
import { connect } from 'dva'
import { Link, Route, Redirect, Switch } from 'dva/router'
import moment from 'moment'
import groupBy from 'lodash/groupBy'
import { ContainerQuery } from 'react-container-query'
import classNames from 'classnames'
import styles from './Designer.app.less'


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

class DesignerBizApp extends React.PureComponent {
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
      return ['/designer/']
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
          <span>设计师</span>
        </span>}
      >

        <Menu.Item>
          <Link to={`/designer/${objectId}/list/designerMessageList`}>设计师信息</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/designer/${objectId}/list/projectList`}>项目</Link>
        </Menu.Item>
      </SubMenu>
    )
  }


  getDesignerMessageSearch = () => {
    const {DesignerMessageSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._designer.designerMessageList,
      count: state._designer.designerMessageCount,
      currentPage: state._designer.designerMessageCurrentPageNumber,
      searchFormParameters: state._designer.designerMessageSearchFormParameters,
      loading: state._designer.loading,
      owner: { type: '_designer', id: state._designer.id, listName: 'designerMessageList' }, // this is for model namespace and
    }))(DesignerMessageSearch)
  }
  getDesignerMessageCreateForm = () => {
   	const {DesignerMessageCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._designer.designerMessageList,
      count: state._designer.designerMessageCount,
      currentPage: state._designer.designerMessageCurrentPageNumber,
      searchFormParameters: state._designer.designerMessageSearchFormParameters,
      loading: state._designer.loading,
      owner: { type: '_designer', id: state._designer.id, listName: 'designerMessageList'}, // this is for model namespace and
    }))(DesignerMessageCreateForm)
  }
  
  getDesignerMessageUpdateForm = () => {
  	const {DesignerMessageUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._designer.selectedRows,
      currentUpdateIndex: state._designer.currentUpdateIndex,
      owner: { type: '_designer', id: state._designer.id, listName: 'designerMessageList' }, // this is for model namespace and
    }))(DesignerMessageUpdateForm)
  }

  getProjectSearch = () => {
    const {ProjectSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._designer.projectList,
      count: state._designer.projectCount,
      currentPage: state._designer.projectCurrentPageNumber,
      searchFormParameters: state._designer.projectSearchFormParameters,
      loading: state._designer.loading,
      owner: { type: '_designer', id: state._designer.id, listName: 'projectList' }, // this is for model namespace and
    }))(ProjectSearch)
  }
  getProjectCreateForm = () => {
   	const {ProjectCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._designer.projectList,
      count: state._designer.projectCount,
      currentPage: state._designer.projectCurrentPageNumber,
      searchFormParameters: state._designer.projectSearchFormParameters,
      loading: state._designer.loading,
      owner: { type: '_designer', id: state._designer.id, listName: 'projectList'}, // this is for model namespace and
    }))(ProjectCreateForm)
  }
  
  getProjectUpdateForm = () => {
  	const {ProjectUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._designer.selectedRows,
      currentUpdateIndex: state._designer.currentUpdateIndex,
      owner: { type: '_designer', id: state._designer.id, listName: 'projectList' }, // this is for model namespace and
    }))(ProjectUpdateForm)
  }

  getPageTitle = () => {
    // const { location } = this.props
    // const { pathname } = location
    const title = '环保装备方案管理系统'
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
    
     const {DesignerDashboard} = GlobalComponents
     const {DesignerEditDetail} = GlobalComponents
     const {DesignerViewDetail} = GlobalComponents
     
     
     
     
     // Don't show popup menu when it is been collapsed
     const menuProps = collapsed ? {} : {
       openKeys: this.state.openKeys,
     }
     const layout = (
       <Layout>
         <Sider
           trigger={null}
           collapsible
           collapsed={collapsed}
           breakpoint="md"
           onCollapse={()=>this.onCollapse(collapsed)}
           width={256}
           className={styles.sider}
         >
           <div className={styles.logo}>
             <img src="./scm.svg" alt="logo" onClick={this.toggle} />
             <Link to="/home"> <h1>设计师</h1></Link>
           </div>

           <Menu
             theme="dark"
             mode="inline"
             {...menuProps}
             onOpenChange={this.handleOpenChange}
             selectedKeys={this.getCurrentMenuSelectedKeys()}
             style={{ margin: '16px 0', width: '100%' }}
           >
           

             <Menu.Item >
               <Link to={`/designer/${this.props.designer.id}/dashboard`}><Icon type="dashboard" /><span>仪表板</span></Link>
             </Menu.Item>
             <Menu.Item >
               <Link to={`/designer/${this.props.designer.id}/editDetail`}><Icon type="edit" /><span>详情编辑</span></Link>
             </Menu.Item>
             <Menu.Item >
               <Link to={`/designer/${this.props.designer.id}/viewDetail`}><Icon type="eye-o" /><span>详情查看</span></Link>
             </Menu.Item>
             

             {this.getNavMenuItems(this.props.designer.id)}
             <Menu.Item >
               <Link to={"/home"}><Icon type="home" /><span>回到主页</span></Link>
             </Menu.Item>
           </Menu>
         </Sider>
         <Layout>
           <Content style={{ margin: '24px 24px 0', height: '100%' }}>
             <Switch>
               <Route path="/designer/:id/dashboard" component={DesignerDashboard} />
               <Route path="/designer/:id/editDetail" component={DesignerEditDetail} />
               <Route path="/designer/:id/viewDetail" component={DesignerViewDetail} />
               

               <Route path="/designer/:id/list/designerMessageList" component={this.getDesignerMessageSearch()} />
               <Route path="/designer/:id/list/designerMessageCreateForm" component={this.getDesignerMessageCreateForm()} />
               <Route path="/designer/:id/list/designerMessageUpdateForm" component={this.getDesignerMessageUpdateForm()} />

               <Route path="/designer/:id/list/projectList" component={this.getProjectSearch()} />
               <Route path="/designer/:id/list/projectCreateForm" component={this.getProjectCreateForm()} />
               <Route path="/designer/:id/list/projectUpdateForm" component={this.getProjectUpdateForm()} />
              
             </Switch>
           </Content>
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
  designer: state._designer,
  ...state,
}))(DesignerBizApp)



