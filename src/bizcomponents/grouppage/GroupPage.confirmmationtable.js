
import React, { PureComponent } from 'react';
import moment from 'moment';
import { Table, Alert, Badge } from 'antd';
import styles from './GroupPage.table.less';



const columns = [
{title:'序号',debugtype:'string',dataIndex: 'id',width:'20'},
{title:'标题',debugtype:'string',dataIndex: 'title',width:'7'},
{title:'目前的组名',debugtype:'string',dataIndex: 'currentGroupName',width:'9'},
{title:'社区',debugtype:'community',dataIndex: 'community',width:'13'},

      
    ];

class GroupPageConfirmationTable extends PureComponent {
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

export default GroupPageConfirmationTable;

