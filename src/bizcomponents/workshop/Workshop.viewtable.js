
import React, { PureComponent } from 'react';
import moment from 'moment';
import {Form,Button, Table, Alert, Badge } from 'antd';
import styles from './Workshop.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '工厂的名字', debugtype: 'string', dataIndex: 'workshopName', width: '13' },
  { title: '研讨会内容', debugtype: 'string', dataIndex: 'workshopContent', width: '27' },
  { title: '车间图片', dataIndex: 'workshopImage', render: (text, record) => <ImagePreview imageLocation={record.workshopImage}/> },
  { title: '车间的地位', debugtype: 'string', dataIndex: 'workshopStatus', width: '7' },
  { title: '车间活动日期时间', dataIndex: 'workshopEventDatetime', render: (text, record) => moment(record.workshopEventDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '可用的寄存器Datetime', dataIndex: 'availableRegisterDatetime', render: (text, record) => moment(record.availableRegisterDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '可用的寄存器数量', debugtype: 'int', dataIndex: 'availableRegisterQuantity', width: '6' },
  { title: '发布日期时间', dataIndex: 'publishDatetime', render: (text, record) => moment(record.publishDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '发布商店',dataIndex: 'publishStore', render: (text, record) => (record.publishStore ? record.publishStore.id : '暂无') },
  { title: '发布员工',dataIndex: 'publishEmployee', render: (text, record) => (record.publishEmployee ? record.publishEmployee.id : '暂无') },
];

class WorkshopViewTable extends PureComponent {
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
          scroll={{ x: 1665 }}
        />
        
      </div>
    );
  }
}

export default WorkshopViewTable;

