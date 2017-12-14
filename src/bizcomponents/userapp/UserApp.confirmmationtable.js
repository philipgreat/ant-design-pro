
import React, { PureComponent } from 'react';
import moment from 'moment';
import { Table, Alert, Badge } from 'antd';
import styles from './UserApp.table.less';



const columns = [
{title:'序号',debugtype:'string',dataIndex: 'id',width:'20'},
{title:'标题',debugtype:'string',dataIndex: 'title',width:'8'},
{title:'SEC的用户',debugtype:'sec_user',dataIndex: 'secUser',width:'13'},
{title:'应用程序图标',debugtype:'string',dataIndex: 'appIcon',width:'13'},
{title:'完全访问',debugtype:'bool',dataIndex: 'fullAccess',width:'8'},
{title:'许可',debugtype:'string',dataIndex: 'permission',width:'8'},
{title:'对象类型',debugtype:'string',dataIndex: 'objectType',width:'31'},
{title:'对象ID',debugtype:'string',dataIndex: 'objectId',width:'14'},
{title:'位置',debugtype:'string',dataIndex: 'location',width:'16'},

      
    ];

class UserAppConfirmationTable extends PureComponent {
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
          scroll={{x:1275}}
        />
      </div>
    );
  }
}

export default UserAppConfirmationTable;

