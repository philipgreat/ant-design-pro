
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge} from 'antd'
import { Link } from 'dva/router'
import styles from './ServiceVehicleMovementM2mChecklistResult.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '服务', dataIndex: 'service', render: (text, record) => (record.service ? (<Link to={`/serviceVehicleMovementM2m/${record.service.id}/dashboard`}>{record.service.id}</Link>) : '暂无') },
  { title: '检查结果', debugtype: 'string', dataIndex: 'checkResult', width: '6' },
  { title: '检验结果的评论', debugtype: 'string', dataIndex: 'checkResultComments', width: '30' },
  { title: '创建时间', dataIndex: 'createTime', render: (text, record) => moment(record.createTime).format('YYYY-MM-DD') },
  { title: '图1', dataIndex: 'image1', render: (text, record) => <ImagePreview imageTitle="图1" imageLocation={record.image1} /> },
  { title: '图2', dataIndex: 'image2', render: (text, record) => <ImagePreview imageTitle="图2" imageLocation={record.image2} /> },
  { title: '图3', dataIndex: 'image3', render: (text, record) => <ImagePreview imageTitle="图3" imageLocation={record.image3} /> },
  { title: '图4', dataIndex: 'image4', render: (text, record) => <ImagePreview imageTitle="图4" imageLocation={record.image4} /> },
  { title: '图5', dataIndex: 'image5', render: (text, record) => <ImagePreview imageTitle="图5" imageLocation={record.image5} /> },

]

class ServiceVehicleMovementM2mChecklistResultTable extends PureComponent {
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
          scroll={{ x: 1245 }}
        />
      </div>
    )
  }
}

export default ServiceVehicleMovementM2mChecklistResultTable
