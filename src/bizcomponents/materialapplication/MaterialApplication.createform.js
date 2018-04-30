import React, { Component } from 'react'
import { AutoComplete, Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover,Switch } from 'antd'

import { connect } from 'dva'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
//import PictureEdit from '../../components/PictureEdit'
//import OSSPictureEdit from '../../components/PictureEdit'
import {ImageComponent} from '../../axios/tools'
import FooterToolbar from '../../components/FooterToolbar'
//import ImageUpload from '../../components/ImageUpload'
import styles from './MaterialApplication.createform.less'
import {mapBackToImageValues, mapFromImageValues} from '../../axios/tools'
import GlobalComponents from '../../custcomponents';
const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input
const fieldLabels = {
  id: 'ID',
  name: '名称',
  material: '材料',
  quantity: '数量',
  productPart: '产品零件',
}
const testValues = {};
/*
const testValues = {
  name: '用于盖子的物料',
  quantity: '1',
  materialId: 'M000001',
  productPartId: 'PP000001',
}
*/
const imageURLPrefix = '//localhost:2090'


const imageKeys = [
]


class MaterialApplicationCreateForm extends Component {
  state = {
    previewVisible: false,
    previewImage: '',
    convertedImagesValues: {},
  }

  componentDidMount() {
    // const { getFieldDecorator,setFieldsValue } = this.props.form
    const { setFieldsValue } = this.props.form
    //setFieldsValue(testValues)
      
    this.executeCandidateMaterialSearch("")
    
    
    this.executeCandidateProductPartSearch("")
    
 
    
    
    
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

  
  executeCandidateMaterialSearch = (filterKey) =>{

    const {MaterialApplicationService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = MaterialApplicationService.requestCandidateMaterial("material", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateMaterialList=>{
      this.setState({
        candidateMaterialList
      })

    })

  }	 
  handleCandidateMaterialSearch = (value) => {
    this.executeCandidateMaterialSearch(value)
  }

  executeCandidateProductPartSearch = (filterKey) =>{

    const {MaterialApplicationService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = MaterialApplicationService.requestCandidateProductPart("productPart", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateProductPartList=>{
      this.setState({
        candidateProductPartList
      })

    })

  }	 
  handleCandidateProductPartSearch = (value) => {
    this.executeCandidateProductPartSearch(value)
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
          type: `${owner.type}/addMaterialApplication`,
          payload: { id: owner.id, type: 'materialApplication', parameters },
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
          type: `${owner.type}/addMaterialApplication`,
          payload: { id: owner.id, type: 'materialApplication', parameters, continueNext: true },
        })
      })
    }
    
    const goback = () => {
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/goback`,
        payload: { id: owner.id, type: 'materialApplication' },
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
    

    
    const {candidateMaterialList} = this.state
    if(!candidateMaterialList){
      return (<div>等等</div>)
    }
    if(!candidateMaterialList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateProductPartList} = this.state
    if(!candidateProductPartList){
      return (<div>等等</div>)
    }
    if(!candidateProductPartList.candidates){
      return (<div>等等</div>)
    }   
    
    
    return (
      <PageHeaderLayout
        title="新建一个材料的应用"
        content="新建一个材料的应用"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.name}>
                  {getFieldDecorator('name', {
                    rules: [{ required: true, message: '请输入名称' }],
                  })(
                    <Input placeholder="请输入请输入名称string" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.quantity}>
                  {getFieldDecorator('quantity', {
                    rules: [{ required: true, message: '请输入数量' }],
                  })(
                    <Input placeholder="请输入请输入数量int" />
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
                <Form.Item label={fieldLabels.material}>
                  {getFieldDecorator('materialId', {
                    rules: [{ required: true, message: '请输入材料' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidateMaterialList.candidates}
                    style={{ width: 200 }}
                    
                    onSearch={this.handleCandidateMaterialSearch}
                    placeholder="请输入材料"
                  >
                  {candidateMaterialList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.name}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.productPart}>
                  {getFieldDecorator('productPartId', {
                    rules: [{ required: true, message: '请输入产品零件' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidateProductPartList.candidates}
                    style={{ width: 200 }}
                    
                    onSearch={this.handleCandidateProductPartSearch}
                    placeholder="请输入产品零件"
                  >
                  {candidateProductPartList.candidates.map(item=>{
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
}))(Form.create()(MaterialApplicationCreateForm))




