import React, { Component } from 'react'
import { AutoComplete, Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover,Switch } from 'antd'

import { connect } from 'dva'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
//import PictureEdit from '../../components/PictureEdit'
//import OSSPictureEdit from '../../components/PictureEdit'
import {ImageComponent} from '../../axios/tools'
import FooterToolbar from '../../components/FooterToolbar'
//import ImageUpload from '../../components/ImageUpload'
import styles from './Thread.createform.less'
import {mapBackToImageValues, mapFromImageValues} from '../../axios/tools'
import GlobalComponents from '../../custcomponents';
const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input
const fieldLabels = {
  id: '序号',
  title: '标题',
  displayOrder: '显示顺序',
  createTime: '创建时间',
  eventTime: '事件时间',
  registrationStopTime: '注册时间停止',
  eventLocation: '事件的位置',
  city: '城市',
  communityGroup: '社区组',
  threadType: '帖子类型',
  community: '社区',
  creator: '创建者',
  homePage: '主页',
  groupPage: '群组页面',
  videoUrl: '视频网址',
  coverImagePath1: '封面图像路径1',
  coverImagePath2: '封面图像路径2',
  coverImagePath3: '封面图像路径3',
  imagePath1: '图1',
  imagePath2: '图2',
  imagePath3: '图3',
  imagePath4: '图4',
  imagePath5: '图5',
  content: '内容',
  approval: '验收',
  canceling: '取消',
  completion: '完成',
  hiding: '躲藏',
  likeByCurrentUser: '当前用户已点赞',
  repliedByCurrentUser: '当前用户已回复',
  registeredByCurrentUser: '由当前用户注册',
  currentStatus: '当前状态',
}
const testValues = {};
/*
const testValues = {
  title: '听力损失儿童回归的优点',
  displayOrder: '0',
  eventTime: '2034-12-04 17:32:38',
  registrationStopTime: '2038-01-11 01:09:19',
  eventLocation: '奥克斯广场阳光咖啡',
  city: '成都',
  communityGroup: '最新',
  threadType: 'TOPIC',
  videoUrl: 'https://player.youku.com/embed/XMzE0ODQ0NTA2NA',
  communityId: 'C000001',
  creatorId: 'CU000001',
  homePageId: 'HP000001',
  groupPageId: 'GP000001',
  content: '多数听力损失儿童除了听力问题，其他的发展和一般孩子   并无明显差异，所以当他们经过特殊学校训练后，具备听和说的沟通能力时，   我们应该鼓励他们回归普通学校就读。回归能带给听力损失儿童哪些有益的方便   ',
}
*/
const imageURLPrefix = '//localhost:2090'


const imageKeys = [
  'coverImagePath1',
  'coverImagePath2',
  'coverImagePath3',
  'imagePath1',
  'imagePath2',
  'imagePath3',
  'imagePath4',
  'imagePath5',
]


class ThreadCreateForm extends Component {
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
    
    
    this.executeCandidateCreatorSearch("")
    
    
    this.executeCandidateHomePageSearch("")
    
    
    this.executeCandidateGroupPageSearch("")
    
 
    
    
    
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

    const {ThreadService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = ThreadService.requestCandidateCommunity("community", id, filterKey, pageNo);
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

  executeCandidateCreatorSearch = (filterKey) =>{

    const {ThreadService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = ThreadService.requestCandidateCreator("communityUser", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateCreatorList=>{
      this.setState({
        candidateCreatorList
      })

    })

  }	 
  handleCandidateCreatorSearch = (value) => {
    this.executeCandidateCreatorSearch(value)
  }

  executeCandidateHomePageSearch = (filterKey) =>{

    const {ThreadService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = ThreadService.requestCandidateHomePage("homePage", id, filterKey, pageNo);
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

  executeCandidateGroupPageSearch = (filterKey) =>{

    const {ThreadService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = ThreadService.requestCandidateGroupPage("groupPage", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateGroupPageList=>{
      this.setState({
        candidateGroupPageList
      })

    })

  }	 
  handleCandidateGroupPageSearch = (value) => {
    this.executeCandidateGroupPageSearch(value)
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
          type: `${owner.type}/addThread`,
          payload: { id: owner.id, type: 'thread', parameters },
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
          type: `${owner.type}/addThread`,
          payload: { id: owner.id, type: 'thread', parameters, continueNext: true },
        })
      })
    }
    
    const goback = () => {
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/goback`,
        payload: { id: owner.id, type: 'thread',listName:'主贴列表' },
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
    
    
    const {candidateCreatorList} = this.state
    if(!candidateCreatorList){
      return (<div>等等</div>)
    }
    if(!candidateCreatorList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateHomePageList} = this.state
    if(!candidateHomePageList){
      return (<div>等等</div>)
    }
    if(!candidateHomePageList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateGroupPageList} = this.state
    if(!candidateGroupPageList){
      return (<div>等等</div>)
    }
    if(!candidateGroupPageList.candidates){
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
        title="新建一个主贴"
        content="新建一个主贴"
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
                <Form.Item label={fieldLabels.displayOrder} {...formItemLayout}>
                  {getFieldDecorator('displayOrder', {
                    rules: [{ required: true, message: '请输入显示顺序' }],
                  })(
                    <Input placeholder="请输入显示顺序" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.eventTime} {...formItemLayout}>
                  {getFieldDecorator('eventTime', {
                    rules: [{ required: true, message: '请输入事件时间' }],
                  })(
                    <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" placeholder="请输入事件时间" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.registrationStopTime} {...formItemLayout}>
                  {getFieldDecorator('registrationStopTime', {
                    rules: [{ required: true, message: '请输入注册时间停止' }],
                  })(
                    <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" placeholder="请输入注册时间停止" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.eventLocation} {...formItemLayout}>
                  {getFieldDecorator('eventLocation', {
                    rules: [{ required: true, message: '请输入事件的位置' }],
                  })(
                    <Input placeholder="请输入事件的位置" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.city} {...formItemLayout}>
                  {getFieldDecorator('city', {
                    rules: [{ required: true, message: '请输入城市' }],
                  })(
                    <Input placeholder="请输入城市" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.communityGroup} {...formItemLayout}>
                  {getFieldDecorator('communityGroup', {
                    rules: [{ required: true, message: '请输入社区组' }],
                  })(
                    <Input placeholder="请输入社区组" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.threadType} {...formItemLayout}>
                  {getFieldDecorator('threadType', {
                    rules: [{ required: true, message: '请输入帖子类型' }],
                  })(
                    <Input placeholder="请输入帖子类型" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.videoUrl} {...formItemLayout}>
                  {getFieldDecorator('videoUrl', {
                    rules: [{ required: true, message: '请输入视频网址' }],
                  })(
                    <Input placeholder="请输入视频网址" />
                  )}
                </Form.Item>
              </Col>

            </Row>
          </Form>
        </Card>



        
        <Card title="设置" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>
            

              <Col lg={8} md={12} sm={24}>
                <Form.Item label={fieldLabels.likeByCurrentUser}  {...switchFormItemLayout}>
                  {getFieldDecorator('likeByCurrentUser', {
                    initialValue: false,
                    rules: [{ required: true, message: '请输入当前用户已点赞' }],
                    valuePropName: 'checked'
                  })(
                    <Switch checkedChildren="是" unCheckedChildren="否"  placeholder="请输入当前用户已点赞bool" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={8} md={12} sm={24}>
                <Form.Item label={fieldLabels.repliedByCurrentUser}  {...switchFormItemLayout}>
                  {getFieldDecorator('repliedByCurrentUser', {
                    initialValue: false,
                    rules: [{ required: true, message: '请输入当前用户已回复' }],
                    valuePropName: 'checked'
                  })(
                    <Switch checkedChildren="是" unCheckedChildren="否"  placeholder="请输入当前用户已回复bool" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={8} md={12} sm={24}>
                <Form.Item label={fieldLabels.registeredByCurrentUser}  {...switchFormItemLayout}>
                  {getFieldDecorator('registeredByCurrentUser', {
                    initialValue: false,
                    rules: [{ required: true, message: '请输入由当前用户注册' }],
                    valuePropName: 'checked'
                  })(
                    <Switch checkedChildren="是" unCheckedChildren="否"  placeholder="请输入由当前用户注册bool" />
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



        <Card title="附件" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>

              <Col lg={6} md={12} sm={24}>
                <ImageComponent
                  buttonTitle="封面图像路径1"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'coverImagePath1')}
                  fileList={convertedImagesValues.coverImagePath1}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageComponent
                  buttonTitle="封面图像路径2"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'coverImagePath2')}
                  fileList={convertedImagesValues.coverImagePath2}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageComponent
                  buttonTitle="封面图像路径3"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'coverImagePath3')}
                  fileList={convertedImagesValues.coverImagePath3}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageComponent
                  buttonTitle="图1"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'imagePath1')}
                  fileList={convertedImagesValues.imagePath1}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageComponent
                  buttonTitle="图2"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'imagePath2')}
                  fileList={convertedImagesValues.imagePath2}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageComponent
                  buttonTitle="图3"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'imagePath3')}
                  fileList={convertedImagesValues.imagePath3}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageComponent
                  buttonTitle="图4"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'imagePath4')}
                  fileList={convertedImagesValues.imagePath4}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageComponent
                  buttonTitle="图5"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'imagePath5')}
                  fileList={convertedImagesValues.imagePath5}
                />
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
                <Form.Item label={fieldLabels.creator} {...formItemLayout}>
                  {getFieldDecorator('creatorId', {
                  	initialValue: tryinit('creator'),
                    rules: [{ required: true, message: '请输入创建者' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidateCreatorList.candidates}
                    
                    
                    onSearch={this.handleCandidateCreatorSearch}
                    placeholder="请输入创建者"
                    
                    disabled={!availableForEdit('creator')}
                  >
                  {candidateCreatorList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.mobile}(${item.id})`}</Option>);
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

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.groupPage} {...formItemLayout}>
                  {getFieldDecorator('groupPageId', {
                  	initialValue: tryinit('groupPage'),
                    rules: [{ required: true, message: '请输入群组页面' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidateGroupPageList.candidates}
                    
                    
                    onSearch={this.handleCandidateGroupPageSearch}
                    placeholder="请输入群组页面"
                    
                    disabled={!availableForEdit('groupPage')}
                  >
                  {candidateGroupPageList.candidates.map(item=>{
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
}))(Form.create()(ThreadCreateForm))




