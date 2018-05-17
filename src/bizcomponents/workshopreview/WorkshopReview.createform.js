import React, { Component } from 'react'
import { AutoComplete, Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover,Switch } from 'antd'

import { connect } from 'dva'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
//import PictureEdit from '../../components/PictureEdit'
//import OSSPictureEdit from '../../components/PictureEdit'
import {ImageComponent} from '../../axios/tools'
import FooterToolbar from '../../components/FooterToolbar'
//import ImageUpload from '../../components/ImageUpload'
import styles from './WorkshopReview.createform.less'
import {mapBackToImageValues, mapFromImageValues} from '../../axios/tools'
import GlobalComponents from '../../custcomponents';
const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input
const fieldLabels = {
  id: 'ID',
  reviewContent: '审查内容',
  workshop: '车间',
  reviewer: '评论家',
  reviewPublishDatetime: '评论发布日期时间',
}
const testValues = {};
/*
const testValues = {
  reviewContent: '活动参与人员对活动的评论',
  workshopId: 'W000001',
  reviewerId: 'C000001',
}
*/
const imageURLPrefix = '//localhost:2090'


const imageKeys = [
]


class WorkshopReviewCreateForm extends Component {
  state = {
    previewVisible: false,
    previewImage: '',
    convertedImagesValues: {},
  }

  componentDidMount() {
    // const { getFieldDecorator,setFieldsValue } = this.props.form
    const { setFieldsValue } = this.props.form
    //setFieldsValue(testValues)
      
    this.executeCandidateWorkshopSearch("")
    
    
    this.executeCandidateReviewerSearch("")
    
 
    
    
    
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

  
  executeCandidateWorkshopSearch = (filterKey) =>{

    const {WorkshopReviewService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = WorkshopReviewService.requestCandidateWorkshop("workshop", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateWorkshopList=>{
      this.setState({
        candidateWorkshopList
      })

    })

  }	 
  handleCandidateWorkshopSearch = (value) => {
    this.executeCandidateWorkshopSearch(value)
  }

  executeCandidateReviewerSearch = (filterKey) =>{

    const {WorkshopReviewService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = WorkshopReviewService.requestCandidateReviewer("customer", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateReviewerList=>{
      this.setState({
        candidateReviewerList
      })

    })

  }	 
  handleCandidateReviewerSearch = (value) => {
    this.executeCandidateReviewerSearch(value)
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
          type: `${owner.type}/addWorkshopReview`,
          payload: { id: owner.id, type: 'workshopReview', parameters },
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
          type: `${owner.type}/addWorkshopReview`,
          payload: { id: owner.id, type: 'workshopReview', parameters, continueNext: true },
        })
      })
    }
    
    const goback = () => {
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/goback`,
        payload: { id: owner.id, type: 'workshopReview',listName:'车间检查列表' },
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
    

    
    const {candidateWorkshopList} = this.state
    if(!candidateWorkshopList){
      return (<div>等等</div>)
    }
    if(!candidateWorkshopList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateReviewerList} = this.state
    if(!candidateReviewerList){
      return (<div>等等</div>)
    }
    if(!candidateReviewerList.candidates){
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
        title="新建一个车间检查"
        content="新建一个车间检查"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.reviewContent} {...formItemLayout}>
                  {getFieldDecorator('reviewContent', {
                    rules: [{ required: true, message: '请输入审查内容' }],
                  })(
                    <Input placeholder="请输入审查内容" />
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
                <Form.Item label={fieldLabels.workshop} {...formItemLayout}>
                  {getFieldDecorator('workshopId', {
                  	initialValue: tryinit('workshop'),
                    rules: [{ required: true, message: '请输入车间' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidateWorkshopList.candidates}
                    
                    
                    onSearch={this.handleCandidateWorkshopSearch}
                    placeholder="请输入车间"
                    
                    disabled={!availableForEdit('workshop')}
                  >
                  {candidateWorkshopList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.workshopName}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.reviewer} {...formItemLayout}>
                  {getFieldDecorator('reviewerId', {
                  	initialValue: tryinit('reviewer'),
                    rules: [{ required: true, message: '请输入评论家' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidateReviewerList.candidates}
                    
                    
                    onSearch={this.handleCandidateReviewerSearch}
                    placeholder="请输入评论家"
                    
                    disabled={!availableForEdit('reviewer')}
                  >
                  {candidateReviewerList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.nickName}(${item.id})`}</Option>);
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
}))(Form.create()(WorkshopReviewCreateForm))




