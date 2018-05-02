
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge} from 'antd'
import { Link } from 'dva/router'
import styles from './InspectionStation.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/inspectionStation/${text}/dashboard`}>{text}</Link>) },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '12' },
  { title: '服务状态', debugtype: 'string', dataIndex: 'operatingStatus', width: '6' },
  { title: '所在城市', dataIndex: 'addressCity', render: (text, record) => (record.addressCity ? record.addressCity.displayName : '暂无') },
  { title: '所在地址', debugtype: 'string', dataIndex: 'addressDetail', width: '17' },
  { title: '经度', debugtype: 'double', dataIndex: 'longitude', width: '12' },
  { title: '纬度', debugtype: 'double', dataIndex: 'latitude', width: '11' },
  { title: '联系人姓名', debugtype: 'string', dataIndex: 'contactName', width: '7' },
  { title: '联系人手机', debugtype: 'string_china_mobile_phone', dataIndex: 'contactMobile', width: '15' },
  { title: '计量资格认证', dataIndex: 'metrologyAccreditationImage', render: (text, record) => <ImagePreview imageTitle="计量资格认证" imageLocation={record.metrologyAccreditationImage} /> },

]

class InspectionStationTable extends PureComponent {
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
          scroll={{ x: 1095 }}
        />
      </div>
    )
  }
}

export default InspectionStationTable

