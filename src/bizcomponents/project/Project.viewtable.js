
import React, { PureComponent } from 'react';
import moment from 'moment';
import {Form,Button, Table, Alert, Badge } from 'antd';
import styles from './Project.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '23' },
  { title: '描述', debugtype: 'string', dataIndex: 'description', width: '154' },
  { title: '设计师',dataIndex: 'designer', render: (text, record) => (record.designer ? record.designer.id : '暂无') },
];

class ProjectViewTable extends PureComponent {
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
          scroll={{ x: 2535 }}
        />
        
      </div>
    );
  }
}

export default ProjectViewTable;

