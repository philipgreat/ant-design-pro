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
import styles from './InspectionStationAccount.edittable.less'
import ImagePreview from '../../components/ImagePreview'

const getRowById = (data, id) => {
  return data.filter(item => item.id === id)[0]
}

const toggleEdit = (e, data, id) => {
  const row = data.filter(item => item.id === id)[0]
  row[editable] = true
}

class InspectionStationAccountEditTable extends PureComponent {
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
      const merchantId = record.merchant.id
      const responsibleWorkerId = record.responsibleWorker.id
      const inspectionStationId = record.inspectionStation.id
      const accountId = record.account.id

      //const communityId = record.community.id;
      return { merchantId, responsibleWorkerId, inspectionStationId, accountId }
    }
    const deleteRecord = (e, record) => {
      const { dispatch, owner } = this.props
      const { data } = this.state
      const inspectionStationAccountIds = [record.id]
      const parameters = { inspectionStationAccountIds }
      dispatch({
        type: `${owner.type}/removeInspectionStationAccountList`,
        payload: { id: owner.id, type: 'inspectionStationAccount', parameters },
      })
    }

    const addRecord = (e, record) => {
      const { dispatch, owner } = this.props
      const { data } = this.state
      const communityId = record.community.id
      const parameters = { ...record, ...remapReference(record) }
      const newData = [...data]

      dispatch({
        type: `${owner.type}/addInspectionStationAccount`,
        payload: {
          id: owner.id,
          type: 'inspectionStationAccount',
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
      const { inspectionStationAccountId } = record.id
      const parameters = { ...record, inspectionStationAccountId }
      const newData = [...data]
      const row = newData.filter(item => item.id === record.id)[0]
      row.editable = !row.editable

      dispatch({
        type: `${owner.type}/updateInspectionStationAccount`,
        payload: {
          id: owner.id,
          type: 'inspectionStationAccount',
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
        title: '服务单号',
        debugtype: 'string',
        dataIndex: 'serviceOrderNumber',
        width: '14',
        render: (text, record) =>
          renderStringEdit('serviceOrderNumber', text, record),
      },
      {
        title: '年检类型',
        debugtype: 'string',
        dataIndex: 'inspectionType',
        width: '8',
        render: (text, record) =>
          renderStringEdit('inspectionType', text, record),
      },
      {
        title: '车辆信息',
        debugtype: 'string',
        dataIndex: 'inspectionVehicleInfo',
        width: '11',
        render: (text, record) =>
          renderStringEdit('inspectionVehicleInfo', text, record),
      },
      {
        title: '检测结果',
        debugtype: 'string',
        dataIndex: 'inspectionFinalResult',
        width: '7',
        render: (text, record) =>
          renderStringEdit('inspectionFinalResult', text, record),
      },
      {
        title: '检测日期',
        dataIndex: 'inspectionDatetime',
        render: (text, record) =>
          moment(record.inspectionDatetime).format('YYYY-MM-DD HH:mm:ss'),
      },
      {
        title: '检测站',
        debugtype: 'string',
        dataIndex: 'inspectionStationName',
        width: '11',
        render: (text, record) =>
          renderStringEdit('inspectionStationName', text, record),
      },
      {
        title: '年检订单ID',
        debugtype: 'string',
        dataIndex: 'mainOrderNumber',
        width: '28',
        render: (text, record) =>
          renderStringEdit('mainOrderNumber', text, record),
      },
      {
        title: '商户',
        dataIndex: 'merchant',
        render: (text, record) =>
          record.merchant ? record.merchant.displayName : '暂无',
      },
      {
        title: '服务人员',
        dataIndex: 'responsibleWorker',
        render: (text, record) =>
          record.responsibleWorker
            ? record.responsibleWorker.displayName
            : '暂无',
      },
      {
        title: '检测站',
        dataIndex: 'inspectionStation',
        render: (text, record) =>
          record.inspectionStation
            ? record.inspectionStation.displayName
            : '暂无',
      },
      {
        title: '对账单',
        dataIndex: 'account',
        render: (text, record) =>
          record.account ? record.account.displayName : '暂无',
      },
      {
        title: '操作',
        render: (text, record) => renderActions(text, record),
      },
    ]

    const newRecord = () => {
      const newInspectionStationAccountToAppend = {
        id: `+1`,
        serviceOrderNumber: '',
        inspectionType: '',
        inspectionVehicleInfo: '',
        inspectionFinalResult: '',
        inspectionDatetime: '',
        inspectionStationName: '',
        mainOrderNumber: '',
        merchant: '',
        responsibleWorker: '',
        inspectionStation: '',
        account: '',
      }
      const newData = data ? [...data] : []
      newData.push(newInspectionStationAccountToAppend)
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

export default Form.create()(InspectionStationAccountEditTable)
