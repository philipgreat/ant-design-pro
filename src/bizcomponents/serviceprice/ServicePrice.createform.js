import React, { Component } from 'react'
import { AutoComplete, Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover,Switch } from 'antd'

import { connect } from 'dva'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
//import PictureEdit from '../../components/PictureEdit'
//import OSSPictureEdit from '../../components/PictureEdit'
import FooterToolbar from '../../components/FooterToolbar'
import ImageUpload from '../../components/ImageUpload'
import styles from './ServicePrice.createform.less'
import {mapBackToImageValues, mapFromImageValues} from '../../axios/tools'
import GlobalComponents from '../../custcomponents';
const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input
const fieldLabels = {
  id: 'ID',
  contract: '合同',
  availableService: '服务范围',
  product: '产品名称',
  serviceKey: '服务代码',
  serviceDescription: '服务描述',
  servicePriceType: '服务价格类型',
  basePriceValue: '服务价格',
  otherPriceValue: '后续服务价格',
  serviceEnabled: '服务使',
}
const testValues = {};
/*
const testValues = {
  serviceKey: 'VEHICLE_C2M_RECEIVE_IN_STORE',
  serviceDescription: '备注',
  servicePriceType: 'FixCost',
  basePriceValue: '10.00',
  otherPriceValue: '10.00',
  serviceEnabled: '0',
  contractId: 'C000001',
  availableServiceId: 'AS000001',
  productId: 'AP000001',
}
*/
const imageURLPrefix = '//localhost:2090'


const imageKeys = [
]


class ServicePriceCreateForm extends Component {
  state = {
    previewVisible: false,
    previewImage: '',
    convertedImagesValues: {},
  }

  componentDidMount() {
    // const { getFieldDecorator,setFieldsValue } = this.props.form
    const { setFieldsValue } = this.props.form
    //setFieldsValue(testValues)
      
    this.executeCandidateContractSearch("")
    
    
    this.executeCandidateAvailableServiceSearch("")
    
    
    this.executeCandidateProductSearch("")
    
 
    
    
    
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

  
  executeCandidateContractSearch = (filterKey) =>{

    const {ServicePriceService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = ServicePriceService.requestCandidateContract("contract", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateContractList=>{
      this.setState({
        candidateContractList
      })

    })

  }	 
  handleCandidateContractSearch = (value) => {
    this.executeCandidateContractSearch(value)
  }

  executeCandidateAvailableServiceSearch = (filterKey) =>{

    const {ServicePriceService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = ServicePriceService.requestCandidateAvailableService("availableService", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateAvailableServiceList=>{
      this.setState({
        candidateAvailableServiceList
      })

    })

  }	 
  handleCandidateAvailableServiceSearch = (value) => {
    this.executeCandidateAvailableServiceSearch(value)
  }

  executeCandidateProductSearch = (filterKey) =>{

    const {ServicePriceService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = ServicePriceService.requestCandidateProduct("availableProduct", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateProductList=>{
      this.setState({
        candidateProductList
      })

    })

  }	 
  handleCandidateProductSearch = (value) => {
    this.executeCandidateProductSearch(value)
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
          type: `${owner.type}/addServicePrice`,
          payload: { id: owner.id, type: 'servicePrice', parameters },
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
          type: `${owner.type}/addServicePrice`,
          payload: { id: owner.id, type: 'servicePrice', parameters, continueNext: true },
        })
      })
    }
    
    const goback = () => {
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/goback`,
        payload: { id: owner.id, type: 'servicePrice' },
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
    

    
    const {candidateContractList} = this.state
    if(!candidateContractList){
      return (<div>等等</div>)
    }
    if(!candidateContractList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateAvailableServiceList} = this.state
    if(!candidateAvailableServiceList){
      return (<div>等等</div>)
    }
    if(!candidateAvailableServiceList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateProductList} = this.state
    if(!candidateProductList){
      return (<div>等等</div>)
    }
    if(!candidateProductList.candidates){
      return (<div>等等</div>)
    }   
    
    
    return (
      <PageHeaderLayout
        title="新建一个服务价格"
        content="新建一个服务价格"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.serviceKey}>
                  {getFieldDecorator('serviceKey', {
                    rules: [{ required: true, message: '请输入服务代码' }],
                  })(
                    <Input placeholder="请输入请输入服务代码string" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.serviceDescription}>
                  {getFieldDecorator('serviceDescription', {
                    rules: [{ required: true, message: '请输入服务描述' }],
                  })(
                    <Input placeholder="请输入请输入服务描述string" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.servicePriceType}>
                  {getFieldDecorator('servicePriceType', {
                    rules: [{ required: true, message: '请输入服务价格类型' }],
                  })(
                    <Input placeholder="请输入请输入服务价格类型string" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.basePriceValue}>
                  {getFieldDecorator('basePriceValue', {
                    rules: [{ required: true, message: '请输入服务价格' }],
                  })(
                    <Input placeholder="请输入请输入服务价格double" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.otherPriceValue}>
                  {getFieldDecorator('otherPriceValue', {
                    rules: [{ required: true, message: '请输入后续服务价格' }],
                  })(
                    <Input placeholder="请输入请输入后续服务价格double" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.serviceEnabled}>
                  {getFieldDecorator('serviceEnabled', {
                    rules: [{ required: true, message: '请输入服务使' }],
                  })(
                    <Input placeholder="请输入请输入服务使bool" />
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
                <Form.Item label={fieldLabels.serviceEnabled}>
                  {getFieldDecorator('serviceEnabled', {
                    rules: [{ required: true, message: '请输入服务使' }],
                    valuePropName: 'checked'
                  })(
                    <Switch checkedChildren="是" unCheckedChildren="否"  placeholder="请输入服务使bool" />
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
                <Form.Item label={fieldLabels.contract}>
                  {getFieldDecorator('contractId', {
                    rules: [{ required: true, message: '请输入合同' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidateContractList.candidates}
                    style={{ width: 200 }}
                    
                    onSearch={this.handleCandidateContractSearch}
                    placeholder="请输入合同"
                  >
                  {candidateContractList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.platform}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.availableService}>
                  {getFieldDecorator('availableServiceId', {
                    rules: [{ required: true, message: '请输入服务范围' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidateAvailableServiceList.candidates}
                    style={{ width: 200 }}
                    
                    onSearch={this.handleCandidateAvailableServiceSearch}
                    placeholder="请输入服务范围"
                  >
                  {candidateAvailableServiceList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.serviceName}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.product}>
                  {getFieldDecorator('productId', {
                    rules: [{ required: true, message: '请输入产品名称' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidateProductList.candidates}
                    style={{ width: 200 }}
                    
                    onSearch={this.handleCandidateProductSearch}
                    placeholder="请输入产品名称"
                  >
                  {candidateProductList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.productName}(${item.id})`}</Option>);
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
}))(Form.create()(ServicePriceCreateForm))




