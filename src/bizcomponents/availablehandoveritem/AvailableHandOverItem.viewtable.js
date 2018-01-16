
import React, { PureComponent } from 'react';
import moment from 'moment';
import {Form,Button, Table, Alert, Badge } from 'antd';
import styles from './AvailableHandOverItem.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '检查项目名称', debugtype: 'string', dataIndex: 'checkItemName', width: '11' },
  { title: '检查项目描述', debugtype: 'string', dataIndex: 'checkItemDescription', width: '37' },
  { title: '产品',dataIndex: 'product', render: (text, record) => (record.product ? record.product.id : '暂无') },
];

class AvailableHandOverItemViewTable extends PureComponent {
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

export default AvailableHandOverItemViewTable;

