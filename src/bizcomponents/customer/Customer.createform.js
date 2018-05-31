import React, { Component } from 'react'
import { AutoComplete, Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover,Switch } from 'antd'

import { connect } from 'dva'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
//import PictureEdit from '../../components/PictureEdit'
//import OSSPictureEdit from '../../components/PictureEdit'
import {ImageComponent} from '../../axios/tools'
import FooterToolbar from '../../components/FooterToolbar'
//import ImageUpload from '../../components/ImageUpload'
import styles from './Customer.createform.less'
import {mapBackToImageValues, mapFromImageValues} from '../../axios/tools'
import GlobalComponents from '../../custcomponents';
const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input
const fieldLabels = {
  id: 'ID',
  nickName: '昵称',
  avatarImg: '头像',
  secUser: 'SecUser',
  mobile: '手机号码',
  email: '电子邮件',
  qq: 'qq',
  weixinOpenid: '微信 Openid',
  weixinAppid: '微信 Appid',
  longitude: '经度',
  latitude: '纬度',
  experienceValue: '经验值',
  gameScore: '积分',
  vipLevel: 'Vip级别',
  gamePlatform: '游戏平台',
}
const testValues = {};
/*
const testValues = {
  nickName: '上海外滩杜月笙',
  mobile: '18080011234',
  email: '',
  qq: '1204377',
  weixinOpenid: 'wx123456789abcdefghijklmn',
  weixinAppid: 'wxapp12098410239840',
  longitude: '105.43096652520737',
  latitude: '29.631149610384504',
  experienceValue: '1360',
  gameScore: '144',
  secUserId: 'SU000001',
  vipLevelId: 'VL000001',
  gamePlatformId: 'GP000001',
}
*/
const imageURLPrefix = '//localhost:2090'


const imageKeys = [
  'avatarImg',
]


class CustomerCreateForm extends Component {
  state = {
    previewVisible: false,
    previewImage: '',
    convertedImagesValues: {},
  }

  componentDidMount() {
    // const { getFieldDecorator,setFieldsValue } = this.props.form
    const { setFieldsValue } = this.props.form
    //setFieldsValue(testValues)
      
    this.executeCandidateSecUserSearch("")
    
    
    this.executeCandidateVipLevelSearch("")
    
    
    this.executeCandidateGamePlatformSearch("")
    
 
    
    
    
  }
  shouldComponentUpdate() {
    return true
  }
  handlePreview = (file) => {
    console.log('preview file', file)
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    })
  }

  
  executeCandidateSecUserSearch = (filterKey) =>{

    const {CustomerService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = CustomerService.requestCandidateSecUser("secUser", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateSecUserList=>{
      this.setState({
        candidateSecUserList
      })

    })

  }	 
  handleCandidateSecUserSearch = (value) => {
    this.executeCandidateSecUserSearch(value)
  }

  executeCandidateVipLevelSearch = (filterKey) =>{

    const {CustomerService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = CustomerService.requestCandidateVipLevel("vipLevel", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateVipLevelList=>{
      this.setState({
        candidateVipLevelList
      })

    })

  }	 
  handleCandidateVipLevelSearch = (value) => {
    this.executeCandidateVipLevelSearch(value)
  }

  executeCandidateGamePlatformSearch = (filterKey) =>{

    const {CustomerService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = CustomerService.requestCandidateGamePlatform("gamePlatform", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateGamePlatformList=>{
      this.setState({
        candidateGamePlatformList
      })

    })

  }	 
  handleCandidateGamePlatformSearch = (value) => {
    this.executeCandidateGamePlatformSearch(value)
  }
 



  handleChange = (event, source) => {
    console.log('get file list from change in update change:', source)

    const { fileList } = event
    const { convertedImagesValues } = this.state

    convertedImagesValues[source] = fileList
    this.setState({ convertedImagesValues })
    console.log('/get file list from change in update change:', source)
  }


  render() {
    const { form, dispatch, submitting } = this.props
    const { convertedImagesValues } = this.state

    const { getFieldDecorator, validateFieldsAndScroll, getFieldsError } = form
    const submitCreateForm = () => {
      validateFieldsAndScroll((error, values) => {
        if (error) {
          console.log('code go here', error)
          return
        }

        const { owner } = this.props
        const imagesValues = mapBackToImageValues(convertedImagesValues)

        const parameters = { ...values, ...imagesValues }
        dispatch({
          type: `${owner.type}/addCustomer`,
          payload: { id: owner.id, type: 'customer', parameters },
        })
      })
    }
    const submitCreateFormAndContinue = () => {
      validateFieldsAndScroll((error, values) => {
        if (error) {
          console.log('code go here', error)
          return
        }
        
        const { owner } = this.props
        const imagesValues = mapBackToImageValues(convertedImagesValues)
        
        const parameters = { ...values, ...imagesValues }
        dispatch({
          type: `${owner.type}/addCustomer`,
          payload: { id: owner.id, type: 'customer', parameters, continueNext: true },
        })
      })
    }
    
    const goback = () => {
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/goback`,
        payload: { id: owner.id, type: 'customer',listName:'客户列表' },
      })
    }
    const errors = getFieldsError()
    const getErrorInfo = () => {
      const errorCount = Object.keys(errors).filter(key => errors[key]).length
      if (!errors || errorCount === 0) {
        return null
      }
      // eslint-disable-next-line no-unused-vars
      const scrollToField = (fieldKey) => {
        const labelNode = document.querySelector('label[for="${fieldKey}"]')
        if (labelNode) {
          labelNode.scrollIntoView(true)
        }
      }
      const errorList = Object.keys(errors).map((key) => {
        if (!errors[key]) {
          return null
        }
        return (
          <li key={key} className={styles.errorListItem} onClick={() => scrollToField(key)}>
            <Icon type="cross-circle-o" className={styles.errorIcon} />
            <div className={styles.errorMessage}>{errors[key][0]}</div>
            <div className={styles.errorField}>{fieldLabels[key]}</div>
          </li>
        )
      })
      return (
        <span className={styles.errorIcon}>
          <Popover
            title="表单校验信息"
            content={errorList}
            overlayClassName={styles.errorPopover}
            trigger="click"
            getPopupContainer={trigger => trigger.parentNode}
          >
            <Icon type="exclamation-circle" />
          </Popover>
          {errorCount}
        </span>
      )
    }
    

    
    const {candidateSecUserList} = this.state
    if(!candidateSecUserList){
      return (<div>等等</div>)
    }
    if(!candidateSecUserList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateVipLevelList} = this.state
    if(!candidateVipLevelList){
      return (<div>等等</div>)
    }
    if(!candidateVipLevelList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateGamePlatformList} = this.state
    if(!candidateGamePlatformList){
      return (<div>等等</div>)
    }
    if(!candidateGamePlatformList.candidates){
      return (<div>等等</div>)
    }   
    
    
    
    const tryinit  = (fieldName) => {
      const { owner } = this.props
      const { referenceName } = owner
      if(referenceName!=fieldName){
        return null
      }
      return owner.id
    }
    
    const availableForEdit= (fieldName) =>{
      const { owner } = this.props
      const { referenceName } = owner
      if(referenceName!=fieldName){
        return true
      }
      return false
    
    }
    const formItemLayout = {
      labelCol: { span: 10 },
      wrapperCol: { span: 14 },
    }
    const switchFormItemLayout = {
      labelCol: { span: 14 },
      wrapperCol: { span: 4 },
    }
    return (
      <PageHeaderLayout
        title="新建一个客户"
        content="新建一个客户"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.nickName} {...formItemLayout}>
                  {getFieldDecorator('nickName', {
                    rules: [{ required: true, message: '请输入昵称' }],
                  })(
                    <Input placeholder="请输入昵称" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.mobile} {...formItemLayout}>
                  {getFieldDecorator('mobile', {
                    rules: [{ required: true, message: '请输入手机号码' }],
                  })(
                    <Input placeholder="请输入手机号码" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.email} {...formItemLayout}>
                  {getFieldDecorator('email', {
                    rules: [{ required: false, message: '请输入电子邮件' }],
                  })(
                    <Input placeholder="请输入电子邮件" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.qq} {...formItemLayout}>
                  {getFieldDecorator('qq', {
                    rules: [{ required: true, message: '请输入qq' }],
                  })(
                    <Input placeholder="请输入qq" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.weixinOpenid} {...formItemLayout}>
                  {getFieldDecorator('weixinOpenid', {
                    rules: [{ required: true, message: '请输入微信 Openid' }],
                  })(
                    <Input placeholder="请输入微信 Openid" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.weixinAppid} {...formItemLayout}>
                  {getFieldDecorator('weixinAppid', {
                    rules: [{ required: true, message: '请输入微信 Appid' }],
                  })(
                    <Input placeholder="请输入微信 Appid" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.longitude} {...formItemLayout}>
                  {getFieldDecorator('longitude', {
                    rules: [{ required: true, message: '请输入经度' }],
                  })(
                    <Input placeholder="请输入经度" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.latitude} {...formItemLayout}>
                  {getFieldDecorator('latitude', {
                    rules: [{ required: true, message: '请输入纬度' }],
                  })(
                    <Input placeholder="请输入纬度" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.experienceValue} {...formItemLayout}>
                  {getFieldDecorator('experienceValue', {
                    rules: [{ required: true, message: '请输入经验值' }],
                  })(
                    <Input placeholder="请输入经验值" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.gameScore} {...formItemLayout}>
                  {getFieldDecorator('gameScore', {
                    rules: [{ required: true, message: '请输入积分' }],
                  })(
                    <Input placeholder="请输入积分" />
                  )}
                </Form.Item>
              </Col>

            </Row>
          </Form>
        </Card>



       
        







        <Card title="附件" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>

              <Col lg={6} md={12} sm={24}>
                <ImageComponent
                  buttonTitle="头像"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'avatarImg')}
                  fileList={convertedImagesValues.avatarImg}
                />
              </Col>

            </Row>
          </Form>
        </Card>



        <Card title="关联" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.secUser} {...formItemLayout}>
                  {getFieldDecorator('secUserId', {
                  	initialValue: tryinit('secUser'),
                    rules: [{ required: true, message: '请输入SecUser' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidateSecUserList.candidates}
                    
                    
                    onSearch={this.handleCandidateSecUserSearch}
                    placeholder="请输入SecUser"
                    
                    disabled={!availableForEdit('secUser')}
                  >
                  {candidateSecUserList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.login}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.vipLevel} {...formItemLayout}>
                  {getFieldDecorator('vipLevelId', {
                  	initialValue: tryinit('vipLevel'),
                    rules: [{ required: true, message: '请输入Vip级别' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidateVipLevelList.candidates}
                    
                    
                    onSearch={this.handleCandidateVipLevelSearch}
                    placeholder="请输入Vip级别"
                    
                    disabled={!availableForEdit('vipLevel')}
                  >
                  {candidateVipLevelList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.name}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.gamePlatform} {...formItemLayout}>
                  {getFieldDecorator('gamePlatformId', {
                  	initialValue: tryinit('gamePlatform'),
                    rules: [{ required: true, message: '请输入游戏平台' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidateGamePlatformList.candidates}
                    
                    
                    onSearch={this.handleCandidateGamePlatformSearch}
                    placeholder="请输入游戏平台"
                    
                    disabled={!availableForEdit('gamePlatform')}
                  >
                  {candidateGamePlatformList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.name}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

            </Row>
          </Form>  
        </Card>

        <FooterToolbar>
          {getErrorInfo()}
          <Button type="primary" onClick={submitCreateForm} loading={submitting} htmlType="submit">
            提交
          </Button>
          <Button type="primary" onClick={submitCreateFormAndContinue} loading={submitting}>
            提交并建下一个
          </Button>
          <Button type="danger" onClick={goback} loading={submitting}>
            放弃
          </Button>
        </FooterToolbar>
      </PageHeaderLayout>
    )
  }
}

export default connect(state => ({
  collapsed: state.global.collapsed,
}))(Form.create()(CustomerCreateForm))




