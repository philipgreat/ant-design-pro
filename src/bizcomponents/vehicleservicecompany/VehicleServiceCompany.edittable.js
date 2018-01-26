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
import styles from './VehicleServiceCompany.edittable.less'
import ImagePreview from '../../components/ImagePreview'

const getRowById = (data, id) => {
  return data.filter(item => item.id === id)[0]
}

const toggleEdit = (e, data, id) => {
  const row = data.filter(item => item.id === id)[0]
  row[editable] = true
}

class VehicleServiceCompanyEditTable extends PureComponent {
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
      const addressCityId = record.addressCity.id
      const platformId = record.platform.id

      //const communityId = record.community.id;
      return { addressCityId, platformId }
    }
    const deleteRecord = (e, record) => {
      const { dispatch, owner } = this.props
      const { data } = this.state
      const vehicleServiceCompanyIds = [record.id]
      const parameters = { vehicleServiceCompanyIds }
      dispatch({
        type: `${owner.type}/removeVehicleServiceCompanyList`,
        payload: { id: owner.id, type: 'vehicleServiceCompany', parameters },
      })
    }

    const addRecord = (e, record) => {
      const { dispatch, owner } = this.props
      const { data } = this.state
      const communityId = record.community.id
      const parameters = { ...record, ...remapReference(record) }
      const newData = [...data]

      dispatch({
        type: `${owner.type}/addVehicleServiceCompany`,
        payload: {
          id: owner.id,
          type: 'vehicleServiceCompany',
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
      const { vehicleServiceCompanyId } = record.id
      const parameters = { ...record, vehicleServiceCompanyId }
      const newData = [...data]
      const row = newData.filter(item => item.id === record.id)[0]
      row.editable = !row.editable

      dispatch({
        type: `${owner.type}/updateVehicleServiceCompany`,
        payload: {
          id: owner.id,
          type: 'vehicleServiceCompany',
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
        title: '公司名称',
        debugtype: 'string',
        dataIndex: 'companyName',
        width: '12',
        render: (text, record) => renderStringEdit('companyName', text, record),
      },
      {
        title: '服务状态',
        debugtype: 'string',
        dataIndex: 'operatingStatus',
        width: '6',
        render: (text, record) =>
          renderStringEdit('operatingStatus', text, record),
      },
      {
        title: '所在城市',
        dataIndex: 'addressCity',
        render: (text, record) =>
          record.addressCity ? record.addressCity.id : '暂无',
      },
      {
        title: '所在地址',
        debugtype: 'string',
        dataIndex: 'addressDetail',
        width: '17',
        render: (text, record) =>
          renderStringEdit('addressDetail', text, record),
      },
      {
        title: '到店服务',
        dataIndex: 'availableStoreService',
        render: (text, record) => (record.availableStoreService ? '是' : '否'),
      },
      {
        title: '上门服务',
        dataIndex: 'availableHomeService',
        render: (text, record) => (record.availableHomeService ? '是' : '否'),
      },
      {
        title: '营业时间',
        debugtype: 'string',
        dataIndex: 'openingTime',
        width: '26',
        render: (text, record) => renderStringEdit('openingTime', text, record),
      },
      {
        title: '经度',
        debugtype: 'double',
        dataIndex: 'longitude',
        width: '12',
        render: (text, record) => renderStringEdit('longitude', text, record),
      },
      {
        title: '纬度',
        debugtype: 'double',
        dataIndex: 'latitude',
        width: '11',
        render: (text, record) => renderStringEdit('latitude', text, record),
      },
      {
        title: '平台',
        dataIndex: 'platform',
        render: (text, record) =>
          record.platform ? record.platform.id : '暂无',
      },
      {
        title: '操作',
        render: (text, record) => renderActions(text, record),
      },
    ]

    const newRecord = () => {
      const newVehicleServiceCompanyToAppend = {
        id: `+1`,
        companyName: '',
        operatingStatus: '',
        addressCity: '',
        addressDetail: '',
        availableStoreService: '',
        availableHomeService: '',
        openingTime: '',
        longitude: '',
        latitude: '',
        platform: '',
      }
      const newData = data ? [...data] : []
      newData.push(newVehicleServiceCompanyToAppend)
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

export default Form.create()(VehicleServiceCompanyEditTable)
