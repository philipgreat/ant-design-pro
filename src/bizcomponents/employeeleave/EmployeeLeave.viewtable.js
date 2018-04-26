
import React, { PureComponent } from 'react';
import moment from 'moment';
import {Form,Button, Table, Alert, Badge } from 'antd';
import styles from './EmployeeLeave.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '谁',dataIndex: 'who', render: (text, record) => (record.who ? record.who.id : '暂无') },
  { title: '类型',dataIndex: 'type', render: (text, record) => (record.type ? record.type.id : '暂无') },
  { title: '请假时长', debugtype: 'int', dataIndex: 'leaveDurationHour', width: '5' },
  { title: '备注', debugtype: 'string', dataIndex: 'remark', width: '15' },
];

class EmployeeLeaveViewTable extends PureComponent {
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

export default EmployeeLeaveViewTable;

