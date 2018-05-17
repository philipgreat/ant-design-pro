import React, { Component } from 'react'
import { AutoComplete, Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover,Switch } from 'antd'

import { connect } from 'dva'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
//import PictureEdit from '../../components/PictureEdit'
//import OSSPictureEdit from '../../components/PictureEdit'
import {ImageComponent} from '../../axios/tools'
import FooterToolbar from '../../components/FooterToolbar'
//import ImageUpload from '../../components/ImageUpload'
import styles from './BookCopySharingApplication.createform.less'
import {mapBackToImageValues, mapFromImageValues} from '../../axios/tools'
import GlobalComponents from '../../custcomponents';
const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input
const fieldLabels = {
  id: 'ID',
  bookCopyQuantity: '书副本数量',
  bookCopyImage1: '书副本Image1',
  bookCopyImage2: '书副本Image2',
  bookCopyImage3: '书副本Image3',
  bookCopyImage4: '书副本Image4',
  bookCopyImage5: '书副本Image5',
  deliverMethod: '提供的方法',
  destinationStore: '目的地存储',
  contactAddress: '联系地址',
  contactName: '联系人姓名',
  contactMobile: '联系手机',
  status: '状态',
  customer: '客户',
  employee: '员工',
}
const testValues = {};
/*
const testValues = {
  bookCopyQuantity: '20本以下',
  deliverMethod: '上门取书',
  contactAddress: '成都市高新区天府五街欧香小镇',
  contactName: '张三',
  contactMobile: '18012341234',
  status: '待处理',
  destinationStoreId: 'S000001',
  customerId: 'C000001',
  employeeId: 'E000001',
}
*/
const imageURLPrefix = '//localhost:2090'


const imageKeys = [
  'bookCopyImage1',
  'bookCopyImage2',
  'bookCopyImage3',
  'bookCopyImage4',
  'bookCopyImage5',
]


class BookCopySharingApplicationCreateForm extends Component {
  state = {
    previewVisible: false,
    previewImage: '',
    convertedImagesValues: {},
  }

  componentDidMount() {
    // const { getFieldDecorator,setFieldsValue } = this.props.form
    const { setFieldsValue } = this.props.form
    //setFieldsValue(testValues)
      
    this.executeCandidateDestinationStoreSearch("")
    
    
    this.executeCandidateCustomerSearch("")
    
    
    this.executeCandidateEmployeeSearch("")
    
 
    
    
    
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

  
  executeCandidateDestinationStoreSearch = (filterKey) =>{

    const {BookCopySharingApplicationService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = BookCopySharingApplicationService.requestCandidateDestinationStore("store", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateDestinationStoreList=>{
      this.setState({
        candidateDestinationStoreList
      })

    })

  }	 
  handleCandidateDestinationStoreSearch = (value) => {
    this.executeCandidateDestinationStoreSearch(value)
  }

  executeCandidateCustomerSearch = (filterKey) =>{

    const {BookCopySharingApplicationService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = BookCopySharingApplicationService.requestCandidateCustomer("customer", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateCustomerList=>{
      this.setState({
        candidateCustomerList
      })

    })

  }	 
  handleCandidateCustomerSearch = (value) => {
    this.executeCandidateCustomerSearch(value)
  }

  executeCandidateEmployeeSearch = (filterKey) =>{

    const {BookCopySharingApplicationService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = BookCopySharingApplicationService.requestCandidateEmployee("employee", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateEmployeeList=>{
      this.setState({
        candidateEmployeeList
      })

    })

  }	 
  handleCandidateEmployeeSearch = (value) => {
    this.executeCandidateEmployeeSearch(value)
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
          type: `${owner.type}/addBookCopySharingApplication`,
          payload: { id: owner.id, type: 'bookCopySharingApplication', parameters },
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
          type: `${owner.type}/addBookCopySharingApplication`,
          payload: { id: owner.id, type: 'bookCopySharingApplication', parameters, continueNext: true },
        })
      })
    }
    
    const goback = () => {
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/goback`,
        payload: { id: owner.id, type: 'bookCopySharingApplication',listName:'书副本共享应用程序列表' },
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
    

    
    const {candidateDestinationStoreList} = this.state
    if(!candidateDestinationStoreList){
      return (<div>等等</div>)
    }
    if(!candidateDestinationStoreList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateCustomerList} = this.state
    if(!candidateCustomerList){
      return (<div>等等</div>)
    }
    if(!candidateCustomerList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateEmployeeList} = this.state
    if(!candidateEmployeeList){
      return (<div>等等</div>)
    }
    if(!candidateEmployeeList.candidates){
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
        title="新建一个书副本共享应用程序"
        content="新建一个书副本共享应用程序"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.bookCopyQuantity} {...formItemLayout}>
                  {getFieldDecorator('bookCopyQuantity', {
                    rules: [{ required: true, message: '请输入书副本数量' }],
                  })(
                    <Input placeholder="请输入书副本数量" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.deliverMethod} {...formItemLayout}>
                  {getFieldDecorator('deliverMethod', {
                    rules: [{ required: true, message: '请输入提供的方法' }],
                  })(
                    <Input placeholder="请输入提供的方法" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.contactAddress} {...formItemLayout}>
                  {getFieldDecorator('contactAddress', {
                    rules: [{ required: true, message: '请输入联系地址' }],
                  })(
                    <Input placeholder="请输入联系地址" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.contactName} {...formItemLayout}>
                  {getFieldDecorator('contactName', {
                    rules: [{ required: true, message: '请输入联系人姓名' }],
                  })(
                    <Input placeholder="请输入联系人姓名" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.contactMobile} {...formItemLayout}>
                  {getFieldDecorator('contactMobile', {
                    rules: [{ required: true, message: '请输入联系手机' }],
                  })(
                    <Input placeholder="请输入联系手机" />
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

            </Row>
          </Form>
        </Card>



       
        







        <Card title="附件" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>

              <Col lg={6} md={12} sm={24}>
                <ImageComponent
                  buttonTitle="书副本Image1"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'bookCopyImage1')}
                  fileList={convertedImagesValues.bookCopyImage1}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageComponent
                  buttonTitle="书副本Image2"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'bookCopyImage2')}
                  fileList={convertedImagesValues.bookCopyImage2}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageComponent
                  buttonTitle="书副本Image3"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'bookCopyImage3')}
                  fileList={convertedImagesValues.bookCopyImage3}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageComponent
                  buttonTitle="书副本Image4"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'bookCopyImage4')}
                  fileList={convertedImagesValues.bookCopyImage4}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageComponent
                  buttonTitle="书副本Image5"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'bookCopyImage5')}
                  fileList={convertedImagesValues.bookCopyImage5}
                />
              </Col>

            </Row>
          </Form>
        </Card>



        <Card title="关联" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.destinationStore} {...formItemLayout}>
                  {getFieldDecorator('destinationStoreId', {
                  	initialValue: tryinit('destinationStore'),
                    rules: [{ required: true, message: '请输入目的地存储' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidateDestinationStoreList.candidates}
                    
                    
                    onSearch={this.handleCandidateDestinationStoreSearch}
                    placeholder="请输入目的地存储"
                    
                    disabled={!availableForEdit('destinationStore')}
                  >
                  {candidateDestinationStoreList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.storeName}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.customer} {...formItemLayout}>
                  {getFieldDecorator('customerId', {
                  	initialValue: tryinit('customer'),
                    rules: [{ required: true, message: '请输入客户' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidateCustomerList.candidates}
                    
                    
                    onSearch={this.handleCandidateCustomerSearch}
                    placeholder="请输入客户"
                    
                    disabled={!availableForEdit('customer')}
                  >
                  {candidateCustomerList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.nickName}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.employee} {...formItemLayout}>
                  {getFieldDecorator('employeeId', {
                  	initialValue: tryinit('employee'),
                    rules: [{ required: true, message: '请输入员工' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidateEmployeeList.candidates}
                    
                    
                    onSearch={this.handleCandidateEmployeeSearch}
                    placeholder="请输入员工"
                    
                    disabled={!availableForEdit('employee')}
                  >
                  {candidateEmployeeList.candidates.map(item=>{
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
}))(Form.create()(BookCopySharingApplicationCreateForm))




