
import React, { PureComponent } from 'react';
import moment from 'moment';
import {Form,Button, Table, Alert, Badge } from 'antd';
import styles from './Task.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '标题', debugtype: 'string', dataIndex: 'title', width: '15' },
  { title: '选定的任务', debugtype: 'string', dataIndex: 'selectedTask', width: '5' },
  { title: '创建时间', dataIndex: 'createTime', render: (text, record) => moment(record.createTime).format('YYYY-MM-DD') },
  { title: '内容', debugtype: 'string', dataIndex: 'content', width: '107' },
  { title: '创建者',dataIndex: 'creator', render: (text, record) => (record.creator ? record.creator.id : '暂无') },
  { title: '社区',dataIndex: 'community', render: (text, record) => (record.community ? record.community.id : '暂无') },
  { title: '主页',dataIndex: 'homePage', render: (text, record) => (record.homePage ? record.homePage.id : '暂无') },
  { title: '任务页面',dataIndex: 'taskPage', render: (text, record) => (record.taskPage ? record.taskPage.id : '暂无') },
  { title: '视频网址', debugtype: 'string_url', dataIndex: 'videoUrl', width: '50' },
  { title: '封面图像路径1', dataIndex: 'coverImagePath1', render: (text, record) => <ImagePreview imageLocation={record.封面图像路径1}/> },
  { title: '封面图像路径2', dataIndex: 'coverImagePath2', render: (text, record) => <ImagePreview imageLocation={record.封面图像路径2}/> },
  { title: '封面图像路径3', dataIndex: 'coverImagePath3', render: (text, record) => <ImagePreview imageLocation={record.封面图像路径3}/> },
  { title: '图1', dataIndex: 'imagePath1', render: (text, record) => <ImagePreview imageLocation={record.图1}/> },
  { title: '图2', dataIndex: 'imagePath2', render: (text, record) => <ImagePreview imageLocation={record.图2}/> },
  { title: '图3', dataIndex: 'imagePath3', render: (text, record) => <ImagePreview imageLocation={record.图3}/> },
  { title: '图4', dataIndex: 'imagePath4', render: (text, record) => <ImagePreview imageLocation={record.图4}/> },
  { title: '图5', dataIndex: 'imagePath5', render: (text, record) => <ImagePreview imageLocation={record.图5}/> },
  { title: '发布人的奖金', debugtype: 'int', dataIndex: 'creatorBonus', width: '7' },
  { title: '额外的奖金', debugtype: 'int', dataIndex: 'additionalBonus', width: '7' },
  { title: '躲藏',dataIndex: 'hiding', render: (text, record) => (record.hiding ? record.hiding.id : '暂无') },
  { title: '解决',dataIndex: 'resolving', render: (text, record) => (record.resolving ? record.resolving.id : '暂无') },
  { title: '悬赏',dataIndex: 'reward', render: (text, record) => (record.reward ? record.reward.id : '暂无') },
  { title: '当前用户已点赞',dataIndex: 'likeByCurrentUser', render: (text, record) => (record.likeByCurrentUser ? '是' : '否') },
  { title: '当前用户已回复',dataIndex: 'repliedByCurrentUser', render: (text, record) => (record.repliedByCurrentUser ? '是' : '否') },
  { title: '当前状态', debugtype: 'string', dataIndex: 'currentStatus', width: '12' },
];

class TaskEditTable extends PureComponent {
  render() {
    // const { data,count,current, owner } = this.props;
    const { data } = this.props;
	
	

    return (
      <div className={styles.standardTable}>
        
        <Table
          rowKey={record => record.id}
          dataSource={data}
          columns={columns}
          size="small"
          pagination={false}
          scroll={{ x: 4860 }}
        />
        <Button
          style={{ width: '100%', marginTop: 16, marginBottom: 8 }}
          type="dashed"
          onClick={this.newMember}
          icon="plus"
        >
          新增
        </Button>
      </div>
    );
  }
}

export default TaskEditTable;

