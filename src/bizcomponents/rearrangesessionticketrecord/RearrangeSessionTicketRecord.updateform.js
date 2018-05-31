import React, { Component } from 'react'
import { Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover, Switch } from 'antd'
import moment from 'moment'
import { connect } from 'dva'
import {mapBackToImageValues, mapFromImageValues} from '../../axios/tools'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import {ImageComponent} from '../../axios/tools'
//import OSSPictureEdit from '../../components/OSSPictureEdit'

import FooterToolbar from '../../components/FooterToolbar'

import styles from './RearrangeSessionTicketRecord.updateform.less'

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

const imageURLPrefix = '//localhost:2090'

const imageKeys = [
]


class RearrangeSessionTicketRecordUpdateForm extends Component {
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
        sourceGameSessionDatetime: moment(item.sourceGameSessionDatetime),
        targetGameSessionDatetime: moment(item.targetGameSessionDatetime),

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
        const rearrangeSessionTicketRecordId = values.id
        const imagesValues = mapBackToImageValues(convertedImagesValues)
        const parameters = { ...values, rearrangeSessionTicketRecordId, ...imagesValues }

        // const newIndex= currentUpdateIndex + 1
        dispatch({
          type: `${owner.type}/updateRearrangeSessionTicketRecord`,
          payload: {
            id: owner.id,
            type: 'rearrangeSessionTicketRecord',
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
        const rearrangeSessionTicketRecordId = values.id
        const imagesValues = mapBackToImageValues(convertedImagesValues)
        const parameters = { ...values, rearrangeSessionTicketRecordId, ...imagesValues }

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
          type: `${owner.type}/updateRearrangeSessionTicketRecord`,
          payload: {
            id: owner.id,
            type: 'rearrangeSessionTicketRecord',
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
        type: `${owner.type}/gotoNextRearrangeSessionTicketRecordUpdateRow`,
        payload: {
          id: owner.id,
          type: 'rearrangeSessionTicketRecord',
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
          type: 'rearrangeSessionTicketRecord',
          listName:'换场记录列表' 
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
        title={"更新换场记录"+(currentUpdateIndex+1)+"/"+selectedRows.length}
        content="更新换场记录"
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
                <Form.Item label={fieldLabels.sourceGameName} {...formItemLayout}>
                  {getFieldDecorator('sourceGameName', {
                    initialValue: selectedRow.sourceGameName,
                    rules: [{ required: true, message: '请输入原游戏名称' }],
                  })(
                    <Input placeholder="请输入原游戏名称" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.sourceGameSessionDatetime} {...formItemLayout}>
                  {getFieldDecorator('sourceGameSessionDatetime', {
                    initialValue: selectedRow.sourceGameSessionDatetime,
                    rules: [{ required: true, message: '请输入原游戏场次日期' }],
                  })(
                    <DatePicker showTime format="YYYY-MM-DD HH:mm" minuteStep={5} placeholder="请输入原游戏场次日期" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.sourceGameSessionName} {...formItemLayout}>
                  {getFieldDecorator('sourceGameSessionName', {
                    initialValue: selectedRow.sourceGameSessionName,
                    rules: [{ required: true, message: '请输入原游戏场次名称' }],
                  })(
                    <Input placeholder="请输入原游戏场次名称" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.sourceTicketQuantity} {...formItemLayout}>
                  {getFieldDecorator('sourceTicketQuantity', {
                    initialValue: selectedRow.sourceTicketQuantity,
                    rules: [{ required: true, message: '请输入原门票数' }],
                  })(
                    <Input placeholder="请输入原门票数" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.sourceRedeemPhone} {...formItemLayout}>
                  {getFieldDecorator('sourceRedeemPhone', {
                    initialValue: selectedRow.sourceRedeemPhone,
                    rules: [{ required: true, message: '请输入原换票手机号' }],
                  })(
                    <Input placeholder="请输入原换票手机号" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.sourceRedeemCode} {...formItemLayout}>
                  {getFieldDecorator('sourceRedeemCode', {
                    initialValue: selectedRow.sourceRedeemCode,
                    rules: [{ required: true, message: '请输入原换票验证码' }],
                  })(
                    <Input placeholder="请输入原换票验证码" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.sourceStoreName} {...formItemLayout}>
                  {getFieldDecorator('sourceStoreName', {
                    initialValue: selectedRow.sourceStoreName,
                    rules: [{ required: true, message: '请输入原门店名称' }],
                  })(
                    <Input placeholder="请输入原门店名称" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.targetGameName} {...formItemLayout}>
                  {getFieldDecorator('targetGameName', {
                    initialValue: selectedRow.targetGameName,
                    rules: [{ required: true, message: '请输入换场游戏名称' }],
                  })(
                    <Input placeholder="请输入换场游戏名称" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.targetGameSessionDatetime} {...formItemLayout}>
                  {getFieldDecorator('targetGameSessionDatetime', {
                    initialValue: selectedRow.targetGameSessionDatetime,
                    rules: [{ required: true, message: '请输入换场游戏场次日期' }],
                  })(
                    <DatePicker showTime format="YYYY-MM-DD HH:mm" minuteStep={5} placeholder="请输入换场游戏场次日期" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.targetGameSessionName} {...formItemLayout}>
                  {getFieldDecorator('targetGameSessionName', {
                    initialValue: selectedRow.targetGameSessionName,
                    rules: [{ required: true, message: '请输入换场游戏场次名称' }],
                  })(
                    <Input placeholder="请输入换场游戏场次名称" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.targetTicketQuantity} {...formItemLayout}>
                  {getFieldDecorator('targetTicketQuantity', {
                    initialValue: selectedRow.targetTicketQuantity,
                    rules: [{ required: true, message: '请输入换场门票数' }],
                  })(
                    <Input placeholder="请输入换场门票数" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.targetRedeemPhone} {...formItemLayout}>
                  {getFieldDecorator('targetRedeemPhone', {
                    initialValue: selectedRow.targetRedeemPhone,
                    rules: [{ required: true, message: '请输入换场换票手机' }],
                  })(
                    <Input placeholder="请输入换场换票手机" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.targetRedeemCode} {...formItemLayout}>
                  {getFieldDecorator('targetRedeemCode', {
                    initialValue: selectedRow.targetRedeemCode,
                    rules: [{ required: true, message: '请输入换场换票验证码' }],
                  })(
                    <Input placeholder="请输入换场换票验证码" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.targetStoreName} {...formItemLayout}>
                  {getFieldDecorator('targetStoreName', {
                    initialValue: selectedRow.targetStoreName,
                    rules: [{ required: true, message: '请输入换场门店名称' }],
                  })(
                    <Input placeholder="请输入换场门店名称" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.rearrangeComment} {...formItemLayout}>
                  {getFieldDecorator('rearrangeComment', {
                    initialValue: selectedRow.rearrangeComment,
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
                <Form.Item label={fieldLabels.sourceTicketPrinted} {...switchFormItemLayout}>
                  {getFieldDecorator('sourceTicketPrinted', {
                    initialValue: selectedRow.sourceTicketPrinted,
                    rules: [{ required: true, message: '请输入原门票是否已打印' }],
                    valuePropName: 'checked'
                  })(
                    <Switch checkedChildren="是" unCheckedChildren="否"  placeholder="请输入原门票是否已打印bool" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={8} md={12} sm={24}>
                <Form.Item label={fieldLabels.targetTicketPrinted} {...switchFormItemLayout}>
                  {getFieldDecorator('targetTicketPrinted', {
                    initialValue: selectedRow.targetTicketPrinted,
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
}))(Form.create()(RearrangeSessionTicketRecordUpdateForm))



