import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import styles from './TaskReply.table.less'
import ImagePreview from '../../components/ImagePreview'

const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  {
    title: '回复时间',
    dataIndex: 'replyTime',
    render: (text, record) => moment(record.replyTime).format('YYYY-MM-DD'),
  },
  { title: '内容', debugtype: 'string', dataIndex: 'content', width: '22' },
  {
    title: '应答者',
    dataIndex: 'replier',
    render: (text, record) => (record.replier ? record.replier.id : '暂无'),
  },
  {
    title: '任务',
    dataIndex: 'task',
    render: (text, record) => (record.task ? record.task.id : '暂无'),
  },
  {
    title: '最佳答案设置',
    dataIndex: 'bestAnswerSetting',
    render: (text, record) =>
      record.bestAnswerSetting ? record.bestAnswerSetting.id : '暂无',
  },
  {
    title: '当前用户已点赞',
    dataIndex: 'likeByCurrentUser',
    render: (text, record) => (record.likeByCurrentUser ? '是' : '否'),
  },
  {
    title: '当前状态',
    debugtype: 'string',
    dataIndex: 'currentStatus',
    width: '19',
  },
]

class TaskReplyTable extends PureComponent {
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
          scroll={{ x: 1125 }}
        />
      </div>
    )
  }
}

export default TaskReplyTable
