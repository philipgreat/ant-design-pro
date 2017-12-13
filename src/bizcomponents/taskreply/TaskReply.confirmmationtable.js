
import React, { PureComponent } from 'react';
import moment from 'moment';
import { Table, Alert, Badge } from 'antd';
import styles from './TaskReply.table.less';



const columns = [
{title:'序号',debugtype:'string',dataIndex: 'id',width:'20'},
{title:'回复时间',dataIndex: 'replyTime',render: (text,record)=>moment(record.replyTime).format('YYYY-MM-DD')},
{title:'内容',debugtype:'string',dataIndex: 'content',width:'22'},
{title:'应答者',debugtype:'community_user',dataIndex: 'replier',width:'13'},
{title:'任务',debugtype:'task',dataIndex: 'task',width:'13'},
{title:'最佳答案设置',debugtype:'task_best_answer_setting',dataIndex: 'bestAnswerSetting',width:'13'},
{title:'当前用户已点赞',debugtype:'bool',dataIndex: 'likeByCurrentUser',width:'9'},
{title:'当前状态',debugtype:'string',dataIndex: 'currentStatus',width:'19'},

      
    ];

class TaskReplyConfirmationTable extends PureComponent {
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
          scroll={{x:1125}}
        />
      </div>
    );
  }
}

export default TaskReplyConfirmationTable;

