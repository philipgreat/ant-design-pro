import React, { Component } from 'react'
import { AutoComplete, Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover,Switch } from 'antd'

import { connect } from 'dva'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
//import PictureEdit from '../../components/PictureEdit'
//import OSSPictureEdit from '../../components/PictureEdit'
import {ImageComponent} from '../../axios/tools'
import FooterToolbar from '../../components/FooterToolbar'
//import ImageUpload from '../../components/ImageUpload'
import styles from './ActionToken.createform.less'
import {mapBackToImageValues, mapFromImageValues} from '../../axios/tools'
import GlobalComponents from '../../custcomponents';
const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input
const fieldLabels = {
  id: 'ID',
  holderType: '支架类型',
  holderId: '持有人身份证',
  tokenCode: '标记代码',
  tokenQuantity: '令牌数量',
  startDate: '开始日期',
  endDate: '结束日期',
  userDomain: '用户域',
}
const testValues = {};
/*
const testValues = {
  holderType: 'Customer',
  holderId: 'C000001',
  tokenCode: 'BORROW',
  tokenQuantity: '86323',
  startDate: '1999-07-03 15:05:05',
  endDate: '2098-10-15 22:04:32',
  userDomainId: 'UD000001',
}
*/
const imageURLPrefix = '//localhost:2090'


const imageKeys = [
]


class ActionTokenCreateForm extends Component {
  state = {
    previewVisible: false,
    previewImage: '',
    convertedImagesValues: {},
  }

  componentDidMount() {
    // const { getFieldDecorator,setFieldsValue } = this.props.form
    const { setFieldsValue } = this.props.form
    //setFieldsValue(testValues)
      
    this.executeCandidateUserDomainSearch("")
    
 
    
    
    
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

  
  executeCandidateUserDomainSearch = (filterKey) =>{

    const {ActionTokenService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = ActionTokenService.requestCandidateUserDomain("userDomain", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateUserDomainList=>{
      this.setState({
        candidateUserDomainList
      })

    })

  }	 
  handleCandidateUserDomainSearch = (value) => {
    this.executeCandidateUserDomainSearch(value)
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
          type: `${owner.type}/addActionToken`,
          payload: { id: owner.id, type: 'actionToken', parameters },
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
          type: `${owner.type}/addActionToken`,
          payload: { id: owner.id, type: 'actionToken', parameters, continueNext: true },
        })
      })
    }
    
    const goback = () => {
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/goback`,
        payload: { id: owner.id, type: 'actionToken',listName:'行动令牌列表' },
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
    

    
    const {candidateUserDomainList} = this.state
    if(!candidateUserDomainList){
      return (<div>等等</div>)
    }
    if(!candidateUserDomainList.candidates){
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
        title="新建一个行动令牌"
        content="新建一个行动令牌"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.holderType} {...formItemLayout}>
                  {getFieldDecorator('holderType', {
                    rules: [{ required: true, message: '请输入支架类型' }],
                  })(
                    <Input placeholder="请输入支架类型" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.holderId} {...formItemLayout}>
                  {getFieldDecorator('holderId', {
                    rules: [{ required: true, message: '请输入持有人身份证' }],
                  })(
                    <Input placeholder="请输入持有人身份证" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.tokenCode} {...formItemLayout}>
                  {getFieldDecorator('tokenCode', {
                    rules: [{ required: true, message: '请输入标记代码' }],
                  })(
                    <Input placeholder="请输入标记代码" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.tokenQuantity} {...formItemLayout}>
                  {getFieldDecorator('tokenQuantity', {
                    rules: [{ required: true, message: '请输入令牌数量' }],
                  })(
                    <Input placeholder="请输入令牌数量" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.startDate} {...formItemLayout}>
                  {getFieldDecorator('startDate', {
                    rules: [{ required: true, message: '请输入开始日期' }],
                  })(
                    <DatePicker showTime format="YYYY-MM-DD HH:mm" minuteStep={5} placeholder="请输入开始日期" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.endDate} {...formItemLayout}>
                  {getFieldDecorator('endDate', {
                    rules: [{ required: true, message: '请输入结束日期' }],
                  })(
                    <DatePicker showTime format="YYYY-MM-DD HH:mm" minuteStep={5} placeholder="请输入结束日期" />
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
                <Form.Item label={fieldLabels.userDomain} {...formItemLayout}>
                  {getFieldDecorator('userDomainId', {
                  	initialValue: tryinit('userDomain'),
                    rules: [{ required: true, message: '请输入用户域' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidateUserDomainList.candidates}
                    
                    
                    onSearch={this.handleCandidateUserDomainSearch}
                    placeholder="请输入用户域"
                    
                    disabled={!availableForEdit('userDomain')}
                  >
                  {candidateUserDomainList.candidates.map(item=>{
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
}))(Form.create()(ActionTokenCreateForm))



