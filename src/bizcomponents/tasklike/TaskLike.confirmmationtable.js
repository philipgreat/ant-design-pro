
import React, { PureComponent } from 'react';
import moment from 'moment';
import { Table, Alert, Badge } from 'antd';
import styles from './TaskLike.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '点赞时间', dataIndex: 'likeTime', render: (text, record) => moment(record.likeTime).format('YYYY-MM-DD') },
  { title: '应答者',dataIndex: 'replier', render: (text, record) => (record.replier ? record.replier.id : '暂无') },
  { title: '任务',dataIndex: 'task', render: (text, record) => (record.task ? record.task.id : '暂无') },
];

class TaskLikeConfirmationTable extends PureComponent {
  render() {
    // const { data,count,current, owner } = this.props;
    const { data } = this.props;


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
          scroll={{ x: 800 }}
        />
      </div>
    );
  }
}

export default TaskLikeConfirmationTable;

