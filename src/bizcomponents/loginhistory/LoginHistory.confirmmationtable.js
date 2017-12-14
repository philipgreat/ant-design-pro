
import React, { PureComponent } from 'react';
import moment from 'moment';
import { Table, Alert, Badge } from 'antd';
import styles from './LoginHistory.table.less';



const columns = [
{title:'序号',debugtype:'string',dataIndex: 'id',width:'20'},
{title:'登录时间',dataIndex: 'loginTime',render: (text,record)=>moment(record.loginTime).format('YYYY-MM-DD')},
{title:'来自IP',debugtype:'string',dataIndex: 'fromIp',width:'15'},
{title:'描述',debugtype:'string',dataIndex: 'description',width:'8'},
{title:'SEC的用户',debugtype:'sec_user',dataIndex: 'secUser',width:'13'},

      
    ];

class LoginHistoryConfirmationTable extends PureComponent {
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

export default LoginHistoryConfirmationTable;

