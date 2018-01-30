
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge} from 'antd'
import { Link } from 'dva/router'
import styles from './ReportHandover.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/reportHandover/${text}/dashboard`}>{text}</Link>) },
  { title: '回归结果', debugtype: 'string', dataIndex: 'handoverResult', width: '6' },
  { title: '拒收原因', debugtype: 'string', dataIndex: 'rejectComments', width: '16' },
  { title: '拒收凭证1', dataIndex: 'rejectEvidence1', render: (text, record) => <ImagePreview imageTitle="拒收凭证1" imageLocation={record.rejectEvidence1} /> },
  { title: '拒收凭证2', dataIndex: 'rejectEvidence2', render: (text, record) => <ImagePreview imageTitle="拒收凭证2" imageLocation={record.rejectEvidence2} /> },
  { title: '拒收凭证3', dataIndex: 'rejectEvidence3', render: (text, record) => <ImagePreview imageTitle="拒收凭证3" imageLocation={record.rejectEvidence3} /> },
  { title: '拒收凭证4', dataIndex: 'rejectEvidence4', render: (text, record) => <ImagePreview imageTitle="拒收凭证4" imageLocation={record.rejectEvidence4} /> },
  { title: '拒收凭证5', dataIndex: 'rejectEvidence5', render: (text, record) => <ImagePreview imageTitle="拒收凭证5" imageLocation={record.rejectEvidence5} /> },
  { title: '创建时间', dataIndex: 'createTime', render: (text, record) => moment(record.createTime).format('YYYY-MM-DD') },
  { title: '服务类型车辆C2m', dataIndex: 'serviceTypeVehicleC2m', render: (text, record) => (record.serviceTypeVehicleC2m ? (<Link to={`/serviceVehicleMovementC2m/${record.serviceTypeVehicleC2m.id}/dashboard`}>{record.serviceTypeVehicleC2m.id}</Link>) : '暂无') },
  { title: '服务类型车辆M2m', dataIndex: 'serviceTypeVehicleM2m', render: (text, record) => (record.serviceTypeVehicleM2m ? (<Link to={`/serviceVehicleMovementM2m/${record.serviceTypeVehicleM2m.id}/dashboard`}>{record.serviceTypeVehicleM2m.id}</Link>) : '暂无') },
  { title: '服务类型车辆M2c', dataIndex: 'serviceTypeVehicleM2c', render: (text, record) => (record.serviceTypeVehicleM2c ? (<Link to={`/serviceVehicleMovementM2c/${record.serviceTypeVehicleM2c.id}/dashboard`}>{record.serviceTypeVehicleM2c.id}</Link>) : '暂无') },
  { title: '服务类型文件C2m', dataIndex: 'serviceTypeFileC2m', render: (text, record) => (record.serviceTypeFileC2m ? (<Link to={`/serviceFileMovementC2m/${record.serviceTypeFileC2m.id}/dashboard`}>{record.serviceTypeFileC2m.id}</Link>) : '暂无') },
  { title: '服务类型文件M2m', dataIndex: 'serviceTypeFileM2m', render: (text, record) => (record.serviceTypeFileM2m ? (<Link to={`/serviceFileMovementM2m/${record.serviceTypeFileM2m.id}/dashboard`}>{record.serviceTypeFileM2m.id}</Link>) : '暂无') },
  { title: '服务类型文件M2c', dataIndex: 'serviceTypeFileM2c', render: (text, record) => (record.serviceTypeFileM2c ? (<Link to={`/serviceFileMovementM2c/${record.serviceTypeFileM2c.id}/dashboard`}>{record.serviceTypeFileM2c.id}</Link>) : '暂无') },

]

class ReportHandoverTable extends PureComponent {
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
            message={(
              <p>
                一共 <a style={{ fontWeight: 600 }}>{count}</a> 项 
                已选择 <a style={{ fontWeight: 600 }}>{selectedRowKeys.length}</a> 项 
                <a onClick={this.cleanSelectedKeys} style={{ marginLeft: 24 }}>清空</a>
              </p>
            )}
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
          scroll={{ x: 1815 }}
        />
      </div>
    )
  }
}

export default ReportHandoverTable

