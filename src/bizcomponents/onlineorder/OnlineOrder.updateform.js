import React, { Component } from 'react'
import { Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover, Switch } from 'antd'
import moment from 'moment'
import { connect } from 'dva'
import {mapBackToImageValues, mapFromImageValues} from '../../axios/tools'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import {ImageComponent} from '../../axios/tools'
//import OSSPictureEdit from '../../components/OSSPictureEdit'

import FooterToolbar from '../../components/FooterToolbar'

import styles from './OnlineOrder.updateform.less'

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
  payableAmount: '应付金额',
  redeemPhone: '兑换手机',
  redeemCode: '兑换验证码',
  orderStatus: '订单状态',
  discount: '折扣',
  store: '门店',
  game: '游戏',
  session: '场次',
  gameTicket: '游戏门票',
  customer: '客户',
  gamePlatform: '游戏平台',

}

const imageURLPrefix = '//localhost:2090'

const imageKeys = [
]


class OnlineOrderUpdateForm extends Component {
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
        createTime: moment(item.createTime),
        gameSessionDatetime: moment(item.gameSessionDatetime),

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
        const onlineOrderId = values.id
        const imagesValues = mapBackToImageValues(convertedImagesValues)
        const parameters = { ...values, onlineOrderId, ...imagesValues }

        // const newIndex= currentUpdateIndex + 1
        dispatch({
          type: `${owner.type}/updateOnlineOrder`,
          payload: {
            id: owner.id,
            type: 'onlineOrder',
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
        const onlineOrderId = values.id
        const imagesValues = mapBackToImageValues(convertedImagesValues)
        const parameters = { ...values, onlineOrderId, ...imagesValues }

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
          type: `${owner.type}/updateOnlineOrder`,
          payload: {
            id: owner.id,
            type: 'onlineOrder',
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
        type: `${owner.type}/gotoNextOnlineOrderUpdateRow`,
        payload: {
          id: owner.id,
          type: 'onlineOrder',
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
          type: 'onlineOrder',
          listName:'线上订单号列表' 
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
        title={"更新线上订单号"+(currentUpdateIndex+1)+"/"+selectedRows.length}
        content="更新线上订单号"
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
                <Form.Item label={fieldLabels.gameName} {...formItemLayout}>
                  {getFieldDecorator('gameName', {
                    initialValue: selectedRow.gameName,
                    rules: [{ required: true, message: '请输入游戏名称' }],
                  })(
                    <Input placeholder="请输入游戏名称" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.gameSessionDatetime} {...formItemLayout}>
                  {getFieldDecorator('gameSessionDatetime', {
                    initialValue: selectedRow.gameSessionDatetime,
                    rules: [{ required: true, message: '请输入游戏场次日期' }],
                  })(
                    <DatePicker showTime format="YYYY-MM-DD HH:mm" minuteStep={5} placeholder="请输入游戏场次日期" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.gameSessionName} {...formItemLayout}>
                  {getFieldDecorator('gameSessionName', {
                    initialValue: selectedRow.gameSessionName,
                    rules: [{ required: true, message: '请输入游戏场次名称' }],
                  })(
                    <Input placeholder="请输入游戏场次名称" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.playerCount} {...formItemLayout}>
                  {getFieldDecorator('playerCount', {
                    initialValue: selectedRow.playerCount,
                    rules: [{ required: true, message: '请输入玩家数' }],
                  })(
                    <Input placeholder="请输入玩家数" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.originalAmount} {...formItemLayout}>
                  {getFieldDecorator('originalAmount', {
                    initialValue: selectedRow.originalAmount,
                    rules: [{ required: true, message: '请输入应付金额' }],
                  })(
                    <Input placeholder="请输入应付金额" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.payableAmount} {...formItemLayout}>
                  {getFieldDecorator('payableAmount', {
                    initialValue: selectedRow.payableAmount,
                    rules: [{ required: true, message: '请输入应付金额' }],
                  })(
                    <Input placeholder="请输入应付金额" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.redeemPhone} {...formItemLayout}>
                  {getFieldDecorator('redeemPhone', {
                    initialValue: selectedRow.redeemPhone,
                    rules: [{ required: true, message: '请输入兑换手机' }],
                  })(
                    <Input placeholder="请输入兑换手机" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.redeemCode} {...formItemLayout}>
                  {getFieldDecorator('redeemCode', {
                    initialValue: selectedRow.redeemCode,
                    rules: [{ required: true, message: '请输入兑换验证码' }],
                  })(
                    <Input placeholder="请输入兑换验证码" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.orderStatus} {...formItemLayout}>
                  {getFieldDecorator('orderStatus', {
                    initialValue: selectedRow.orderStatus,
                    rules: [{ required: true, message: '请输入订单状态' }],
                  })(
                    <Input placeholder="请输入订单状态" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.discount} {...formItemLayout}>
                  {getFieldDecorator('discount', {
                    initialValue: selectedRow.discount,
                    rules: [{ required: true, message: '请输入折扣' }],
                  })(
                    <Input placeholder="请输入折扣" />
                    
                  )}
                </Form.Item>
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
}))(Form.create()(OnlineOrderUpdateForm))



