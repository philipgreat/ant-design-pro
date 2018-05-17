import React, { Component } from 'react'
import { AutoComplete, Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover,Switch } from 'antd'

import { connect } from 'dva'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
//import PictureEdit from '../../components/PictureEdit'
//import OSSPictureEdit from '../../components/PictureEdit'
import {ImageComponent} from '../../axios/tools'
import FooterToolbar from '../../components/FooterToolbar'
//import ImageUpload from '../../components/ImageUpload'
import styles from './WorkshopRegisterHistory.createform.less'
import {mapBackToImageValues, mapFromImageValues} from '../../axios/tools'
import GlobalComponents from '../../custcomponents';
const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input
const fieldLabels = {
  id: 'ID',
  workshop: '车间',
  registerMember: '注册会员',
  registerDatetime: '注册日期时间',
  registrationType: '登记注册类型',
}
const testValues = {};
/*
const testValues = {
  registrationType: '报名',
  workshopId: 'W000001',
  registerMemberId: 'C000001',
}
*/
const imageURLPrefix = '//localhost:2090'


const imageKeys = [
]


class WorkshopRegisterHistoryCreateForm extends Component {
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
    
    
    this.executeCandidateRegisterMemberSearch("")
    
 
    
    
    
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

    const {WorkshopRegisterHistoryService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = WorkshopRegisterHistoryService.requestCandidateWorkshop("workshop", id, filterKey, pageNo);
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

  executeCandidateRegisterMemberSearch = (filterKey) =>{

    const {WorkshopRegisterHistoryService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = WorkshopRegisterHistoryService.requestCandidateRegisterMember("customer", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateRegisterMemberList=>{
      this.setState({
        candidateRegisterMemberList
      })

    })

  }	 
  handleCandidateRegisterMemberSearch = (value) => {
    this.executeCandidateRegisterMemberSearch(value)
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
          type: `${owner.type}/addWorkshopRegisterHistory`,
          payload: { id: owner.id, type: 'workshopRegisterHistory', parameters },
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
          type: `${owner.type}/addWorkshopRegisterHistory`,
          payload: { id: owner.id, type: 'workshopRegisterHistory', parameters, continueNext: true },
        })
      })
    }
    
    const goback = () => {
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/goback`,
        payload: { id: owner.id, type: 'workshopRegisterHistory',listName:'车间登记历史列表' },
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
    
    
    const {candidateRegisterMemberList} = this.state
    if(!candidateRegisterMemberList){
      return (<div>等等</div>)
    }
    if(!candidateRegisterMemberList.candidates){
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
        title="新建一个车间登记历史"
        content="新建一个车间登记历史"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.registrationType} {...formItemLayout}>
                  {getFieldDecorator('registrationType', {
                    rules: [{ required: true, message: '请输入登记注册类型' }],
                  })(
                    <Input placeholder="请输入登记注册类型" />
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
                <Form.Item label={fieldLabels.registerMember} {...formItemLayout}>
                  {getFieldDecorator('registerMemberId', {
                  	initialValue: tryinit('registerMember'),
                    rules: [{ required: true, message: '请输入注册会员' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidateRegisterMemberList.candidates}
                    
                    
                    onSearch={this.handleCandidateRegisterMemberSearch}
                    placeholder="请输入注册会员"
                    
                    disabled={!availableForEdit('registerMember')}
                  >
                  {candidateRegisterMemberList.candidates.map(item=>{
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
}))(Form.create()(WorkshopRegisterHistoryCreateForm))




