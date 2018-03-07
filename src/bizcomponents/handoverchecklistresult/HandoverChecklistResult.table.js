
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge} from 'antd'
import { Link } from 'dva/router'
import styles from './HandOverChecklistResult.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '检查项名称', debugtype: 'string', dataIndex: 'handOverCheckItemName', width: '11' },
  { title: '检查项目描述', debugtype: 'string', dataIndex: 'checkItemDescription', width: '37' },
  { title: '检车项结果', debugtype: 'string', dataIndex: 'handOverCheckResult', width: '6' },
  { title: '检查项意见', debugtype: 'string', dataIndex: 'handOverCheckComment', width: '10' },
  { title: '凭证图片1', dataIndex: 'handOverCheckEvidenceImage1', render: (text, record) => <ImagePreview imageTitle="凭证图片1" imageLocation={record.handOverCheckEvidenceImage1} /> },
  { title: '凭证图片2', dataIndex: 'handOverCheckEvidenceImage2', render: (text, record) => <ImagePreview imageTitle="凭证图片2" imageLocation={record.handOverCheckEvidenceImage2} /> },
  { title: '凭证图片3', dataIndex: 'handOverCheckEvidenceImage3', render: (text, record) => <ImagePreview imageTitle="凭证图片3" imageLocation={record.handOverCheckEvidenceImage3} /> },
  { title: '凭证图片4', dataIndex: 'handOverCheckEvidenceImage4', render: (text, record) => <ImagePreview imageTitle="凭证图片4" imageLocation={record.handOverCheckEvidenceImage4} /> },
  { title: '凭证图片5', dataIndex: 'handOverCheckEvidenceImage5', render: (text, record) => <ImagePreview imageTitle="凭证图片5" imageLocation={record.handOverCheckEvidenceImage5} /> },
  { title: '交接检查项', dataIndex: 'availableHandOverItem', render: (text, record) => (record.availableHandOverItem ? (<Link to={`/availableHandOverItem/${record.availableHandOverItem.id}/dashboard`}>{record.availableHandOverItem.displayName}</Link>) : '暂无') },
  { title: '收车服务', dataIndex: 'serviceTypeVehicleC2m', render: (text, record) => (record.serviceTypeVehicleC2m ? (<Link to={`/serviceVehicleMovementC2m/${record.serviceTypeVehicleC2m.id}/dashboard`}>{record.serviceTypeVehicleC2m.displayName}</Link>) : '暂无') },
  { title: '移车服务', dataIndex: 'serviceTypeVehicleM2m', render: (text, record) => (record.serviceTypeVehicleM2m ? (<Link to={`/serviceVehicleMovementM2m/${record.serviceTypeVehicleM2m.id}/dashboard`}>{record.serviceTypeVehicleM2m.displayName}</Link>) : '暂无') },
  { title: '还车服务', dataIndex: 'serviceTypeVehicleM2c', render: (text, record) => (record.serviceTypeVehicleM2c ? (<Link to={`/serviceVehicleMovementM2c/${record.serviceTypeVehicleM2c.id}/dashboard`}>{record.serviceTypeVehicleM2c.displayName}</Link>) : '暂无') },
  { title: '收件服务', dataIndex: 'serviceTypeFileC2m', render: (text, record) => (record.serviceTypeFileC2m ? (<Link to={`/serviceFileMovementC2m/${record.serviceTypeFileC2m.id}/dashboard`}>{record.serviceTypeFileC2m.displayName}</Link>) : '暂无') },
  { title: '移件服务', dataIndex: 'serviceTypeFileM2m', render: (text, record) => (record.serviceTypeFileM2m ? (<Link to={`/serviceFileMovementM2m/${record.serviceTypeFileM2m.id}/dashboard`}>{record.serviceTypeFileM2m.displayName}</Link>) : '暂无') },
  { title: '还件服务', dataIndex: 'serviceTypeFileM2c', render: (text, record) => (record.serviceTypeFileM2c ? (<Link to={`/serviceFileMovementM2c/${record.serviceTypeFileM2c.id}/dashboard`}>{record.serviceTypeFileM2c.displayName}</Link>) : '暂无') },

]

class HandOverChecklistResultTable extends PureComponent {
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
          scroll={{ x: 2310 }}
        />
      </div>
    )
  }
}

export default HandOverChecklistResultTable

