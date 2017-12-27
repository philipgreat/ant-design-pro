import React, { Component } from 'react'
import {
  Card,
  Button,
  Form,
  Icon,
  Col,
  Row,
  DatePicker,
  TimePicker,
  Input,
  Select,
  Popover,
} from 'antd'

import { connect } from 'dva'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import PictureEdit from '../../components/PictureEdit'
import FooterToolbar from '../../components/FooterToolbar'

import styles from './Task.createform.less'

const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input
const fieldLabels = {
  id: '序号',
  title: '标题',
  selectedTask: '选定的任务',
  createTime: '创建时间',
  content: '内容',
  creator: '创建者',
  community: '社区',
  homePage: '主页',
  taskPage: '任务页面',
  videoUrl: '视频网址',
  coverImagePath1: '封面图像路径1',
  coverImagePath2: '封面图像路径2',
  coverImagePath3: '封面图像路径3',
  imagePath1: '图1',
  imagePath2: '图2',
  imagePath3: '图3',
  imagePath4: '图4',
  imagePath5: '图5',
  creatorBonus: '发布人的奖金',
  additionalBonus: '额外的奖金',
  hiding: '躲藏',
  resolving: '解决',
  reward: '悬赏',
  likeByCurrentUser: '当前用户已点赞',
  repliedByCurrentUser: '当前用户已回复',
  currentStatus: '当前状态',
}

const testValues = {
  title: '听力损失儿童回归的优点',
  selectedTask: '是',
  videoUrl: 'https://player.youku.com/embed/XMzE0ODQ0NTA2NA',
  creatorBonus: '95',
  additionalBonus: '100',
  likeByCurrentUser: '0',
  repliedByCurrentUser: '0',
  creatorId: 'CU000001',
  communityId: 'C000001',
  homePageId: 'HP000001',
  taskPageId: 'TP000001',
  content:
    '多数听力损失儿童除了听力问题，其他的发展和一般孩子   并无明显差异，所以当他们经过特殊学校训练后，具备听和说的沟通能力时，   我们应该鼓励他们回归普通学校就读。回归能带给听力损失儿童哪些有益的方便   ',
}

const imageURLPrefix = '//localhost:2090'

const imageKeys = [
  'coverImagePath1',
  'coverImagePath2',
  'coverImagePath3',
  'imagePath1',
  'imagePath2',
  'imagePath3',
  'imagePath4',
  'imagePath5',
]

class TaskCreateForm extends Component {
  state = {
    previewVisible: false,
    previewImage: '',
    convertedImagesValues: {},
  }

  componentDidMount() {
    // const { getFieldDecorator,setFieldsValue } = this.props.form
    const { setFieldsValue } = this.props.form
    setFieldsValue(testValues)
  }
  shouldComponentUpdate() {
    return true
  }
  handlePreview = file => {
    console.log('preview file', file)
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    })
  }

  handleChange = (event, source) => {
    console.log('get file list from change in update change:', source)

    const { fileList } = event
    const { convertedImagesValues } = this.state

    convertedImagesValues[source] = fileList
    this.setState({ convertedImagesValues })
    console.log('/get file list from change in update change:', source)
  }

  mapBackToImageValues = convertedImagesValues => {
    const targetImages = []
    Object.keys(convertedImagesValues).map(key => {
      if (
        !convertedImagesValues ||
        !convertedImagesValues[key] ||
        !convertedImagesValues[key][0]
      ) {
        return
      }
      const value = convertedImagesValues[key][0]
      if (value.response) {
        targetImages[key] = imageURLPrefix + value.response
        return
      }
      if (value.url) {
        targetImages[key] = value.url
        return
      }
    })
    return targetImages
  }

  mapFromImageValues = selectedRow => {
    const targetImages = {}
    const buildFileList = (key, value) => {
      if (value) {
        return [{ uid: key, url: value }]
      }
      return []
    }
    imageKeys.map(key => {
      targetImages[key] = buildFileList(key, selectedRow[key])
    })
    console.log(targetImages)
    return targetImages
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
        const imagesValues = this.mapBackToImageValues(convertedImagesValues)

        const parameters = { ...values, ...imagesValues }
        dispatch({
          type: `${owner.type}/addTask`,
          payload: { id: owner.id, type: 'task', parameters },
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
        const imagesValues = this.mapBackToImageValues(convertedImagesValues)

        const parameters = { ...values, ...imagesValues }
        dispatch({
          type: `${owner.type}/addTask`,
          payload: {
            id: owner.id,
            type: 'task',
            parameters,
            continueNext: true,
          },
        })
      })
    }

    const goback = () => {
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/goback`,
        payload: { id: owner.id, type: 'task' },
      })
    }
    const errors = getFieldsError()
    const getErrorInfo = () => {
      const errorCount = Object.keys(errors).filter(key => errors[key]).length
      if (!errors || errorCount === 0) {
        return null
      }
      // eslint-disable-next-line no-unused-vars
      const scrollToField = fieldKey => {
        const labelNode = document.querySelector('label[for="${fieldKey}"]')
        if (labelNode) {
          labelNode.scrollIntoView(true)
        }
      }
      const errorList = Object.keys(errors).map(key => {
        if (!errors[key]) {
          return null
        }
        return (
          <li
            key={key}
            className={styles.errorListItem}
            onClick={() => scrollToField(key)}
          >
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
    return (
      <PageHeaderLayout
        title="新建一个任务"
        content="新建一个任务"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.title}>
                  {getFieldDecorator('title', {
                    rules: [{ required: true, message: '请输入标题' }],
                  })(<Input placeholder="请输入请输入标题string" />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.selectedTask}>
                  {getFieldDecorator('selectedTask', {
                    rules: [{ required: true, message: '请输入选定的任务' }],
                  })(<Input placeholder="请输入请输入选定的任务string" />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.videoUrl}>
                  {getFieldDecorator('videoUrl', {
                    rules: [{ required: true, message: '请输入视频网址' }],
                  })(<Input placeholder="请输入请输入视频网址string_url" />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.creatorBonus}>
                  {getFieldDecorator('creatorBonus', {
                    rules: [{ required: true, message: '请输入发布人的奖金' }],
                  })(<Input placeholder="请输入请输入发布人的奖金int" />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.additionalBonus}>
                  {getFieldDecorator('additionalBonus', {
                    rules: [{ required: true, message: '请输入额外的奖金' }],
                  })(<Input placeholder="请输入请输入额外的奖金int" />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.likeByCurrentUser}>
                  {getFieldDecorator('likeByCurrentUser', {
                    rules: [
                      { required: true, message: '请输入当前用户已点赞' },
                    ],
                  })(<Input placeholder="请输入请输入当前用户已点赞bool" />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.repliedByCurrentUser}>
                  {getFieldDecorator('repliedByCurrentUser', {
                    rules: [
                      { required: true, message: '请输入当前用户已回复' },
                    ],
                  })(<Input placeholder="请输入请输入当前用户已回复bool" />)}
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Card>

        <Card title="内容" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col lg={24} md={24} sm={24}>
                <Form.Item>
                  {getFieldDecorator('content', {
                    rules: [{ required: true, message: '请输入内容' }],
                  })(<TextArea rows={4} placeholder="请输入请输入内容" />)}
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Card>

        <Card title="附件" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col lg={6} md={12} sm={24}>
                <PictureEdit
                  buttonTitle="封面图像路径1"
                  handlePreview={this.handlePreview}
                  handleChange={event =>
                    this.handleChange(event, 'coverImagePath1')
                  }
                  fileList={convertedImagesValues.coverImagePath1}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <PictureEdit
                  buttonTitle="封面图像路径2"
                  handlePreview={this.handlePreview}
                  handleChange={event =>
                    this.handleChange(event, 'coverImagePath2')
                  }
                  fileList={convertedImagesValues.coverImagePath2}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <PictureEdit
                  buttonTitle="封面图像路径3"
                  handlePreview={this.handlePreview}
                  handleChange={event =>
                    this.handleChange(event, 'coverImagePath3')
                  }
                  fileList={convertedImagesValues.coverImagePath3}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <PictureEdit
                  buttonTitle="图1"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'imagePath1')}
                  fileList={convertedImagesValues.imagePath1}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <PictureEdit
                  buttonTitle="图2"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'imagePath2')}
                  fileList={convertedImagesValues.imagePath2}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <PictureEdit
                  buttonTitle="图3"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'imagePath3')}
                  fileList={convertedImagesValues.imagePath3}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <PictureEdit
                  buttonTitle="图4"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'imagePath4')}
                  fileList={convertedImagesValues.imagePath4}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <PictureEdit
                  buttonTitle="图5"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'imagePath5')}
                  fileList={convertedImagesValues.imagePath5}
                />
              </Col>
            </Row>
          </Form>
        </Card>

        <Card title="关联" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.creator}>
                  {getFieldDecorator('creatorId', {
                    rules: [{ required: true, message: '请输入创建者' }],
                  })(<Input placeholder="请输入请输入创建者" />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.community}>
                  {getFieldDecorator('communityId', {
                    rules: [{ required: true, message: '请输入社区' }],
                  })(<Input placeholder="请输入请输入社区" />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.homePage}>
                  {getFieldDecorator('homePageId', {
                    rules: [{ required: true, message: '请输入主页' }],
                  })(<Input placeholder="请输入请输入主页" />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.taskPage}>
                  {getFieldDecorator('taskPageId', {
                    rules: [{ required: true, message: '请输入任务页面' }],
                  })(<Input placeholder="请输入请输入任务页面" />)}
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Card>

        <FooterToolbar>
          {getErrorInfo()}
          <Button
            type="primary"
            onClick={submitCreateForm}
            loading={submitting}
            htmlType="submit"
          >
            提交
          </Button>
          <Button
            type="primary"
            onClick={submitCreateFormAndContinue}
            loading={submitting}
          >
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
}))(Form.create()(TaskCreateForm))
