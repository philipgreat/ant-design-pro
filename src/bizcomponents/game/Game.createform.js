import React, { Component } from 'react'
import { AutoComplete, Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover,Switch } from 'antd'

import { connect } from 'dva'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
//import PictureEdit from '../../components/PictureEdit'
//import OSSPictureEdit from '../../components/PictureEdit'
import {ImageComponent} from '../../axios/tools'
import FooterToolbar from '../../components/FooterToolbar'
//import ImageUpload from '../../components/ImageUpload'
import styles from './Game.createform.less'
import {mapBackToImageValues, mapFromImageValues} from '../../axios/tools'
import GlobalComponents from '../../custcomponents';
const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input
const fieldLabels = {
  id: 'ID',
  name: '名称',
  shortDescription: '文字简介',
  longDescription: '游戏详情',
  gameIcon: '游戏图标',
  backgroundImage: '背景图像',
  coverImage: '封面图片',
  gameImage1: '游戏Image1',
  gameImage2: '游戏Image2',
  gameImage3: '游戏Image3',
  gameImage4: '游戏Image4',
  gameImage5: '游戏Image5',
  gameImage6: '游戏Image6',
  gameVideo: '游戏视频',
  maximumPlayerCount: '最多玩家数',
  minimumPlayerCount: '最少玩家数',
  recommendPlayerCount: '推荐玩家数',
  baseListPrice: '基础价格',
  gameDuration: '时长',
  gameReservation: '开场游戏可售票时长',
  gameStatus: '游戏状态',
  sessionGame: '游戏场次',
  gameCategory: '游戏类别',
  store: '门店',
}
const testValues = {};
/*
const testValues = {
  name: 'DC档案: 古宅惊魂',
  shortDescription: '一个暴雨将至的夜晚，你们作为民间的义士被召集到当地望族——谈天霆谈老爷的宅邸，调查谈家七岁少爷谈一鸣...',
  maximumPlayerCount: '9',
  minimumPlayerCount: '3',
  recommendPlayerCount: '4~8',
  baseListPrice: '111.73',
  gameDuration: '120',
  gameReservation: '10',
  gameCategoryId: 'GC000001',
  storeId: 'S000001',
  longDescription: '<div>\
	<h1>一级会员服务</h1>\
	<ul>\
		<li>可以借阅图书</li>\
		<li>可以购买</li>\
		<li>可以报名参加活动</li>\
	</ul>\
</div>',
  gameVideo: '<div>\
	<h1>一级会员服务</h1>\
	<ul>\
		<li>可以借阅图书</li>\
		<li>可以购买</li>\
		<li>可以报名参加活动</li>\
	</ul>\
</div>',
}
*/
const imageURLPrefix = '//localhost:2090'


const imageKeys = [
  'gameIcon',
  'backgroundImage',
  'coverImage',
  'gameImage1',
  'gameImage2',
  'gameImage3',
  'gameImage4',
  'gameImage5',
  'gameImage6',
]


class GameCreateForm extends Component {
  state = {
    previewVisible: false,
    previewImage: '',
    convertedImagesValues: {},
  }

  componentDidMount() {
    // const { getFieldDecorator,setFieldsValue } = this.props.form
    const { setFieldsValue } = this.props.form
    //setFieldsValue(testValues)
      
    this.executeCandidateGameCategorySearch("")
    
    
    this.executeCandidateStoreSearch("")
    
 
    
    
    
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

  
  executeCandidateGameCategorySearch = (filterKey) =>{

    const {GameService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = GameService.requestCandidateGameCategory("gameCategory", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateGameCategoryList=>{
      this.setState({
        candidateGameCategoryList
      })

    })

  }	 
  handleCandidateGameCategorySearch = (value) => {
    this.executeCandidateGameCategorySearch(value)
  }

  executeCandidateStoreSearch = (filterKey) =>{

    const {GameService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = GameService.requestCandidateStore("store", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateStoreList=>{
      this.setState({
        candidateStoreList
      })

    })

  }	 
  handleCandidateStoreSearch = (value) => {
    this.executeCandidateStoreSearch(value)
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
          type: `${owner.type}/addGame`,
          payload: { id: owner.id, type: 'game', parameters },
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
          type: `${owner.type}/addGame`,
          payload: { id: owner.id, type: 'game', parameters, continueNext: true },
        })
      })
    }
    
    const goback = () => {
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/goback`,
        payload: { id: owner.id, type: 'game',listName:'游戏列表' },
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
    

    
    const {candidateGameCategoryList} = this.state
    if(!candidateGameCategoryList){
      return (<div>等等</div>)
    }
    if(!candidateGameCategoryList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateStoreList} = this.state
    if(!candidateStoreList){
      return (<div>等等</div>)
    }
    if(!candidateStoreList.candidates){
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
        title="新建一个游戏"
        content="新建一个游戏"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.name} {...formItemLayout}>
                  {getFieldDecorator('name', {
                    rules: [{ required: true, message: '请输入名称' }],
                  })(
                    <Input placeholder="请输入名称" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.shortDescription} {...formItemLayout}>
                  {getFieldDecorator('shortDescription', {
                    rules: [{ required: true, message: '请输入文字简介' }],
                  })(
                    <Input placeholder="请输入文字简介" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.maximumPlayerCount} {...formItemLayout}>
                  {getFieldDecorator('maximumPlayerCount', {
                    rules: [{ required: true, message: '请输入最多玩家数' }],
                  })(
                    <Input placeholder="请输入最多玩家数" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.minimumPlayerCount} {...formItemLayout}>
                  {getFieldDecorator('minimumPlayerCount', {
                    rules: [{ required: true, message: '请输入最少玩家数' }],
                  })(
                    <Input placeholder="请输入最少玩家数" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.recommendPlayerCount} {...formItemLayout}>
                  {getFieldDecorator('recommendPlayerCount', {
                    rules: [{ required: true, message: '请输入推荐玩家数' }],
                  })(
                    <Input placeholder="请输入推荐玩家数" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.baseListPrice} {...formItemLayout}>
                  {getFieldDecorator('baseListPrice', {
                    rules: [{ required: true, message: '请输入基础价格' }],
                  })(
                    <Input placeholder="请输入基础价格" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.gameDuration} {...formItemLayout}>
                  {getFieldDecorator('gameDuration', {
                    rules: [{ required: true, message: '请输入时长' }],
                  })(
                    <Input placeholder="请输入时长" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.gameReservation} {...formItemLayout}>
                  {getFieldDecorator('gameReservation', {
                    rules: [{ required: true, message: '请输入开场游戏可售票时长' }],
                  })(
                    <Input placeholder="请输入开场游戏可售票时长" />
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
                <Form.Item label={fieldLabels.gameStatus}  {...switchFormItemLayout}>
                  {getFieldDecorator('gameStatus', {
                    initialValue: false,
                    rules: [{ required: true, message: '请输入游戏状态' }],
                    valuePropName: 'checked'
                  })(
                    <Switch checkedChildren="是" unCheckedChildren="否"  placeholder="请输入游戏状态bool" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={8} md={12} sm={24}>
                <Form.Item label={fieldLabels.sessionGame}  {...switchFormItemLayout}>
                  {getFieldDecorator('sessionGame', {
                    initialValue: false,
                    rules: [{ required: true, message: '请输入游戏场次' }],
                    valuePropName: 'checked'
                  })(
                    <Switch checkedChildren="是" unCheckedChildren="否"  placeholder="请输入游戏场次bool" />
                  )}
                </Form.Item>
              </Col>

            </Row>
          </Form>  
        </Card>        
        
        





        <Card title="游戏详情" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>
              <Col lg={24} md={24} sm={24}>
                <Form.Item>
                  {getFieldDecorator('longDescription', {
                    rules: [{ required: true, message: '请输入游戏详情' }],
                  })(
                    <TextArea rows={4} placeholder="请输入请输入游戏详情" />
                  )}
                </Form.Item>
              </Col>
      </Row>
          </Form>  
        </Card>

        <Card title="游戏视频" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>
              <Col lg={24} md={24} sm={24}>
                <Form.Item>
                  {getFieldDecorator('gameVideo', {
                    rules: [{ required: true, message: '请输入游戏视频' }],
                  })(
                    <TextArea rows={4} placeholder="请输入请输入游戏视频" />
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
                  buttonTitle="游戏图标"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'gameIcon')}
                  fileList={convertedImagesValues.gameIcon}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageComponent
                  buttonTitle="背景图像"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'backgroundImage')}
                  fileList={convertedImagesValues.backgroundImage}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageComponent
                  buttonTitle="封面图片"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'coverImage')}
                  fileList={convertedImagesValues.coverImage}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageComponent
                  buttonTitle="游戏Image1"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'gameImage1')}
                  fileList={convertedImagesValues.gameImage1}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageComponent
                  buttonTitle="游戏Image2"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'gameImage2')}
                  fileList={convertedImagesValues.gameImage2}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageComponent
                  buttonTitle="游戏Image3"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'gameImage3')}
                  fileList={convertedImagesValues.gameImage3}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageComponent
                  buttonTitle="游戏Image4"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'gameImage4')}
                  fileList={convertedImagesValues.gameImage4}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageComponent
                  buttonTitle="游戏Image5"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'gameImage5')}
                  fileList={convertedImagesValues.gameImage5}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageComponent
                  buttonTitle="游戏Image6"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'gameImage6')}
                  fileList={convertedImagesValues.gameImage6}
                />
              </Col>

            </Row>
          </Form>
        </Card>



        <Card title="关联" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.gameCategory} {...formItemLayout}>
                  {getFieldDecorator('gameCategoryId', {
                  	initialValue: tryinit('gameCategory'),
                    rules: [{ required: true, message: '请输入游戏类别' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidateGameCategoryList.candidates}
                    
                    
                    onSearch={this.handleCandidateGameCategorySearch}
                    placeholder="请输入游戏类别"
                    
                    disabled={!availableForEdit('gameCategory')}
                  >
                  {candidateGameCategoryList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.name}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.store} {...formItemLayout}>
                  {getFieldDecorator('storeId', {
                  	initialValue: tryinit('store'),
                    rules: [{ required: true, message: '请输入门店' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidateStoreList.candidates}
                    
                    
                    onSearch={this.handleCandidateStoreSearch}
                    placeholder="请输入门店"
                    
                    disabled={!availableForEdit('store')}
                  >
                  {candidateStoreList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.storeName}(${item.id})`}</Option>);
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
}))(Form.create()(GameCreateForm))




