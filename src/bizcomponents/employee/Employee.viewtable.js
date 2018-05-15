
import React, { PureComponent } from 'react';
import moment from 'moment';
import {Form,Button, Table, Alert, Badge } from 'antd';
import styles from './Employee.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '11' },
  { title: '员工形象', dataIndex: 'employeeImage', render: (text, record) => <ImagePreview imageLocation={record.employeeImage}/> },
  { title: '手机号码', debugtype: 'string_china_mobile_phone', dataIndex: 'mobileNumber', width: '15' },
  { title: '角色',dataIndex: 'role', render: (text, record) => (record.role ? record.role.id : '暂无') },
];

class EmployeeViewTable extends PureComponent {
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

export default EmployeeViewTable;

