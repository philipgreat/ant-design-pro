
import React, { PureComponent } from 'react';
import moment from 'moment';
import {Form,Button, Table, Alert, Badge } from 'antd';
import styles from './EmployeeWorkExperience.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '员工',dataIndex: 'employee', render: (text, record) => (record.employee ? record.employee.id : '暂无') },
  { title: '开始', dataIndex: 'start', render: (text, record) => moment(record.start).format('YYYY-MM-DD') },
  { title: '结束', dataIndex: 'end', render: (text, record) => moment(record.end).format('YYYY-MM-DD') },
  { title: '公司', debugtype: 'string', dataIndex: 'company', width: '12' },
  { title: '描述', debugtype: 'string', dataIndex: 'description', width: '25' },
];

class EmployeeWorkExperienceViewTable extends PureComponent {
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

export default EmployeeWorkExperienceViewTable;

