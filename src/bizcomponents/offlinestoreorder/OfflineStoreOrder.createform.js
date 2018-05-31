import React, { Component } from 'react'
import { AutoComplete, Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover,Switch } from 'antd'

import { connect } from 'dva'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
//import PictureEdit from '../../components/PictureEdit'
//import OSSPictureEdit from '../../components/PictureEdit'
import {ImageComponent} from '../../axios/tools'
import FooterToolbar from '../../components/FooterToolbar'
//import ImageUpload from '../../components/ImageUpload'
import styles from './OfflineStoreOrder.createform.less'
import {mapBackToImageValues, mapFromImageValues} from '../../axios/tools'
import GlobalComponents from '../../custcomponents';
const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input
const fieldLabels = {
  id: 'ID',
  gameName: '游戏名称',
  createTime: '创建时间',
  gameSessionDatetime: '游戏场次日期',
  gameSessionName: '游戏场次名称',
  playerCount: '玩家数',
  originalAmount: '应付金额',
  actualAmount: '实际金额',
  adjustPayableAmount: '调整应付金额',
  mobile: '手机号码',
  discount: '折扣',
  orderStatus: '订单状态',
  employee: '员工',
  store: '门店',
  game: '游戏',
  gameSession: '游戏场次',
  gameTicket: '游戏门票',
  paymentMethod: '支付方式',
  paymentEvidence: '付款凭证',
  paymentEvidenceImage: '付款凭证图片',
  ticketPrinted: '门票打印',
  redeemPhone: '兑换手机',
  redeemCode: '兑换验证码',
}
const testValues = {};
/*
const testValues = {
  gameName: 'DC档案:古宅惊魂',
  gameSessionDatetime: '2015-06-05 12:04:31',
  gameSessionName: '18:30',
  playerCount: '5',
  originalAmount: '924.94',
  actualAmount: '725.85',
  adjustPayableAmount: '$990.0',
  mobile: '18080011234',
  discount: '7.69',
  orderStatus: '待支付',
  paymentMethod: '微信',
  paymentEvidence: '请输入付款凭证信息',
  redeemPhone: '18080011234',
  redeemCode: 'ABC123456',
  employeeId: 'E000001',
  storeId: 'S000001',
  gameId: 'G000001',
  gameSessionId: 'GS000001',
  gameTicketId: 'GT000001',
}
*/
const imageURLPrefix = '//localhost:2090'


const imageKeys = [
  'paymentEvidenceImage',
]


class OfflineStoreOrderCreateForm extends Component {
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
    
    
    this.executeCandidateStoreSearch("")
    
    
    this.executeCandidateGameSearch("")
    
    
    this.executeCandidateGameSessionSearch("")
    
    
    this.executeCandidateGameTicketSearch("")
    
 
    
    
    
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

    const {OfflineStoreOrderService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = OfflineStoreOrderService.requestCandidateEmployee("employee", id, filterKey, pageNo);
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

  executeCandidateStoreSearch = (filterKey) =>{

    const {OfflineStoreOrderService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = OfflineStoreOrderService.requestCandidateStore("store", id, filterKey, pageNo);
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

  executeCandidateGameSearch = (filterKey) =>{

    const {OfflineStoreOrderService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = OfflineStoreOrderService.requestCandidateGame("game", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateGameList=>{
      this.setState({
        candidateGameList
      })

    })

  }	 
  handleCandidateGameSearch = (value) => {
    this.executeCandidateGameSearch(value)
  }

  executeCandidateGameSessionSearch = (filterKey) =>{

    const {OfflineStoreOrderService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = OfflineStoreOrderService.requestCandidateGameSession("gameSession", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateGameSessionList=>{
      this.setState({
        candidateGameSessionList
      })

    })

  }	 
  handleCandidateGameSessionSearch = (value) => {
    this.executeCandidateGameSessionSearch(value)
  }

  executeCandidateGameTicketSearch = (filterKey) =>{

    const {OfflineStoreOrderService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = OfflineStoreOrderService.requestCandidateGameTicket("gameTicket", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateGameTicketList=>{
      this.setState({
        candidateGameTicketList
      })

    })

  }	 
  handleCandidateGameTicketSearch = (value) => {
    this.executeCandidateGameTicketSearch(value)
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
          type: `${owner.type}/addOfflineStoreOrder`,
          payload: { id: owner.id, type: 'offlineStoreOrder', parameters },
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
          type: `${owner.type}/addOfflineStoreOrder`,
          payload: { id: owner.id, type: 'offlineStoreOrder', parameters, continueNext: true },
        })
      })
    }
    
    const goback = () => {
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/goback`,
        payload: { id: owner.id, type: 'offlineStoreOrder',listName:'线下门店订单列表' },
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
    
    
    const {candidateStoreList} = this.state
    if(!candidateStoreList){
      return (<div>等等</div>)
    }
    if(!candidateStoreList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateGameList} = this.state
    if(!candidateGameList){
      return (<div>等等</div>)
    }
    if(!candidateGameList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateGameSessionList} = this.state
    if(!candidateGameSessionList){
      return (<div>等等</div>)
    }
    if(!candidateGameSessionList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateGameTicketList} = this.state
    if(!candidateGameTicketList){
      return (<div>等等</div>)
    }
    if(!candidateGameTicketList.candidates){
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
        title="新建一个线下门店订单"
        content="新建一个线下门店订单"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.gameName} {...formItemLayout}>
                  {getFieldDecorator('gameName', {
                    rules: [{ required: true, message: '请输入游戏名称' }],
                  })(
                    <Input placeholder="请输入游戏名称" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.gameSessionDatetime} {...formItemLayout}>
                  {getFieldDecorator('gameSessionDatetime', {
                    rules: [{ required: true, message: '请输入游戏场次日期' }],
                  })(
                    <DatePicker showTime format="YYYY-MM-DD HH:mm" minuteStep={5} placeholder="请输入游戏场次日期" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.gameSessionName} {...formItemLayout}>
                  {getFieldDecorator('gameSessionName', {
                    rules: [{ required: true, message: '请输入游戏场次名称' }],
                  })(
                    <Input placeholder="请输入游戏场次名称" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.playerCount} {...formItemLayout}>
                  {getFieldDecorator('playerCount', {
                    rules: [{ required: true, message: '请输入玩家数' }],
                  })(
                    <Input placeholder="请输入玩家数" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.originalAmount} {...formItemLayout}>
                  {getFieldDecorator('originalAmount', {
                    rules: [{ required: true, message: '请输入应付金额' }],
                  })(
                    <Input placeholder="请输入应付金额" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.actualAmount} {...formItemLayout}>
                  {getFieldDecorator('actualAmount', {
                    rules: [{ required: true, message: '请输入实际金额' }],
                  })(
                    <Input placeholder="请输入实际金额" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.adjustPayableAmount} {...formItemLayout}>
                  {getFieldDecorator('adjustPayableAmount', {
                    rules: [{ required: true, message: '请输入调整应付金额' }],
                  })(
                    <Input placeholder="请输入调整应付金额" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.mobile} {...formItemLayout}>
                  {getFieldDecorator('mobile', {
                    rules: [{ required: true, message: '请输入手机号码' }],
                  })(
                    <Input placeholder="请输入手机号码" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.discount} {...formItemLayout}>
                  {getFieldDecorator('discount', {
                    rules: [{ required: true, message: '请输入折扣' }],
                  })(
                    <Input placeholder="请输入折扣" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.orderStatus} {...formItemLayout}>
                  {getFieldDecorator('orderStatus', {
                    rules: [{ required: true, message: '请输入订单状态' }],
                  })(
                    <Input placeholder="请输入订单状态" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.paymentMethod} {...formItemLayout}>
                  {getFieldDecorator('paymentMethod', {
                    rules: [{ required: true, message: '请输入支付方式' }],
                  })(
                    <Input placeholder="请输入支付方式" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.paymentEvidence} {...formItemLayout}>
                  {getFieldDecorator('paymentEvidence', {
                    rules: [{ required: true, message: '请输入付款凭证' }],
                  })(
                    <Input placeholder="请输入付款凭证" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.redeemPhone} {...formItemLayout}>
                  {getFieldDecorator('redeemPhone', {
                    rules: [{ required: true, message: '请输入兑换手机' }],
                  })(
                    <Input placeholder="请输入兑换手机" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.redeemCode} {...formItemLayout}>
                  {getFieldDecorator('redeemCode', {
                    rules: [{ required: true, message: '请输入兑换验证码' }],
                  })(
                    <Input placeholder="请输入兑换验证码" />
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
                <Form.Item label={fieldLabels.ticketPrinted}  {...switchFormItemLayout}>
                  {getFieldDecorator('ticketPrinted', {
                    initialValue: false,
                    rules: [{ required: true, message: '请输入门票打印' }],
                    valuePropName: 'checked'
                  })(
                    <Switch checkedChildren="是" unCheckedChildren="否"  placeholder="请输入门票打印bool" />
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
                  buttonTitle="付款凭证图片"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'paymentEvidenceImage')}
                  fileList={convertedImagesValues.paymentEvidenceImage}
                />
              </Col>

            </Row>
          </Form>
        </Card>



        <Card title="关联" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.employee} {...formItemLayout}>
                  {getFieldDecorator('employeeId', {
                  	initialValue: tryinit('employee'),
                    rules: [{ required: true, message: '请输入员工' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidateEmployeeList.candidates}
                    
                    
                    onSearch={this.handleCandidateEmployeeSearch}
                    placeholder="请输入员工"
                    
                    disabled={!availableForEdit('employee')}
                  >
                  {candidateEmployeeList.candidates.map(item=>{
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

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.game} {...formItemLayout}>
                  {getFieldDecorator('gameId', {
                  	initialValue: tryinit('game'),
                    rules: [{ required: true, message: '请输入游戏' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidateGameList.candidates}
                    
                    
                    onSearch={this.handleCandidateGameSearch}
                    placeholder="请输入游戏"
                    
                    disabled={!availableForEdit('game')}
                  >
                  {candidateGameList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.name}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.gameSession} {...formItemLayout}>
                  {getFieldDecorator('gameSessionId', {
                  	initialValue: tryinit('gameSession'),
                    rules: [{ required: true, message: '请输入游戏场次' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidateGameSessionList.candidates}
                    
                    
                    onSearch={this.handleCandidateGameSessionSearch}
                    placeholder="请输入游戏场次"
                    
                    disabled={!availableForEdit('gameSession')}
                  >
                  {candidateGameSessionList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.name}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.gameTicket} {...formItemLayout}>
                  {getFieldDecorator('gameTicketId', {
                  	initialValue: tryinit('gameTicket'),
                    rules: [{ required: true, message: '请输入游戏门票' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidateGameTicketList.candidates}
                    
                    
                    onSearch={this.handleCandidateGameTicketSearch}
                    placeholder="请输入游戏门票"
                    
                    disabled={!availableForEdit('gameTicket')}
                  >
                  {candidateGameTicketList.candidates.map(item=>{
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
}))(Form.create()(OfflineStoreOrderCreateForm))




