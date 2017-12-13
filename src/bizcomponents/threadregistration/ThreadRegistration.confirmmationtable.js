
import React, { PureComponent } from 'react';
import moment from 'moment';
import { Table, Alert, Badge } from 'antd';
import styles from './ThreadRegistration.table.less';



const columns = [
{title:'序号',debugtype:'string',dataIndex: 'id',width:'20'},
{title:'主贴',debugtype:'thread',dataIndex: 'thread',width:'13'},
{title:'参与者',debugtype:'community_user',dataIndex: 'participant',width:'13'},
{title:'登记时间',dataIndex: 'registerTime',render: (text,record)=>moment(record.registerTime).format('YYYY-MM-DD')},
{title:'评论',debugtype:'string',dataIndex: 'comments',width:'14'},

      
    ];

class ThreadRegistrationConfirmationTable extends PureComponent {
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

export default ThreadRegistrationConfirmationTable;

