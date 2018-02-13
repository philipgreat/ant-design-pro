import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import { Link } from 'dva/router'
import styles from './VehicleRepairingReport.table.less'
import ImagePreview from '../../components/ImagePreview'

const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  {
    title: '修复部分Img 1',
    dataIndex: 'repairingPartImg1',
    render: (text, record) => (
      <ImagePreview
        imageTitle="修复部分Img 1"
        imageLocation={record.repairingPartImg1}
      />
    ),
  },
  {
    title: '修复部分Img 2',
    dataIndex: 'repairingPartImg2',
    render: (text, record) => (
      <ImagePreview
        imageTitle="修复部分Img 2"
        imageLocation={record.repairingPartImg2}
      />
    ),
  },
  {
    title: '修复部分Img 3',
    dataIndex: 'repairingPartImg3',
    render: (text, record) => (
      <ImagePreview
        imageTitle="修复部分Img 3"
        imageLocation={record.repairingPartImg3}
      />
    ),
  },
  {
    title: '修复部分Img 4',
    dataIndex: 'repairingPartImg4',
    render: (text, record) => (
      <ImagePreview
        imageTitle="修复部分Img 4"
        imageLocation={record.repairingPartImg4}
      />
    ),
  },
  {
    title: '修复部分Img 5',
    dataIndex: 'repairingPartImg5',
    render: (text, record) => (
      <ImagePreview
        imageTitle="修复部分Img 5"
        imageLocation={record.repairingPartImg5}
      />
    ),
  },
  {
    title: '修复部分Img 6',
    dataIndex: 'repairingPartImg6',
    render: (text, record) => (
      <ImagePreview
        imageTitle="修复部分Img 6"
        imageLocation={record.repairingPartImg6}
      />
    ),
  },
  {
    title: '修复部分Img 7',
    dataIndex: 'repairingPartImg7',
    render: (text, record) => (
      <ImagePreview
        imageTitle="修复部分Img 7"
        imageLocation={record.repairingPartImg7}
      />
    ),
  },
  {
    title: '修复部分Img 8',
    dataIndex: 'repairingPartImg8',
    render: (text, record) => (
      <ImagePreview
        imageTitle="修复部分Img 8"
        imageLocation={record.repairingPartImg8}
      />
    ),
  },
  {
    title: '修复部分Img 9',
    dataIndex: 'repairingPartImg9',
    render: (text, record) => (
      <ImagePreview
        imageTitle="修复部分Img 9"
        imageLocation={record.repairingPartImg9}
      />
    ),
  },
  {
    title: '修复部分Img 10',
    dataIndex: 'repairingPartImg10',
    render: (text, record) => (
      <ImagePreview
        imageTitle="修复部分Img 10"
        imageLocation={record.repairingPartImg10}
      />
    ),
  },
  {
    title: '修复部分评论列表',
    debugtype: 'string',
    dataIndex: 'repairingPartListComment',
    width: '219',
  },
  {
    title: '服务',
    dataIndex: 'service',
    render: (text, record) =>
      record.service ? (
        <Link to={`/serviceVehicleRepairing/${record.service.id}/dashboard`}>
          {record.service.id}
        </Link>
      ) : (
        '暂无'
      ),
  },
  {
    title: '主订单',
    dataIndex: 'mainOrder',
    render: (text, record) =>
      record.mainOrder ? (
        <Link to={`/vehicleInspectionOrder/${record.mainOrder.id}/dashboard`}>
          {record.mainOrder.id}
        </Link>
      ) : (
        '暂无'
      ),
  },
  {
    title: '修复完成日期时间',
    dataIndex: 'repairingFinishedDatetime',
    render: (text, record) =>
      moment(record.repairingFinishedDatetime).format('YYYY-MM-DD HH:mm:ss'),
  },
]

class VehicleRepairingReportTable extends PureComponent {
  state = {
    selectedRowKeys: [],
  }

  componentWillReceiveProps(nextProps) {
    // clean state
    if (nextProps.selectedRows.length === 0) {
      this.setState({
        selectedRowKeys: [],
      })
    }
  }

  handleRowSelectChange = (selectedRowKeys, selectedRows) => {
    if (this.props.onSelectRow) {
      this.props.onSelectRow(selectedRows)
    }
    this.setState({ selectedRowKeys })
  }

  handleTableChange = (pagination, filters, sorter) => {
    this.props.onChange(pagination, filters, sorter)
  }

  cleanSelectedKeys = () => {
    this.handleRowSelectChange([], [])
  }

  render() {
    const { selectedRowKeys } = this.state
    // const { data, count, current, owner } = this.props
    const { data, count, current } = this.props

    const paginationProps = {
      showSizeChanger: true,
      showQuickJumper: true,
      pageSize: 20,
      total: count,
      current,
    }

    const rowSelection = {
      selectedRowKeys,
      onChange: this.handleRowSelectChange,
      getCheckboxProps: record => ({
        disabled: record.disabled,
      }),
    }

    return (
      <div className={styles.standardTable}>
        <div className={styles.tableAlert}>
          <Alert
            message={
              <p>
                一共 <a style={{ fontWeight: 600 }}>{count}</a> 项 已选择{' '}
                <a style={{ fontWeight: 600 }}>{selectedRowKeys.length}</a> 项
                <a onClick={this.cleanSelectedKeys} style={{ marginLeft: 24 }}>
                  清空
                </a>
              </p>
            }
            type="info"
            showIcon
          />
        </div>
        <Table
          loading={false}
          rowKey={record => record.id}
          rowSelection={rowSelection}
          dataSource={data}
          columns={columns}
          pagination={paginationProps}
          onChange={this.handleTableChange}
          scroll={{ x: 4875 }}
        />
      </div>
    )
  }
}

export default VehicleRepairingReportTable
