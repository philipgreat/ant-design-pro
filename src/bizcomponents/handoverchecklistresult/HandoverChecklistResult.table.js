
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge} from 'antd'
import { Link } from 'dva/router'
import styles from './HandoverChecklistResult.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '回归检验结果', debugtype: 'string', dataIndex: 'handoverCheckResult', width: '6' },
  { title: '交接检查评论', debugtype: 'string', dataIndex: 'handoverCheckComment', width: '10' },
  { title: '切换检查证据图片1', dataIndex: 'handoverCheckEvidenceImage1', render: (text, record) => <ImagePreview imageTitle="切换检查证据图片1" imageLocation={record.handoverCheckEvidenceImage1} /> },
  { title: '切换检查证据图片2', dataIndex: 'handoverCheckEvidenceImage2', render: (text, record) => <ImagePreview imageTitle="切换检查证据图片2" imageLocation={record.handoverCheckEvidenceImage2} /> },
  { title: '切换检查证据图片3', dataIndex: 'handoverCheckEvidenceImage3', render: (text, record) => <ImagePreview imageTitle="切换检查证据图片3" imageLocation={record.handoverCheckEvidenceImage3} /> },
  { title: '切换检查证据图片4', dataIndex: 'handoverCheckEvidenceImage4', render: (text, record) => <ImagePreview imageTitle="切换检查证据图片4" imageLocation={record.handoverCheckEvidenceImage4} /> },
  { title: '切换检查证据图片5', dataIndex: 'handoverCheckEvidenceImage5', render: (text, record) => <ImagePreview imageTitle="切换检查证据图片5" imageLocation={record.handoverCheckEvidenceImage5} /> },
  { title: '交接检查清单', dataIndex: 'availableHandOverItem', render: (text, record) => (record.availableHandOverItem ? (<Link to={`/availableHandOverItem/${record.availableHandOverItem.id}/dashboard`}>{record.availableHandOverItem.id}</Link>) : '暂无') },
  { title: '交接报告', dataIndex: 'reportHandover', render: (text, record) => (record.reportHandover ? (<Link to={`/reportHandover/${record.reportHandover.id}/dashboard`}>{record.reportHandover.id}</Link>) : '暂无') },

]

class HandoverChecklistResultTable extends PureComponent {
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
          scroll={{ x: 1110 }}
        />
      </div>
    )
  }
}

export default HandoverChecklistResultTable

