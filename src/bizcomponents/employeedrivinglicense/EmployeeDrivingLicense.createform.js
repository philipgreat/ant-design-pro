import React, { Component } from 'react'
import { AutoComplete, Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover,Switch } from 'antd'

import { connect } from 'dva'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
//import PictureEdit from '../../components/PictureEdit'
//import OSSPictureEdit from '../../components/PictureEdit'
import {ImageUpload} from '../../axios/tools'
import FooterToolbar from '../../components/FooterToolbar'
//import ImageUpload from '../../components/ImageUpload'
import styles from './EmployeeDrivingLicense.createform.less'
import {mapBackToImageValues, mapFromImageValues} from '../../axios/tools'
import GlobalComponents from '../../custcomponents';
const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input
const fieldLabels = {
  id: 'ID',
  employee: '员工',
  holderName: '姓名',
  licenseType: '准驾车型',
  licenseNumber: '驾驶证号码',
  expirationDate: '有效期至',
  image1: '图1',
  image2: '图2',
  image3: '图3',
  image4: '图4',
  image5: '图5',
}
const testValues = {};
/*
const testValues = {
  holderName: '李立国',
  licenseType: 'C1',
  licenseNumber: '510124199012010000',
  expirationDate: '2999-02-10',
  employeeId: 'VSCE000001',
}
*/
const imageURLPrefix = '//localhost:2090'


const imageKeys = [
  'image1',
  'image2',
  'image3',
  'image4',
  'image5',
]


class EmployeeDrivingLicenseCreateForm extends Component {
  state = {
    previewVisible: false,
    previewImage: '',
    convertedImagesValues: {},
  }

  componentDidMount() {
    // const { getFieldDecorator,setFieldsValue } = this.props.form
    const { setFieldsValue } = this.props.form
    //setFieldsValue(testValues)
      
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

  
  executeCandidateEmployeeSearch = (filterKey) =>{

    const {EmployeeDrivingLicenseService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = EmployeeDrivingLicenseService.requestCandidateEmployee("vehicleServiceCompanyEmployee", id, filterKey, pageNo);
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
          type: `${owner.type}/addEmployeeDrivingLicense`,
          payload: { id: owner.id, type: 'employeeDrivingLicense', parameters },
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
          type: `${owner.type}/addEmployeeDrivingLicense`,
          payload: { id: owner.id, type: 'employeeDrivingLicense', parameters, continueNext: true },
        })
      })
    }
    
    const goback = () => {
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/goback`,
        payload: { id: owner.id, type: 'employeeDrivingLicense' },
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
    

    
    const {candidateEmployeeList} = this.state
    if(!candidateEmployeeList){
      return (<div>等等</div>)
    }
    if(!candidateEmployeeList.candidates){
      return (<div>等等</div>)
    }   
    
    
    return (
      <PageHeaderLayout
        title="新建一个员工驾驶证"
        content="新建一个员工驾驶证"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.holderName}>
                  {getFieldDecorator('holderName', {
                    rules: [{ required: true, message: '请输入姓名' }],
                  })(
                    <Input placeholder="请输入请输入姓名string" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.licenseType}>
                  {getFieldDecorator('licenseType', {
                    rules: [{ required: true, message: '请输入准驾车型' }],
                  })(
                    <Input placeholder="请输入请输入准驾车型string" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.licenseNumber}>
                  {getFieldDecorator('licenseNumber', {
                    rules: [{ required: true, message: '请输入驾驶证号码' }],
                  })(
                    <Input placeholder="请输入请输入驾驶证号码string" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.expirationDate}>
                  {getFieldDecorator('expirationDate', {
                    rules: [{ required: true, message: '请输入有效期至' }],
                  })(
                    <Input placeholder="请输入请输入有效期至date" />
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
                  buttonTitle="图1"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'image1')}
                  fileList={convertedImagesValues.image1}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageUpload
                  buttonTitle="图2"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'image2')}
                  fileList={convertedImagesValues.image2}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageUpload
                  buttonTitle="图3"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'image3')}
                  fileList={convertedImagesValues.image3}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageUpload
                  buttonTitle="图4"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'image4')}
                  fileList={convertedImagesValues.image4}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageUpload
                  buttonTitle="图5"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'image5')}
                  fileList={convertedImagesValues.image5}
                />
              </Col>

            </Row>
          </Form>
        </Card>



        <Card title="关联" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.employee}>
                  {getFieldDecorator('employeeId', {
                    rules: [{ required: true, message: '请输入员工' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidateEmployeeList.candidates}
                    style={{ width: 200 }}
                    
                    onSearch={this.handleCandidateEmployeeSearch}
                    placeholder="请输入员工"
                  >
                  {candidateEmployeeList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.employeeName}(${item.id})`}</Option>);
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
}))(Form.create()(EmployeeDrivingLicenseCreateForm))




