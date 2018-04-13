import React, { Component } from 'react'
import { AutoComplete, Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover,Switch } from 'antd'

import { connect } from 'dva'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
//import PictureEdit from '../../components/PictureEdit'
//import OSSPictureEdit from '../../components/PictureEdit'
import FooterToolbar from '../../components/FooterToolbar'
import ImageUpload from '../../components/ImageUpload'
import styles from './HandOverChecklistResult.createform.less'
import {mapBackToImageValues, mapFromImageValues} from '../../axios/tools'
import GlobalComponents from '../../custcomponents';
const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input
const fieldLabels = {
  id: 'ID',
  handOverCheckItemName: '检查项名称',
  checkItemDescription: '检查项目描述',
  handOverCheckResult: '检车项结果',
  handOverCheckComment: '检查项意见',
  handOverCheckEvidenceImage1: '凭证图片1',
  handOverCheckEvidenceImage2: '凭证图片2',
  handOverCheckEvidenceImage3: '凭证图片3',
  handOverCheckEvidenceImage4: '凭证图片4',
  handOverCheckEvidenceImage5: '凭证图片5',
  availableHandOverItem: '交接检查项',
  serviceTypeVehicleC2m: '收车服务',
  serviceTypeVehicleM2m: '移车服务',
  serviceTypeVehicleM2c: '还车服务',
  serviceTypeFileC2m: '收件服务',
  serviceTypeFileM2m: '移件服务',
  serviceTypeFileM2c: '还件服务',
}
const testValues = {};
/*
const testValues = {
  handOverCheckItemName: '刹车是否完好?',
  checkItemDescription: '这是一个测试文本，目前只包括普通的字符，等会儿测试下特殊字符。
第一个要测试的是冒号：就是 :
第二个是逗号：就是 ,
第三个是单引号：就是 '
第四个是双引号：就是 "',
  handOverCheckResult: '通过',
  handOverCheckComment: '这是一个测试文本，目前只包括普通的字符，等会儿测试下特殊字符。
第一个要测试的是冒号：就是 :
第二个是逗号：就是 ,
第三个是单引号：就是 '
第四个是双引号：就是 "',
  availableHandOverItemId: 'AHOI000001',
  serviceTypeVehicleC2mId: 'SVMC000001',
  serviceTypeVehicleM2mId: 'SVMM000001',
  serviceTypeVehicleM2cId: 'SVMM000001',
  serviceTypeFileC2mId: 'SFMC000001',
  serviceTypeFileM2mId: 'SFMM000001',
  serviceTypeFileM2cId: 'SFMM000001',
}
*/
const imageURLPrefix = '//localhost:2090'


const imageKeys = [
  'handOverCheckEvidenceImage1',
  'handOverCheckEvidenceImage2',
  'handOverCheckEvidenceImage3',
  'handOverCheckEvidenceImage4',
  'handOverCheckEvidenceImage5',
]


class HandOverChecklistResultCreateForm extends Component {
  state = {
    previewVisible: false,
    previewImage: '',
    convertedImagesValues: {},
  }

  componentDidMount() {
    // const { getFieldDecorator,setFieldsValue } = this.props.form
    const { setFieldsValue } = this.props.form
    //setFieldsValue(testValues)
      
    this.executeCandidateAvailableHandOverItemSearch("")
    
    
    this.executeCandidateServiceTypeVehicleC2mSearch("")
    
    
    this.executeCandidateServiceTypeVehicleM2mSearch("")
    
    
    this.executeCandidateServiceTypeVehicleM2cSearch("")
    
    
    this.executeCandidateServiceTypeFileC2mSearch("")
    
    
    this.executeCandidateServiceTypeFileM2mSearch("")
    
    
    this.executeCandidateServiceTypeFileM2cSearch("")
    
 
    
    
    
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

  
  executeCandidateAvailableHandOverItemSearch = (filterKey) =>{

    const {HandOverChecklistResultService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = HandOverChecklistResultService.requestCandidateAvailableHandOverItem("availableHandOverItem", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateAvailableHandOverItemList=>{
      this.setState({
        candidateAvailableHandOverItemList
      })

    })

  }	 
  handleCandidateAvailableHandOverItemSearch = (value) => {
    this.executeCandidateAvailableHandOverItemSearch(value)
  }

  executeCandidateServiceTypeVehicleC2mSearch = (filterKey) =>{

    const {HandOverChecklistResultService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = HandOverChecklistResultService.requestCandidateServiceTypeVehicleC2m("serviceVehicleMovementC2m", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateServiceTypeVehicleC2mList=>{
      this.setState({
        candidateServiceTypeVehicleC2mList
      })

    })

  }	 
  handleCandidateServiceTypeVehicleC2mSearch = (value) => {
    this.executeCandidateServiceTypeVehicleC2mSearch(value)
  }

  executeCandidateServiceTypeVehicleM2mSearch = (filterKey) =>{

    const {HandOverChecklistResultService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = HandOverChecklistResultService.requestCandidateServiceTypeVehicleM2m("serviceVehicleMovementM2m", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateServiceTypeVehicleM2mList=>{
      this.setState({
        candidateServiceTypeVehicleM2mList
      })

    })

  }	 
  handleCandidateServiceTypeVehicleM2mSearch = (value) => {
    this.executeCandidateServiceTypeVehicleM2mSearch(value)
  }

  executeCandidateServiceTypeVehicleM2cSearch = (filterKey) =>{

    const {HandOverChecklistResultService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = HandOverChecklistResultService.requestCandidateServiceTypeVehicleM2c("serviceVehicleMovementM2c", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateServiceTypeVehicleM2cList=>{
      this.setState({
        candidateServiceTypeVehicleM2cList
      })

    })

  }	 
  handleCandidateServiceTypeVehicleM2cSearch = (value) => {
    this.executeCandidateServiceTypeVehicleM2cSearch(value)
  }

  executeCandidateServiceTypeFileC2mSearch = (filterKey) =>{

    const {HandOverChecklistResultService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = HandOverChecklistResultService.requestCandidateServiceTypeFileC2m("serviceFileMovementC2m", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateServiceTypeFileC2mList=>{
      this.setState({
        candidateServiceTypeFileC2mList
      })

    })

  }	 
  handleCandidateServiceTypeFileC2mSearch = (value) => {
    this.executeCandidateServiceTypeFileC2mSearch(value)
  }

  executeCandidateServiceTypeFileM2mSearch = (filterKey) =>{

    const {HandOverChecklistResultService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = HandOverChecklistResultService.requestCandidateServiceTypeFileM2m("serviceFileMovementM2m", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateServiceTypeFileM2mList=>{
      this.setState({
        candidateServiceTypeFileM2mList
      })

    })

  }	 
  handleCandidateServiceTypeFileM2mSearch = (value) => {
    this.executeCandidateServiceTypeFileM2mSearch(value)
  }

  executeCandidateServiceTypeFileM2cSearch = (filterKey) =>{

    const {HandOverChecklistResultService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = HandOverChecklistResultService.requestCandidateServiceTypeFileM2c("serviceFileMovementM2c", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateServiceTypeFileM2cList=>{
      this.setState({
        candidateServiceTypeFileM2cList
      })

    })

  }	 
  handleCandidateServiceTypeFileM2cSearch = (value) => {
    this.executeCandidateServiceTypeFileM2cSearch(value)
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
          type: `${owner.type}/addHandOverChecklistResult`,
          payload: { id: owner.id, type: 'handOverChecklistResult', parameters },
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
          type: `${owner.type}/addHandOverChecklistResult`,
          payload: { id: owner.id, type: 'handOverChecklistResult', parameters, continueNext: true },
        })
      })
    }
    
    const goback = () => {
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/goback`,
        payload: { id: owner.id, type: 'handOverChecklistResult' },
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
    

    
    const {candidateAvailableHandOverItemList} = this.state
    if(!candidateAvailableHandOverItemList){
      return (<div>等等</div>)
    }
    if(!candidateAvailableHandOverItemList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateServiceTypeVehicleC2mList} = this.state
    if(!candidateServiceTypeVehicleC2mList){
      return (<div>等等</div>)
    }
    if(!candidateServiceTypeVehicleC2mList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateServiceTypeVehicleM2mList} = this.state
    if(!candidateServiceTypeVehicleM2mList){
      return (<div>等等</div>)
    }
    if(!candidateServiceTypeVehicleM2mList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateServiceTypeVehicleM2cList} = this.state
    if(!candidateServiceTypeVehicleM2cList){
      return (<div>等等</div>)
    }
    if(!candidateServiceTypeVehicleM2cList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateServiceTypeFileC2mList} = this.state
    if(!candidateServiceTypeFileC2mList){
      return (<div>等等</div>)
    }
    if(!candidateServiceTypeFileC2mList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateServiceTypeFileM2mList} = this.state
    if(!candidateServiceTypeFileM2mList){
      return (<div>等等</div>)
    }
    if(!candidateServiceTypeFileM2mList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateServiceTypeFileM2cList} = this.state
    if(!candidateServiceTypeFileM2cList){
      return (<div>等等</div>)
    }
    if(!candidateServiceTypeFileM2cList.candidates){
      return (<div>等等</div>)
    }   
    
    
    return (
      <PageHeaderLayout
        title="新建一个交接检查结果"
        content="新建一个交接检查结果"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.handOverCheckItemName}>
                  {getFieldDecorator('handOverCheckItemName', {
                    rules: [{ required: true, message: '请输入检查项名称' }],
                  })(
                    <Input placeholder="请输入请输入检查项名称string" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.checkItemDescription}>
                  {getFieldDecorator('checkItemDescription', {
                    rules: [{ required: true, message: '请输入检查项目描述' }],
                  })(
                    <Input placeholder="请输入请输入检查项目描述string_longtext" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.handOverCheckResult}>
                  {getFieldDecorator('handOverCheckResult', {
                    rules: [{ required: true, message: '请输入检车项结果' }],
                  })(
                    <Input placeholder="请输入请输入检车项结果string" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.handOverCheckComment}>
                  {getFieldDecorator('handOverCheckComment', {
                    rules: [{ required: true, message: '请输入检查项意见' }],
                  })(
                    <Input placeholder="请输入请输入检查项意见string_longtext" />
                  )}
                </Form.Item>
              </Col>

            </Row>
          </Form>
        </Card>



       
        







        <Card title="附件" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>

              <Col lg={6} md={12} sm={24}>
                <ImageUpload
                  buttonTitle="凭证图片1"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'handOverCheckEvidenceImage1')}
                  fileList={convertedImagesValues.handOverCheckEvidenceImage1}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageUpload
                  buttonTitle="凭证图片2"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'handOverCheckEvidenceImage2')}
                  fileList={convertedImagesValues.handOverCheckEvidenceImage2}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageUpload
                  buttonTitle="凭证图片3"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'handOverCheckEvidenceImage3')}
                  fileList={convertedImagesValues.handOverCheckEvidenceImage3}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageUpload
                  buttonTitle="凭证图片4"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'handOverCheckEvidenceImage4')}
                  fileList={convertedImagesValues.handOverCheckEvidenceImage4}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageUpload
                  buttonTitle="凭证图片5"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'handOverCheckEvidenceImage5')}
                  fileList={convertedImagesValues.handOverCheckEvidenceImage5}
                />
              </Col>

            </Row>
          </Form>
        </Card>



        <Card title="关联" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.availableHandOverItem}>
                  {getFieldDecorator('availableHandOverItemId', {
                    rules: [{ required: true, message: '请输入交接检查项' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidateAvailableHandOverItemList.candidates}
                    style={{ width: 200 }}
                    
                    onSearch={this.handleCandidateAvailableHandOverItemSearch}
                    placeholder="请输入交接检查项"
                  >
                  {candidateAvailableHandOverItemList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.checkItemName}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.serviceTypeVehicleC2m}>
                  {getFieldDecorator('serviceTypeVehicleC2mId', {
                    rules: [{ required: true, message: '请输入收车服务' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidateServiceTypeVehicleC2mList.candidates}
                    style={{ width: 200 }}
                    
                    onSearch={this.handleCandidateServiceTypeVehicleC2mSearch}
                    placeholder="请输入收车服务"
                  >
                  {candidateServiceTypeVehicleC2mList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.serviceStatus}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.serviceTypeVehicleM2m}>
                  {getFieldDecorator('serviceTypeVehicleM2mId', {
                    rules: [{ required: true, message: '请输入移车服务' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidateServiceTypeVehicleM2mList.candidates}
                    style={{ width: 200 }}
                    
                    onSearch={this.handleCandidateServiceTypeVehicleM2mSearch}
                    placeholder="请输入移车服务"
                  >
                  {candidateServiceTypeVehicleM2mList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.serviceStatus}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.serviceTypeVehicleM2c}>
                  {getFieldDecorator('serviceTypeVehicleM2cId', {
                    rules: [{ required: true, message: '请输入还车服务' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidateServiceTypeVehicleM2cList.candidates}
                    style={{ width: 200 }}
                    
                    onSearch={this.handleCandidateServiceTypeVehicleM2cSearch}
                    placeholder="请输入还车服务"
                  >
                  {candidateServiceTypeVehicleM2cList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.serviceStatus}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.serviceTypeFileC2m}>
                  {getFieldDecorator('serviceTypeFileC2mId', {
                    rules: [{ required: true, message: '请输入收件服务' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidateServiceTypeFileC2mList.candidates}
                    style={{ width: 200 }}
                    
                    onSearch={this.handleCandidateServiceTypeFileC2mSearch}
                    placeholder="请输入收件服务"
                  >
                  {candidateServiceTypeFileC2mList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.serviceStatus}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.serviceTypeFileM2m}>
                  {getFieldDecorator('serviceTypeFileM2mId', {
                    rules: [{ required: true, message: '请输入移件服务' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidateServiceTypeFileM2mList.candidates}
                    style={{ width: 200 }}
                    
                    onSearch={this.handleCandidateServiceTypeFileM2mSearch}
                    placeholder="请输入移件服务"
                  >
                  {candidateServiceTypeFileM2mList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.serviceStatus}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.serviceTypeFileM2c}>
                  {getFieldDecorator('serviceTypeFileM2cId', {
                    rules: [{ required: true, message: '请输入还件服务' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidateServiceTypeFileM2cList.candidates}
                    style={{ width: 200 }}
                    
                    onSearch={this.handleCandidateServiceTypeFileM2cSearch}
                    placeholder="请输入还件服务"
                  >
                  {candidateServiceTypeFileM2cList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.serviceStatus}(${item.id})`}</Option>);
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
}))(Form.create()(HandOverChecklistResultCreateForm))




