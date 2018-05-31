import React, { Component } from 'react'
import { AutoComplete, Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover,Switch } from 'antd'

import { connect } from 'dva'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
//import PictureEdit from '../../components/PictureEdit'
//import OSSPictureEdit from '../../components/PictureEdit'
import {ImageComponent} from '../../axios/tools'
import FooterToolbar from '../../components/FooterToolbar'
//import ImageUpload from '../../components/ImageUpload'
import styles from './GameToken.createform.less'
import {mapBackToImageValues, mapFromImageValues} from '../../axios/tools'
import GlobalComponents from '../../custcomponents';
const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input
const fieldLabels = {
  id: 'ID',
  tokenContent: 'Token的内容',
  nFCID: 'NFC ID',
  gameSession: '游戏场次',
  player: '玩家',
}
const testValues = {};
/*
const testValues = {
  tokenContent: 'http://www.pulupulu.com/player/game/token/ASBA2322rewerw',
  nFCID: '1234568XZZ',
  gameSessionId: 'GS000001',
  playerId: 'P000001',
}
*/
const imageURLPrefix = '//localhost:2090'


const imageKeys = [
]


class GameTokenCreateForm extends Component {
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
    
    
    this.executeCandidatePlayerSearch("")
    
 
    
    
    
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

    const {GameTokenService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = GameTokenService.requestCandidateGameSession("gameSession", id, filterKey, pageNo);
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

  executeCandidatePlayerSearch = (filterKey) =>{

    const {GameTokenService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = GameTokenService.requestCandidatePlayer("player", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidatePlayerList=>{
      this.setState({
        candidatePlayerList
      })

    })

  }	 
  handleCandidatePlayerSearch = (value) => {
    this.executeCandidatePlayerSearch(value)
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
          type: `${owner.type}/addGameToken`,
          payload: { id: owner.id, type: 'gameToken', parameters },
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
          type: `${owner.type}/addGameToken`,
          payload: { id: owner.id, type: 'gameToken', parameters, continueNext: true },
        })
      })
    }
    
    const goback = () => {
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/goback`,
        payload: { id: owner.id, type: 'gameToken',listName:'游戏Token列表' },
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
    
    
    const {candidatePlayerList} = this.state
    if(!candidatePlayerList){
      return (<div>等等</div>)
    }
    if(!candidatePlayerList.candidates){
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
        title="新建一个游戏Token"
        content="新建一个游戏Token"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.tokenContent} {...formItemLayout}>
                  {getFieldDecorator('tokenContent', {
                    rules: [{ required: true, message: '请输入Token的内容' }],
                  })(
                    <Input placeholder="请输入Token的内容" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.nFCID} {...formItemLayout}>
                  {getFieldDecorator('nFCID', {
                    rules: [{ required: true, message: '请输入NFC ID' }],
                  })(
                    <Input placeholder="请输入NFC ID" />
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
                <Form.Item label={fieldLabels.player} {...formItemLayout}>
                  {getFieldDecorator('playerId', {
                  	initialValue: tryinit('player'),
                    rules: [{ required: true, message: '请输入玩家' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidatePlayerList.candidates}
                    
                    
                    onSearch={this.handleCandidatePlayerSearch}
                    placeholder="请输入玩家"
                    
                    disabled={!availableForEdit('player')}
                  >
                  {candidatePlayerList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.nickName}(${item.id})`}</Option>);
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
}))(Form.create()(GameTokenCreateForm))




