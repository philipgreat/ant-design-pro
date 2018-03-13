import React, { PureComponent } from 'react'
import moment from 'moment'
import {
  Form,
  Button,
  Table,
  Alert,
  Badge,
  Input,
  Divider,
  Popconfirm,
} from 'antd'
import styles from './Thread.edittable.less'
import ImagePreview from '../../components/ImagePreview'

const getRowById = (data, id) => {
  return data.filter(item => item.id === id)[0]
}

const toggleEdit = (e, data, id) => {
  const row = data.filter(item => item.id === id)[0]
  row[editable] = true
}

class ThreadEditTable extends PureComponent {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      data: props.data,
    }
  }

  componentWillReceiveProps(nextProps) {
    const { data } = nextProps
    this.setState({
      data: data,
    })
  }

  render() {
    // const { data,count,current, owner } = this.props
    const { data } = this.state
    const { appendInProcess } = this.state

    const changeText = (e, fieldName, record) => {
      const newData = [...this.state.data]

      const row = getRowById(newData, record.id)
      console.log('text is changed row', row)
      if (row) {
        row[fieldName] = e.target.value
        this.setState({ data: newData })
      }
    }

    const toggleEdit = (e, record) => {
      const newData = [...this.state.data]
      const row = newData.filter(item => item.id === record.id)[0]
      row.editable = !row.editable
      this.setState({ data: newData })
    }
    const removeFromArray = (array, element) => {
      const index = array.indexOf(element)
      console.log('remove from array')
      if (index !== -1) {
        console.log('-------------remove from array')
        array.splice(index, 1)
      }
    }
    const cancelAppend = (e, record) => {
      const newData = [...this.state.data]
      removeFromArray(newData, record)
      this.setState({ data: newData, appendInProcess: false })
    }
    const remapReference = record => {
      const communityId = record.community.id
      const creatorId = record.creator.id
      const homePageId = record.homePage.id
      const groupPageId = record.groupPage.id

      //const communityId = record.community.id;
      return { communityId, creatorId, homePageId, groupPageId }
    }
    const deleteRecord = (e, record) => {
      const { dispatch, owner } = this.props
      const { data } = this.state
      const threadIds = [record.id]
      const parameters = { threadIds }
      dispatch({
        type: `${owner.type}/removeThreadList`,
        payload: { id: owner.id, type: 'thread', parameters },
      })
    }

    const addRecord = (e, record) => {
      const { dispatch, owner } = this.props
      const { data } = this.state
      const communityId = record.community.id
      const parameters = { ...record, ...remapReference(record) }
      const newData = [...data]

      dispatch({
        type: `${owner.type}/addThread`,
        payload: {
          id: owner.id,
          type: 'thread',
          parameters,
          selectedRows: newData,
          currentUpdateIndex: 0,
          continueNext: true,
        },
      })
      this.setState({ appendInProcess: false })
    }

    const updateRecord = (e, record) => {
      const { dispatch, owner } = this.props
      const { data } = this.state
      const { threadId } = record.id
      const parameters = { ...record, threadId }
      const newData = [...data]
      const row = newData.filter(item => item.id === record.id)[0]
      row.editable = !row.editable

      dispatch({
        type: `${owner.type}/updateThread`,
        payload: {
          id: owner.id,
          type: 'thread',
          parameters,
          selectedRows: newData,
          currentUpdateIndex: 0,
          continueNext: true,
        },
      })
    }

    const isAppendingRow = record => {
      return appendInProcess && record.id.indexOf('+') === 0
    }

    const renderStringEdit = (name, text, record) => {
      if (isAppendingRow(record)) {
        return (
          <Input
            size={'small'}
            style={{ width: '80%' }}
            value={text}
            onChange={e => changeText(e, name, record)}
            placeholder={'NO'}
          />
        )
      }
      if (record.editable) {
        return (
          <Input
            size={'small'}
            style={{ width: '80%' }}
            value={text}
            onChange={e => changeText(e, name, record)}
            placeholder={'NO'}
          />
        )
      }
      return text
    }

    const renderActions = (text, record) => {
      if (isAppendingRow(record)) {
        return (
          <div>
            <a onClick={e => addRecord(e, record)}>增加</a>
            <Divider type="vertical" />
            <a onClick={e => cancelAppend(e, record)}>取消</a>
          </div>
        )
      }
      if (record.editable) {
        return (
          <div>
            <a onClick={e => updateRecord(e, record)}>保存</a>
            <Divider type="vertical" />
            <a onClick={e => toggleEdit(e, record)}>取消</a>
          </div>
        )
      }
      return (
        <div>
          <a onClick={e => toggleEdit(e, record)}>编辑</a>
          <Divider type="vertical" />
          <Popconfirm
            title="是否要删除此行？"
            onConfirm={e => deleteRecord(e, record)}
          >
            <a>删除</a>
          </Popconfirm>{' '}
        </div>
      )
    }

    const columns = [
      { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
      {
        title: '标题',
        debugtype: 'string',
        dataIndex: 'title',
        width: '15',
        render: (text, record) => renderStringEdit('title', text, record),
      },
      {
        title: '显示顺序',
        debugtype: 'int',
        dataIndex: 'displayOrder',
        width: '10',
        render: (text, record) =>
          renderStringEdit('displayOrder', text, record),
      },
      {
        title: '创建时间',
        dataIndex: 'createTime',
        render: (text, record) =>
          moment(record.createTime).format('YYYY-MM-DD HH:mm:ss'),
      },
      {
        title: '事件时间',
        dataIndex: 'eventTime',
        render: (text, record) =>
          moment(record.eventTime).format('YYYY-MM-DD HH:mm:ss'),
      },
      {
        title: '注册时间停止',
        dataIndex: 'registrationStopTime',
        render: (text, record) =>
          moment(record.registrationStopTime).format('YYYY-MM-DD HH:mm:ss'),
      },
      {
        title: '事件的位置',
        debugtype: 'string',
        dataIndex: 'eventLocation',
        width: '13',
        render: (text, record) =>
          renderStringEdit('eventLocation', text, record),
      },
      {
        title: '城市',
        debugtype: 'string',
        dataIndex: 'city',
        width: '6',
        render: (text, record) => renderStringEdit('city', text, record),
      },
      {
        title: '社区组',
        debugtype: 'string',
        dataIndex: 'communityGroup',
        width: '8',
        render: (text, record) =>
          renderStringEdit('communityGroup', text, record),
      },
      {
        title: '帖子类型',
        debugtype: 'string',
        dataIndex: 'threadType',
        width: '9',
        render: (text, record) => renderStringEdit('threadType', text, record),
      },
      {
        title: '社区',
        dataIndex: 'community',
        render: (text, record) =>
          record.community ? record.community.displayName : '暂无',
      },
      {
        title: '创建者',
        dataIndex: 'creator',
        render: (text, record) =>
          record.creator ? record.creator.displayName : '暂无',
      },
      {
        title: '主页',
        dataIndex: 'homePage',
        render: (text, record) =>
          record.homePage ? record.homePage.displayName : '暂无',
      },
      {
        title: '群组页面',
        dataIndex: 'groupPage',
        render: (text, record) =>
          record.groupPage ? record.groupPage.displayName : '暂无',
      },
      {
        title: '视频网址',
        debugtype: 'string_url',
        dataIndex: 'videoUrl',
        width: '50',
        render: (text, record) => renderStringEdit('videoUrl', text, record),
      },
      {
        title: '封面图像路径1',
        dataIndex: 'coverImagePath1',
        render: (text, record) => (
          <ImagePreview imageLocation={record.coverImagePath1} />
        ),
      },
      {
        title: '封面图像路径2',
        dataIndex: 'coverImagePath2',
        render: (text, record) => (
          <ImagePreview imageLocation={record.coverImagePath2} />
        ),
      },
      {
        title: '封面图像路径3',
        dataIndex: 'coverImagePath3',
        render: (text, record) => (
          <ImagePreview imageLocation={record.coverImagePath3} />
        ),
      },
      {
        title: '图1',
        dataIndex: 'imagePath1',
        render: (text, record) => (
          <ImagePreview imageLocation={record.imagePath1} />
        ),
      },
      {
        title: '图2',
        dataIndex: 'imagePath2',
        render: (text, record) => (
          <ImagePreview imageLocation={record.imagePath2} />
        ),
      },
      {
        title: '图3',
        dataIndex: 'imagePath3',
        render: (text, record) => (
          <ImagePreview imageLocation={record.imagePath3} />
        ),
      },
      {
        title: '图4',
        dataIndex: 'imagePath4',
        render: (text, record) => (
          <ImagePreview imageLocation={record.imagePath4} />
        ),
      },
      {
        title: '图5',
        dataIndex: 'imagePath5',
        render: (text, record) => (
          <ImagePreview imageLocation={record.imagePath5} />
        ),
      },
      {
        title: '内容',
        debugtype: 'string',
        dataIndex: 'content',
        width: '107',
        render: (text, record) => renderStringEdit('content', text, record),
      },
      {
        title: '验收',
        dataIndex: 'approval',
        render: (text, record) =>
          record.approval ? record.approval.displayName : '暂无',
      },
      {
        title: '取消',
        dataIndex: 'canceling',
        render: (text, record) =>
          record.canceling ? record.canceling.displayName : '暂无',
      },
      {
        title: '完成',
        dataIndex: 'completion',
        render: (text, record) =>
          record.completion ? record.completion.displayName : '暂无',
      },
      {
        title: '躲藏',
        dataIndex: 'hiding',
        render: (text, record) =>
          record.hiding ? record.hiding.displayName : '暂无',
      },
      {
        title: '当前用户已点赞',
        dataIndex: 'likeByCurrentUser',
        render: (text, record) => (record.likeByCurrentUser ? '是' : '否'),
      },
      {
        title: '当前用户已回复',
        dataIndex: 'repliedByCurrentUser',
        render: (text, record) => (record.repliedByCurrentUser ? '是' : '否'),
      },
      {
        title: '由当前用户注册',
        dataIndex: 'registeredByCurrentUser',
        render: (text, record) =>
          record.registeredByCurrentUser ? '是' : '否',
      },
      {
        title: '当前状态',
        debugtype: 'string',
        dataIndex: 'currentStatus',
        width: '13',
        render: (text, record) =>
          renderStringEdit('currentStatus', text, record),
      },
      {
        title: '操作',
        render: (text, record) => renderActions(text, record),
      },
    ]

    const newRecord = () => {
      const newThreadToAppend = {
        id: `+1`,
        title: '',
        displayOrder: '',
        createTime: '',
        eventTime: '',
        registrationStopTime: '',
        eventLocation: '',
        city: '',
        communityGroup: '',
        threadType: '',
        community: '',
        creator: '',
        homePage: '',
        groupPage: '',
        videoUrl: '',
        coverImagePath1: '',
        coverImagePath2: '',
        coverImagePath3: '',
        imagePath1: '',
        imagePath2: '',
        imagePath3: '',
        imagePath4: '',
        imagePath5: '',
        content: '',
        approval: '',
        canceling: '',
        completion: '',
        hiding: '',
        likeByCurrentUser: '',
        repliedByCurrentUser: '',
        registeredByCurrentUser: '',
        currentStatus: '',
      }
      const newData = data ? [...data] : []
      newData.push(newThreadToAppend)
      this.setState({ data: newData, appendInProcess: true })
    }

    return (
      <div className={styles.standardTable}>
        <Table
          rowKey={record => record.id}
          dataSource={data}
          columns={columns}
          size="small"
          pagination={false}
          scroll={{ x: 800 }}
        />

        {!appendInProcess && (
          <Button
            style={{ width: '100%', marginTop: 16, marginBottom: 8 }}
            type="dashed"
            onClick={newRecord}
            icon="plus"
          >
            新增
          </Button>
        )}
      </div>
    )
  }
}

export default Form.create()(ThreadEditTable)
