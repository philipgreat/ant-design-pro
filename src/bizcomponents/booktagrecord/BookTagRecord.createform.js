import React, { Component } from 'react'
import { AutoComplete, Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover,Switch } from 'antd'

import { connect } from 'dva'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
//import PictureEdit from '../../components/PictureEdit'
//import OSSPictureEdit from '../../components/PictureEdit'
import {ImageComponent} from '../../axios/tools'
import FooterToolbar from '../../components/FooterToolbar'
//import ImageUpload from '../../components/ImageUpload'
import styles from './BookTagRecord.createform.less'
import {mapBackToImageValues, mapFromImageValues} from '../../axios/tools'
import GlobalComponents from '../../custcomponents';
const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input
const fieldLabels = {
  id: 'ID',
  tagName: '标签名',
  book: '书',
  bookCopy: '书副本',
  tagDatetime: '标签Datetime',
  tagCustomer: '标签的客户',
  bookManagement: '图书管理',
}
const testValues = {};
/*
const testValues = {
  tagName: '童话',
  tagCustomer: 'currentUser()',
  bookId: 'B000001',
  bookCopyId: 'BC000001',
  bookManagementId: 'BM000001',
}
*/
const imageURLPrefix = '//localhost:2090'


const imageKeys = [
]


class BookTagRecordCreateForm extends Component {
  state = {
    previewVisible: false,
    previewImage: '',
    convertedImagesValues: {},
  }

  componentDidMount() {
    // const { getFieldDecorator,setFieldsValue } = this.props.form
    const { setFieldsValue } = this.props.form
    //setFieldsValue(testValues)
      
    this.executeCandidateBookSearch("")
    
    
    this.executeCandidateBookCopySearch("")
    
    
    this.executeCandidateBookManagementSearch("")
    
 
    
    
    
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

  
  executeCandidateBookSearch = (filterKey) =>{

    const {BookTagRecordService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = BookTagRecordService.requestCandidateBook("book", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateBookList=>{
      this.setState({
        candidateBookList
      })

    })

  }	 
  handleCandidateBookSearch = (value) => {
    this.executeCandidateBookSearch(value)
  }

  executeCandidateBookCopySearch = (filterKey) =>{

    const {BookTagRecordService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = BookTagRecordService.requestCandidateBookCopy("bookCopy", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateBookCopyList=>{
      this.setState({
        candidateBookCopyList
      })

    })

  }	 
  handleCandidateBookCopySearch = (value) => {
    this.executeCandidateBookCopySearch(value)
  }

  executeCandidateBookManagementSearch = (filterKey) =>{

    const {BookTagRecordService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = BookTagRecordService.requestCandidateBookManagement("bookManagement", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateBookManagementList=>{
      this.setState({
        candidateBookManagementList
      })

    })

  }	 
  handleCandidateBookManagementSearch = (value) => {
    this.executeCandidateBookManagementSearch(value)
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
          type: `${owner.type}/addBookTagRecord`,
          payload: { id: owner.id, type: 'bookTagRecord', parameters },
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
          type: `${owner.type}/addBookTagRecord`,
          payload: { id: owner.id, type: 'bookTagRecord', parameters, continueNext: true },
        })
      })
    }
    
    const goback = () => {
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/goback`,
        payload: { id: owner.id, type: 'bookTagRecord',listName:'书标签记录列表' },
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
    

    
    const {candidateBookList} = this.state
    if(!candidateBookList){
      return (<div>等等</div>)
    }
    if(!candidateBookList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateBookCopyList} = this.state
    if(!candidateBookCopyList){
      return (<div>等等</div>)
    }
    if(!candidateBookCopyList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateBookManagementList} = this.state
    if(!candidateBookManagementList){
      return (<div>等等</div>)
    }
    if(!candidateBookManagementList.candidates){
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
        title="新建一个书标签记录"
        content="新建一个书标签记录"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.tagName} {...formItemLayout}>
                  {getFieldDecorator('tagName', {
                    rules: [{ required: true, message: '请输入标签名' }],
                  })(
                    <Input placeholder="请输入标签名" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.tagCustomer} {...formItemLayout}>
                  {getFieldDecorator('tagCustomer', {
                    rules: [{ required: true, message: '请输入标签的客户' }],
                  })(
                    <Input placeholder="请输入标签的客户" />
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
                <Form.Item label={fieldLabels.book} {...formItemLayout}>
                  {getFieldDecorator('bookId', {
                  	initialValue: tryinit('book'),
                    rules: [{ required: true, message: '请输入书' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidateBookList.candidates}
                    
                    
                    onSearch={this.handleCandidateBookSearch}
                    placeholder="请输入书"
                    
                    disabled={!availableForEdit('book')}
                  >
                  {candidateBookList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.bookName}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.bookCopy} {...formItemLayout}>
                  {getFieldDecorator('bookCopyId', {
                  	initialValue: tryinit('bookCopy'),
                    rules: [{ required: true, message: '请输入书副本' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidateBookCopyList.candidates}
                    
                    
                    onSearch={this.handleCandidateBookCopySearch}
                    placeholder="请输入书副本"
                    
                    disabled={!availableForEdit('bookCopy')}
                  >
                  {candidateBookCopyList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.wxaId}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.bookManagement} {...formItemLayout}>
                  {getFieldDecorator('bookManagementId', {
                  	initialValue: tryinit('bookManagement'),
                    rules: [{ required: true, message: '请输入图书管理' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidateBookManagementList.candidates}
                    
                    
                    onSearch={this.handleCandidateBookManagementSearch}
                    placeholder="请输入图书管理"
                    
                    disabled={!availableForEdit('bookManagement')}
                  >
                  {candidateBookManagementList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.bookManagementName}(${item.id})`}</Option>);
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
}))(Form.create()(BookTagRecordCreateForm))




