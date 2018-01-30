
import React, { PureComponent } from 'react';
import moment from 'moment';
import {Form,Button, Table, Alert, Badge } from 'antd';
import styles from './EquipmentSupplyLeadTime.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '质量', debugtype: 'int', dataIndex: 'quanlity', width: '7' },
  { title: '交货时间', debugtype: 'string', dataIndex: 'leadTime', width: '7' },
  { title: '供应价格', debugtype: 'money', dataIndex: 'supplyPrice', width: '13' },
  { title: '设备',dataIndex: 'equipment', render: (text, record) => (record.equipment ? record.equipment.id : '暂无') },
];

class EquipmentSupplyLeadTimeViewTable extends PureComponent {
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

export default EquipmentSupplyLeadTimeViewTable;

