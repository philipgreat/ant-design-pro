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
import styles from './CompanyEmployeeMessage.edittable.less'
import ImagePreview from '../../components/ImagePreview'

const getRowById = (data, id) => {
  return data.filter(item => item.id === id)[0]
}

const toggleEdit = (e, data, id) => {
  const row = data.filter(item => item.id === id)[0]
  row[editable] = true
}

class CompanyEmployeeMessageEditTable extends PureComponent {
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
      const senderId = record.sender.id
      const receiverId = record.receiver.id
      const serviceTypeId = record.serviceType.id

      //const communityId = record.community.id;
      return { senderId, receiverId, serviceTypeId }
    }
    const deleteRecord = (e, record) => {
      const { dispatch, owner } = this.props
      const { data } = this.state
      const companyEmployeeMessageIds = [record.id]
      const parameters = { companyEmployeeMessageIds }
      dispatch({
        type: `${owner.type}/removeCompanyEmployeeMessageList`,
        payload: { id: owner.id, type: 'companyEmployeeMessage', parameters },
      })
    }

    const addRecord = (e, record) => {
      const { dispatch, owner } = this.props
      const { data } = this.state
      const communityId = record.community.id
      const parameters = { ...record, ...remapReference(record) }
      const newData = [...data]

      dispatch({
        type: `${owner.type}/addCompanyEmployeeMessage`,
        payload: {
          id: owner.id,
          type: 'companyEmployeeMessage',
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
      const { companyEmployeeMessageId } = record.id
      const parameters = { ...record, companyEmployeeMessageId }
      const newData = [...data]
      const row = newData.filter(item => item.id === record.id)[0]
      row.editable = !row.editable

      dispatch({
        type: `${owner.type}/updateCompanyEmployeeMessage`,
        payload: {
          id: owner.id,
          type: 'companyEmployeeMessage',
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
      { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
      {
        title: '标题',
        debugtype: 'string',
        dataIndex: 'title',
        width: '13',
        render: (text, record) => renderStringEdit('title', text, record),
      },
      {
        title: '消息内容',
        debugtype: 'string',
        dataIndex: 'messageContent',
        width: '36',
        render: (text, record) =>
          renderStringEdit('messageContent', text, record),
      },
      {
        title: '发送方',
        dataIndex: 'sender',
        render: (text, record) => (record.sender ? record.sender.id : '暂无'),
      },
      {
        title: '接收方',
        dataIndex: 'receiver',
        render: (text, record) =>
          record.receiver ? record.receiver.id : '暂无',
      },
      {
        title: '服务类型',
        dataIndex: 'serviceType',
        render: (text, record) =>
          record.serviceType ? record.serviceType.id : '暂无',
      },
      {
        title: '服务单号',
        debugtype: 'string',
        dataIndex: 'serviceTicket',
        width: '19',
        render: (text, record) =>
          renderStringEdit('serviceTicket', text, record),
      },
      {
        title: '发送时间',
        dataIndex: 'sendTime',
        render: (text, record) =>
          moment(record.sendTime).format('YYYY-MM-DD HH:mm:ss'),
      },
      {
        title: '阅读时间',
        dataIndex: 'readTime',
        render: (text, record) =>
          moment(record.readTime).format('YYYY-MM-DD HH:mm:ss'),
      },
      {
        title: '状态',
        debugtype: 'string',
        dataIndex: 'status',
        width: '6',
        render: (text, record) => renderStringEdit('status', text, record),
      },
      {
        title: '操作',
        render: (text, record) => renderActions(text, record),
      },
    ]

    const newRecord = () => {
      const newCompanyEmployeeMessageToAppend = {
        id: `+1`,
        title: '',
        messageContent: '',
        sender: '',
        receiver: '',
        serviceType: '',
        serviceTicket: '',
        sendTime: '',
        readTime: '',
        status: '',
      }
      const newData = data ? [...data] : []
      newData.push(newCompanyEmployeeMessageToAppend)
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

export default Form.create()(CompanyEmployeeMessageEditTable)
