import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import { Link } from 'dva/router'
import styles from './Thread.table.less'
import ImagePreview from '../../components/ImagePreview'

const columns = [
  {
    title: '序号',
    debugtype: 'string',
    dataIndex: 'id',
    width: '20',
    render: (text, record) => (
      <Link to={`/thread/${text}/dashboard`}>{text}</Link>
    ),
  },
  { title: '标题', debugtype: 'string', dataIndex: 'title', width: '15' },
  {
    title: '显示顺序',
    debugtype: 'int',
    dataIndex: 'displayOrder',
    width: '10',
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    render: (text, record) =>
      moment(record.createTime).format('YYYY-MM-DD HH:mm:ss'),
  },
  {
    title: '事件时间',
    dataIndex: 'eventTime',
    render: (text, record) =>
      moment(record.eventTime).format('YYYY-MM-DD HH:mm:ss'),
  },
  {
    title: '注册时间停止',
    dataIndex: 'registrationStopTime',
    render: (text, record) =>
      moment(record.registrationStopTime).format('YYYY-MM-DD HH:mm:ss'),
  },
  {
    title: '事件的位置',
    debugtype: 'string',
    dataIndex: 'eventLocation',
    width: '13',
  },
  { title: '城市', debugtype: 'string', dataIndex: 'city', width: '6' },
  {
    title: '社区组',
    debugtype: 'string',
    dataIndex: 'communityGroup',
    width: '8',
  },
  {
    title: '帖子类型',
    debugtype: 'string',
    dataIndex: 'threadType',
    width: '9',
  },
  {
    title: '社区',
    dataIndex: 'community',
    render: (text, record) =>
      record.community ? (
        <Link to={`/community/${record.community.id}/dashboard`}>
          {record.community.displayName}
        </Link>
      ) : (
        '暂无'
      ),
  },
  {
    title: '创建者',
    dataIndex: 'creator',
    render: (text, record) =>
      record.creator ? (
        <Link to={`/communityUser/${record.creator.id}/dashboard`}>
          {record.creator.displayName}
        </Link>
      ) : (
        '暂无'
      ),
  },
  {
    title: '主页',
    dataIndex: 'homePage',
    render: (text, record) =>
      record.homePage ? (
        <Link to={`/homePage/${record.homePage.id}/dashboard`}>
          {record.homePage.displayName}
        </Link>
      ) : (
        '暂无'
      ),
  },
  {
    title: '群组页面',
    dataIndex: 'groupPage',
    render: (text, record) =>
      record.groupPage ? (
        <Link to={`/groupPage/${record.groupPage.id}/dashboard`}>
          {record.groupPage.displayName}
        </Link>
      ) : (
        '暂无'
      ),
  },
  {
    title: '视频网址',
    debugtype: 'string_url',
    dataIndex: 'videoUrl',
    width: '50',
  },
  {
    title: '封面图像路径1',
    dataIndex: 'coverImagePath1',
    render: (text, record) => (
      <ImagePreview
        imageTitle="封面图像路径1"
        imageLocation={record.coverImagePath1}
      />
    ),
  },
  {
    title: '封面图像路径2',
    dataIndex: 'coverImagePath2',
    render: (text, record) => (
      <ImagePreview
        imageTitle="封面图像路径2"
        imageLocation={record.coverImagePath2}
      />
    ),
  },
  {
    title: '封面图像路径3',
    dataIndex: 'coverImagePath3',
    render: (text, record) => (
      <ImagePreview
        imageTitle="封面图像路径3"
        imageLocation={record.coverImagePath3}
      />
    ),
  },
  {
    title: '图1',
    dataIndex: 'imagePath1',
    render: (text, record) => (
      <ImagePreview imageTitle="图1" imageLocation={record.imagePath1} />
    ),
  },
  {
    title: '图2',
    dataIndex: 'imagePath2',
    render: (text, record) => (
      <ImagePreview imageTitle="图2" imageLocation={record.imagePath2} />
    ),
  },
  {
    title: '图3',
    dataIndex: 'imagePath3',
    render: (text, record) => (
      <ImagePreview imageTitle="图3" imageLocation={record.imagePath3} />
    ),
  },
  {
    title: '图4',
    dataIndex: 'imagePath4',
    render: (text, record) => (
      <ImagePreview imageTitle="图4" imageLocation={record.imagePath4} />
    ),
  },
  {
    title: '图5',
    dataIndex: 'imagePath5',
    render: (text, record) => (
      <ImagePreview imageTitle="图5" imageLocation={record.imagePath5} />
    ),
  },
  { title: '内容', debugtype: 'string', dataIndex: 'content', width: '107' },
  {
    title: '验收',
    dataIndex: 'approval',
    render: (text, record) =>
      record.approval ? (
        <Link to={`/threadApproval/${record.approval.id}/dashboard`}>
          {record.approval.displayName}
        </Link>
      ) : (
        '暂无'
      ),
  },
  {
    title: '取消',
    dataIndex: 'canceling',
    render: (text, record) =>
      record.canceling ? (
        <Link to={`/threadCanceling/${record.canceling.id}/dashboard`}>
          {record.canceling.displayName}
        </Link>
      ) : (
        '暂无'
      ),
  },
  {
    title: '完成',
    dataIndex: 'completion',
    render: (text, record) =>
      record.completion ? (
        <Link to={`/threadCompletion/${record.completion.id}/dashboard`}>
          {record.completion.displayName}
        </Link>
      ) : (
        '暂无'
      ),
  },
  {
    title: '躲藏',
    dataIndex: 'hiding',
    render: (text, record) =>
      record.hiding ? (
        <Link to={`/threadHiding/${record.hiding.id}/dashboard`}>
          {record.hiding.displayName}
        </Link>
      ) : (
        '暂无'
      ),
  },
  {
    title: '当前用户已点赞',
    dataIndex: 'likeByCurrentUser',
    render: (text, record) => (record.likeByCurrentUser ? '是' : '否'),
  },
  {
    title: '当前用户已回复',
    dataIndex: 'repliedByCurrentUser',
    render: (text, record) => (record.repliedByCurrentUser ? '是' : '否'),
  },
  {
    title: '由当前用户注册',
    dataIndex: 'registeredByCurrentUser',
    render: (text, record) => (record.registeredByCurrentUser ? '是' : '否'),
  },
  {
    title: '当前状态',
    debugtype: 'string',
    dataIndex: 'currentStatus',
    width: '13',
  },
]

class ThreadTable extends PureComponent {
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
          scroll={{ x: 5940 }}
        />
      </div>
    )
  }
}

export default ThreadTable
