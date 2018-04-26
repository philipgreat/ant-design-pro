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
import styles from './GenericForm.app.less'


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

class GenericFormBizApp extends React.PureComponent {
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
      return ['/genericForm/']
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
          <span>通用的形式</span>
        </span>}
      >

        <Menu.Item>
          <Link to={`/genericForm/${objectId}/list/formMessageList`}>表单信息</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/genericForm/${objectId}/list/formFieldMessageList`}>表单字段的信息</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/genericForm/${objectId}/list/formFieldList`}>表单字段</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/genericForm/${objectId}/list/formActionList`}>表单动作</Link>
        </Menu.Item>
      </SubMenu>
    )
  }


  getFormMessageSearch = () => {
    const {FormMessageSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._genericForm.formMessageList,
      count: state._genericForm.formMessageCount,
      currentPage: state._genericForm.formMessageCurrentPageNumber,
      searchFormParameters: state._genericForm.formMessageSearchFormParameters,
      loading: state._genericForm.loading,
      owner: { type: '_genericForm', id: state._genericForm.id, listName: 'formMessageList', ref:state._genericForm, listDisplayName: '表单信息列表' }, // this is for model namespace and
    }))(FormMessageSearch)
  }
  getFormMessageCreateForm = () => {
   	const {FormMessageCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._genericForm.formMessageList,
      count: state._genericForm.formMessageCount,
      currentPage: state._genericForm.formMessageCurrentPageNumber,
      searchFormParameters: state._genericForm.formMessageSearchFormParameters,
      loading: state._genericForm.loading,
      owner: { type: '_genericForm', id: state._genericForm.id, listName: 'formMessageList', ref:state._genericForm, listDisplayName: '表单信息列表'}, // this is for model namespace and
    }))(FormMessageCreateForm)
  }
  
  getFormMessageUpdateForm = () => {
  	const {FormMessageUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._genericForm.selectedRows,
      currentUpdateIndex: state._genericForm.currentUpdateIndex,
      owner: { type: '_genericForm', id: state._genericForm.id, listName: 'formMessageList', ref:state._genericForm, listDisplayName: '表单信息列表' }, // this is for model namespace and
    }))(FormMessageUpdateForm)
  }

  getFormFieldMessageSearch = () => {
    const {FormFieldMessageSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._genericForm.formFieldMessageList,
      count: state._genericForm.formFieldMessageCount,
      currentPage: state._genericForm.formFieldMessageCurrentPageNumber,
      searchFormParameters: state._genericForm.formFieldMessageSearchFormParameters,
      loading: state._genericForm.loading,
      owner: { type: '_genericForm', id: state._genericForm.id, listName: 'formFieldMessageList', ref:state._genericForm, listDisplayName: '表单字段的信息列表' }, // this is for model namespace and
    }))(FormFieldMessageSearch)
  }
  getFormFieldMessageCreateForm = () => {
   	const {FormFieldMessageCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._genericForm.formFieldMessageList,
      count: state._genericForm.formFieldMessageCount,
      currentPage: state._genericForm.formFieldMessageCurrentPageNumber,
      searchFormParameters: state._genericForm.formFieldMessageSearchFormParameters,
      loading: state._genericForm.loading,
      owner: { type: '_genericForm', id: state._genericForm.id, listName: 'formFieldMessageList', ref:state._genericForm, listDisplayName: '表单字段的信息列表'}, // this is for model namespace and
    }))(FormFieldMessageCreateForm)
  }
  
  getFormFieldMessageUpdateForm = () => {
  	const {FormFieldMessageUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._genericForm.selectedRows,
      currentUpdateIndex: state._genericForm.currentUpdateIndex,
      owner: { type: '_genericForm', id: state._genericForm.id, listName: 'formFieldMessageList', ref:state._genericForm, listDisplayName: '表单字段的信息列表' }, // this is for model namespace and
    }))(FormFieldMessageUpdateForm)
  }

  getFormFieldSearch = () => {
    const {FormFieldSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._genericForm.formFieldList,
      count: state._genericForm.formFieldCount,
      currentPage: state._genericForm.formFieldCurrentPageNumber,
      searchFormParameters: state._genericForm.formFieldSearchFormParameters,
      loading: state._genericForm.loading,
      owner: { type: '_genericForm', id: state._genericForm.id, listName: 'formFieldList', ref:state._genericForm, listDisplayName: '表单字段列表' }, // this is for model namespace and
    }))(FormFieldSearch)
  }
  getFormFieldCreateForm = () => {
   	const {FormFieldCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._genericForm.formFieldList,
      count: state._genericForm.formFieldCount,
      currentPage: state._genericForm.formFieldCurrentPageNumber,
      searchFormParameters: state._genericForm.formFieldSearchFormParameters,
      loading: state._genericForm.loading,
      owner: { type: '_genericForm', id: state._genericForm.id, listName: 'formFieldList', ref:state._genericForm, listDisplayName: '表单字段列表'}, // this is for model namespace and
    }))(FormFieldCreateForm)
  }
  
  getFormFieldUpdateForm = () => {
  	const {FormFieldUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._genericForm.selectedRows,
      currentUpdateIndex: state._genericForm.currentUpdateIndex,
      owner: { type: '_genericForm', id: state._genericForm.id, listName: 'formFieldList', ref:state._genericForm, listDisplayName: '表单字段列表' }, // this is for model namespace and
    }))(FormFieldUpdateForm)
  }

  getFormActionSearch = () => {
    const {FormActionSearch} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._genericForm.formActionList,
      count: state._genericForm.formActionCount,
      currentPage: state._genericForm.formActionCurrentPageNumber,
      searchFormParameters: state._genericForm.formActionSearchFormParameters,
      loading: state._genericForm.loading,
      owner: { type: '_genericForm', id: state._genericForm.id, listName: 'formActionList', ref:state._genericForm, listDisplayName: '表单动作列表' }, // this is for model namespace and
    }))(FormActionSearch)
  }
  getFormActionCreateForm = () => {
   	const {FormActionCreateForm} = GlobalComponents;
    return connect(state => ({
      rule: state.rule,
      data: state._genericForm.formActionList,
      count: state._genericForm.formActionCount,
      currentPage: state._genericForm.formActionCurrentPageNumber,
      searchFormParameters: state._genericForm.formActionSearchFormParameters,
      loading: state._genericForm.loading,
      owner: { type: '_genericForm', id: state._genericForm.id, listName: 'formActionList', ref:state._genericForm, listDisplayName: '表单动作列表'}, // this is for model namespace and
    }))(FormActionCreateForm)
  }
  
  getFormActionUpdateForm = () => {
  	const {FormActionUpdateForm} = GlobalComponents;
    return connect(state => ({
      selectedRows: state._genericForm.selectedRows,
      currentUpdateIndex: state._genericForm.currentUpdateIndex,
      owner: { type: '_genericForm', id: state._genericForm.id, listName: 'formActionList', ref:state._genericForm, listDisplayName: '表单动作列表' }, // this is for model namespace and
    }))(FormActionUpdateForm)
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
     const {GenericFormDashboard} = GlobalComponents
     const {GenericFormEditDetail} = GlobalComponents
     const {GenericFormViewDetail} = GlobalComponents
     
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
               <Link to={`/genericForm/${this.props.genericForm.id}/dashboard`}><Icon type="dashboard" /><span>仪表板</span></Link>
             </Menu.Item>
             

             {this.getNavMenuItems(this.props.genericForm.id)}
             <Menu.Item >
               <Link to={"/home"}><Icon type="home" /><span>回到主页</span></Link>
             </Menu.Item>
           </Menu>
         </Sider>
         <Layout>
           <Content style={{ margin: '24px 24px 0', height: '100%' }}>
             <Switch>
             
               <Route path="/genericForm/:id/dashboard" component={GenericFormDashboard} />
               
               <Route path="/genericForm/:id/editDetail" component={GenericFormEditDetail} />
               <Route path="/genericForm/:id/viewDetail" component={GenericFormViewDetail} /> 
               

               <Route path="/genericForm/:id/list/formMessageList" component={this.getFormMessageSearch()} />
               <Route path="/genericForm/:id/list/formMessageCreateForm" component={this.getFormMessageCreateForm()} />
               <Route path="/genericForm/:id/list/formMessageUpdateForm" component={this.getFormMessageUpdateForm()} />

               <Route path="/genericForm/:id/list/formFieldMessageList" component={this.getFormFieldMessageSearch()} />
               <Route path="/genericForm/:id/list/formFieldMessageCreateForm" component={this.getFormFieldMessageCreateForm()} />
               <Route path="/genericForm/:id/list/formFieldMessageUpdateForm" component={this.getFormFieldMessageUpdateForm()} />

               <Route path="/genericForm/:id/list/formFieldList" component={this.getFormFieldSearch()} />
               <Route path="/genericForm/:id/list/formFieldCreateForm" component={this.getFormFieldCreateForm()} />
               <Route path="/genericForm/:id/list/formFieldUpdateForm" component={this.getFormFieldUpdateForm()} />

               <Route path="/genericForm/:id/list/formActionList" component={this.getFormActionSearch()} />
               <Route path="/genericForm/:id/list/formActionCreateForm" component={this.getFormActionCreateForm()} />
               <Route path="/genericForm/:id/list/formActionUpdateForm" component={this.getFormActionUpdateForm()} />
              
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
  genericForm: state._genericForm,
  ...state,
}))(GenericFormBizApp)



