import React, { Component } from 'react'
import { Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover, Switch } from 'antd'
import moment from 'moment'
import { connect } from 'dva'
import {mapBackToImageValues, mapFromImageValues} from '../../axios/tools'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import {ImageComponent} from '../../axios/tools'
//import OSSPictureEdit from '../../components/OSSPictureEdit'

import FooterToolbar from '../../components/FooterToolbar'

import styles from './ServiceCompanyAccount.updateform.less'

const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input
const fieldLabels = {
  id: 'ID',
  serviceOrderNumber: '服务单号',
  serviceOrderCode: '服务单代码',
  serviceOrderName: '服务单名称',
  serviceFulfilledDatetime: '服务完成时间',
  contractId: '合同编号',
  contractPriceValue: '服务价格',
  contractPriceType: '服务类型',
  serviceWorkerName: '服务人员',
  serviceCompanyName: '商户名称',
  mainOrderId: '年检订单ID',
  merchantDiscount: '商户优惠',
  merchant: '商户',
  responsibleWorker: '服务人员',
  account: '对账单',

}

const imageURLPrefix = '//localhost:2090'

const imageKeys = [
]


class ServiceCompanyAccountUpdateForm extends Component {
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
        serviceFulfilledDatetime: moment(item.serviceFulfilledDatetime),

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
        const serviceCompanyAccountId = values.id
        const imagesValues = mapBackToImageValues(convertedImagesValues)
        const parameters = { ...values, serviceCompanyAccountId, ...imagesValues }

        // const newIndex= currentUpdateIndex + 1
        dispatch({
          type: `${owner.type}/updateServiceCompanyAccount`,
          payload: {
            id: owner.id,
            type: 'serviceCompanyAccount',
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
        const serviceCompanyAccountId = values.id
        const imagesValues = mapBackToImageValues(convertedImagesValues)
        const parameters = { ...values, serviceCompanyAccountId, ...imagesValues }

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
          type: `${owner.type}/updateServiceCompanyAccount`,
          payload: {
            id: owner.id,
            type: 'serviceCompanyAccount',
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
        type: `${owner.type}/gotoNextServiceCompanyAccountUpdateRow`,
        payload: {
          id: owner.id,
          type: 'serviceCompanyAccount',
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
          type: 'serviceCompanyAccount',
          listName:'服务商户对账单列表' 
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
        title={"更新服务商户对账单"+(currentUpdateIndex+1)+"/"+selectedRows.length}
        content="更新服务商户对账单"
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
                <Form.Item label={fieldLabels.serviceOrderNumber} {...formItemLayout}>
                  {getFieldDecorator('serviceOrderNumber', {
                    initialValue: selectedRow.serviceOrderNumber,
                    rules: [{ required: true, message: '请输入服务单号' }],
                  })(
                    <Input placeholder="请输入服务单号" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.serviceOrderCode} {...formItemLayout}>
                  {getFieldDecorator('serviceOrderCode', {
                    initialValue: selectedRow.serviceOrderCode,
                    rules: [{ required: true, message: '请输入服务单代码' }],
                  })(
                    <Input placeholder="请输入服务单代码" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.serviceOrderName} {...formItemLayout}>
                  {getFieldDecorator('serviceOrderName', {
                    initialValue: selectedRow.serviceOrderName,
                    rules: [{ required: true, message: '请输入服务单名称' }],
                  })(
                    <Input placeholder="请输入服务单名称" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.serviceFulfilledDatetime} {...formItemLayout}>
                  {getFieldDecorator('serviceFulfilledDatetime', {
                    initialValue: selectedRow.serviceFulfilledDatetime,
                    rules: [{ required: true, message: '请输入服务完成时间' }],
                  })(
                    <DatePicker showTime format="YYYY-MM-DD HH:mm" minuteStep={5} placeholder="请输入服务完成时间" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.contractId} {...formItemLayout}>
                  {getFieldDecorator('contractId', {
                    initialValue: selectedRow.contractId,
                    rules: [{ required: true, message: '请输入合同编号' }],
                  })(
                    <Input placeholder="请输入合同编号" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.contractPriceValue} {...formItemLayout}>
                  {getFieldDecorator('contractPriceValue', {
                    initialValue: selectedRow.contractPriceValue,
                    rules: [{ required: true, message: '请输入服务价格' }],
                  })(
                    <Input placeholder="请输入服务价格" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.contractPriceType} {...formItemLayout}>
                  {getFieldDecorator('contractPriceType', {
                    initialValue: selectedRow.contractPriceType,
                    rules: [{ required: true, message: '请输入服务类型' }],
                  })(
                    <Input placeholder="请输入服务类型" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.serviceWorkerName} {...formItemLayout}>
                  {getFieldDecorator('serviceWorkerName', {
                    initialValue: selectedRow.serviceWorkerName,
                    rules: [{ required: true, message: '请输入服务人员' }],
                  })(
                    <Input placeholder="请输入服务人员" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.serviceCompanyName} {...formItemLayout}>
                  {getFieldDecorator('serviceCompanyName', {
                    initialValue: selectedRow.serviceCompanyName,
                    rules: [{ required: true, message: '请输入商户名称' }],
                  })(
                    <Input placeholder="请输入商户名称" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.mainOrderId} {...formItemLayout}>
                  {getFieldDecorator('mainOrderId', {
                    initialValue: selectedRow.mainOrderId,
                    rules: [{ required: true, message: '请输入年检订单ID' }],
                  })(
                    <Input placeholder="请输入年检订单ID" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.merchantDiscount} {...formItemLayout}>
                  {getFieldDecorator('merchantDiscount', {
                    initialValue: selectedRow.merchantDiscount,
                    rules: [{ required: true, message: '请输入商户优惠' }],
                  })(
                    <Input placeholder="请输入商户优惠" />
                    
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
}))(Form.create()(ServiceCompanyAccountUpdateForm))


