
import React, { PureComponent } from 'react';
import moment from 'moment';
import { Table, Alert, Badge } from 'antd';
import styles from './ThreadRegistration.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '主贴',dataIndex: 'thread', render: (text, record) => (record.thread ? record.thread.id : '暂无') },
  { title: '参与者',dataIndex: 'participant', render: (text, record) => (record.participant ? record.participant.id : '暂无') },
  { title: '登记时间', dataIndex: 'registerTime', render: (text, record) => moment(record.registerTime).format('YYYY-MM-DD') },
  { title: '评论', debugtype: 'string', dataIndex: 'comments', width: '14' },
];

class ThreadRegistrationConfirmationTable extends PureComponent {
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

export default ThreadRegistrationConfirmationTable;

