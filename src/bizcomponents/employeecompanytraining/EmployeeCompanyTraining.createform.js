import React, { Component } from 'react'
import { AutoComplete, Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover,Switch } from 'antd'

import { connect } from 'dva'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
//import PictureEdit from '../../components/PictureEdit'
//import OSSPictureEdit from '../../components/PictureEdit'
import {ImageComponent} from '../../axios/tools'
import FooterToolbar from '../../components/FooterToolbar'
//import ImageUpload from '../../components/ImageUpload'
import styles from './EmployeeCompanyTraining.createform.less'
import {mapBackToImageValues, mapFromImageValues} from '../../axios/tools'
import GlobalComponents from '../../custcomponents';
const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input
const fieldLabels = {
  id: '序号',
  employee: '员工',
  training: '训练',
  scoring: '评分',
  currentStatus: '当前状态',
}
const testValues = {};
/*
const testValues = {
  employeeId: 'E000001',
  trainingId: 'CT000001',
}
*/
const imageURLPrefix = '//localhost:2090'


const imageKeys = [
]


class EmployeeCompanyTrainingCreateForm extends Component {
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
    
    
    this.executeCandidateTrainingSearch("")
    
 
    
    
    
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

    const {EmployeeCompanyTrainingService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = EmployeeCompanyTrainingService.requestCandidateEmployee("employee", id, filterKey, pageNo);
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

  executeCandidateTrainingSearch = (filterKey) =>{

    const {EmployeeCompanyTrainingService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = EmployeeCompanyTrainingService.requestCandidateTraining("companyTraining", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateTrainingList=>{
      this.setState({
        candidateTrainingList
      })

    })

  }	 
  handleCandidateTrainingSearch = (value) => {
    this.executeCandidateTrainingSearch(value)
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
          type: `${owner.type}/addEmployeeCompanyTraining`,
          payload: { id: owner.id, type: 'employeeCompanyTraining', parameters },
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
          type: `${owner.type}/addEmployeeCompanyTraining`,
          payload: { id: owner.id, type: 'employeeCompanyTraining', parameters, continueNext: true },
        })
      })
    }
    
    const goback = () => {
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/goback`,
        payload: { id: owner.id, type: 'employeeCompanyTraining' },
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
    
    
    const {candidateTrainingList} = this.state
    if(!candidateTrainingList){
      return (<div>等等</div>)
    }
    if(!candidateTrainingList.candidates){
      return (<div>等等</div>)
    }   
    
    
    return (
      <PageHeaderLayout
        title="新建一个员工参与的公司培训"
        content="新建一个员工参与的公司培训"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>

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
                <Form.Item label={fieldLabels.training}>
                  {getFieldDecorator('trainingId', {
                    rules: [{ required: true, message: '请输入训练' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidateTrainingList.candidates}
                    style={{ width: 200 }}
                    
                    onSearch={this.handleCandidateTrainingSearch}
                    placeholder="请输入训练"
                  >
                  {candidateTrainingList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.title}(${item.id})`}</Option>);
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
}))(Form.create()(EmployeeCompanyTrainingCreateForm))




