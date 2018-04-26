
import React, { PureComponent } from 'react';
import moment from 'moment';
import {Form,Button, Table, Alert, Badge } from 'antd';
import styles from './Termination.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '原因',dataIndex: 'reason', render: (text, record) => (record.reason ? record.reason.id : '暂无') },
  { title: '类型',dataIndex: 'type', render: (text, record) => (record.type ? record.type.id : '暂无') },
  { title: '评论', debugtype: 'string', dataIndex: 'comment', width: '8' },
];

class TerminationViewTable extends PureComponent {
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
          scroll={{ x: 800 }}
        />
        
      </div>
    );
  }
}

export default TerminationViewTable;

