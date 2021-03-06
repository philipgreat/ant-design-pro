
import React, { PureComponent } from 'react';
import moment from 'moment';
import {Form,Button, Table, Alert, Badge } from 'antd';
import styles from './TaskReply.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '回复时间', dataIndex: 'replyTime', render: (text, record) => moment(record.replyTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '内容', debugtype: 'string', dataIndex: 'content', width: '22' },
  { title: '应答者',dataIndex: 'replier', render: (text, record) => (record.replier ? record.replier.id : '暂无') },
  { title: '任务',dataIndex: 'task', render: (text, record) => (record.task ? record.task.id : '暂无') },
  { title: '最佳答案设置',dataIndex: 'bestAnswerSetting', render: (text, record) => (record.bestAnswerSetting ? record.bestAnswerSetting.id : '暂无') },
  { title: '当前用户已点赞',dataIndex: 'likeByCurrentUser', render: (text, record) => (record.likeByCurrentUser ? '是' : '否') },
  { title: '当前状态', debugtype: 'string', dataIndex: 'currentStatus', width: '19' },
];

class TaskReplyViewTable extends PureComponent {
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
          scroll={{ x: 1125 }}
        />
        
      </div>
    );
  }
}

export default TaskReplyViewTable;

