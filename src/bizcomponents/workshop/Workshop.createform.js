import React, { Component } from 'react'
import { AutoComplete, Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover,Switch } from 'antd'

import { connect } from 'dva'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
//import PictureEdit from '../../components/PictureEdit'
//import OSSPictureEdit from '../../components/PictureEdit'
import {ImageComponent} from '../../axios/tools'
import FooterToolbar from '../../components/FooterToolbar'
//import ImageUpload from '../../components/ImageUpload'
import styles from './Workshop.createform.less'
import {mapBackToImageValues, mapFromImageValues} from '../../axios/tools'
import GlobalComponents from '../../custcomponents';
const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input
const fieldLabels = {
  id: 'ID',
  workshopName: '工厂的名字',
  workshopContent: '研讨会内容',
  workshopImage: '车间图片',
  workshopStatus: '车间的地位',
  workshopEventDatetime: '车间活动日期时间',
  availableRegisterDatetime: '可用的寄存器Datetime',
  availableRegisterQuantity: '可用的寄存器数量',
  publishDatetime: '发布日期时间',
  publishStore: '发布商店',
  publishEmployee: '发布员工',
}
const testValues = {};
/*
const testValues = {
  workshopName: '世界读书日读书活动',
  workshopContent: '世界读书日活动的内容可以用html内容进行填充',
  workshopStatus: '报名中',
  workshopEventDatetime: '2997-05-08 12:35:12',
  availableRegisterDatetime: '2994-06-18 22:20:07',
  availableRegisterQuantity: '40',
  publishStoreId: 'S000001',
  publishEmployeeId: 'E000001',
}
*/
const imageURLPrefix = '//localhost:2090'


const imageKeys = [
  'workshopImage',
]


class WorkshopCreateForm extends Component {
  state = {
    previewVisible: false,
    previewImage: '',
    convertedImagesValues: {},
  }

  componentDidMount() {
    // const { getFieldDecorator,setFieldsValue } = this.props.form
    const { setFieldsValue } = this.props.form
    //setFieldsValue(testValues)
      
    this.executeCandidatePublishStoreSearch("")
    
    
    this.executeCandidatePublishEmployeeSearch("")
    
 
    
    
    
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

  
  executeCandidatePublishStoreSearch = (filterKey) =>{

    const {WorkshopService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = WorkshopService.requestCandidatePublishStore("store", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidatePublishStoreList=>{
      this.setState({
        candidatePublishStoreList
      })

    })

  }	 
  handleCandidatePublishStoreSearch = (value) => {
    this.executeCandidatePublishStoreSearch(value)
  }

  executeCandidatePublishEmployeeSearch = (filterKey) =>{

    const {WorkshopService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = WorkshopService.requestCandidatePublishEmployee("employee", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidatePublishEmployeeList=>{
      this.setState({
        candidatePublishEmployeeList
      })

    })

  }	 
  handleCandidatePublishEmployeeSearch = (value) => {
    this.executeCandidatePublishEmployeeSearch(value)
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
          type: `${owner.type}/addWorkshop`,
          payload: { id: owner.id, type: 'workshop', parameters },
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
          type: `${owner.type}/addWorkshop`,
          payload: { id: owner.id, type: 'workshop', parameters, continueNext: true },
        })
      })
    }
    
    const goback = () => {
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/goback`,
        payload: { id: owner.id, type: 'workshop',listName:'车间列表' },
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
    

    
    const {candidatePublishStoreList} = this.state
    if(!candidatePublishStoreList){
      return (<div>等等</div>)
    }
    if(!candidatePublishStoreList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidatePublishEmployeeList} = this.state
    if(!candidatePublishEmployeeList){
      return (<div>等等</div>)
    }
    if(!candidatePublishEmployeeList.candidates){
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
        title="新建一个车间"
        content="新建一个车间"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.workshopName} {...formItemLayout}>
                  {getFieldDecorator('workshopName', {
                    rules: [{ required: true, message: '请输入工厂的名字' }],
                  })(
                    <Input placeholder="请输入工厂的名字" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.workshopContent} {...formItemLayout}>
                  {getFieldDecorator('workshopContent', {
                    rules: [{ required: true, message: '请输入研讨会内容' }],
                  })(
                    <Input placeholder="请输入研讨会内容" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.workshopStatus} {...formItemLayout}>
                  {getFieldDecorator('workshopStatus', {
                    rules: [{ required: true, message: '请输入车间的地位' }],
                  })(
                    <Input placeholder="请输入车间的地位" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.workshopEventDatetime} {...formItemLayout}>
                  {getFieldDecorator('workshopEventDatetime', {
                    rules: [{ required: true, message: '请输入车间活动日期时间' }],
                  })(
                    <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" placeholder="请输入车间活动日期时间" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.availableRegisterDatetime} {...formItemLayout}>
                  {getFieldDecorator('availableRegisterDatetime', {
                    rules: [{ required: true, message: '请输入可用的寄存器Datetime' }],
                  })(
                    <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" placeholder="请输入可用的寄存器Datetime" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.availableRegisterQuantity} {...formItemLayout}>
                  {getFieldDecorator('availableRegisterQuantity', {
                    rules: [{ required: true, message: '请输入可用的寄存器数量' }],
                  })(
                    <Input placeholder="请输入可用的寄存器数量" />
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
                  buttonTitle="车间图片"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'workshopImage')}
                  fileList={convertedImagesValues.workshopImage}
                />
              </Col>

            </Row>
          </Form>
        </Card>



        <Card title="关联" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.publishStore} {...formItemLayout}>
                  {getFieldDecorator('publishStoreId', {
                  	initialValue: tryinit('publishStore'),
                    rules: [{ required: true, message: '请输入发布商店' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidatePublishStoreList.candidates}
                    
                    
                    onSearch={this.handleCandidatePublishStoreSearch}
                    placeholder="请输入发布商店"
                    
                    disabled={!availableForEdit('publishStore')}
                  >
                  {candidatePublishStoreList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.storeName}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.publishEmployee} {...formItemLayout}>
                  {getFieldDecorator('publishEmployeeId', {
                  	initialValue: tryinit('publishEmployee'),
                    rules: [{ required: true, message: '请输入发布员工' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidatePublishEmployeeList.candidates}
                    
                    
                    onSearch={this.handleCandidatePublishEmployeeSearch}
                    placeholder="请输入发布员工"
                    
                    disabled={!availableForEdit('publishEmployee')}
                  >
                  {candidatePublishEmployeeList.candidates.map(item=>{
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
}))(Form.create()(WorkshopCreateForm))




