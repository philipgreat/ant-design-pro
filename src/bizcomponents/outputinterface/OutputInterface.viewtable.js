
import React, { PureComponent } from 'react';
import moment from 'moment';
import {Form,Button, Table, Alert, Badge } from 'antd';
import styles from './OutputInterface.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '11' },
  { title: '规范的代码', debugtype: 'string', dataIndex: 'specCode', width: '8' },
  { title: '描述', debugtype: 'string', dataIndex: 'description', width: '23' },
  { title: '设备',dataIndex: 'equipment', render: (text, record) => (record.equipment ? record.equipment.id : '暂无') },
];

class OutputInterfaceViewTable extends PureComponent {
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

export default OutputInterfaceViewTable;

