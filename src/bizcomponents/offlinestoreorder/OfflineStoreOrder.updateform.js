import React, { Component } from 'react'
import { Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover, Switch } from 'antd'
import moment from 'moment'
import { connect } from 'dva'
import {mapBackToImageValues, mapFromImageValues} from '../../axios/tools'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import {ImageComponent} from '../../axios/tools'
//import OSSPictureEdit from '../../components/OSSPictureEdit'

import FooterToolbar from '../../components/FooterToolbar'

import styles from './OfflineStoreOrder.updateform.less'

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

const imageURLPrefix = '//localhost:2090'

const imageKeys = [
  'paymentEvidenceImage',
]


class OfflineStoreOrderUpdateForm extends Component {
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
        const offlineStoreOrderId = values.id
        const imagesValues = mapBackToImageValues(convertedImagesValues)
        const parameters = { ...values, offlineStoreOrderId, ...imagesValues }

        // const newIndex= currentUpdateIndex + 1
        dispatch({
          type: `${owner.type}/updateOfflineStoreOrder`,
          payload: {
            id: owner.id,
            type: 'offlineStoreOrder',
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
        const offlineStoreOrderId = values.id
        const imagesValues = mapBackToImageValues(convertedImagesValues)
        const parameters = { ...values, offlineStoreOrderId, ...imagesValues }

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
          type: `${owner.type}/updateOfflineStoreOrder`,
          payload: {
            id: owner.id,
            type: 'offlineStoreOrder',
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
        type: `${owner.type}/gotoNextOfflineStoreOrderUpdateRow`,
        payload: {
          id: owner.id,
          type: 'offlineStoreOrder',
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
          type: 'offlineStoreOrder',
          listName:'线下门店订单列表' 
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
        title={"更新线下门店订单"+(currentUpdateIndex+1)+"/"+selectedRows.length}
        content="更新线下门店订单"
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
                <Form.Item label={fieldLabels.actualAmount} {...formItemLayout}>
                  {getFieldDecorator('actualAmount', {
                    initialValue: selectedRow.actualAmount,
                    rules: [{ required: true, message: '请输入实际金额' }],
                  })(
                    <Input placeholder="请输入实际金额" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.adjustPayableAmount} {...formItemLayout}>
                  {getFieldDecorator('adjustPayableAmount', {
                    initialValue: selectedRow.adjustPayableAmount,
                    rules: [{ required: true, message: '请输入调整应付金额' }],
                  })(
                    <Input placeholder="请输入调整应付金额" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.mobile} {...formItemLayout}>
                  {getFieldDecorator('mobile', {
                    initialValue: selectedRow.mobile,
                    rules: [{ required: true, message: '请输入手机号码' }],
                  })(
                    <Input placeholder="请输入手机号码" />
                    
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
                <Form.Item label={fieldLabels.paymentMethod} {...formItemLayout}>
                  {getFieldDecorator('paymentMethod', {
                    initialValue: selectedRow.paymentMethod,
                    rules: [{ required: true, message: '请输入支付方式' }],
                  })(
                    <Input placeholder="请输入支付方式" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.paymentEvidence} {...formItemLayout}>
                  {getFieldDecorator('paymentEvidence', {
                    initialValue: selectedRow.paymentEvidence,
                    rules: [{ required: true, message: '请输入付款凭证' }],
                  })(
                    <Input placeholder="请输入付款凭证" />
                    
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

            </Row>
          </Form>  
        </Card>
        
        <Card title="设置" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>
            

              <Col lg={8} md={12} sm={24}>
                <Form.Item label={fieldLabels.ticketPrinted} {...switchFormItemLayout}>
                  {getFieldDecorator('ticketPrinted', {
                    initialValue: selectedRow.ticketPrinted,
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
        
        
        
        


        <Card title={<div>附件 <Popover title="扫描二维码可以从手机上传图片或者附件" content={<div><img src='./qrtest.png'/></div>}><Icon type="qrcode" ></Icon></Popover></div>} className={styles.card} bordered={false}>
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
}))(Form.create()(OfflineStoreOrderUpdateForm))



