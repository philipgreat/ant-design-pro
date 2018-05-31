import React, { Component } from 'react'
import { AutoComplete, Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover,Switch } from 'antd'

import { connect } from 'dva'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
//import PictureEdit from '../../components/PictureEdit'
//import OSSPictureEdit from '../../components/PictureEdit'
import {ImageComponent} from '../../axios/tools'
import FooterToolbar from '../../components/FooterToolbar'
//import ImageUpload from '../../components/ImageUpload'
import styles from './TicketPrintingHistory.createform.less'
import {mapBackToImageValues, mapFromImageValues} from '../../axios/tools'
import GlobalComponents from '../../custcomponents';
const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input
const fieldLabels = {
  id: 'ID',
  gameName: '游戏名称',
  gameSessionDatetime: '游戏场次日期',
  gameSessionName: '游戏场次名称',
  ticketPrinting: '门票打印记录',
  printDatetime: '打印日期',
  operator: '操作员',
  store: '门店',
  game: '游戏',
  gameSession: '游戏场次',
  currentStatus: '当前状态',
}
const testValues = {};
/*
const testValues = {
  gameName: 'DC档案: 古宅惊魂',
  gameSessionDatetime: '2016-05-24 10:48:36',
  gameSessionName: '18:30',
  operatorId: 'E000001',
  storeId: 'S000001',
  gameId: 'G000001',
  gameSessionId: 'GS000001',
}
*/
const imageURLPrefix = '//localhost:2090'


const imageKeys = [
]


class TicketPrintingHistoryCreateForm extends Component {
  state = {
    previewVisible: false,
    previewImage: '',
    convertedImagesValues: {},
  }

  componentDidMount() {
    // const { getFieldDecorator,setFieldsValue } = this.props.form
    const { setFieldsValue } = this.props.form
    //setFieldsValue(testValues)
      
    this.executeCandidateOperatorSearch("")
    
    
    this.executeCandidateStoreSearch("")
    
    
    this.executeCandidateGameSearch("")
    
    
    this.executeCandidateGameSessionSearch("")
    
 
    
    
    
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

  
  executeCandidateOperatorSearch = (filterKey) =>{

    const {TicketPrintingHistoryService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = TicketPrintingHistoryService.requestCandidateOperator("employee", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateOperatorList=>{
      this.setState({
        candidateOperatorList
      })

    })

  }	 
  handleCandidateOperatorSearch = (value) => {
    this.executeCandidateOperatorSearch(value)
  }

  executeCandidateStoreSearch = (filterKey) =>{

    const {TicketPrintingHistoryService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = TicketPrintingHistoryService.requestCandidateStore("store", id, filterKey, pageNo);
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

    const {TicketPrintingHistoryService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = TicketPrintingHistoryService.requestCandidateGame("game", id, filterKey, pageNo);
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

    const {TicketPrintingHistoryService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = TicketPrintingHistoryService.requestCandidateGameSession("gameSession", id, filterKey, pageNo);
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
          type: `${owner.type}/addTicketPrintingHistory`,
          payload: { id: owner.id, type: 'ticketPrintingHistory', parameters },
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
          type: `${owner.type}/addTicketPrintingHistory`,
          payload: { id: owner.id, type: 'ticketPrintingHistory', parameters, continueNext: true },
        })
      })
    }
    
    const goback = () => {
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/goback`,
        payload: { id: owner.id, type: 'ticketPrintingHistory',listName:'门票打印记录列表' },
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
    

    
    const {candidateOperatorList} = this.state
    if(!candidateOperatorList){
      return (<div>等等</div>)
    }
    if(!candidateOperatorList.candidates){
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
        title="新建一个门票打印记录"
        content="新建一个门票打印记录"
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

            </Row>
          </Form>
        </Card>



       
        









        <Card title="关联" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.operator} {...formItemLayout}>
                  {getFieldDecorator('operatorId', {
                  	initialValue: tryinit('operator'),
                    rules: [{ required: true, message: '请输入操作员' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidateOperatorList.candidates}
                    
                    
                    onSearch={this.handleCandidateOperatorSearch}
                    placeholder="请输入操作员"
                    
                    disabled={!availableForEdit('operator')}
                  >
                  {candidateOperatorList.candidates.map(item=>{
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
}))(Form.create()(TicketPrintingHistoryCreateForm))




