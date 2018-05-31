import React, { Component } from 'react'
import { AutoComplete, Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover,Switch } from 'antd'

import { connect } from 'dva'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
//import PictureEdit from '../../components/PictureEdit'
//import OSSPictureEdit from '../../components/PictureEdit'
import {ImageComponent} from '../../axios/tools'
import FooterToolbar from '../../components/FooterToolbar'
//import ImageUpload from '../../components/ImageUpload'
import styles from './RearrangeSessionTicketRecord.createform.less'
import {mapBackToImageValues, mapFromImageValues} from '../../axios/tools'
import GlobalComponents from '../../custcomponents';
const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input
const fieldLabels = {
  id: 'ID',
  sourceGameName: '原游戏名称',
  sourceGameSessionDatetime: '原游戏场次日期',
  sourceGameSessionName: '原游戏场次名称',
  sourceTicketQuantity: '原门票数',
  sourceTicketPrinted: '原门票是否已打印',
  sourceRedeemPhone: '原换票手机号',
  sourceRedeemCode: '原换票验证码',
  sourceStoreName: '原门店名称',
  targetGameName: '换场游戏名称',
  targetGameSessionDatetime: '换场游戏场次日期',
  targetGameSessionName: '换场游戏场次名称',
  targetTicketQuantity: '换场门票数',
  targetTicketPrinted: '换场门票是否已打印',
  targetRedeemPhone: '换场换票手机',
  targetRedeemCode: '换场换票验证码',
  targetStoreName: '换场门店名称',
  rearrangeComment: '换场备注',
  sourceGameSession: '原游戏场次',
  sourceGame: '原的游戏',
  sourceStore: '原门店',
  targetGameSession: '换场游戏场次',
  targetGame: '换场游戏',
  targetStore: '换场门店',
}
const testValues = {};
/*
const testValues = {
  sourceGameName: '名侦探柯南',
  sourceGameSessionDatetime: '2015-06-09 03:10:47',
  sourceGameSessionName: '18:30',
  sourceTicketQuantity: '3',
  sourceRedeemPhone: '18080011234',
  sourceRedeemCode: 'ABC123456',
  sourceStoreName: '上海店',
  targetGameName: '名侦探柯南',
  targetGameSessionDatetime: '2015-09-08 05:28:10',
  targetGameSessionName: '18:30',
  targetTicketQuantity: '3',
  targetRedeemPhone: '18080011234',
  targetRedeemCode: 'ABC123456',
  targetStoreName: '上海店',
  rearrangeComment: '人数不够,不能开场',
  sourceGameSessionId: 'GS000001',
  sourceGameId: 'G000001',
  sourceStoreId: 'S000001',
  targetGameSessionId: 'GS000001',
  targetGameId: 'G000001',
  targetStoreId: 'S000001',
}
*/
const imageURLPrefix = '//localhost:2090'


const imageKeys = [
]


class RearrangeSessionTicketRecordCreateForm extends Component {
  state = {
    previewVisible: false,
    previewImage: '',
    convertedImagesValues: {},
  }

  componentDidMount() {
    // const { getFieldDecorator,setFieldsValue } = this.props.form
    const { setFieldsValue } = this.props.form
    //setFieldsValue(testValues)
      
    this.executeCandidateSourceGameSessionSearch("")
    
    
    this.executeCandidateSourceGameSearch("")
    
    
    this.executeCandidateSourceStoreSearch("")
    
    
    this.executeCandidateTargetGameSessionSearch("")
    
    
    this.executeCandidateTargetGameSearch("")
    
    
    this.executeCandidateTargetStoreSearch("")
    
 
    
    
    
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

  
  executeCandidateSourceGameSessionSearch = (filterKey) =>{

    const {RearrangeSessionTicketRecordService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = RearrangeSessionTicketRecordService.requestCandidateSourceGameSession("gameSession", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateSourceGameSessionList=>{
      this.setState({
        candidateSourceGameSessionList
      })

    })

  }	 
  handleCandidateSourceGameSessionSearch = (value) => {
    this.executeCandidateSourceGameSessionSearch(value)
  }

  executeCandidateSourceGameSearch = (filterKey) =>{

    const {RearrangeSessionTicketRecordService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = RearrangeSessionTicketRecordService.requestCandidateSourceGame("game", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateSourceGameList=>{
      this.setState({
        candidateSourceGameList
      })

    })

  }	 
  handleCandidateSourceGameSearch = (value) => {
    this.executeCandidateSourceGameSearch(value)
  }

  executeCandidateSourceStoreSearch = (filterKey) =>{

    const {RearrangeSessionTicketRecordService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = RearrangeSessionTicketRecordService.requestCandidateSourceStore("store", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateSourceStoreList=>{
      this.setState({
        candidateSourceStoreList
      })

    })

  }	 
  handleCandidateSourceStoreSearch = (value) => {
    this.executeCandidateSourceStoreSearch(value)
  }

  executeCandidateTargetGameSessionSearch = (filterKey) =>{

    const {RearrangeSessionTicketRecordService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = RearrangeSessionTicketRecordService.requestCandidateTargetGameSession("gameSession", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateTargetGameSessionList=>{
      this.setState({
        candidateTargetGameSessionList
      })

    })

  }	 
  handleCandidateTargetGameSessionSearch = (value) => {
    this.executeCandidateTargetGameSessionSearch(value)
  }

  executeCandidateTargetGameSearch = (filterKey) =>{

    const {RearrangeSessionTicketRecordService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = RearrangeSessionTicketRecordService.requestCandidateTargetGame("game", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateTargetGameList=>{
      this.setState({
        candidateTargetGameList
      })

    })

  }	 
  handleCandidateTargetGameSearch = (value) => {
    this.executeCandidateTargetGameSearch(value)
  }

  executeCandidateTargetStoreSearch = (filterKey) =>{

    const {RearrangeSessionTicketRecordService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = RearrangeSessionTicketRecordService.requestCandidateTargetStore("store", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateTargetStoreList=>{
      this.setState({
        candidateTargetStoreList
      })

    })

  }	 
  handleCandidateTargetStoreSearch = (value) => {
    this.executeCandidateTargetStoreSearch(value)
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
          type: `${owner.type}/addRearrangeSessionTicketRecord`,
          payload: { id: owner.id, type: 'rearrangeSessionTicketRecord', parameters },
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
          type: `${owner.type}/addRearrangeSessionTicketRecord`,
          payload: { id: owner.id, type: 'rearrangeSessionTicketRecord', parameters, continueNext: true },
        })
      })
    }
    
    const goback = () => {
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/goback`,
        payload: { id: owner.id, type: 'rearrangeSessionTicketRecord',listName:'换场记录列表' },
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
    

    
    const {candidateSourceGameSessionList} = this.state
    if(!candidateSourceGameSessionList){
      return (<div>等等</div>)
    }
    if(!candidateSourceGameSessionList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateSourceGameList} = this.state
    if(!candidateSourceGameList){
      return (<div>等等</div>)
    }
    if(!candidateSourceGameList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateSourceStoreList} = this.state
    if(!candidateSourceStoreList){
      return (<div>等等</div>)
    }
    if(!candidateSourceStoreList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateTargetGameSessionList} = this.state
    if(!candidateTargetGameSessionList){
      return (<div>等等</div>)
    }
    if(!candidateTargetGameSessionList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateTargetGameList} = this.state
    if(!candidateTargetGameList){
      return (<div>等等</div>)
    }
    if(!candidateTargetGameList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateTargetStoreList} = this.state
    if(!candidateTargetStoreList){
      return (<div>等等</div>)
    }
    if(!candidateTargetStoreList.candidates){
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
        title="新建一个换场记录"
        content="新建一个换场记录"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.sourceGameName} {...formItemLayout}>
                  {getFieldDecorator('sourceGameName', {
                    rules: [{ required: true, message: '请输入原游戏名称' }],
                  })(
                    <Input placeholder="请输入原游戏名称" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.sourceGameSessionDatetime} {...formItemLayout}>
                  {getFieldDecorator('sourceGameSessionDatetime', {
                    rules: [{ required: true, message: '请输入原游戏场次日期' }],
                  })(
                    <DatePicker showTime format="YYYY-MM-DD HH:mm" minuteStep={5} placeholder="请输入原游戏场次日期" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.sourceGameSessionName} {...formItemLayout}>
                  {getFieldDecorator('sourceGameSessionName', {
                    rules: [{ required: true, message: '请输入原游戏场次名称' }],
                  })(
                    <Input placeholder="请输入原游戏场次名称" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.sourceTicketQuantity} {...formItemLayout}>
                  {getFieldDecorator('sourceTicketQuantity', {
                    rules: [{ required: true, message: '请输入原门票数' }],
                  })(
                    <Input placeholder="请输入原门票数" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.sourceRedeemPhone} {...formItemLayout}>
                  {getFieldDecorator('sourceRedeemPhone', {
                    rules: [{ required: true, message: '请输入原换票手机号' }],
                  })(
                    <Input placeholder="请输入原换票手机号" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.sourceRedeemCode} {...formItemLayout}>
                  {getFieldDecorator('sourceRedeemCode', {
                    rules: [{ required: true, message: '请输入原换票验证码' }],
                  })(
                    <Input placeholder="请输入原换票验证码" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.sourceStoreName} {...formItemLayout}>
                  {getFieldDecorator('sourceStoreName', {
                    rules: [{ required: true, message: '请输入原门店名称' }],
                  })(
                    <Input placeholder="请输入原门店名称" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.targetGameName} {...formItemLayout}>
                  {getFieldDecorator('targetGameName', {
                    rules: [{ required: true, message: '请输入换场游戏名称' }],
                  })(
                    <Input placeholder="请输入换场游戏名称" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.targetGameSessionDatetime} {...formItemLayout}>
                  {getFieldDecorator('targetGameSessionDatetime', {
                    rules: [{ required: true, message: '请输入换场游戏场次日期' }],
                  })(
                    <DatePicker showTime format="YYYY-MM-DD HH:mm" minuteStep={5} placeholder="请输入换场游戏场次日期" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.targetGameSessionName} {...formItemLayout}>
                  {getFieldDecorator('targetGameSessionName', {
                    rules: [{ required: true, message: '请输入换场游戏场次名称' }],
                  })(
                    <Input placeholder="请输入换场游戏场次名称" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.targetTicketQuantity} {...formItemLayout}>
                  {getFieldDecorator('targetTicketQuantity', {
                    rules: [{ required: true, message: '请输入换场门票数' }],
                  })(
                    <Input placeholder="请输入换场门票数" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.targetRedeemPhone} {...formItemLayout}>
                  {getFieldDecorator('targetRedeemPhone', {
                    rules: [{ required: true, message: '请输入换场换票手机' }],
                  })(
                    <Input placeholder="请输入换场换票手机" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.targetRedeemCode} {...formItemLayout}>
                  {getFieldDecorator('targetRedeemCode', {
                    rules: [{ required: true, message: '请输入换场换票验证码' }],
                  })(
                    <Input placeholder="请输入换场换票验证码" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.targetStoreName} {...formItemLayout}>
                  {getFieldDecorator('targetStoreName', {
                    rules: [{ required: true, message: '请输入换场门店名称' }],
                  })(
                    <Input placeholder="请输入换场门店名称" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.rearrangeComment} {...formItemLayout}>
                  {getFieldDecorator('rearrangeComment', {
                    rules: [{ required: true, message: '请输入换场备注' }],
                  })(
                    <Input placeholder="请输入换场备注" />
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
                <Form.Item label={fieldLabels.sourceTicketPrinted}  {...switchFormItemLayout}>
                  {getFieldDecorator('sourceTicketPrinted', {
                    initialValue: false,
                    rules: [{ required: true, message: '请输入原门票是否已打印' }],
                    valuePropName: 'checked'
                  })(
                    <Switch checkedChildren="是" unCheckedChildren="否"  placeholder="请输入原门票是否已打印bool" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={8} md={12} sm={24}>
                <Form.Item label={fieldLabels.targetTicketPrinted}  {...switchFormItemLayout}>
                  {getFieldDecorator('targetTicketPrinted', {
                    initialValue: false,
                    rules: [{ required: true, message: '请输入换场门票是否已打印' }],
                    valuePropName: 'checked'
                  })(
                    <Switch checkedChildren="是" unCheckedChildren="否"  placeholder="请输入换场门票是否已打印bool" />
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
                <Form.Item label={fieldLabels.sourceGameSession} {...formItemLayout}>
                  {getFieldDecorator('sourceGameSessionId', {
                  	initialValue: tryinit('sourceGameSession'),
                    rules: [{ required: true, message: '请输入原游戏场次' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidateSourceGameSessionList.candidates}
                    
                    
                    onSearch={this.handleCandidateSourceGameSessionSearch}
                    placeholder="请输入原游戏场次"
                    
                    disabled={!availableForEdit('sourceGameSession')}
                  >
                  {candidateSourceGameSessionList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.name}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.sourceGame} {...formItemLayout}>
                  {getFieldDecorator('sourceGameId', {
                  	initialValue: tryinit('sourceGame'),
                    rules: [{ required: true, message: '请输入原的游戏' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidateSourceGameList.candidates}
                    
                    
                    onSearch={this.handleCandidateSourceGameSearch}
                    placeholder="请输入原的游戏"
                    
                    disabled={!availableForEdit('sourceGame')}
                  >
                  {candidateSourceGameList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.name}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.sourceStore} {...formItemLayout}>
                  {getFieldDecorator('sourceStoreId', {
                  	initialValue: tryinit('sourceStore'),
                    rules: [{ required: true, message: '请输入原门店' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidateSourceStoreList.candidates}
                    
                    
                    onSearch={this.handleCandidateSourceStoreSearch}
                    placeholder="请输入原门店"
                    
                    disabled={!availableForEdit('sourceStore')}
                  >
                  {candidateSourceStoreList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.storeName}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.targetGameSession} {...formItemLayout}>
                  {getFieldDecorator('targetGameSessionId', {
                  	initialValue: tryinit('targetGameSession'),
                    rules: [{ required: true, message: '请输入换场游戏场次' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidateTargetGameSessionList.candidates}
                    
                    
                    onSearch={this.handleCandidateTargetGameSessionSearch}
                    placeholder="请输入换场游戏场次"
                    
                    disabled={!availableForEdit('targetGameSession')}
                  >
                  {candidateTargetGameSessionList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.name}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.targetGame} {...formItemLayout}>
                  {getFieldDecorator('targetGameId', {
                  	initialValue: tryinit('targetGame'),
                    rules: [{ required: true, message: '请输入换场游戏' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidateTargetGameList.candidates}
                    
                    
                    onSearch={this.handleCandidateTargetGameSearch}
                    placeholder="请输入换场游戏"
                    
                    disabled={!availableForEdit('targetGame')}
                  >
                  {candidateTargetGameList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.name}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.targetStore} {...formItemLayout}>
                  {getFieldDecorator('targetStoreId', {
                  	initialValue: tryinit('targetStore'),
                    rules: [{ required: true, message: '请输入换场门店' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidateTargetStoreList.candidates}
                    
                    
                    onSearch={this.handleCandidateTargetStoreSearch}
                    placeholder="请输入换场门店"
                    
                    disabled={!availableForEdit('targetStore')}
                  >
                  {candidateTargetStoreList.candidates.map(item=>{
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
}))(Form.create()(RearrangeSessionTicketRecordCreateForm))




