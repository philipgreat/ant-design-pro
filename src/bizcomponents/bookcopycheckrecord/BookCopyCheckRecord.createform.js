import React, { Component } from 'react'
import { AutoComplete, Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover,Switch } from 'antd'

import { connect } from 'dva'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
//import PictureEdit from '../../components/PictureEdit'
//import OSSPictureEdit from '../../components/PictureEdit'
import {ImageComponent} from '../../axios/tools'
import FooterToolbar from '../../components/FooterToolbar'
//import ImageUpload from '../../components/ImageUpload'
import styles from './BookCopyCheckRecord.createform.less'
import {mapBackToImageValues, mapFromImageValues} from '../../axios/tools'
import GlobalComponents from '../../custcomponents';
const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input
const fieldLabels = {
  id: 'ID',
  bookCopy: '书副本',
  bookCopyCheckStatus: '书副本检查状态',
  bookCopyCheckDatetime: '书副本检查Datetime',
  checkProcessEmployee: '检查过程的员工',
  checkProcessResults: '检查过程的结果',
  checkProcessDatetime: '检查过程Datetime',
  bookCopyCheckPlan: '书副本检查计划',
}
const testValues = {};
/*
const testValues = {
  checkProcessResults: '在库',
  bookCopyId: 'BC000001',
  bookCopyCheckStatusId: 'BCCS000001',
  checkProcessEmployeeId: 'E000001',
  bookCopyCheckPlanId: 'BCCP000001',
}
*/
const imageURLPrefix = '//localhost:2090'


const imageKeys = [
]


class BookCopyCheckRecordCreateForm extends Component {
  state = {
    previewVisible: false,
    previewImage: '',
    convertedImagesValues: {},
  }

  componentDidMount() {
    // const { getFieldDecorator,setFieldsValue } = this.props.form
    const { setFieldsValue } = this.props.form
    //setFieldsValue(testValues)
      
    this.executeCandidateBookCopySearch("")
    
    
    this.executeCandidateBookCopyCheckStatusSearch("")
    
    
    this.executeCandidateCheckProcessEmployeeSearch("")
    
    
    this.executeCandidateBookCopyCheckPlanSearch("")
    
 
    
    
    
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

  
  executeCandidateBookCopySearch = (filterKey) =>{

    const {BookCopyCheckRecordService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = BookCopyCheckRecordService.requestCandidateBookCopy("bookCopy", id, filterKey, pageNo);
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

  executeCandidateBookCopyCheckStatusSearch = (filterKey) =>{

    const {BookCopyCheckRecordService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = BookCopyCheckRecordService.requestCandidateBookCopyCheckStatus("bookCopyCheckStatus", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateBookCopyCheckStatusList=>{
      this.setState({
        candidateBookCopyCheckStatusList
      })

    })

  }	 
  handleCandidateBookCopyCheckStatusSearch = (value) => {
    this.executeCandidateBookCopyCheckStatusSearch(value)
  }

  executeCandidateCheckProcessEmployeeSearch = (filterKey) =>{

    const {BookCopyCheckRecordService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = BookCopyCheckRecordService.requestCandidateCheckProcessEmployee("employee", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateCheckProcessEmployeeList=>{
      this.setState({
        candidateCheckProcessEmployeeList
      })

    })

  }	 
  handleCandidateCheckProcessEmployeeSearch = (value) => {
    this.executeCandidateCheckProcessEmployeeSearch(value)
  }

  executeCandidateBookCopyCheckPlanSearch = (filterKey) =>{

    const {BookCopyCheckRecordService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = BookCopyCheckRecordService.requestCandidateBookCopyCheckPlan("bookCopyCheckPlan", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateBookCopyCheckPlanList=>{
      this.setState({
        candidateBookCopyCheckPlanList
      })

    })

  }	 
  handleCandidateBookCopyCheckPlanSearch = (value) => {
    this.executeCandidateBookCopyCheckPlanSearch(value)
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
          type: `${owner.type}/addBookCopyCheckRecord`,
          payload: { id: owner.id, type: 'bookCopyCheckRecord', parameters },
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
          type: `${owner.type}/addBookCopyCheckRecord`,
          payload: { id: owner.id, type: 'bookCopyCheckRecord', parameters, continueNext: true },
        })
      })
    }
    
    const goback = () => {
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/goback`,
        payload: { id: owner.id, type: 'bookCopyCheckRecord',listName:'书副本检查记录列表' },
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
    

    
    const {candidateBookCopyList} = this.state
    if(!candidateBookCopyList){
      return (<div>等等</div>)
    }
    if(!candidateBookCopyList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateBookCopyCheckStatusList} = this.state
    if(!candidateBookCopyCheckStatusList){
      return (<div>等等</div>)
    }
    if(!candidateBookCopyCheckStatusList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateCheckProcessEmployeeList} = this.state
    if(!candidateCheckProcessEmployeeList){
      return (<div>等等</div>)
    }
    if(!candidateCheckProcessEmployeeList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateBookCopyCheckPlanList} = this.state
    if(!candidateBookCopyCheckPlanList){
      return (<div>等等</div>)
    }
    if(!candidateBookCopyCheckPlanList.candidates){
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
        title="新建一个书副本检查记录"
        content="新建一个书副本检查记录"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.checkProcessResults} {...formItemLayout}>
                  {getFieldDecorator('checkProcessResults', {
                    rules: [{ required: true, message: '请输入检查过程的结果' }],
                  })(
                    <Input placeholder="请输入检查过程的结果" />
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
                <Form.Item label={fieldLabels.bookCopyCheckStatus} {...formItemLayout}>
                  {getFieldDecorator('bookCopyCheckStatusId', {
                  	initialValue: tryinit('bookCopyCheckStatus'),
                    rules: [{ required: true, message: '请输入书副本检查状态' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidateBookCopyCheckStatusList.candidates}
                    
                    
                    onSearch={this.handleCandidateBookCopyCheckStatusSearch}
                    placeholder="请输入书副本检查状态"
                    
                    disabled={!availableForEdit('bookCopyCheckStatus')}
                  >
                  {candidateBookCopyCheckStatusList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.name}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.checkProcessEmployee} {...formItemLayout}>
                  {getFieldDecorator('checkProcessEmployeeId', {
                  	initialValue: tryinit('checkProcessEmployee'),
                    rules: [{ required: true, message: '请输入检查过程的员工' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidateCheckProcessEmployeeList.candidates}
                    
                    
                    onSearch={this.handleCandidateCheckProcessEmployeeSearch}
                    placeholder="请输入检查过程的员工"
                    
                    disabled={!availableForEdit('checkProcessEmployee')}
                  >
                  {candidateCheckProcessEmployeeList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.name}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.bookCopyCheckPlan} {...formItemLayout}>
                  {getFieldDecorator('bookCopyCheckPlanId', {
                  	initialValue: tryinit('bookCopyCheckPlan'),
                    rules: [{ required: true, message: '请输入书副本检查计划' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidateBookCopyCheckPlanList.candidates}
                    
                    
                    onSearch={this.handleCandidateBookCopyCheckPlanSearch}
                    placeholder="请输入书副本检查计划"
                    
                    disabled={!availableForEdit('bookCopyCheckPlan')}
                  >
                  {candidateBookCopyCheckPlanList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.checkPlanName}(${item.id})`}</Option>);
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
}))(Form.create()(BookCopyCheckRecordCreateForm))




