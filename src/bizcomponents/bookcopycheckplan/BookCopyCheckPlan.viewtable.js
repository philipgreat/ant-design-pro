
import React, { PureComponent } from 'react';
import moment from 'moment';
import {Form,Button, Table, Alert, Badge } from 'antd';
import styles from './BookCopyCheckPlan.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '检查计划的名字', debugtype: 'string', dataIndex: 'checkPlanName', width: '10' },
  { title: '检查存储',dataIndex: 'checkStore', render: (text, record) => (record.checkStore ? record.checkStore.id : '暂无') },
  { title: '计划日期时间', dataIndex: 'planDatetime', render: (text, record) => moment(record.planDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '计划的创造者',dataIndex: 'planCreator', render: (text, record) => (record.planCreator ? record.planCreator.id : '暂无') },
  { title: '计划更新日期时间', dataIndex: 'planUpdateDatetime', render: (text, record) => moment(record.planUpdateDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '检查计划状态', debugtype: 'string', dataIndex: 'checkPlanStatus', width: '6' },
  { title: '图书管理',dataIndex: 'bookManagement', render: (text, record) => (record.bookManagement ? record.bookManagement.id : '暂无') },
];

class BookCopyCheckPlanViewTable extends PureComponent {
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

export default BookCopyCheckPlanViewTable;

