import React, { Component } from 'react'
import { AutoComplete, Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover,Switch } from 'antd'

import { connect } from 'dva'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
//import PictureEdit from '../../components/PictureEdit'
//import OSSPictureEdit from '../../components/PictureEdit'
import {ImageComponent} from '../../axios/tools'
import FooterToolbar from '../../components/FooterToolbar'
//import ImageUpload from '../../components/ImageUpload'
import styles from './FormField.createform.less'
import {mapBackToImageValues, mapFromImageValues} from '../../axios/tools'
import GlobalComponents from '../../custcomponents';
const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input
const fieldLabels = {
  id: 'ID',
  label: '标签',
  localeKey: '消息键值',
  parameterName: '参数名称',
  type: '类型',
  form: '形式',
  placeholder: '占位符',
  defaultValue: '默认值',
  description: '描述',
  fieldGroup: '字段组',
  minValue: '最小值',
  maxValue: '最大的价值',
  required: '要求',
  disabled: '禁用',
  customRendering: '自定义渲染',
  candidateValues: '候选人的价值观',
  suggestValues: '建议值',
}
const testValues = {};
/*
const testValues = {
  label: '姓名',
  localeKey: 'name',
  parameterName: 'name',
  type: 'text',
  placeholder: '姓名就是你身份证上的名字',
  defaultValue: '李亚青',
  description: '姓名就是你身份证上的名字',
  fieldGroup: '基础信息',
  minValue: 'maybe any value',
  maxValue: 'a value expression',
  candidateValues: '',
  suggestValues: '',
  formId: 'GF000001',
}
*/
const imageURLPrefix = '//localhost:2090'


const imageKeys = [
]


class FormFieldCreateForm extends Component {
  state = {
    previewVisible: false,
    previewImage: '',
    convertedImagesValues: {},
  }

  componentDidMount() {
    // const { getFieldDecorator,setFieldsValue } = this.props.form
    const { setFieldsValue } = this.props.form
    //setFieldsValue(testValues)
      
    this.executeCandidateFormSearch("")
    
 
    
    
    
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

  
  executeCandidateFormSearch = (filterKey) =>{

    const {FormFieldService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = FormFieldService.requestCandidateForm("genericForm", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateFormList=>{
      this.setState({
        candidateFormList
      })

    })

  }	 
  handleCandidateFormSearch = (value) => {
    this.executeCandidateFormSearch(value)
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
          type: `${owner.type}/addFormField`,
          payload: { id: owner.id, type: 'formField', parameters },
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
          type: `${owner.type}/addFormField`,
          payload: { id: owner.id, type: 'formField', parameters, continueNext: true },
        })
      })
    }
    
    const goback = () => {
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/goback`,
        payload: { id: owner.id, type: 'formField',listName:'表单字段列表' },
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
    

    
    const {candidateFormList} = this.state
    if(!candidateFormList){
      return (<div>等等</div>)
    }
    if(!candidateFormList.candidates){
      return (<div>等等</div>)
    }   
    
    
    return (
      <PageHeaderLayout
        title="新建一个表单字段"
        content="新建一个表单字段"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.label}>
                  {getFieldDecorator('label', {
                    rules: [{ required: true, message: '请输入标签' }],
                  })(
                    <Input placeholder="请输入请输入标签string" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.localeKey}>
                  {getFieldDecorator('localeKey', {
                    rules: [{ required: true, message: '请输入消息键值' }],
                  })(
                    <Input placeholder="请输入请输入消息键值string" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.parameterName}>
                  {getFieldDecorator('parameterName', {
                    rules: [{ required: true, message: '请输入参数名称' }],
                  })(
                    <Input placeholder="请输入请输入参数名称string" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.type}>
                  {getFieldDecorator('type', {
                    rules: [{ required: true, message: '请输入类型' }],
                  })(
                    <Input placeholder="请输入请输入类型string" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.placeholder}>
                  {getFieldDecorator('placeholder', {
                    rules: [{ required: true, message: '请输入占位符' }],
                  })(
                    <Input placeholder="请输入请输入占位符string" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.defaultValue}>
                  {getFieldDecorator('defaultValue', {
                    rules: [{ required: true, message: '请输入默认值' }],
                  })(
                    <Input placeholder="请输入请输入默认值string" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.description}>
                  {getFieldDecorator('description', {
                    rules: [{ required: true, message: '请输入描述' }],
                  })(
                    <Input placeholder="请输入请输入描述string" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.fieldGroup}>
                  {getFieldDecorator('fieldGroup', {
                    rules: [{ required: true, message: '请输入字段组' }],
                  })(
                    <Input placeholder="请输入请输入字段组string" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.minValue}>
                  {getFieldDecorator('minValue', {
                    rules: [{ required: true, message: '请输入最小值' }],
                  })(
                    <Input placeholder="请输入请输入最小值string" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.maxValue}>
                  {getFieldDecorator('maxValue', {
                    rules: [{ required: true, message: '请输入最大的价值' }],
                  })(
                    <Input placeholder="请输入请输入最大的价值string" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.candidateValues}>
                  {getFieldDecorator('candidateValues', {
                    rules: [{ required: true, message: '请输入候选人的价值观' }],
                  })(
                    <Input placeholder="请输入请输入候选人的价值观string" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.suggestValues}>
                  {getFieldDecorator('suggestValues', {
                    rules: [{ required: true, message: '请输入建议值' }],
                  })(
                    <Input placeholder="请输入请输入建议值string" />
                  )}
                </Form.Item>
              </Col>

            </Row>
          </Form>
        </Card>



        
        <Card title="设置" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
            

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.required}>
                  {getFieldDecorator('required', {
                    rules: [{ required: true, message: '请输入要求' }],
                    valuePropName: 'checked'
                  })(
                    <Switch checkedChildren="是" unCheckedChildren="否"  placeholder="请输入要求bool" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.disabled}>
                  {getFieldDecorator('disabled', {
                    rules: [{ required: true, message: '请输入禁用' }],
                    valuePropName: 'checked'
                  })(
                    <Switch checkedChildren="是" unCheckedChildren="否"  placeholder="请输入禁用bool" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.customRendering}>
                  {getFieldDecorator('customRendering', {
                    rules: [{ required: true, message: '请输入自定义渲染' }],
                    valuePropName: 'checked'
                  })(
                    <Switch checkedChildren="是" unCheckedChildren="否"  placeholder="请输入自定义渲染bool" />
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
                <Form.Item label={fieldLabels.form}>
                  {getFieldDecorator('formId', {
                    rules: [{ required: true, message: '请输入形式' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidateFormList.candidates}
                    style={{ width: 200 }}
                    
                    onSearch={this.handleCandidateFormSearch}
                    placeholder="请输入形式"
                  >
                  {candidateFormList.candidates.map(item=>{
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
}))(Form.create()(FormFieldCreateForm))




