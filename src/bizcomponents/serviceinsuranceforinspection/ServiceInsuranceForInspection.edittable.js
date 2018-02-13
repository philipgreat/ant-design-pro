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
import styles from './ServiceInsuranceForInspection.edittable.less'
import ImagePreview from '../../components/ImagePreview'

const getRowById = (data, id) => {
  return data.filter(item => item.id === id)[0]
}

const toggleEdit = (e, data, id) => {
  const row = data.filter(item => item.id === id)[0]
  row[editable] = true
}

class ServiceInsuranceForInspectionEditTable extends PureComponent {
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
      const orderedInsuranceId = record.orderedInsurance.id
      const responsibleWorkerId = record.responsibleWorker.id
      const merchantId = record.merchant.id
      const mainOrderId = record.mainOrder.id

      //const communityId = record.community.id;
      return {
        orderedInsuranceId,
        responsibleWorkerId,
        merchantId,
        mainOrderId,
      }
    }
    const deleteRecord = (e, record) => {
      const { dispatch, owner } = this.props
      const { data } = this.state
      const serviceInsuranceForInspectionIds = [record.id]
      const parameters = { serviceInsuranceForInspectionIds }
      dispatch({
        type: `${owner.type}/removeServiceInsuranceForInspectionList`,
        payload: {
          id: owner.id,
          type: 'serviceInsuranceForInspection',
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
        type: `${owner.type}/addServiceInsuranceForInspection`,
        payload: {
          id: owner.id,
          type: 'serviceInsuranceForInspection',
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
      const { serviceInsuranceForInspectionId } = record.id
      const parameters = { ...record, serviceInsuranceForInspectionId }
      const newData = [...data]
      const row = newData.filter(item => item.id === record.id)[0]
      row.editable = !row.editable

      dispatch({
        type: `${owner.type}/updateServiceInsuranceForInspection`,
        payload: {
          id: owner.id,
          type: 'serviceInsuranceForInspection',
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
        title: '服务状态',
        debugtype: 'string',
        dataIndex: 'serviceStatus',
        width: '7',
        render: (text, record) =>
          renderStringEdit('serviceStatus', text, record),
      },
      {
        title: '要求保险',
        dataIndex: 'orderedInsurance',
        render: (text, record) =>
          record.orderedInsurance ? record.orderedInsurance.id : '暂无',
      },
      {
        title: '服务人员',
        dataIndex: 'responsibleWorker',
        render: (text, record) =>
          record.responsibleWorker ? record.responsibleWorker.id : '暂无',
      },
      {
        title: '服务的评论',
        debugtype: 'string',
        dataIndex: 'serviceComments',
        width: '15',
        render: (text, record) =>
          renderStringEdit('serviceComments', text, record),
      },
      {
        title: '开始时间',
        dataIndex: 'startTime',
        render: (text, record) =>
          moment(record.startTime).format('YYYY-MM-DD HH:mm:ss'),
      },
      {
        title: '最后更新时间',
        dataIndex: 'lastUpdateTime',
        render: (text, record) =>
          moment(record.lastUpdateTime).format('YYYY-MM-DD HH:mm:ss'),
      },
      {
        title: '保险产品名称',
        debugtype: 'string',
        dataIndex: 'insuranceName',
        width: '10',
        render: (text, record) =>
          renderStringEdit('insuranceName', text, record),
      },
      {
        title: '保险承保方',
        debugtype: 'string',
        dataIndex: 'insuranceVendor',
        width: '11',
        render: (text, record) =>
          renderStringEdit('insuranceVendor', text, record),
      },
      {
        title: '保险价格',
        dataIndex: 'insurancePrice',
        className: 'money',
        render: (text, record) => '￥' + text.toFixed(2),
      },
      {
        title: '概览',
        debugtype: 'string',
        dataIndex: 'summary',
        width: '20',
        render: (text, record) => renderStringEdit('summary', text, record),
      },
      {
        title: '保单号码',
        debugtype: 'string',
        dataIndex: 'insuranceNumber',
        width: '19',
        render: (text, record) =>
          renderStringEdit('insuranceNumber', text, record),
      },
      {
        title: '保单图片',
        dataIndex: 'insuranceImage1',
        render: (text, record) => (
          <ImagePreview imageLocation={record.insuranceImage1} />
        ),
      },
      {
        title: '保单图片',
        dataIndex: 'insuranceImage2',
        render: (text, record) => (
          <ImagePreview imageLocation={record.insuranceImage2} />
        ),
      },
      {
        title: '保单图片',
        dataIndex: 'insuranceImage3',
        render: (text, record) => (
          <ImagePreview imageLocation={record.insuranceImage3} />
        ),
      },
      {
        title: '保单图片',
        dataIndex: 'insuranceImage4',
        render: (text, record) => (
          <ImagePreview imageLocation={record.insuranceImage4} />
        ),
      },
      {
        title: '保单图片',
        dataIndex: 'insuranceImage5',
        render: (text, record) => (
          <ImagePreview imageLocation={record.insuranceImage5} />
        ),
      },
      {
        title: '商户',
        dataIndex: 'merchant',
        render: (text, record) =>
          record.merchant ? record.merchant.id : '暂无',
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
      const newServiceInsuranceForInspectionToAppend = {
        id: `+1`,
        serviceStatus: '',
        orderedInsurance: '',
        responsibleWorker: '',
        serviceComments: '',
        startTime: '',
        lastUpdateTime: '',
        insuranceName: '',
        insuranceVendor: '',
        insurancePrice: '',
        summary: '',
        insuranceNumber: '',
        insuranceImage1: '',
        insuranceImage2: '',
        insuranceImage3: '',
        insuranceImage4: '',
        insuranceImage5: '',
        merchant: '',
        mainOrder: '',
      }
      const newData = data ? [...data] : []
      newData.push(newServiceInsuranceForInspectionToAppend)
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

export default Form.create()(ServiceInsuranceForInspectionEditTable)
