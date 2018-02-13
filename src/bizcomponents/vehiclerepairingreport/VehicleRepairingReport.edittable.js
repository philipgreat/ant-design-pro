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
import styles from './VehicleRepairingReport.edittable.less'
import ImagePreview from '../../components/ImagePreview'

const getRowById = (data, id) => {
  return data.filter(item => item.id === id)[0]
}

const toggleEdit = (e, data, id) => {
  const row = data.filter(item => item.id === id)[0]
  row[editable] = true
}

class VehicleRepairingReportEditTable extends PureComponent {
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
      const serviceId = record.service.id
      const mainOrderId = record.mainOrder.id

      //const communityId = record.community.id;
      return { serviceId, mainOrderId }
    }
    const deleteRecord = (e, record) => {
      const { dispatch, owner } = this.props
      const { data } = this.state
      const vehicleRepairingReportIds = [record.id]
      const parameters = { vehicleRepairingReportIds }
      dispatch({
        type: `${owner.type}/removeVehicleRepairingReportList`,
        payload: { id: owner.id, type: 'vehicleRepairingReport', parameters },
      })
    }

    const addRecord = (e, record) => {
      const { dispatch, owner } = this.props
      const { data } = this.state
      const communityId = record.community.id
      const parameters = { ...record, ...remapReference(record) }
      const newData = [...data]

      dispatch({
        type: `${owner.type}/addVehicleRepairingReport`,
        payload: {
          id: owner.id,
          type: 'vehicleRepairingReport',
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
      const { vehicleRepairingReportId } = record.id
      const parameters = { ...record, vehicleRepairingReportId }
      const newData = [...data]
      const row = newData.filter(item => item.id === record.id)[0]
      row.editable = !row.editable

      dispatch({
        type: `${owner.type}/updateVehicleRepairingReport`,
        payload: {
          id: owner.id,
          type: 'vehicleRepairingReport',
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
        title: '修复部分Img 1',
        dataIndex: 'repairingPartImg1',
        render: (text, record) => (
          <ImagePreview imageLocation={record.repairingPartImg1} />
        ),
      },
      {
        title: '修复部分Img 2',
        dataIndex: 'repairingPartImg2',
        render: (text, record) => (
          <ImagePreview imageLocation={record.repairingPartImg2} />
        ),
      },
      {
        title: '修复部分Img 3',
        dataIndex: 'repairingPartImg3',
        render: (text, record) => (
          <ImagePreview imageLocation={record.repairingPartImg3} />
        ),
      },
      {
        title: '修复部分Img 4',
        dataIndex: 'repairingPartImg4',
        render: (text, record) => (
          <ImagePreview imageLocation={record.repairingPartImg4} />
        ),
      },
      {
        title: '修复部分Img 5',
        dataIndex: 'repairingPartImg5',
        render: (text, record) => (
          <ImagePreview imageLocation={record.repairingPartImg5} />
        ),
      },
      {
        title: '修复部分Img 6',
        dataIndex: 'repairingPartImg6',
        render: (text, record) => (
          <ImagePreview imageLocation={record.repairingPartImg6} />
        ),
      },
      {
        title: '修复部分Img 7',
        dataIndex: 'repairingPartImg7',
        render: (text, record) => (
          <ImagePreview imageLocation={record.repairingPartImg7} />
        ),
      },
      {
        title: '修复部分Img 8',
        dataIndex: 'repairingPartImg8',
        render: (text, record) => (
          <ImagePreview imageLocation={record.repairingPartImg8} />
        ),
      },
      {
        title: '修复部分Img 9',
        dataIndex: 'repairingPartImg9',
        render: (text, record) => (
          <ImagePreview imageLocation={record.repairingPartImg9} />
        ),
      },
      {
        title: '修复部分Img 10',
        dataIndex: 'repairingPartImg10',
        render: (text, record) => (
          <ImagePreview imageLocation={record.repairingPartImg10} />
        ),
      },
      {
        title: '修复部分评论列表',
        debugtype: 'string',
        dataIndex: 'repairingPartListComment',
        width: '219',
        render: (text, record) =>
          renderStringEdit('repairingPartListComment', text, record),
      },
      {
        title: '服务',
        dataIndex: 'service',
        render: (text, record) => (record.service ? record.service.id : '暂无'),
      },
      {
        title: '主订单',
        dataIndex: 'mainOrder',
        render: (text, record) =>
          record.mainOrder ? record.mainOrder.id : '暂无',
      },
      {
        title: '修复完成日期时间',
        dataIndex: 'repairingFinishedDatetime',
        render: (text, record) =>
          moment(record.repairingFinishedDatetime).format(
            'YYYY-MM-DD HH:mm:ss'
          ),
      },
      {
        title: '操作',
        render: (text, record) => renderActions(text, record),
      },
    ]

    const newRecord = () => {
      const newVehicleRepairingReportToAppend = {
        id: `+1`,
        repairingPartImg1: '',
        repairingPartImg2: '',
        repairingPartImg3: '',
        repairingPartImg4: '',
        repairingPartImg5: '',
        repairingPartImg6: '',
        repairingPartImg7: '',
        repairingPartImg8: '',
        repairingPartImg9: '',
        repairingPartImg10: '',
        repairingPartListComment: '',
        service: '',
        mainOrder: '',
        repairingFinishedDatetime: '',
      }
      const newData = data ? [...data] : []
      newData.push(newVehicleRepairingReportToAppend)
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

export default Form.create()(VehicleRepairingReportEditTable)
