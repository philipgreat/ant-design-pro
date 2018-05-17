import React, { Component } from 'react'
import { AutoComplete, Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover,Switch } from 'antd'

import { connect } from 'dva'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
//import PictureEdit from '../../components/PictureEdit'
//import OSSPictureEdit from '../../components/PictureEdit'
import {ImageComponent} from '../../axios/tools'
import FooterToolbar from '../../components/FooterToolbar'
//import ImageUpload from '../../components/ImageUpload'
import styles from './BookCopyCheckPlan.createform.less'
import {mapBackToImageValues, mapFromImageValues} from '../../axios/tools'
import GlobalComponents from '../../custcomponents';
const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input
const fieldLabels = {
  id: 'ID',
  checkPlanName: '检查计划的名字',
  checkStore: '检查存储',
  planDatetime: '计划日期时间',
  planCreator: '计划的创造者',
  planUpdateDatetime: '计划更新日期时间',
  checkPlanStatus: '检查计划状态',
  bookManagement: '图书管理',
}
const testValues = {};
/*
const testValues = {
  checkPlanName: '盘点计划名称',
  planDatetime: '2996-12-24 11:06:04',
  checkPlanStatus: '计划',
  checkStoreId: 'S000001',
  planCreatorId: 'E000001',
  bookManagementId: 'BM000001',
}
*/
const imageURLPrefix = '//localhost:2090'


const imageKeys = [
]


class BookCopyCheckPlanCreateForm extends Component {
  state = {
    previewVisible: false,
    previewImage: '',
    convertedImagesValues: {},
  }

  componentDidMount() {
    // const { getFieldDecorator,setFieldsValue } = this.props.form
    const { setFieldsValue } = this.props.form
    //setFieldsValue(testValues)
      
    this.executeCandidateCheckStoreSearch("")
    
    
    this.executeCandidatePlanCreatorSearch("")
    
    
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

  
  executeCandidateCheckStoreSearch = (filterKey) =>{

    const {BookCopyCheckPlanService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = BookCopyCheckPlanService.requestCandidateCheckStore("store", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateCheckStoreList=>{
      this.setState({
        candidateCheckStoreList
      })

    })

  }	 
  handleCandidateCheckStoreSearch = (value) => {
    this.executeCandidateCheckStoreSearch(value)
  }

  executeCandidatePlanCreatorSearch = (filterKey) =>{

    const {BookCopyCheckPlanService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = BookCopyCheckPlanService.requestCandidatePlanCreator("employee", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidatePlanCreatorList=>{
      this.setState({
        candidatePlanCreatorList
      })

    })

  }	 
  handleCandidatePlanCreatorSearch = (value) => {
    this.executeCandidatePlanCreatorSearch(value)
  }

  executeCandidateBookManagementSearch = (filterKey) =>{

    const {BookCopyCheckPlanService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = BookCopyCheckPlanService.requestCandidateBookManagement("bookManagement", id, filterKey, pageNo);
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
          type: `${owner.type}/addBookCopyCheckPlan`,
          payload: { id: owner.id, type: 'bookCopyCheckPlan', parameters },
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
          type: `${owner.type}/addBookCopyCheckPlan`,
          payload: { id: owner.id, type: 'bookCopyCheckPlan', parameters, continueNext: true },
        })
      })
    }
    
    const goback = () => {
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/goback`,
        payload: { id: owner.id, type: 'bookCopyCheckPlan',listName:'书副本检查计划列表' },
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
    

    
    const {candidateCheckStoreList} = this.state
    if(!candidateCheckStoreList){
      return (<div>等等</div>)
    }
    if(!candidateCheckStoreList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidatePlanCreatorList} = this.state
    if(!candidatePlanCreatorList){
      return (<div>等等</div>)
    }
    if(!candidatePlanCreatorList.candidates){
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
        title="新建一个书副本检查计划"
        content="新建一个书副本检查计划"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.checkPlanName} {...formItemLayout}>
                  {getFieldDecorator('checkPlanName', {
                    rules: [{ required: true, message: '请输入检查计划的名字' }],
                  })(
                    <Input placeholder="请输入检查计划的名字" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.planDatetime} {...formItemLayout}>
                  {getFieldDecorator('planDatetime', {
                    rules: [{ required: true, message: '请输入计划日期时间' }],
                  })(
                    <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" placeholder="请输入计划日期时间" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.checkPlanStatus} {...formItemLayout}>
                  {getFieldDecorator('checkPlanStatus', {
                    rules: [{ required: true, message: '请输入检查计划状态' }],
                  })(
                    <Input placeholder="请输入检查计划状态" />
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
                <Form.Item label={fieldLabels.checkStore} {...formItemLayout}>
                  {getFieldDecorator('checkStoreId', {
                  	initialValue: tryinit('checkStore'),
                    rules: [{ required: true, message: '请输入检查存储' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidateCheckStoreList.candidates}
                    
                    
                    onSearch={this.handleCandidateCheckStoreSearch}
                    placeholder="请输入检查存储"
                    
                    disabled={!availableForEdit('checkStore')}
                  >
                  {candidateCheckStoreList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.storeName}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.planCreator} {...formItemLayout}>
                  {getFieldDecorator('planCreatorId', {
                  	initialValue: tryinit('planCreator'),
                    rules: [{ required: true, message: '请输入计划的创造者' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidatePlanCreatorList.candidates}
                    
                    
                    onSearch={this.handleCandidatePlanCreatorSearch}
                    placeholder="请输入计划的创造者"
                    
                    disabled={!availableForEdit('planCreator')}
                  >
                  {candidatePlanCreatorList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.name}(${item.id})`}</Option>);
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
}))(Form.create()(BookCopyCheckPlanCreateForm))




