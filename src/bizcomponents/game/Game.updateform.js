import React, { Component } from 'react'
import { Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover, Switch } from 'antd'
import moment from 'moment'
import { connect } from 'dva'
import {mapBackToImageValues, mapFromImageValues} from '../../axios/tools'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import {ImageComponent} from '../../axios/tools'
//import OSSPictureEdit from '../../components/OSSPictureEdit'

import FooterToolbar from '../../components/FooterToolbar'

import styles from './Game.updateform.less'

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


class GameUpdateForm extends Component {
  state = {
    previewVisible: false,
    previewImage: '',
    convertedImagesValues: {},
  }

  componentWillMount() {
    const selectedRow = this.getSelectedRow()
    if (!selectedRow) {
      return
    }
    this.setState({
      convertedImagesValues: mapFromImageValues(selectedRow,imageKeys)
    })
  }

  componentDidMount() {

  }

  shouldComponentUpdate() {
    return true
  }

  getSelectedRow() {
    // const { form, dispatch, submitting, selectedRows, currentUpdateIndex } = this.props
    const { selectedRows, currentUpdateIndex } = this.props
    if (!selectedRows) {
      return
    }
    if (currentUpdateIndex >= selectedRows.length) {
      return
    }
    const convertiedValues = selectedRows.map((item) => {
      return {
        ...item,

      }
    })
    const selectedRow = convertiedValues[currentUpdateIndex]
    return selectedRow
  }

  handleChange = (event, source) => {
    console.log('get file list from change in update change: ', source)
    const { fileList } = event
    const { convertedImagesValues } = this.state
    convertedImagesValues[source] = fileList
    this.setState({ convertedImagesValues })
    console.log('/get file list from change in update change: ', source)
  }


  handlePreview = (file) => {
    console.log('preview file', file)
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    })
  }

  render() {
    const { form, dispatch, submitting, selectedRows, currentUpdateIndex } = this.props
    const { getFieldDecorator, validateFieldsAndScroll, getFieldsError } = form
    const { convertedImagesValues } = this.state
    const { setFieldsValue } = this.props.form
    
    
    const submitUpdateForm = () => {
      validateFieldsAndScroll((error, values) => {
        if (error) {
          console.log('code go here', error)
          return
        }

        const { owner } = this.props
        const gameId = values.id
        const imagesValues = mapBackToImageValues(convertedImagesValues)
        const parameters = { ...values, gameId, ...imagesValues }

        // const newIndex= currentUpdateIndex + 1
        dispatch({
          type: `${owner.type}/updateGame`,
          payload: {
            id: owner.id,
            type: 'game',
            parameters,
            selectedRows,
            currentUpdateIndex: 0,
            continueNext: false,
          },
        })
      })
    }
    
    const submitUpdateFormAndContinue = () => {
      validateFieldsAndScroll((error, values) => {
        if (error) {
          console.log('code go here', error)
          return
        }

        const { owner } = this.props
        const gameId = values.id
        const imagesValues = mapBackToImageValues(convertedImagesValues)
        const parameters = { ...values, gameId, ...imagesValues }

        // TODO
        const { currentUpdateIndex } = this.props
        
        if (currentUpdateIndex >= selectedRows.length - 1) {
          return
        }
        this.setState({
          currentUpdateIndex: currentUpdateIndex + 1,
        })
        //setFieldsValue(selectedRows[currentUpdateIndex + 1])
        const newIndex = currentUpdateIndex + 1
        dispatch({
          type: `${owner.type}/updateGame`,
          payload: {
            id: owner.id,
            type: 'game',
            parameters,
            selectedRows,
            currentUpdateIndex: newIndex,
            continueNext: true,
          },
        })
      })
    }
    
    const skipToNext = () => {
      const { currentUpdateIndex } = this.props
      const { owner } = this.props
        
      const newIndex = currentUpdateIndex + 1
      dispatch({
        type: `${owner.type}/gotoNextGameUpdateRow`,
        payload: {
          id: owner.id,
          type: 'game',
          selectedRows,
          currentUpdateIndex: newIndex,
          continueNext: true,
          update: false,
        },
      })
    }
    
    const goback = () => {
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/goback`,
        payload: {
          id: owner.id,
          type: 'game',
          listName:'游戏列表' 
        },
      })
    }
    const errors = getFieldsError()
    const getErrorInfo = () => {
      const errorCount = Object.keys(errors).filter(key => errors[key]).length
      if (!errors || errorCount === 0) {
        return null
      }
      const scrollToField = (fieldKey) => {
        const labelNode = document.querySelector(`label[for='${fieldKey}']`)
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
    
    if (!selectedRows) {
      return (<div>缺少被更新的对象</div>)
    }
	const selectedRow = this.getSelectedRow()

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
        title={"更新游戏"+(currentUpdateIndex+1)+"/"+selectedRows.length}
        content="更新游戏"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>
            

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.id} {...formItemLayout}>
                  {getFieldDecorator('id', {
                    initialValue: selectedRow.id,
                    rules: [{ required: true, message: '请输入ID' }],
                  })(
                    <Input placeholder="请输入ID" disabled/>
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.name} {...formItemLayout}>
                  {getFieldDecorator('name', {
                    initialValue: selectedRow.name,
                    rules: [{ required: true, message: '请输入名称' }],
                  })(
                    <Input placeholder="请输入名称" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.shortDescription} {...formItemLayout}>
                  {getFieldDecorator('shortDescription', {
                    initialValue: selectedRow.shortDescription,
                    rules: [{ required: true, message: '请输入文字简介' }],
                  })(
                    <Input placeholder="请输入文字简介" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.maximumPlayerCount} {...formItemLayout}>
                  {getFieldDecorator('maximumPlayerCount', {
                    initialValue: selectedRow.maximumPlayerCount,
                    rules: [{ required: true, message: '请输入最多玩家数' }],
                  })(
                    <Input placeholder="请输入最多玩家数" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.minimumPlayerCount} {...formItemLayout}>
                  {getFieldDecorator('minimumPlayerCount', {
                    initialValue: selectedRow.minimumPlayerCount,
                    rules: [{ required: true, message: '请输入最少玩家数' }],
                  })(
                    <Input placeholder="请输入最少玩家数" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.recommendPlayerCount} {...formItemLayout}>
                  {getFieldDecorator('recommendPlayerCount', {
                    initialValue: selectedRow.recommendPlayerCount,
                    rules: [{ required: true, message: '请输入推荐玩家数' }],
                  })(
                    <Input placeholder="请输入推荐玩家数" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.baseListPrice} {...formItemLayout}>
                  {getFieldDecorator('baseListPrice', {
                    initialValue: selectedRow.baseListPrice,
                    rules: [{ required: true, message: '请输入基础价格' }],
                  })(
                    <Input placeholder="请输入基础价格" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.gameDuration} {...formItemLayout}>
                  {getFieldDecorator('gameDuration', {
                    initialValue: selectedRow.gameDuration,
                    rules: [{ required: true, message: '请输入时长' }],
                  })(
                    <Input placeholder="请输入时长" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.gameReservation} {...formItemLayout}>
                  {getFieldDecorator('gameReservation', {
                    initialValue: selectedRow.gameReservation,
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
                <Form.Item label={fieldLabels.gameStatus} {...switchFormItemLayout}>
                  {getFieldDecorator('gameStatus', {
                    initialValue: selectedRow.gameStatus,
                    rules: [{ required: true, message: '请输入游戏状态' }],
                    valuePropName: 'checked'
                  })(
                    <Switch checkedChildren="是" unCheckedChildren="否"  placeholder="请输入游戏状态bool" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={8} md={12} sm={24}>
                <Form.Item label={fieldLabels.sessionGame} {...switchFormItemLayout}>
                  {getFieldDecorator('sessionGame', {
                    initialValue: selectedRow.sessionGame,
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
                  	initialValue: selectedRow.longDescription,
                    rules: [{  required: true, message: '请输入游戏详情' }],
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
                  	initialValue: selectedRow.gameVideo,
                    rules: [{  required: true, message: '请输入游戏视频' }],
                  })(
                    <TextArea rows={4} placeholder="请输入请输入游戏视频" />
                  )}
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Card>


        <Card title={<div>附件 <Popover title="扫描二维码可以从手机上传图片或者附件" content={<div><img src='./qrtest.png'/></div>}><Icon type="qrcode" ></Icon></Popover></div>} className={styles.card} bordered={false}>
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

        <FooterToolbar>
          {getErrorInfo()}
          <Button type="primary" onClick={submitUpdateForm} loading={submitting} htmlType="submit">
            更新
          </Button>
          <Button type="primary" onClick={submitUpdateFormAndContinue} loading={submitting} disabled={currentUpdateIndex + 1 >= selectedRows.length}>
            更新并装载下一个
          </Button>
          <Button type="info" onClick={skipToNext} loading={submitting} disabled={currentUpdateIndex + 1 >= selectedRows.length}>
            略过
          </Button>
          <Button type="info" onClick={goback} loading={submitting}>
            取消
          </Button>
        </FooterToolbar>
      </PageHeaderLayout>
    )
  }
}

export default connect(state => ({
  collapsed: state.global.collapsed,
}))(Form.create()(GameUpdateForm))



