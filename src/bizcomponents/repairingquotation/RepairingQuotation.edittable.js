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
import styles from './RepairingQuotation.edittable.less'
import ImagePreview from '../../components/ImagePreview'

const getRowById = (data, id) => {
  return data.filter(item => item.id === id)[0]
}

const toggleEdit = (e, data, id) => {
  const row = data.filter(item => item.id === id)[0]
  row[editable] = true
}

class RepairingQuotationEditTable extends PureComponent {
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

      //const communityId = record.community.id;
      return { serviceId }
    }
    const deleteRecord = (e, record) => {
      const { dispatch, owner } = this.props
      const { data } = this.state
      const repairingQuotationIds = [record.id]
      const parameters = { repairingQuotationIds }
      dispatch({
        type: `${owner.type}/removeRepairingQuotationList`,
        payload: { id: owner.id, type: 'repairingQuotation', parameters },
      })
    }

    const addRecord = (e, record) => {
      const { dispatch, owner } = this.props
      const { data } = this.state
      const communityId = record.community.id
      const parameters = { ...record, ...remapReference(record) }
      const newData = [...data]

      dispatch({
        type: `${owner.type}/addRepairingQuotation`,
        payload: {
          id: owner.id,
          type: 'repairingQuotation',
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
      const { repairingQuotationId } = record.id
      const parameters = { ...record, repairingQuotationId }
      const newData = [...data]
      const row = newData.filter(item => item.id === record.id)[0]
      row.editable = !row.editable

      dispatch({
        type: `${owner.type}/updateRepairingQuotation`,
        payload: {
          id: owner.id,
          type: 'repairingQuotation',
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
        title: '维修报价描述',
        debugtype: 'string',
        dataIndex: 'repairingQuotationDescription',
        width: '13',
        render: (text, record) =>
          renderStringEdit('repairingQuotationDescription', text, record),
      },
      {
        title: '维修报价图片1',
        dataIndex: 'repairingQuotationImage1',
        render: (text, record) => (
          <ImagePreview imageLocation={record.repairingQuotationImage1} />
        ),
      },
      {
        title: '维修报价图2',
        dataIndex: 'repairingQuotationImage2',
        render: (text, record) => (
          <ImagePreview imageLocation={record.repairingQuotationImage2} />
        ),
      },
      {
        title: '维修报价图片3',
        dataIndex: 'repairingQuotationImage3',
        render: (text, record) => (
          <ImagePreview imageLocation={record.repairingQuotationImage3} />
        ),
      },
      {
        title: '维修报价图片4',
        dataIndex: 'repairingQuotationImage4',
        render: (text, record) => (
          <ImagePreview imageLocation={record.repairingQuotationImage4} />
        ),
      },
      {
        title: '维修报价图片5',
        dataIndex: 'repairingQuotationImage5',
        render: (text, record) => (
          <ImagePreview imageLocation={record.repairingQuotationImage5} />
        ),
      },
      {
        title: '维修报价总金额',
        dataIndex: 'repairingQuotationTotalAmount',
        className: 'money',
        render: (text, record) => '￥' + text.toFixed(2),
      },
      {
        title: '服务',
        dataIndex: 'service',
        render: (text, record) => (record.service ? record.service.id : '暂无'),
      },
      {
        title: '操作',
        render: (text, record) => renderActions(text, record),
      },
    ]

    const newRecord = () => {
      const newRepairingQuotationToAppend = {
        id: `+1`,
        repairingQuotationDescription: '',
        repairingQuotationImage1: '',
        repairingQuotationImage2: '',
        repairingQuotationImage3: '',
        repairingQuotationImage4: '',
        repairingQuotationImage5: '',
        repairingQuotationTotalAmount: '',
        service: '',
      }
      const newData = data ? [...data] : []
      newData.push(newRepairingQuotationToAppend)
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

export default Form.create()(RepairingQuotationEditTable)
