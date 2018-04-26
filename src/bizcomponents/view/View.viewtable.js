
import React, { PureComponent } from 'react';
import moment from 'moment';
import {Form,Button, Table, Alert, Badge } from 'antd';
import styles from './View.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '谁', debugtype: 'string', dataIndex: 'who', width: '7' },
  { title: '评估', debugtype: 'string', dataIndex: 'assessment', width: '14' },
  { title: '面试时间', dataIndex: 'interviewTime', render: (text, record) => moment(record.interviewTime).format('YYYY-MM-DD') },
];

class ViewViewTable extends PureComponent {
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

export default ViewViewTable;

