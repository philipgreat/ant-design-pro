import React, { Component } from 'react'
import { Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover, Switch } from 'antd'
import moment from 'moment'
import { connect } from 'dva'
import {mapBackToImageValues, mapFromImageValues} from '../../axios/tools'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import {ImageComponent} from '../../axios/tools'
//import OSSPictureEdit from '../../components/OSSPictureEdit'

import FooterToolbar from '../../components/FooterToolbar'

import styles from './GameSessionRecord.updateform.less'

const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input
const fieldLabels = {
  id: 'ID',
  storeName: '门店名字',
  gameName: '游戏名称',
  gameSessionDatetime: '游戏场次日期',
  gameSessionName: '游戏场次名称',
  result: '结果',
  playerCount: '玩家数',
  planStartTime: '计划开始时间',
  planEndTime: '计划结束时间',
  actualStartTime: '实际开始时间',
  actualEndTime: '实际结束时间',
  bugFound: '是否有Bug',
  gameSessionComment: '游戏场次运行记录',
  store: '门店',
  game: '游戏',
  gameSession: '游戏场次',

}

const imageURLPrefix = '//localhost:2090'

const imageKeys = [
]


class GameSessionRecordUpdateForm extends Component {
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
        gameSessionDatetime: moment(item.gameSessionDatetime),
        planStartTime: moment(item.planStartTime),
        planEndTime: moment(item.planEndTime),
        actualStartTime: moment(item.actualStartTime),
        actualEndTime: moment(item.actualEndTime),

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
        const gameSessionRecordId = values.id
        const imagesValues = mapBackToImageValues(convertedImagesValues)
        const parameters = { ...values, gameSessionRecordId, ...imagesValues }

        // const newIndex= currentUpdateIndex + 1
        dispatch({
          type: `${owner.type}/updateGameSessionRecord`,
          payload: {
            id: owner.id,
            type: 'gameSessionRecord',
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
        const gameSessionRecordId = values.id
        const imagesValues = mapBackToImageValues(convertedImagesValues)
        const parameters = { ...values, gameSessionRecordId, ...imagesValues }

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
          type: `${owner.type}/updateGameSessionRecord`,
          payload: {
            id: owner.id,
            type: 'gameSessionRecord',
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
        type: `${owner.type}/gotoNextGameSessionRecordUpdateRow`,
        payload: {
          id: owner.id,
          type: 'gameSessionRecord',
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
          type: 'gameSessionRecord',
          listName:'游戏场次记录列表' 
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
        title={"更新游戏场次记录"+(currentUpdateIndex+1)+"/"+selectedRows.length}
        content="更新游戏场次记录"
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
                <Form.Item label={fieldLabels.storeName} {...formItemLayout}>
                  {getFieldDecorator('storeName', {
                    initialValue: selectedRow.storeName,
                    rules: [{ required: true, message: '请输入门店名字' }],
                  })(
                    <Input placeholder="请输入门店名字" />
                    
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
                <Form.Item label={fieldLabels.result} {...formItemLayout}>
                  {getFieldDecorator('result', {
                    initialValue: selectedRow.result,
                    rules: [{ required: true, message: '请输入结果' }],
                  })(
                    <Input placeholder="请输入结果" />
                    
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
                <Form.Item label={fieldLabels.planStartTime} {...formItemLayout}>
                  {getFieldDecorator('planStartTime', {
                    initialValue: selectedRow.planStartTime,
                    rules: [{ required: true, message: '请输入计划开始时间' }],
                  })(
                    <DatePicker showTime format="YYYY-MM-DD HH:mm" minuteStep={5} placeholder="请输入计划开始时间" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.planEndTime} {...formItemLayout}>
                  {getFieldDecorator('planEndTime', {
                    initialValue: selectedRow.planEndTime,
                    rules: [{ required: true, message: '请输入计划结束时间' }],
                  })(
                    <DatePicker showTime format="YYYY-MM-DD HH:mm" minuteStep={5} placeholder="请输入计划结束时间" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.actualStartTime} {...formItemLayout}>
                  {getFieldDecorator('actualStartTime', {
                    initialValue: selectedRow.actualStartTime,
                    rules: [{ required: true, message: '请输入实际开始时间' }],
                  })(
                    <DatePicker showTime format="YYYY-MM-DD HH:mm" minuteStep={5} placeholder="请输入实际开始时间" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.actualEndTime} {...formItemLayout}>
                  {getFieldDecorator('actualEndTime', {
                    initialValue: selectedRow.actualEndTime,
                    rules: [{ required: true, message: '请输入实际结束时间' }],
                  })(
                    <DatePicker showTime format="YYYY-MM-DD HH:mm" minuteStep={5} placeholder="请输入实际结束时间" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.gameSessionComment} {...formItemLayout}>
                  {getFieldDecorator('gameSessionComment', {
                    initialValue: selectedRow.gameSessionComment,
                    rules: [{ required: true, message: '请输入游戏场次运行记录' }],
                  })(
                    <Input placeholder="请输入游戏场次运行记录" />
                    
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
                <Form.Item label={fieldLabels.bugFound} {...switchFormItemLayout}>
                  {getFieldDecorator('bugFound', {
                    initialValue: selectedRow.bugFound,
                    rules: [{ required: true, message: '请输入是否有Bug' }],
                    valuePropName: 'checked'
                  })(
                    <Switch checkedChildren="是" unCheckedChildren="否"  placeholder="请输入是否有Bugbool" />
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
}))(Form.create()(GameSessionRecordUpdateForm))



