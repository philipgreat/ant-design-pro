import React, { Component } from 'react'
import { AutoComplete, Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover,Switch } from 'antd'

import { connect } from 'dva'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
//import PictureEdit from '../../components/PictureEdit'
//import OSSPictureEdit from '../../components/PictureEdit'
import {ImageComponent} from '../../axios/tools'
import FooterToolbar from '../../components/FooterToolbar'
//import ImageUpload from '../../components/ImageUpload'
import styles from './EncyclopediaItem.createform.less'
import {mapBackToImageValues, mapFromImageValues} from '../../axios/tools'
import GlobalComponents from '../../custcomponents';
const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input
const fieldLabels = {
  id: '序号',
  title: '标题',
  publishTime: '发布时间',
  content: '内容',
  community: '社区',
  homePage: '主页',
}
const testValues = {};
/*
const testValues = {
  title: '听力损失儿童回归的优点',
  publishTime: '2035-04-11',
  communityId: 'C000001',
  homePageId: 'HP000001',
  content: '多数听力损失儿童除了听力问题，其他的发展和一般孩子   并无明显差异，所以当他们经过特殊学校训练后，具备听和说的沟通能力时，   我们应该鼓励他们回归普通学校就读。回归能带给听力损失儿童哪些有益的方便   ',
}
*/
const imageURLPrefix = '//localhost:2090'


const imageKeys = [
]


class EncyclopediaItemCreateForm extends Component {
  state = {
    previewVisible: false,
    previewImage: '',
    convertedImagesValues: {},
  }

  componentDidMount() {
    // const { getFieldDecorator,setFieldsValue } = this.props.form
    const { setFieldsValue } = this.props.form
    //setFieldsValue(testValues)
      
    this.executeCandidateCommunitySearch("")
    
    
    this.executeCandidateHomePageSearch("")
    
 
    
    
    
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

  
  executeCandidateCommunitySearch = (filterKey) =>{

    const {EncyclopediaItemService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = EncyclopediaItemService.requestCandidateCommunity("community", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateCommunityList=>{
      this.setState({
        candidateCommunityList
      })

    })

  }	 
  handleCandidateCommunitySearch = (value) => {
    this.executeCandidateCommunitySearch(value)
  }

  executeCandidateHomePageSearch = (filterKey) =>{

    const {EncyclopediaItemService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = EncyclopediaItemService.requestCandidateHomePage("homePage", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateHomePageList=>{
      this.setState({
        candidateHomePageList
      })

    })

  }	 
  handleCandidateHomePageSearch = (value) => {
    this.executeCandidateHomePageSearch(value)
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
          type: `${owner.type}/addEncyclopediaItem`,
          payload: { id: owner.id, type: 'encyclopediaItem', parameters },
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
          type: `${owner.type}/addEncyclopediaItem`,
          payload: { id: owner.id, type: 'encyclopediaItem', parameters, continueNext: true },
        })
      })
    }
    
    const goback = () => {
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/goback`,
        payload: { id: owner.id, type: 'encyclopediaItem',listName:'百科全书条目列表' },
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
    

    
    const {candidateCommunityList} = this.state
    if(!candidateCommunityList){
      return (<div>等等</div>)
    }
    if(!candidateCommunityList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateHomePageList} = this.state
    if(!candidateHomePageList){
      return (<div>等等</div>)
    }
    if(!candidateHomePageList.candidates){
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
        title="新建一个百科全书条目"
        content="新建一个百科全书条目"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.title} {...formItemLayout}>
                  {getFieldDecorator('title', {
                    rules: [{ required: true, message: '请输入标题' }],
                  })(
                    <Input placeholder="请输入标题" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.publishTime} {...formItemLayout}>
                  {getFieldDecorator('publishTime', {
                    rules: [{ required: true, message: '请输入发布时间' }],
                  })(
                    <DatePicker format="YYYY-MM-DD" placeholder="请输入发布时间" />
                  )}
                </Form.Item>
              </Col>

            </Row>
          </Form>
        </Card>



       
        





        <Card title="内容" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>
              <Col lg={24} md={24} sm={24}>
                <Form.Item>
                  {getFieldDecorator('content', {
                    rules: [{ required: true, message: '请输入内容' }],
                  })(
                    <TextArea rows={4} placeholder="请输入请输入内容" />
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
                <Form.Item label={fieldLabels.community} {...formItemLayout}>
                  {getFieldDecorator('communityId', {
                  	initialValue: tryinit('community'),
                    rules: [{ required: true, message: '请输入社区' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidateCommunityList.candidates}
                    
                    
                    onSearch={this.handleCandidateCommunitySearch}
                    placeholder="请输入社区"
                    
                    disabled={!availableForEdit('community')}
                  >
                  {candidateCommunityList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.name}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.homePage} {...formItemLayout}>
                  {getFieldDecorator('homePageId', {
                  	initialValue: tryinit('homePage'),
                    rules: [{ required: true, message: '请输入主页' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidateHomePageList.candidates}
                    
                    
                    onSearch={this.handleCandidateHomePageSearch}
                    placeholder="请输入主页"
                    
                    disabled={!availableForEdit('homePage')}
                  >
                  {candidateHomePageList.candidates.map(item=>{
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
}))(Form.create()(EncyclopediaItemCreateForm))




