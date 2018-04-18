
import React, { PureComponent } from 'react';
import moment from 'moment';
import {Form,Button, Table, Alert, Badge } from 'antd';
import styles from './ServiceOrderFilter.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '服务单状态名称', debugtype: 'string', dataIndex: 'filterName', width: '8' },
  { title: '服务单数量', debugtype: 'int', dataIndex: 'orderCount', width: '6' },
  { title: '选中',dataIndex: 'selected', render: (text, record) => (record.selected ? '是' : '否') },
  { title: '服务单状态接口', debugtype: 'string', dataIndex: 'linkUrl', width: '56' },
  { title: '员工',dataIndex: 'employee', render: (text, record) => (record.employee ? record.employee.id : '暂无') },
];

class ServiceOrderFilterViewTable extends PureComponent {
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
          scroll={{ x: 1170 }}
        />
        
      </div>
    );
  }
}

export default ServiceOrderFilterViewTable;

