
import React, { PureComponent } from 'react';
import moment from 'moment';
import { Table, Alert, Badge } from 'antd';
import styles from './TaskBestAnswerSetting.table.less';



const columns = [
{title:'序号',debugtype:'string',dataIndex: 'id',width:'20'},
{title:'谁',debugtype:'string_current_user_name',dataIndex: 'who',width:'21'},
{title:'设置时间',dataIndex: 'setTime',render: (text,record)=>moment(record.setTime).format('YYYY-MM-DD')},
{title:'评论',debugtype:'string',dataIndex: 'comment',width:'8'},

      
    ];

class TaskBestAnswerSettingConfirmationTable extends PureComponent {
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
            type="info"
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

export default TaskBestAnswerSettingConfirmationTable;

