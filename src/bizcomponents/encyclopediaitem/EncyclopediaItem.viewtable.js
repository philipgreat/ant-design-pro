
import React, { PureComponent } from 'react';
import moment from 'moment';
import {Form,Button, Table, Alert, Badge } from 'antd';
import styles from './EncyclopediaItem.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '标题', debugtype: 'string', dataIndex: 'title', width: '15' },
  { title: '发布时间', dataIndex: 'publishTime', render: (text, record) => moment(record.publishTime).format('YYYY-MM-DD') },
  { title: '内容', debugtype: 'string', dataIndex: 'content', width: '107' },
  { title: '社区',dataIndex: 'community', render: (text, record) => (record.community ? record.community.id : '暂无') },
  { title: '主页',dataIndex: 'homePage', render: (text, record) => (record.homePage ? record.homePage.id : '暂无') },
];

class EncyclopediaItemViewTable extends PureComponent {
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
          scroll={{ x: 2115 }}
        />
        
      </div>
    );
  }
}

export default EncyclopediaItemViewTable;

