
import React, { PureComponent } from 'react';
import moment from 'moment';
import {Form,Button, Table, Alert, Badge } from 'antd';
import styles from './Scoring.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '由谁打分', debugtype: 'string', dataIndex: 'scoredBy', width: '7' },
  { title: '分数', debugtype: 'int', dataIndex: 'score', width: '7' },
  { title: '评论', debugtype: 'string', dataIndex: 'comment', width: '13' },
];

class ScoringViewTable extends PureComponent {
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

export default ScoringViewTable;

