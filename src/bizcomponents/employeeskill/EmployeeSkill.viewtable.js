
import React, { PureComponent } from 'react';
import moment from 'moment';
import {Form,Button, Table, Alert, Badge } from 'antd';
import styles from './EmployeeSkill.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '员工',dataIndex: 'employee', render: (text, record) => (record.employee ? record.employee.id : '暂无') },
  { title: '技能类型',dataIndex: 'skillType', render: (text, record) => (record.skillType ? record.skillType.id : '暂无') },
  { title: '描述', debugtype: 'string', dataIndex: 'description', width: '11' },
];

class EmployeeSkillViewTable extends PureComponent {
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

export default EmployeeSkillViewTable;

