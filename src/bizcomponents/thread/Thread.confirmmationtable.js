
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import styles from './Thread.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '标题', debugtype: 'string', dataIndex: 'title', width: '15' },
  { title: '显示顺序', debugtype: 'int', dataIndex: 'displayOrder', width: '10' },
  { title: '创建时间', dataIndex: 'createTime', render: (text, record) => moment(record.createTime).format('YYYY-MM-DD') },
  { title: '事件时间', dataIndex: 'eventTime', render: (text, record) => moment(record.eventTime).format('YYYY-MM-DD') },
  { title: '注册时间停止', dataIndex: 'registrationStopTime', render: (text, record) => moment(record.registrationStopTime).format('YYYY-MM-DD') },
  { title: '事件的位置', debugtype: 'string', dataIndex: 'eventLocation', width: '13' },
  { title: '城市', debugtype: 'string', dataIndex: 'city', width: '6' },
  { title: '社区组', debugtype: 'string', dataIndex: 'communityGroup', width: '8' },
  { title: '帖子类型', debugtype: 'string', dataIndex: 'threadType', width: '9' },
  { title: '社区', dataIndex: 'community', render: (text, record) => (record.community ? record.community.id : '暂无') },
  { title: '创建者', dataIndex: 'creator', render: (text, record) => (record.creator ? record.creator.id : '暂无') },
  { title: '主页', dataIndex: 'homePage', render: (text, record) => (record.homePage ? record.homePage.id : '暂无') },
  { title: '群组页面', dataIndex: 'groupPage', render: (text, record) => (record.groupPage ? record.groupPage.id : '暂无') },
  { title: '视频网址', debugtype: 'string_url', dataIndex: 'videoUrl', width: '50' },
  { title: '封面图像路径1', dataIndex: 'coverImagePath1', render: (text, record) => <ImagePreview imageLocation={record.coverImagePath1} /> },
  { title: '封面图像路径2', dataIndex: 'coverImagePath2', render: (text, record) => <ImagePreview imageLocation={record.coverImagePath2} /> },
  { title: '封面图像路径3', dataIndex: 'coverImagePath3', render: (text, record) => <ImagePreview imageLocation={record.coverImagePath3} /> },
  { title: '图1', dataIndex: 'imagePath1', render: (text, record) => <ImagePreview imageLocation={record.imagePath1} /> },
  { title: '图2', dataIndex: 'imagePath2', render: (text, record) => <ImagePreview imageLocation={record.imagePath2} /> },
  { title: '图3', dataIndex: 'imagePath3', render: (text, record) => <ImagePreview imageLocation={record.imagePath3} /> },
  { title: '图4', dataIndex: 'imagePath4', render: (text, record) => <ImagePreview imageLocation={record.imagePath4} /> },
  { title: '图5', dataIndex: 'imagePath5', render: (text, record) => <ImagePreview imageLocation={record.imagePath5} /> },
  { title: '内容', debugtype: 'string', dataIndex: 'content', width: '107' },
  { title: '验收', dataIndex: 'approval', render: (text, record) => (record.approval ? record.approval.id : '暂无') },
  { title: '取消', dataIndex: 'canceling', render: (text, record) => (record.canceling ? record.canceling.id : '暂无') },
  { title: '完成', dataIndex: 'completion', render: (text, record) => (record.completion ? record.completion.id : '暂无') },
  { title: '躲藏', dataIndex: 'hiding', render: (text, record) => (record.hiding ? record.hiding.id : '暂无') },
  { title: '当前用户已点赞', dataIndex: 'likeByCurrentUser', render: (text, record) => (record.likeByCurrentUser ? '是' : '否') },
  { title: '当前用户已回复', dataIndex: 'repliedByCurrentUser', render: (text, record) => (record.repliedByCurrentUser ? '是' : '否') },
  { title: '由当前用户注册', dataIndex: 'registeredByCurrentUser', render: (text, record) => (record.registeredByCurrentUser ? '是' : '否') },
  { title: '当前状态', debugtype: 'string', dataIndex: 'currentStatus', width: '13' },
]

class ThreadConfirmationTable extends PureComponent {
  render() {
    // const { data,count,current, owner } = this.props
    const { data } = this.props


    return (
      <div className={styles.standardTable}>
        <div className={styles.tableAlert}>
          <Alert
            message={(
              <p>
                一共 <a style={{ fontWeight: 600 }}>{data.length}</a> 项 
              </p>
            )}
            type="warning"
            showIcon
          />
        </div>
        <Table
          rowKey={record => record.id}
          dataSource={data}
          columns={columns}
          size="small"
          scroll={{ x: 5940 }}
        />
      </div>
    )
  }
}

export default ThreadConfirmationTable

