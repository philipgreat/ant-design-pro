
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import styles from './Task.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '标题', debugtype: 'string', dataIndex: 'title', width: '15' },
  { title: '选定的任务', debugtype: 'string', dataIndex: 'selectedTask', width: '5' },
  { title: '创建时间', dataIndex: 'createTime', render: (text, record) => moment(record.createTime).format('YYYY-MM-DD') },
  { title: '内容', debugtype: 'string', dataIndex: 'content', width: '107' },
  { title: '创建者', dataIndex: 'creator', render: (text, record) => (record.creator ? record.creator.id : '暂无') },
  { title: '社区', dataIndex: 'community', render: (text, record) => (record.community ? record.community.id : '暂无') },
  { title: '主页', dataIndex: 'homePage', render: (text, record) => (record.homePage ? record.homePage.id : '暂无') },
  { title: '任务页面', dataIndex: 'taskPage', render: (text, record) => (record.taskPage ? record.taskPage.id : '暂无') },
  { title: '视频网址', debugtype: 'string_url', dataIndex: 'videoUrl', width: '50' },
  { title: '封面图像路径1', dataIndex: 'coverImagePath1', render: (text, record) => <ImagePreview imageTitle="封面图像路径1" imageLocation={record.coverImagePath1} /> },
  { title: '封面图像路径2', dataIndex: 'coverImagePath2', render: (text, record) => <ImagePreview imageTitle="封面图像路径2" imageLocation={record.coverImagePath2} /> },
  { title: '封面图像路径3', dataIndex: 'coverImagePath3', render: (text, record) => <ImagePreview imageTitle="封面图像路径3" imageLocation={record.coverImagePath3} /> },
  { title: '图1', dataIndex: 'imagePath1', render: (text, record) => <ImagePreview imageTitle="图1" imageLocation={record.imagePath1} /> },
  { title: '图2', dataIndex: 'imagePath2', render: (text, record) => <ImagePreview imageTitle="图2" imageLocation={record.imagePath2} /> },
  { title: '图3', dataIndex: 'imagePath3', render: (text, record) => <ImagePreview imageTitle="图3" imageLocation={record.imagePath3} /> },
  { title: '图4', dataIndex: 'imagePath4', render: (text, record) => <ImagePreview imageTitle="图4" imageLocation={record.imagePath4} /> },
  { title: '图5', dataIndex: 'imagePath5', render: (text, record) => <ImagePreview imageTitle="图5" imageLocation={record.imagePath5} /> },
  { title: '发布人的奖金', debugtype: 'int', dataIndex: 'creatorBonus', width: '7' },
  { title: '额外的奖金', debugtype: 'int', dataIndex: 'additionalBonus', width: '7' },
  { title: '躲藏', dataIndex: 'hiding', render: (text, record) => (record.hiding ? record.hiding.id : '暂无') },
  { title: '解决', dataIndex: 'resolving', render: (text, record) => (record.resolving ? record.resolving.id : '暂无') },
  { title: '悬赏', dataIndex: 'reward', render: (text, record) => (record.reward ? record.reward.id : '暂无') },
  { title: '当前用户已点赞', dataIndex: 'likeByCurrentUser', render: (text, record) => (record.likeByCurrentUser ? '是' : '否') },
  { title: '当前用户已回复', dataIndex: 'repliedByCurrentUser', render: (text, record) => (record.repliedByCurrentUser ? '是' : '否') },
  { title: '当前状态', debugtype: 'string', dataIndex: 'currentStatus', width: '12' },

]

class TaskTable extends PureComponent {
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
          scroll={{ x: 4860 }}
        />
      </div>
    )
  }
}

export default TaskTable

