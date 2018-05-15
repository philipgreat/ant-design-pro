import React, { Component } from 'react'
import { Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover, Switch } from 'antd'
import moment from 'moment'
import { connect } from 'dva'
import {mapBackToImageValues, mapFromImageValues} from '../../axios/tools'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import {ImageComponent} from '../../axios/tools'
//import OSSPictureEdit from '../../components/OSSPictureEdit'

import FooterToolbar from '../../components/FooterToolbar'

import styles from './BorrowingHistory.updateform.less'

const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input
const fieldLabels = {
  id: 'ID',
  borrower: '借款人',
  borrowerMemberLevel: '借款人会员级别',
  borrowerMemberServiceExpiredDatetime: '借方成员服务过期日期。',
  book: '书',
  bookCopy: '书副本',
  bookCopySharingType: '书副本共享类型',
  bookName: '书的名字',
  lendingStore: '贷款商店',
  lendingStoreType: '贷款存储类型',
  lendingDatetime: '贷款Datetime',
  freeLendingDays: '自由借贷天',
  freeLendingExpiredDatetime: '免费贷款到期日期时间',
  expiredLendingRate: '到期贷款利率',
  expiredLendingComputeFrequency: '到期贷款计算频率',
  returnDatetime: '返回日期时间',
  returnStore: '返回商店',
  lendingDays: '贷款的日子',
  freeLendingExpired: '免费贷款到期',

}

const imageURLPrefix = '//localhost:2090'

const imageKeys = [
]


class BorrowingHistoryUpdateForm extends Component {
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
        borrowerMemberServiceExpiredDatetime: moment(item.borrowerMemberServiceExpiredDatetime),
        lendingDatetime: moment(item.lendingDatetime),
        freeLendingExpiredDatetime: moment(item.freeLendingExpiredDatetime),
        returnDatetime: moment(item.returnDatetime),

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
        const borrowingHistoryId = values.id
        const imagesValues = mapBackToImageValues(convertedImagesValues)
        const parameters = { ...values, borrowingHistoryId, ...imagesValues }

        // const newIndex= currentUpdateIndex + 1
        dispatch({
          type: `${owner.type}/updateBorrowingHistory`,
          payload: {
            id: owner.id,
            type: 'borrowingHistory',
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
        const borrowingHistoryId = values.id
        const imagesValues = mapBackToImageValues(convertedImagesValues)
        const parameters = { ...values, borrowingHistoryId, ...imagesValues }

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
          type: `${owner.type}/updateBorrowingHistory`,
          payload: {
            id: owner.id,
            type: 'borrowingHistory',
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
        type: `${owner.type}/gotoNextBorrowingHistoryUpdateRow`,
        payload: {
          id: owner.id,
          type: 'borrowingHistory',
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
          type: 'borrowingHistory',
          listName:'借贷历史列表' 
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
        title={"更新借贷历史"+(currentUpdateIndex+1)+"/"+selectedRows.length}
        content="更新借贷历史"
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
                <Form.Item label={fieldLabels.borrowerMemberLevel} {...formItemLayout}>
                  {getFieldDecorator('borrowerMemberLevel', {
                    initialValue: selectedRow.borrowerMemberLevel,
                    rules: [{ required: true, message: '请输入借款人会员级别' }],
                  })(
                    <Input placeholder="请输入借款人会员级别" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.borrowerMemberServiceExpiredDatetime} {...formItemLayout}>
                  {getFieldDecorator('borrowerMemberServiceExpiredDatetime', {
                    initialValue: selectedRow.borrowerMemberServiceExpiredDatetime,
                    rules: [{ required: true, message: '请输入借方成员服务过期日期。' }],
                  })(
                    <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" placeholder="请输入借方成员服务过期日期。" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.bookCopySharingType} {...formItemLayout}>
                  {getFieldDecorator('bookCopySharingType', {
                    initialValue: selectedRow.bookCopySharingType,
                    rules: [{ required: true, message: '请输入书副本共享类型' }],
                  })(
                    <Input placeholder="请输入书副本共享类型" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.bookName} {...formItemLayout}>
                  {getFieldDecorator('bookName', {
                    initialValue: selectedRow.bookName,
                    rules: [{ required: true, message: '请输入书的名字' }],
                  })(
                    <Input placeholder="请输入书的名字" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.lendingStoreType} {...formItemLayout}>
                  {getFieldDecorator('lendingStoreType', {
                    initialValue: selectedRow.lendingStoreType,
                    rules: [{ required: true, message: '请输入贷款存储类型' }],
                  })(
                    <Input placeholder="请输入贷款存储类型" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.lendingDatetime} {...formItemLayout}>
                  {getFieldDecorator('lendingDatetime', {
                    initialValue: selectedRow.lendingDatetime,
                    rules: [{ required: true, message: '请输入贷款Datetime' }],
                  })(
                    <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" placeholder="请输入贷款Datetime" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.freeLendingDays} {...formItemLayout}>
                  {getFieldDecorator('freeLendingDays', {
                    initialValue: selectedRow.freeLendingDays,
                    rules: [{ required: true, message: '请输入自由借贷天' }],
                  })(
                    <Input placeholder="请输入自由借贷天" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.freeLendingExpiredDatetime} {...formItemLayout}>
                  {getFieldDecorator('freeLendingExpiredDatetime', {
                    initialValue: selectedRow.freeLendingExpiredDatetime,
                    rules: [{ required: true, message: '请输入免费贷款到期日期时间' }],
                  })(
                    <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" placeholder="请输入免费贷款到期日期时间" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.expiredLendingRate} {...formItemLayout}>
                  {getFieldDecorator('expiredLendingRate', {
                    initialValue: selectedRow.expiredLendingRate,
                    rules: [{ required: true, message: '请输入到期贷款利率' }],
                  })(
                    <Input placeholder="请输入到期贷款利率" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.expiredLendingComputeFrequency} {...formItemLayout}>
                  {getFieldDecorator('expiredLendingComputeFrequency', {
                    initialValue: selectedRow.expiredLendingComputeFrequency,
                    rules: [{ required: true, message: '请输入到期贷款计算频率' }],
                  })(
                    <Input placeholder="请输入到期贷款计算频率" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.returnDatetime} {...formItemLayout}>
                  {getFieldDecorator('returnDatetime', {
                    initialValue: selectedRow.returnDatetime,
                    rules: [{ required: true, message: '请输入返回日期时间' }],
                  })(
                    <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" placeholder="请输入返回日期时间" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.lendingDays} {...formItemLayout}>
                  {getFieldDecorator('lendingDays', {
                    initialValue: selectedRow.lendingDays,
                    rules: [{ required: true, message: '请输入贷款的日子' }],
                  })(
                    <Input placeholder="请输入贷款的日子" />
                    
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
                <Form.Item label={fieldLabels.freeLendingExpired} {...switchFormItemLayout}>
                  {getFieldDecorator('freeLendingExpired', {
                    initialValue: selectedRow.freeLendingExpired,
                    rules: [{ required: true, message: '请输入免费贷款到期' }],
                    valuePropName: 'checked'
                  })(
                    <Switch checkedChildren="是" unCheckedChildren="否"  placeholder="请输入免费贷款到期bool" />
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
}))(Form.create()(BorrowingHistoryUpdateForm))



