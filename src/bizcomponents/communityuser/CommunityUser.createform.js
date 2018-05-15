import React, { Component } from 'react'
import { AutoComplete, Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover,Switch } from 'antd'

import { connect } from 'dva'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
//import PictureEdit from '../../components/PictureEdit'
//import OSSPictureEdit from '../../components/PictureEdit'
import {ImageComponent} from '../../axios/tools'
import FooterToolbar from '../../components/FooterToolbar'
//import ImageUpload from '../../components/ImageUpload'
import styles from './CommunityUser.createform.less'
import {mapBackToImageValues, mapFromImageValues} from '../../axios/tools'
import GlobalComponents from '../../custcomponents';
const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input
const fieldLabels = {
  id: '序号',
  mobile: '手机',
  nickName: '昵称',
  gender: '性别',
  userType: '用户类型',
  avatar: '头像',
  birthday: '生日',
  experiencePoint: '成长值',
  bonusPoint: '积分',
  city: '城市',
  status: '状态',
  hideInfo: '隐藏的信息',
  administrator: '管理员',
  community: '社区',
  experiencePointLimit: '点经验限制',
  experiencePointRemain: '经验点仍',
  experiencePointLastDate: '经验点过去的日子',
}
const testValues = {};
/*
const testValues = {
  mobile: '13677778888',
  nickName: '喀拉',
  gender: '男',
  userType: '患者',
  birthday: '2037-04-04',
  experiencePoint: '7402',
  bonusPoint: '900714',
  city: '北京',
  status: '迎接更光明的明天',
  experiencePointLimit: '200',
  experiencePointRemain: '200',
  experiencePointLastDate: '2027-05-29',
  communityId: 'C000001',
}
*/
const imageURLPrefix = '//localhost:2090'


const imageKeys = [
  'avatar',
]


class CommunityUserCreateForm extends Component {
  state = {
    previewVisible: false,
    previewImage: '',
    convertedImagesValues: {},
  }

  componentDidMount() {
    // const { getFieldDecorator,setFieldsValue } = this.props.form
    const { setFieldsValue } = this.props.form
    //setFieldsValue(testValues)
      
    this.executeCandidateCommunitySearch("")
    
 
    
    
    
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

  
  executeCandidateCommunitySearch = (filterKey) =>{

    const {CommunityUserService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = CommunityUserService.requestCandidateCommunity("community", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateCommunityList=>{
      this.setState({
        candidateCommunityList
      })

    })

  }	 
  handleCandidateCommunitySearch = (value) => {
    this.executeCandidateCommunitySearch(value)
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
          type: `${owner.type}/addCommunityUser`,
          payload: { id: owner.id, type: 'communityUser', parameters },
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
          type: `${owner.type}/addCommunityUser`,
          payload: { id: owner.id, type: 'communityUser', parameters, continueNext: true },
        })
      })
    }
    
    const goback = () => {
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/goback`,
        payload: { id: owner.id, type: 'communityUser',listName:'社区用户列表' },
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
    

    
    const {candidateCommunityList} = this.state
    if(!candidateCommunityList){
      return (<div>等等</div>)
    }
    if(!candidateCommunityList.candidates){
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
        title="新建一个社区用户"
        content="新建一个社区用户"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.mobile} {...formItemLayout}>
                  {getFieldDecorator('mobile', {
                    rules: [{ required: true, message: '请输入手机' }],
                  })(
                    <Input placeholder="请输入手机" />
                  )}
                </Form.Item>
              </Col>

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
                <Form.Item label={fieldLabels.gender} {...formItemLayout}>
                  {getFieldDecorator('gender', {
                    rules: [{ required: true, message: '请输入性别' }],
                  })(
                    <Input placeholder="请输入性别" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.userType} {...formItemLayout}>
                  {getFieldDecorator('userType', {
                    rules: [{ required: true, message: '请输入用户类型' }],
                  })(
                    <Input placeholder="请输入用户类型" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.birthday} {...formItemLayout}>
                  {getFieldDecorator('birthday', {
                    rules: [{ required: true, message: '请输入生日' }],
                  })(
                    <DatePicker format="YYYY-MM-DD" placeholder="请输入生日" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.experiencePoint} {...formItemLayout}>
                  {getFieldDecorator('experiencePoint', {
                    rules: [{ required: true, message: '请输入成长值' }],
                  })(
                    <Input placeholder="请输入成长值" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.bonusPoint} {...formItemLayout}>
                  {getFieldDecorator('bonusPoint', {
                    rules: [{ required: true, message: '请输入积分' }],
                  })(
                    <Input placeholder="请输入积分" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.city} {...formItemLayout}>
                  {getFieldDecorator('city', {
                    rules: [{ required: true, message: '请输入城市' }],
                  })(
                    <Input placeholder="请输入城市" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.status} {...formItemLayout}>
                  {getFieldDecorator('status', {
                    rules: [{ required: true, message: '请输入状态' }],
                  })(
                    <Input placeholder="请输入状态" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.experiencePointLimit} {...formItemLayout}>
                  {getFieldDecorator('experiencePointLimit', {
                    rules: [{ required: true, message: '请输入点经验限制' }],
                  })(
                    <Input placeholder="请输入点经验限制" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.experiencePointRemain} {...formItemLayout}>
                  {getFieldDecorator('experiencePointRemain', {
                    rules: [{ required: true, message: '请输入经验点仍' }],
                  })(
                    <Input placeholder="请输入经验点仍" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.experiencePointLastDate} {...formItemLayout}>
                  {getFieldDecorator('experiencePointLastDate', {
                    rules: [{ required: true, message: '请输入经验点过去的日子' }],
                  })(
                    <DatePicker format="YYYY-MM-DD" placeholder="请输入经验点过去的日子" />
                  )}
                </Form.Item>
              </Col>

            </Row>
          </Form>
        </Card>



        
        <Card title="设置" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>
            

              <Col lg={8} md={12} sm={24}>
                <Form.Item label={fieldLabels.hideInfo}  {...switchFormItemLayout}>
                  {getFieldDecorator('hideInfo', {
                    initialValue: false,
                    rules: [{ required: true, message: '请输入隐藏的信息' }],
                    valuePropName: 'checked'
                  })(
                    <Switch checkedChildren="是" unCheckedChildren="否"  placeholder="请输入隐藏的信息bool" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={8} md={12} sm={24}>
                <Form.Item label={fieldLabels.administrator}  {...switchFormItemLayout}>
                  {getFieldDecorator('administrator', {
                    initialValue: false,
                    rules: [{ required: true, message: '请输入管理员' }],
                    valuePropName: 'checked'
                  })(
                    <Switch checkedChildren="是" unCheckedChildren="否"  placeholder="请输入管理员bool" />
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
                  handleChange={event => this.handleChange(event, 'avatar')}
                  fileList={convertedImagesValues.avatar}
                />
              </Col>

            </Row>
          </Form>
        </Card>



        <Card title="关联" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.community} {...formItemLayout}>
                  {getFieldDecorator('communityId', {
                  	initialValue: tryinit('community'),
                    rules: [{ required: true, message: '请输入社区' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidateCommunityList.candidates}
                    
                    
                    onSearch={this.handleCandidateCommunitySearch}
                    placeholder="请输入社区"
                    
                    disabled={!availableForEdit('community')}
                  >
                  {candidateCommunityList.candidates.map(item=>{
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
}))(Form.create()(CommunityUserCreateForm))




