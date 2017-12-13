
import React, { PureComponent } from 'react';
import moment from 'moment';
import { Table, Alert, Badge } from 'antd';
import styles from './TaskAssigment.table.less';



const columns = [
{title:'序号',debugtype:'string',dataIndex: 'id',width:'20'},
{title:'任务',debugtype:'task',dataIndex: 'task',width:'13'},
{title:'受让人',debugtype:'community_user',dataIndex: 'assignee',width:'13'},
{title:'分配时间',dataIndex: 'assignTime',render: (text,record)=>moment(record.assignTime).format('YYYY-MM-DD')},
{title:'评论',debugtype:'string',dataIndex: 'comments',width:'17'},

      
    ];

class TaskAssigmentConfirmationTable extends PureComponent {
  render() {
    
    const { data,count,current, owner } = this.props;


    return (
      <div className={styles.standardTable}>
        <div className={styles.tableAlert}>
          <Alert
            message={(
              <p>
                一共 <a style={{ fontWeight: 600 }}>{data.length}</a> 项 
               
              </p>
            )}
            type="warning"
            showIcon
          />
        </div>
        <Table
          rowKey={record => record.id}
          dataSource={data}
          columns={columns}
          
          size={"small"}
          scroll={{x:800}}
        />
      </div>
    );
  }
}

export default TaskAssigmentConfirmationTable;

