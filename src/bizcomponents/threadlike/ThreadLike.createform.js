import React, { Component } from 'react'
import { AutoComplete, Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover,Switch } from 'antd'

import { connect } from 'dva'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
//import PictureEdit from '../../components/PictureEdit'
//import OSSPictureEdit from '../../components/PictureEdit'
import {ImageComponent} from '../../axios/tools'
import FooterToolbar from '../../components/FooterToolbar'
//import ImageUpload from '../../components/ImageUpload'
import styles from './ThreadLike.createform.less'
import {mapBackToImageValues, mapFromImageValues} from '../../axios/tools'
import GlobalComponents from '../../custcomponents';
const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input
const fieldLabels = {
  id: '序号',
  likeTime: '点赞时间',
  replier: '应答者',
  thread: '主贴',
}
const testValues = {};
/*
const testValues = {
  replierId: 'CU000001',
  threadId: 'T000001',
}
*/
const imageURLPrefix = '//localhost:2090'


const imageKeys = [
]


class ThreadLikeCreateForm extends Component {
  state = {
    previewVisible: false,
    previewImage: '',
    convertedImagesValues: {},
  }

  componentDidMount() {
    // const { getFieldDecorator,setFieldsValue } = this.props.form
    const { setFieldsValue } = this.props.form
    //setFieldsValue(testValues)
      
    this.executeCandidateReplierSearch("")
    
    
    this.executeCandidateThreadSearch("")
    
 
    
    
    
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

  
  executeCandidateReplierSearch = (filterKey) =>{

    const {ThreadLikeService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = ThreadLikeService.requestCandidateReplier("communityUser", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateReplierList=>{
      this.setState({
        candidateReplierList
      })

    })

  }	 
  handleCandidateReplierSearch = (value) => {
    this.executeCandidateReplierSearch(value)
  }

  executeCandidateThreadSearch = (filterKey) =>{

    const {ThreadLikeService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = ThreadLikeService.requestCandidateThread("thread", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateThreadList=>{
      this.setState({
        candidateThreadList
      })

    })

  }	 
  handleCandidateThreadSearch = (value) => {
    this.executeCandidateThreadSearch(value)
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
          type: `${owner.type}/addThreadLike`,
          payload: { id: owner.id, type: 'threadLike', parameters },
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
          type: `${owner.type}/addThreadLike`,
          payload: { id: owner.id, type: 'threadLike', parameters, continueNext: true },
        })
      })
    }
    
    const goback = () => {
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/goback`,
        payload: { id: owner.id, type: 'threadLike',listName:'主贴点赞列表' },
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
    

    
    const {candidateReplierList} = this.state
    if(!candidateReplierList){
      return (<div>等等</div>)
    }
    if(!candidateReplierList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateThreadList} = this.state
    if(!candidateThreadList){
      return (<div>等等</div>)
    }
    if(!candidateThreadList.candidates){
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
        title="新建一个主贴点赞"
        content="新建一个主贴点赞"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>

            </Row>
          </Form>
        </Card>



       
        









        <Card title="关联" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.replier} {...formItemLayout}>
                  {getFieldDecorator('replierId', {
                  	initialValue: tryinit('replier'),
                    rules: [{ required: true, message: '请输入应答者' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidateReplierList.candidates}
                    
                    
                    onSearch={this.handleCandidateReplierSearch}
                    placeholder="请输入应答者"
                    
                    disabled={!availableForEdit('replier')}
                  >
                  {candidateReplierList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.mobile}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.thread} {...formItemLayout}>
                  {getFieldDecorator('threadId', {
                  	initialValue: tryinit('thread'),
                    rules: [{ required: true, message: '请输入主贴' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidateThreadList.candidates}
                    
                    
                    onSearch={this.handleCandidateThreadSearch}
                    placeholder="请输入主贴"
                    
                    disabled={!availableForEdit('thread')}
                  >
                  {candidateThreadList.candidates.map(item=>{
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
}))(Form.create()(ThreadLikeCreateForm))




