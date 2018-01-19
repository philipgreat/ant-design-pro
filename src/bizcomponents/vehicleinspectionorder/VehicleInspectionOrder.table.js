
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge} from 'antd'
import { Link } from 'dva/router'
import styles from './VehicleInspectionOrder.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/vehicleInspectionOrder/${text}/dashboard`}>{text}</Link>) },
  { title: '订单状态', debugtype: 'string', dataIndex: 'orderStatus', width: '7' },
  { title: '客户', dataIndex: 'customer', render: (text, record) => (record.customer ? (<Link to={`/customer/${record.customer.id}/dashboard`}>{record.customer.id}</Link>) : '暂无') },
  { title: '创建时间', dataIndex: 'createTime', render: (text, record) => moment(record.createTime).format('YYYY-MM-DD') },
  { title: '联系人姓名', debugtype: 'string', dataIndex: 'contactName', width: '7' },
  { title: '联系手机号码', debugtype: 'string_china_mobile_phone', dataIndex: 'contactMobileNumber', width: '15' },
  { title: '城市', dataIndex: 'contactAddressCity', render: (text, record) => (record.contactAddressCity ? (<Link to={`/city/${record.contactAddressCity.id}/dashboard`}>{record.contactAddressCity.id}</Link>) : '暂无') },
  { title: '地址', debugtype: 'string', dataIndex: 'contactAddressDetail', width: '19' },
  { title: '车牌号码', debugtype: 'string', dataIndex: 'vehicleLicensePlateNumber', width: '11' },
  { title: '车辆类型', debugtype: 'string', dataIndex: 'vehicleType', width: '7' },
  { title: '使用性质', debugtype: 'string', dataIndex: 'vehicleUseCharacter', width: '7' },
  { title: '核准座位数', debugtype: 'int', dataIndex: 'vehicleSeatsQuantity', width: '5' },
  { title: '注册日期', dataIndex: 'vehicleRegistrationDate', render: (text, record) => moment(record.vehicleRegistrationDate).format('YYYY-MM-DD') },
  { title: '检测有效期', dataIndex: 'inspectionValidationDate', render: (text, record) => moment(record.inspectionValidationDate).format('YYYY-MM-DD') },
  { title: '保险有效期', dataIndex: 'insuranceValidationDate', render: (text, record) => moment(record.insuranceValidationDate).format('YYYY-MM-DD') },
  { title: '发动机号', debugtype: 'string', dataIndex: 'engineNumber', width: '11' },
  { title: '车架号', debugtype: 'string', dataIndex: 'vehicleIdentificationNumber', width: '21' },
  { title: '发证日期', dataIndex: 'vehiclePermitIssueDate', render: (text, record) => moment(record.vehiclePermitIssueDate).format('YYYY-MM-DD') },
  { title: '所有人', debugtype: 'string', dataIndex: 'vehiclePermitHolderName', width: '7' },
  { title: '车辆行驶证号码', debugtype: 'string', dataIndex: 'vehiclePermitNumber', width: '20' },
  { title: '行驶证有效期', dataIndex: 'vehiclePermitExpirationDate', render: (text, record) => moment(record.vehiclePermitExpirationDate).format('YYYY-MM-DD') },
  { title: '图1', dataIndex: 'vehiclePermitImage1', render: (text, record) => <ImagePreview imageTitle="图1" imageLocation={record.vehiclePermitImage1} /> },
  { title: '图2', dataIndex: 'vehiclePermitImage2', render: (text, record) => <ImagePreview imageTitle="图2" imageLocation={record.vehiclePermitImage2} /> },
  { title: '图3', dataIndex: 'vehiclePermitImage3', render: (text, record) => <ImagePreview imageTitle="图3" imageLocation={record.vehiclePermitImage3} /> },
  { title: '图4', dataIndex: 'vehiclePermitImage4', render: (text, record) => <ImagePreview imageTitle="图4" imageLocation={record.vehiclePermitImage4} /> },
  { title: '图5', dataIndex: 'vehiclePermitImage5', render: (text, record) => <ImagePreview imageTitle="图5" imageLocation={record.vehiclePermitImage5} /> },
  { title: '平台', dataIndex: 'platform', render: (text, record) => (record.platform ? (<Link to={`/carInspectionPlatform/${record.platform.id}/dashboard`}>{record.platform.id}</Link>) : '暂无') },

]

class VehicleInspectionOrderTable extends PureComponent {
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
          scroll={{ x: 3150 }}
        />
      </div>
    )
  }
}

export default VehicleInspectionOrderTable
