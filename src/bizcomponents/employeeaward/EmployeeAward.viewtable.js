
import React, { PureComponent } from 'react';
import moment from 'moment';
import {Form,Button, Table, Alert, Badge } from 'antd';
import styles from './EmployeeAward.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '员工',dataIndex: 'employee', render: (text, record) => (record.employee ? record.employee.id : '暂无') },
  { title: '完成时间', dataIndex: 'completeTime', render: (text, record) => moment(record.completeTime).format('YYYY-MM-DD') },
  { title: '类型', debugtype: 'string', dataIndex: 'type', width: '9' },
  { title: '备注', debugtype: 'string', dataIndex: 'remark', width: '13' },
];

class EmployeeAwardViewTable extends PureComponent {
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

export default EmployeeAwardViewTable;

