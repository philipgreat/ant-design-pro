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
import styles from './SecUser.edittable.less'
import ImagePreview from '../../components/ImagePreview'

const getRowById = (data, id) => {
  return data.filter(item => item.id === id)[0]
}

const toggleEdit = (e, data, id) => {
  const row = data.filter(item => item.id === id)[0]
  row[editable] = true
}

class SecUserEditTable extends PureComponent {
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
      const domainId = record.domain.id

      //const communityId = record.community.id;
      return { domainId }
    }
    const deleteRecord = (e, record) => {
      const { dispatch, owner } = this.props
      const { data } = this.state
      const secUserIds = [record.id]
      const parameters = { secUserIds }
      dispatch({
        type: `${owner.type}/removeSecUserList`,
        payload: { id: owner.id, type: 'secUser', parameters },
      })
    }

    const addRecord = (e, record) => {
      const { dispatch, owner } = this.props
      const { data } = this.state
      const communityId = record.community.id
      const parameters = { ...record, ...remapReference(record) }
      const newData = [...data]

      dispatch({
        type: `${owner.type}/addSecUser`,
        payload: {
          id: owner.id,
          type: 'secUser',
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
      const { secUserId } = record.id
      const parameters = { ...record, secUserId }
      const newData = [...data]
      const row = newData.filter(item => item.id === record.id)[0]
      row.editable = !row.editable

      dispatch({
        type: `${owner.type}/updateSecUser`,
        payload: {
          id: owner.id,
          type: 'secUser',
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
        title: '登录',
        debugtype: 'string',
        dataIndex: 'login',
        width: '9',
        render: (text, record) => renderStringEdit('login', text, record),
      },
      {
        title: '手机号码',
        debugtype: 'string_china_mobile_phone',
        dataIndex: 'mobile',
        width: '15',
        render: (text, record) => renderStringEdit('mobile', text, record),
      },
      {
        title: '电子邮件',
        debugtype: 'string_email',
        dataIndex: 'email',
        width: '23',
        render: (text, record) => renderStringEdit('email', text, record),
      },
      {
        title: '密码',
        debugtype: 'string_password',
        dataIndex: 'pwd',
        width: '11',
        render: (text, record) => renderStringEdit('pwd', text, record),
      },
      {
        title: '验证码',
        debugtype: 'int',
        dataIndex: 'verificationCode',
        width: '11',
        render: (text, record) =>
          renderStringEdit('verificationCode', text, record),
      },
      {
        title: '验证码过期',
        dataIndex: 'verificationCodeExpire',
        render: (text, record) =>
          moment(record.verificationCodeExpire).format('YYYY-MM-DD'),
      },
      {
        title: '最后登录时间',
        dataIndex: 'lastLoginTime',
        render: (text, record) =>
          moment(record.lastLoginTime).format('YYYY-MM-DD'),
      },
      {
        title: '域',
        dataIndex: 'domain',
        render: (text, record) => (record.domain ? record.domain.id : '暂无'),
      },
      {
        title: '舞台调度',
        dataIndex: 'blocking',
        render: (text, record) =>
          record.blocking ? record.blocking.id : '暂无',
      },
      {
        title: '当前状态',
        debugtype: 'string',
        dataIndex: 'currentStatus',
        width: '11',
        render: (text, record) =>
          renderStringEdit('currentStatus', text, record),
      },
      {
        title: '操作',
        render: (text, record) => renderActions(text, record),
      },
    ]

    const newRecord = () => {
      const newSecUserToAppend = {
        id: `+1`,
        login: '',
        mobile: '',
        email: '',
        pwd: '',
        verificationCode: '',
        verificationCodeExpire: '',
        lastLoginTime: '',
        domain: '',
        blocking: '',
        currentStatus: '',
      }
      const newData = data ? [...data] : []
      newData.push(newSecUserToAppend)
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

export default Form.create()(SecUserEditTable)
