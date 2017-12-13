
import React, { PureComponent } from 'react';
import moment from 'moment';
import { Table, Alert, Badge } from 'antd';
import styles from './Follow.table.less';



const columns = [
{title:'序号',debugtype:'string',dataIndex: 'id',width:'20'},
{title:'用户',debugtype:'community_user',dataIndex: 'user',width:'13'},
{title:'关注的社区用户',debugtype:'string',dataIndex: 'followId',width:'12'},
{title:'添加时间',dataIndex: 'addingTime',render: (text,record)=>moment(record.addingTime).format('YYYY-MM-DD')},

      
    ];

class FollowConfirmationTable extends PureComponent {
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

export default FollowConfirmationTable;

