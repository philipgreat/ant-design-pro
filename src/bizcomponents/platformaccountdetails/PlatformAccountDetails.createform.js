import React, { Component } from 'react'
import { AutoComplete, Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover,Switch } from 'antd'

import { connect } from 'dva'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
//import PictureEdit from '../../components/PictureEdit'
//import OSSPictureEdit from '../../components/PictureEdit'
import {ImageComponent} from '../../axios/tools'
import FooterToolbar from '../../components/FooterToolbar'
//import ImageUpload from '../../components/ImageUpload'
import styles from './PlatformAccountDetails.createform.less'
import {mapBackToImageValues, mapFromImageValues} from '../../axios/tools'
import GlobalComponents from '../../custcomponents';
const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input
const fieldLabels = {
  id: 'ID',
  summary: '总结',
  changeAmount: '变化量',
  changeType: '变化类型',
  platformAccount: '平台账户',
  relatedMainOrder: '相关的主要顺序',
  datetime: 'Datetime',
}
const testValues = {};
/*
const testValues = {
  summary: '共享图书《书名》付费阅读收益',
  changeAmount: '0.99',
  changeType: '奖励',
  platformAccountId: 'PA000001',
  relatedMainOrderId: 'MO000001',
}
*/
const imageURLPrefix = '//localhost:2090'


const imageKeys = [
]


class PlatformAccountDetailsCreateForm extends Component {
  state = {
    previewVisible: false,
    previewImage: '',
    convertedImagesValues: {},
  }

  componentDidMount() {
    // const { getFieldDecorator,setFieldsValue } = this.props.form
    const { setFieldsValue } = this.props.form
    //setFieldsValue(testValues)
      
    this.executeCandidatePlatformAccountSearch("")
    
    
    this.executeCandidateRelatedMainOrderSearch("")
    
 
    
    
    
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

  
  executeCandidatePlatformAccountSearch = (filterKey) =>{

    const {PlatformAccountDetailsService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = PlatformAccountDetailsService.requestCandidatePlatformAccount("platformAccount", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidatePlatformAccountList=>{
      this.setState({
        candidatePlatformAccountList
      })

    })

  }	 
  handleCandidatePlatformAccountSearch = (value) => {
    this.executeCandidatePlatformAccountSearch(value)
  }

  executeCandidateRelatedMainOrderSearch = (filterKey) =>{

    const {PlatformAccountDetailsService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = PlatformAccountDetailsService.requestCandidateRelatedMainOrder("mainOrder", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateRelatedMainOrderList=>{
      this.setState({
        candidateRelatedMainOrderList
      })

    })

  }	 
  handleCandidateRelatedMainOrderSearch = (value) => {
    this.executeCandidateRelatedMainOrderSearch(value)
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
          type: `${owner.type}/addPlatformAccountDetails`,
          payload: { id: owner.id, type: 'platformAccountDetails', parameters },
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
          type: `${owner.type}/addPlatformAccountDetails`,
          payload: { id: owner.id, type: 'platformAccountDetails', parameters, continueNext: true },
        })
      })
    }
    
    const goback = () => {
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/goback`,
        payload: { id: owner.id, type: 'platformAccountDetails',listName:'平台账户信息列表' },
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
    

    
    const {candidatePlatformAccountList} = this.state
    if(!candidatePlatformAccountList){
      return (<div>等等</div>)
    }
    if(!candidatePlatformAccountList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateRelatedMainOrderList} = this.state
    if(!candidateRelatedMainOrderList){
      return (<div>等等</div>)
    }
    if(!candidateRelatedMainOrderList.candidates){
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
        title="新建一个平台账户信息"
        content="新建一个平台账户信息"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.summary} {...formItemLayout}>
                  {getFieldDecorator('summary', {
                    rules: [{ required: true, message: '请输入总结' }],
                  })(
                    <Input placeholder="请输入总结" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.changeAmount} {...formItemLayout}>
                  {getFieldDecorator('changeAmount', {
                    rules: [{ required: true, message: '请输入变化量' }],
                  })(
                    <Input placeholder="请输入变化量" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.changeType} {...formItemLayout}>
                  {getFieldDecorator('changeType', {
                    rules: [{ required: true, message: '请输入变化类型' }],
                  })(
                    <Input placeholder="请输入变化类型" />
                  )}
                </Form.Item>
              </Col>

            </Row>
          </Form>
        </Card>



       
        









        <Card title="关联" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.platformAccount} {...formItemLayout}>
                  {getFieldDecorator('platformAccountId', {
                  	initialValue: tryinit('platformAccount'),
                    rules: [{ required: true, message: '请输入平台账户' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidatePlatformAccountList.candidates}
                    
                    
                    onSearch={this.handleCandidatePlatformAccountSearch}
                    placeholder="请输入平台账户"
                    
                    disabled={!availableForEdit('platformAccount')}
                  >
                  {candidatePlatformAccountList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.name}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.relatedMainOrder} {...formItemLayout}>
                  {getFieldDecorator('relatedMainOrderId', {
                  	initialValue: tryinit('relatedMainOrder'),
                    rules: [{ required: true, message: '请输入相关的主要顺序' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidateRelatedMainOrderList.candidates}
                    
                    
                    onSearch={this.handleCandidateRelatedMainOrderSearch}
                    placeholder="请输入相关的主要顺序"
                    
                    disabled={!availableForEdit('relatedMainOrder')}
                  >
                  {candidateRelatedMainOrderList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.mainOrderStatus}(${item.id})`}</Option>);
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
}))(Form.create()(PlatformAccountDetailsCreateForm))




