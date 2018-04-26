
import React, { PureComponent } from 'react';
import moment from 'moment';
import {Form,Button, Table, Alert, Badge } from 'antd';
import styles from './CompanyTraining.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '头衔', debugtype: 'string', dataIndex: 'title', width: '8' },
  { title: '公司',dataIndex: 'company', render: (text, record) => (record.company ? record.company.id : '暂无') },
  { title: '讲师',dataIndex: 'instructor', render: (text, record) => (record.instructor ? record.instructor.id : '暂无') },
  { title: '培训课程类型',dataIndex: 'trainingCourseType', render: (text, record) => (record.trainingCourseType ? record.trainingCourseType.id : '暂无') },
  { title: '时间开始', dataIndex: 'timeStart', render: (text, record) => moment(record.timeStart).format('YYYY-MM-DD') },
  { title: '持续时间', debugtype: 'int', dataIndex: 'durationHours', width: '5' },
];

class CompanyTrainingViewTable extends PureComponent {
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

export default CompanyTrainingViewTable;

