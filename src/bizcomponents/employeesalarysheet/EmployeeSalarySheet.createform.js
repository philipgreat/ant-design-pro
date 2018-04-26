import React, { Component } from 'react'
import { AutoComplete, Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover,Switch } from 'antd'

import { connect } from 'dva'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
//import PictureEdit from '../../components/PictureEdit'
//import OSSPictureEdit from '../../components/PictureEdit'
import {ImageComponent} from '../../axios/tools'
import FooterToolbar from '../../components/FooterToolbar'
//import ImageUpload from '../../components/ImageUpload'
import styles from './EmployeeSalarySheet.createform.less'
import {mapBackToImageValues, mapFromImageValues} from '../../axios/tools'
import GlobalComponents from '../../custcomponents';
const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input
const fieldLabels = {
  id: '序号',
  employee: '员工',
  currentSalaryGrade: '目前工资等级',
  baseSalary: '基本工资',
  bonus: '奖金',
  reward: '奖励',
  personalTax: '个人所得税',
  socialSecurity: '社会保险',
  housingFound: '住房公积金',
  jobInsurance: '失业保险',
  payingOff: '工资支付',
  currentStatus: '当前状态',
}
const testValues = {};
/*
const testValues = {
  baseSalary: '2632.44',
  bonus: '944.36',
  reward: '818.69',
  personalTax: '756.87',
  socialSecurity: '881.61',
  housingFound: '980.28',
  jobInsurance: '8.72',
  employeeId: 'E000001',
  currentSalaryGradeId: 'SG000001',
}
*/
const imageURLPrefix = '//localhost:2090'


const imageKeys = [
]


class EmployeeSalarySheetCreateForm extends Component {
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

  
  executeCandidateEmployeeSearch = (filterKey) =>{

    const {EmployeeSalarySheetService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = EmployeeSalarySheetService.requestCandidateEmployee("employee", id, filterKey, pageNo);
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

  executeCandidateCurrentSalaryGradeSearch = (filterKey) =>{

    const {EmployeeSalarySheetService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = EmployeeSalarySheetService.requestCandidateCurrentSalaryGrade("salaryGrade", id, filterKey, pageNo);
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
          type: `${owner.type}/addEmployeeSalarySheet`,
          payload: { id: owner.id, type: 'employeeSalarySheet', parameters },
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
          type: `${owner.type}/addEmployeeSalarySheet`,
          payload: { id: owner.id, type: 'employeeSalarySheet', parameters, continueNext: true },
        })
      })
    }
    
    const goback = () => {
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/goback`,
        payload: { id: owner.id, type: 'employeeSalarySheet' },
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
    
    
    const {candidateCurrentSalaryGradeList} = this.state
    if(!candidateCurrentSalaryGradeList){
      return (<div>等等</div>)
    }
    if(!candidateCurrentSalaryGradeList.candidates){
      return (<div>等等</div>)
    }   
    
    
    return (
      <PageHeaderLayout
        title="新建一个工资单"
        content="新建一个工资单"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.baseSalary}>
                  {getFieldDecorator('baseSalary', {
                    rules: [{ required: true, message: '请输入基本工资' }],
                  })(
                    <Input placeholder="请输入请输入基本工资money" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.bonus}>
                  {getFieldDecorator('bonus', {
                    rules: [{ required: true, message: '请输入奖金' }],
                  })(
                    <Input placeholder="请输入请输入奖金money" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.reward}>
                  {getFieldDecorator('reward', {
                    rules: [{ required: true, message: '请输入奖励' }],
                  })(
                    <Input placeholder="请输入请输入奖励money" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.personalTax}>
                  {getFieldDecorator('personalTax', {
                    rules: [{ required: true, message: '请输入个人所得税' }],
                  })(
                    <Input placeholder="请输入请输入个人所得税money" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.socialSecurity}>
                  {getFieldDecorator('socialSecurity', {
                    rules: [{ required: true, message: '请输入社会保险' }],
                  })(
                    <Input placeholder="请输入请输入社会保险money" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.housingFound}>
                  {getFieldDecorator('housingFound', {
                    rules: [{ required: true, message: '请输入住房公积金' }],
                  })(
                    <Input placeholder="请输入请输入住房公积金money" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.jobInsurance}>
                  {getFieldDecorator('jobInsurance', {
                    rules: [{ required: true, message: '请输入失业保险' }],
                  })(
                    <Input placeholder="请输入请输入失业保险money" />
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
                return (<Option key={item.id}>{`${item.title}(${item.id})`}</Option>);
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
}))(Form.create()(EmployeeSalarySheetCreateForm))




