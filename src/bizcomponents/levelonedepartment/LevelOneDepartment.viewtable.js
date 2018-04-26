
import React, { PureComponent } from 'react';
import moment from 'moment';
import {Form,Button, Table, Alert, Badge } from 'antd';
import styles from './LevelOneDepartment.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '属于',dataIndex: 'belongsTo', render: (text, record) => (record.belongsTo ? record.belongsTo.id : '暂无') },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '9' },
  { title: '描述', debugtype: 'string', dataIndex: 'description', width: '22' },
  { title: '经理', debugtype: 'string', dataIndex: 'manager', width: '7' },
  { title: '成立', dataIndex: 'founded', render: (text, record) => moment(record.founded).format('YYYY-MM-DD') },
];

class LevelOneDepartmentViewTable extends PureComponent {
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

export default LevelOneDepartmentViewTable;

