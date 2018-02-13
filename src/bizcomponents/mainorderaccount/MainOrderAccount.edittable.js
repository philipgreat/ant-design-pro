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
import styles from './MainOrderAccount.edittable.less'
import ImagePreview from '../../components/ImagePreview'

const getRowById = (data, id) => {
  return data.filter(item => item.id === id)[0]
}

const toggleEdit = (e, data, id) => {
  const row = data.filter(item => item.id === id)[0]
  row[editable] = true
}

class MainOrderAccountEditTable extends PureComponent {
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
      const accountId = record.account.id

      //const communityId = record.community.id;
      return { accountId }
    }
    const deleteRecord = (e, record) => {
      const { dispatch, owner } = this.props
      const { data } = this.state
      const mainOrderAccountIds = [record.id]
      const parameters = { mainOrderAccountIds }
      dispatch({
        type: `${owner.type}/removeMainOrderAccountList`,
        payload: { id: owner.id, type: 'mainOrderAccount', parameters },
      })
    }

    const addRecord = (e, record) => {
      const { dispatch, owner } = this.props
      const { data } = this.state
      const communityId = record.community.id
      const parameters = { ...record, ...remapReference(record) }
      const newData = [...data]

      dispatch({
        type: `${owner.type}/addMainOrderAccount`,
        payload: {
          id: owner.id,
          type: 'mainOrderAccount',
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
      const { mainOrderAccountId } = record.id
      const parameters = { ...record, mainOrderAccountId }
      const newData = [...data]
      const row = newData.filter(item => item.id === record.id)[0]
      row.editable = !row.editable

      dispatch({
        type: `${owner.type}/updateMainOrderAccount`,
        payload: {
          id: owner.id,
          type: 'mainOrderAccount',
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
        title: '车牌号码',
        debugtype: 'string',
        dataIndex: 'vehicleLicensePlateNumber',
        width: '11',
        render: (text, record) =>
          renderStringEdit('vehicleLicensePlateNumber', text, record),
      },
      {
        title: '产品名称',
        debugtype: 'string',
        dataIndex: 'productName',
        width: '8',
        render: (text, record) => renderStringEdit('productName', text, record),
      },
      {
        title: '检查价格',
        dataIndex: 'inspectionPrice',
        className: 'money',
        render: (text, record) => '￥' + text.toFixed(2),
      },
      {
        title: '代理服务价格',
        dataIndex: 'agentServicePrice',
        className: 'money',
        render: (text, record) => '￥' + text.toFixed(2),
      },
      {
        title: '城市',
        debugtype: 'string',
        dataIndex: 'city',
        width: '6',
        render: (text, record) => renderStringEdit('city', text, record),
      },
      {
        title: '车辆类型',
        debugtype: 'string',
        dataIndex: 'vehicleType',
        width: '7',
        render: (text, record) => renderStringEdit('vehicleType', text, record),
      },
      {
        title: '订单总金额',
        dataIndex: 'orderTotalAmount',
        className: 'money',
        render: (text, record) => '￥' + text.toFixed(2),
      },
      {
        title: '为了促销折扣',
        dataIndex: 'orderPromotionDiscount',
        className: 'money',
        render: (text, record) => '￥' + text.toFixed(2),
      },
      {
        title: '订单优惠折扣',
        dataIndex: 'orderCouponDiscount',
        className: 'money',
        render: (text, record) => '￥' + text.toFixed(2),
      },
      {
        title: '以保险金额',
        dataIndex: 'orderInsuranceAmount',
        className: 'money',
        render: (text, record) => '￥' + text.toFixed(2),
      },
      {
        title: '订单客户付款额',
        dataIndex: 'orderCustomerPaymentAmount',
        className: 'money',
        render: (text, record) => '￥' + text.toFixed(2),
      },
      {
        title: '订单服务数量',
        dataIndex: 'orderServiceAmount',
        className: 'money',
        render: (text, record) => '￥' + text.toFixed(2),
      },
      {
        title: '订单平台平衡',
        dataIndex: 'orderPlatformBalance',
        className: 'money',
        render: (text, record) => '￥' + text.toFixed(2),
      },
      {
        title: '下订单日期时间',
        dataIndex: 'orderPlacedDatetime',
        render: (text, record) =>
          moment(record.orderPlacedDatetime).format('YYYY-MM-DD HH:mm:ss'),
      },
      {
        title: '订单付款日期时间',
        dataIndex: 'orderPaymentDatetime',
        render: (text, record) =>
          moment(record.orderPaymentDatetime).format('YYYY-MM-DD HH:mm:ss'),
      },
      {
        title: '订单完成日期时间',
        dataIndex: 'orderFinishedDatetime',
        render: (text, record) =>
          moment(record.orderFinishedDatetime).format('YYYY-MM-DD HH:mm:ss'),
      },
      {
        title: '主要订单Id',
        debugtype: 'string',
        dataIndex: 'mainOrderId',
        width: '15',
        render: (text, record) => renderStringEdit('mainOrderId', text, record),
      },
      {
        title: '微信订单Id',
        debugtype: 'string',
        dataIndex: 'wechatOrderId',
        width: '36',
        render: (text, record) =>
          renderStringEdit('wechatOrderId', text, record),
      },
      {
        title: '微信提前支付Id',
        debugtype: 'string',
        dataIndex: 'wechatPrepayId',
        width: '25',
        render: (text, record) =>
          renderStringEdit('wechatPrepayId', text, record),
      },
      {
        title: '对账单',
        dataIndex: 'account',
        render: (text, record) => (record.account ? record.account.id : '暂无'),
      },
      {
        title: '操作',
        render: (text, record) => renderActions(text, record),
      },
    ]

    const newRecord = () => {
      const newMainOrderAccountToAppend = {
        id: `+1`,
        vehicleLicensePlateNumber: '',
        productName: '',
        inspectionPrice: '',
        agentServicePrice: '',
        city: '',
        vehicleType: '',
        orderTotalAmount: '',
        orderPromotionDiscount: '',
        orderCouponDiscount: '',
        orderInsuranceAmount: '',
        orderCustomerPaymentAmount: '',
        orderServiceAmount: '',
        orderPlatformBalance: '',
        orderPlacedDatetime: '',
        orderPaymentDatetime: '',
        orderFinishedDatetime: '',
        mainOrderId: '',
        wechatOrderId: '',
        wechatPrepayId: '',
        account: '',
      }
      const newData = data ? [...data] : []
      newData.push(newMainOrderAccountToAppend)
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

export default Form.create()(MainOrderAccountEditTable)
