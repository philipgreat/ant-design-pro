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
import styles from './ReportVehicleInspectionReport.edittable.less'
import ImagePreview from '../../components/ImagePreview'

const getRowById = (data, id) => {
  return data.filter(item => item.id === id)[0]
}

const toggleEdit = (e, data, id) => {
  const row = data.filter(item => item.id === id)[0]
  row[editable] = true
}

class ReportVehicleInspectionReportEditTable extends PureComponent {
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
      const inspectionServiceOrderId = record.inspectionServiceOrder.id
      const repairingServiceOrderId = record.repairingServiceOrder.id
      const mainOrderId = record.mainOrder.id

      //const communityId = record.community.id;
      return { inspectionServiceOrderId, repairingServiceOrderId, mainOrderId }
    }
    const deleteRecord = (e, record) => {
      const { dispatch, owner } = this.props
      const { data } = this.state
      const reportVehicleInspectionReportIds = [record.id]
      const parameters = { reportVehicleInspectionReportIds }
      dispatch({
        type: `${owner.type}/removeReportVehicleInspectionReportList`,
        payload: {
          id: owner.id,
          type: 'reportVehicleInspectionReport',
          parameters,
        },
      })
    }

    const addRecord = (e, record) => {
      const { dispatch, owner } = this.props
      const { data } = this.state
      const communityId = record.community.id
      const parameters = { ...record, ...remapReference(record) }
      const newData = [...data]

      dispatch({
        type: `${owner.type}/addReportVehicleInspectionReport`,
        payload: {
          id: owner.id,
          type: 'reportVehicleInspectionReport',
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
      const { reportVehicleInspectionReportId } = record.id
      const parameters = { ...record, reportVehicleInspectionReportId }
      const newData = [...data]
      const row = newData.filter(item => item.id === record.id)[0]
      row.editable = !row.editable

      dispatch({
        type: `${owner.type}/updateReportVehicleInspectionReport`,
        payload: {
          id: owner.id,
          type: 'reportVehicleInspectionReport',
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
        title: '描述',
        debugtype: 'string',
        dataIndex: 'description',
        width: '12',
        render: (text, record) => renderStringEdit('description', text, record),
      },
      {
        title: '检验报告图1',
        dataIndex: 'inspectionReportImage1',
        render: (text, record) => (
          <ImagePreview imageLocation={record.inspectionReportImage1} />
        ),
      },
      {
        title: '检验报告图2',
        dataIndex: 'inspectionReportImage2',
        render: (text, record) => (
          <ImagePreview imageLocation={record.inspectionReportImage2} />
        ),
      },
      {
        title: '检验报告图片3',
        dataIndex: 'inspectionReportImage3',
        render: (text, record) => (
          <ImagePreview imageLocation={record.inspectionReportImage3} />
        ),
      },
      {
        title: '检验报告图片4',
        dataIndex: 'inspectionReportImage4',
        render: (text, record) => (
          <ImagePreview imageLocation={record.inspectionReportImage4} />
        ),
      },
      {
        title: '检验报告图片5',
        dataIndex: 'inspectionReportImage5',
        render: (text, record) => (
          <ImagePreview imageLocation={record.inspectionReportImage5} />
        ),
      },
      {
        title: '检查服务订单',
        dataIndex: 'inspectionServiceOrder',
        render: (text, record) =>
          record.inspectionServiceOrder
            ? record.inspectionServiceOrder.id
            : '暂无',
      },
      {
        title: '维修服务订单',
        dataIndex: 'repairingServiceOrder',
        render: (text, record) =>
          record.repairingServiceOrder
            ? record.repairingServiceOrder.id
            : '暂无',
      },
      {
        title: '主订单',
        dataIndex: 'mainOrder',
        render: (text, record) =>
          record.mainOrder ? record.mainOrder.id : '暂无',
      },
      {
        title: '操作',
        render: (text, record) => renderActions(text, record),
      },
    ]

    const newRecord = () => {
      const newReportVehicleInspectionReportToAppend = {
        id: `+1`,
        description: '',
        inspectionReportImage1: '',
        inspectionReportImage2: '',
        inspectionReportImage3: '',
        inspectionReportImage4: '',
        inspectionReportImage5: '',
        inspectionServiceOrder: '',
        repairingServiceOrder: '',
        mainOrder: '',
      }
      const newData = data ? [...data] : []
      newData.push(newReportVehicleInspectionReportToAppend)
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

export default Form.create()(ReportVehicleInspectionReportEditTable)
