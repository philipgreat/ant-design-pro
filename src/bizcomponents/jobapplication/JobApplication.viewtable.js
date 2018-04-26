
import React, { PureComponent } from 'react';
import moment from 'moment';
import {Form,Button, Table, Alert, Badge } from 'antd';
import styles from './JobApplication.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '申请时间', dataIndex: 'applicationTime', render: (text, record) => moment(record.applicationTime).format('YYYY-MM-DD') },
  { title: '谁', debugtype: 'string', dataIndex: 'who', width: '9' },
  { title: '评论', debugtype: 'string', dataIndex: 'comments', width: '35' },
];

class JobApplicationViewTable extends PureComponent {
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

export default JobApplicationViewTable;

