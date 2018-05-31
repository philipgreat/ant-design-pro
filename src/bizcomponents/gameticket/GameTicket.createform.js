import React, { Component } from 'react'
import { AutoComplete, Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover,Switch } from 'antd'

import { connect } from 'dva'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
//import PictureEdit from '../../components/PictureEdit'
//import OSSPictureEdit from '../../components/PictureEdit'
import {ImageComponent} from '../../axios/tools'
import FooterToolbar from '../../components/FooterToolbar'
//import ImageUpload from '../../components/ImageUpload'
import styles from './GameTicket.createform.less'
import {mapBackToImageValues, mapFromImageValues} from '../../axios/tools'
import GlobalComponents from '../../custcomponents';
const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input
const fieldLabels = {
  id: 'ID',
  name: '名称',
  count: '人数',
  sessionTicket: '是否是场次票',
  multiplePlayerTicket: '是否是多人票',
  vacationTicket: '是否是假期票',
  studentTicket: '是否是学生票',
  fastTicket: '是否是快速票',
  listPrice: '原价',
  salePrice: '售价',
  gameSession: '游戏场次',
  game: '游戏',
}
const testValues = {};
/*
const testValues = {
  name: '平日4人场',
  count: '4',
  listPrice: '84.57',
  salePrice: '65.83',
  gameSessionId: 'GS000001',
  gameId: 'G000001',
}
*/
const imageURLPrefix = '//localhost:2090'


const imageKeys = [
]


class GameTicketCreateForm extends Component {
  state = {
    previewVisible: false,
    previewImage: '',
    convertedImagesValues: {},
  }

  componentDidMount() {
    // const { getFieldDecorator,setFieldsValue } = this.props.form
    const { setFieldsValue } = this.props.form
    //setFieldsValue(testValues)
      
    this.executeCandidateGameSessionSearch("")
    
    
    this.executeCandidateGameSearch("")
    
 
    
    
    
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

  
  executeCandidateGameSessionSearch = (filterKey) =>{

    const {GameTicketService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = GameTicketService.requestCandidateGameSession("gameSession", id, filterKey, pageNo);
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

  executeCandidateGameSearch = (filterKey) =>{

    const {GameTicketService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = GameTicketService.requestCandidateGame("game", id, filterKey, pageNo);
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
          type: `${owner.type}/addGameTicket`,
          payload: { id: owner.id, type: 'gameTicket', parameters },
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
          type: `${owner.type}/addGameTicket`,
          payload: { id: owner.id, type: 'gameTicket', parameters, continueNext: true },
        })
      })
    }
    
    const goback = () => {
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/goback`,
        payload: { id: owner.id, type: 'gameTicket',listName:'游戏门票列表' },
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
    

    
    const {candidateGameSessionList} = this.state
    if(!candidateGameSessionList){
      return (<div>等等</div>)
    }
    if(!candidateGameSessionList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateGameList} = this.state
    if(!candidateGameList){
      return (<div>等等</div>)
    }
    if(!candidateGameList.candidates){
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
        title="新建一个游戏门票"
        content="新建一个游戏门票"
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
                <Form.Item label={fieldLabels.count} {...formItemLayout}>
                  {getFieldDecorator('count', {
                    rules: [{ required: true, message: '请输入人数' }],
                  })(
                    <Input placeholder="请输入人数" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.listPrice} {...formItemLayout}>
                  {getFieldDecorator('listPrice', {
                    rules: [{ required: true, message: '请输入原价' }],
                  })(
                    <Input placeholder="请输入原价" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.salePrice} {...formItemLayout}>
                  {getFieldDecorator('salePrice', {
                    rules: [{ required: true, message: '请输入售价' }],
                  })(
                    <Input placeholder="请输入售价" />
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
                <Form.Item label={fieldLabels.sessionTicket}  {...switchFormItemLayout}>
                  {getFieldDecorator('sessionTicket', {
                    initialValue: false,
                    rules: [{ required: true, message: '请输入是否是场次票' }],
                    valuePropName: 'checked'
                  })(
                    <Switch checkedChildren="是" unCheckedChildren="否"  placeholder="请输入是否是场次票bool" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={8} md={12} sm={24}>
                <Form.Item label={fieldLabels.multiplePlayerTicket}  {...switchFormItemLayout}>
                  {getFieldDecorator('multiplePlayerTicket', {
                    initialValue: false,
                    rules: [{ required: true, message: '请输入是否是多人票' }],
                    valuePropName: 'checked'
                  })(
                    <Switch checkedChildren="是" unCheckedChildren="否"  placeholder="请输入是否是多人票bool" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={8} md={12} sm={24}>
                <Form.Item label={fieldLabels.vacationTicket}  {...switchFormItemLayout}>
                  {getFieldDecorator('vacationTicket', {
                    initialValue: false,
                    rules: [{ required: true, message: '请输入是否是假期票' }],
                    valuePropName: 'checked'
                  })(
                    <Switch checkedChildren="是" unCheckedChildren="否"  placeholder="请输入是否是假期票bool" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={8} md={12} sm={24}>
                <Form.Item label={fieldLabels.studentTicket}  {...switchFormItemLayout}>
                  {getFieldDecorator('studentTicket', {
                    initialValue: false,
                    rules: [{ required: true, message: '请输入是否是学生票' }],
                    valuePropName: 'checked'
                  })(
                    <Switch checkedChildren="是" unCheckedChildren="否"  placeholder="请输入是否是学生票bool" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={8} md={12} sm={24}>
                <Form.Item label={fieldLabels.fastTicket}  {...switchFormItemLayout}>
                  {getFieldDecorator('fastTicket', {
                    initialValue: false,
                    rules: [{ required: true, message: '请输入是否是快速票' }],
                    valuePropName: 'checked'
                  })(
                    <Switch checkedChildren="是" unCheckedChildren="否"  placeholder="请输入是否是快速票bool" />
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
}))(Form.create()(GameTicketCreateForm))




