import React, { Component } from 'react'
import { AutoComplete, Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover,Switch } from 'antd'

import { connect } from 'dva'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
//import PictureEdit from '../../components/PictureEdit'
//import OSSPictureEdit from '../../components/PictureEdit'
import {ImageComponent} from '../../axios/tools'
import FooterToolbar from '../../components/FooterToolbar'
//import ImageUpload from '../../components/ImageUpload'
import styles from './Employee.createform.less'
import {mapBackToImageValues, mapFromImageValues} from '../../axios/tools'
import GlobalComponents from '../../custcomponents';
const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input
const fieldLabels = {
  id: '序号',
  company: '公司',
  title: '头衔',
  department: '部门',
  familyName: '姓',
  givenName: '名',
  email: '电子邮件',
  city: '城市',
  address: '地址',
  cellPhone: '手机',
  occupation: '职业',
  responsibleFor: '负责',
  currentSalaryGrade: '目前工资等级',
  salaryAccount: '工资账户',
  jobApplication: '工作申请',
  professionInterview: '专业面试',
  hrInterview: '人力资源部面试',
  offerApproval: '审批工作要约',
  offerAcceptance: '接受工作要约',
  employeeBoarding: '员工入职',
  termination: '雇佣终止',
  currentStatus: '当前状态',
}
const testValues = {};
/*
const testValues = {
  title: '程序员',
  familyName: '张',
  givenName: '文强',
  email: 'share@163.com',
  city: '北京',
  address: '学院路234号',
  cellPhone: '18677778888',
  salaryAccount: '6226 7788 9908 ',
  companyId: 'DCC000001',
  departmentId: 'LTD000001',
  occupationId: 'OT000001',
  responsibleForId: 'RT000001',
  currentSalaryGradeId: 'SG000001',
}
*/
const imageURLPrefix = '//localhost:2090'


const imageKeys = [
]


class EmployeeCreateForm extends Component {
  state = {
    previewVisible: false,
    previewImage: '',
    convertedImagesValues: {},
  }

  componentDidMount() {
    // const { getFieldDecorator,setFieldsValue } = this.props.form
    const { setFieldsValue } = this.props.form
    //setFieldsValue(testValues)
      
    this.executeCandidateCompanySearch("")
    
    
    this.executeCandidateDepartmentSearch("")
    
    
    this.executeCandidateOccupationSearch("")
    
    
    this.executeCandidateResponsibleForSearch("")
    
    
    this.executeCandidateCurrentSalaryGradeSearch("")
    
 
    
    
    
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

  
  executeCandidateCompanySearch = (filterKey) =>{

    const {EmployeeService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = EmployeeService.requestCandidateCompany("decorationCountryCenter", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateCompanyList=>{
      this.setState({
        candidateCompanyList
      })

    })

  }	 
  handleCandidateCompanySearch = (value) => {
    this.executeCandidateCompanySearch(value)
  }

  executeCandidateDepartmentSearch = (filterKey) =>{

    const {EmployeeService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = EmployeeService.requestCandidateDepartment("levelThreeDepartment", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateDepartmentList=>{
      this.setState({
        candidateDepartmentList
      })

    })

  }	 
  handleCandidateDepartmentSearch = (value) => {
    this.executeCandidateDepartmentSearch(value)
  }

  executeCandidateOccupationSearch = (filterKey) =>{

    const {EmployeeService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = EmployeeService.requestCandidateOccupation("occupationType", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateOccupationList=>{
      this.setState({
        candidateOccupationList
      })

    })

  }	 
  handleCandidateOccupationSearch = (value) => {
    this.executeCandidateOccupationSearch(value)
  }

  executeCandidateResponsibleForSearch = (filterKey) =>{

    const {EmployeeService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = EmployeeService.requestCandidateResponsibleFor("responsibilityType", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateResponsibleForList=>{
      this.setState({
        candidateResponsibleForList
      })

    })

  }	 
  handleCandidateResponsibleForSearch = (value) => {
    this.executeCandidateResponsibleForSearch(value)
  }

  executeCandidateCurrentSalaryGradeSearch = (filterKey) =>{

    const {EmployeeService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = EmployeeService.requestCandidateCurrentSalaryGrade("salaryGrade", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateCurrentSalaryGradeList=>{
      this.setState({
        candidateCurrentSalaryGradeList
      })

    })

  }	 
  handleCandidateCurrentSalaryGradeSearch = (value) => {
    this.executeCandidateCurrentSalaryGradeSearch(value)
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
          type: `${owner.type}/addEmployee`,
          payload: { id: owner.id, type: 'employee', parameters },
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
          type: `${owner.type}/addEmployee`,
          payload: { id: owner.id, type: 'employee', parameters, continueNext: true },
        })
      })
    }
    
    const goback = () => {
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/goback`,
        payload: { id: owner.id, type: 'employee' },
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
    

    
    const {candidateCompanyList} = this.state
    if(!candidateCompanyList){
      return (<div>等等</div>)
    }
    if(!candidateCompanyList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateDepartmentList} = this.state
    if(!candidateDepartmentList){
      return (<div>等等</div>)
    }
    if(!candidateDepartmentList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateOccupationList} = this.state
    if(!candidateOccupationList){
      return (<div>等等</div>)
    }
    if(!candidateOccupationList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateResponsibleForList} = this.state
    if(!candidateResponsibleForList){
      return (<div>等等</div>)
    }
    if(!candidateResponsibleForList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateCurrentSalaryGradeList} = this.state
    if(!candidateCurrentSalaryGradeList){
      return (<div>等等</div>)
    }
    if(!candidateCurrentSalaryGradeList.candidates){
      return (<div>等等</div>)
    }   
    
    
    return (
      <PageHeaderLayout
        title="新建一个员工"
        content="新建一个员工"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.title}>
                  {getFieldDecorator('title', {
                    rules: [{ required: true, message: '请输入头衔' }],
                  })(
                    <Input placeholder="请输入请输入头衔string" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.familyName}>
                  {getFieldDecorator('familyName', {
                    rules: [{ required: true, message: '请输入姓' }],
                  })(
                    <Input placeholder="请输入请输入姓string" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.givenName}>
                  {getFieldDecorator('givenName', {
                    rules: [{ required: true, message: '请输入名' }],
                  })(
                    <Input placeholder="请输入请输入名string" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.email}>
                  {getFieldDecorator('email', {
                    rules: [{ required: true, message: '请输入电子邮件' }],
                  })(
                    <Input placeholder="请输入请输入电子邮件string_email" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.city}>
                  {getFieldDecorator('city', {
                    rules: [{ required: true, message: '请输入城市' }],
                  })(
                    <Input placeholder="请输入请输入城市string" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.address}>
                  {getFieldDecorator('address', {
                    rules: [{ required: true, message: '请输入地址' }],
                  })(
                    <Input placeholder="请输入请输入地址string" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.cellPhone}>
                  {getFieldDecorator('cellPhone', {
                    rules: [{ required: true, message: '请输入手机' }],
                  })(
                    <Input placeholder="请输入请输入手机string_china_mobile_phone" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.salaryAccount}>
                  {getFieldDecorator('salaryAccount', {
                    rules: [{ required: true, message: '请输入工资账户' }],
                  })(
                    <Input placeholder="请输入请输入工资账户string" />
                  )}
                </Form.Item>
              </Col>

            </Row>
          </Form>
        </Card>



       
        









        <Card title="关联" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.company}>
                  {getFieldDecorator('companyId', {
                    rules: [{ required: true, message: '请输入公司' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidateCompanyList.candidates}
                    style={{ width: 200 }}
                    
                    onSearch={this.handleCandidateCompanySearch}
                    placeholder="请输入公司"
                  >
                  {candidateCompanyList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.name}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.department}>
                  {getFieldDecorator('departmentId', {
                    rules: [{ required: true, message: '请输入部门' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidateDepartmentList.candidates}
                    style={{ width: 200 }}
                    
                    onSearch={this.handleCandidateDepartmentSearch}
                    placeholder="请输入部门"
                  >
                  {candidateDepartmentList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.name}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.occupation}>
                  {getFieldDecorator('occupationId', {
                    rules: [{ required: true, message: '请输入职业' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidateOccupationList.candidates}
                    style={{ width: 200 }}
                    
                    onSearch={this.handleCandidateOccupationSearch}
                    placeholder="请输入职业"
                  >
                  {candidateOccupationList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.code}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.responsibleFor}>
                  {getFieldDecorator('responsibleForId', {
                    rules: [{ required: true, message: '请输入负责' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidateResponsibleForList.candidates}
                    style={{ width: 200 }}
                    
                    onSearch={this.handleCandidateResponsibleForSearch}
                    placeholder="请输入负责"
                  >
                  {candidateResponsibleForList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.code}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.currentSalaryGrade}>
                  {getFieldDecorator('currentSalaryGradeId', {
                    rules: [{ required: true, message: '请输入目前工资等级' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidateCurrentSalaryGradeList.candidates}
                    style={{ width: 200 }}
                    
                    onSearch={this.handleCandidateCurrentSalaryGradeSearch}
                    placeholder="请输入目前工资等级"
                  >
                  {candidateCurrentSalaryGradeList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.code}(${item.id})`}</Option>);
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
}))(Form.create()(EmployeeCreateForm))




