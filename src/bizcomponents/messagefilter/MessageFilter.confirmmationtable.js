
import React, { PureComponent } from 'react';
import moment from 'moment';
import { Table, Alert, Badge } from 'antd';
import styles from './MessageFilter.table.less';



const columns = [
{title:'序号',debugtype:'string',dataIndex: 'id',width:'20'},
{title:'名称',debugtype:'string',dataIndex: 'name',width:'8'},
{title:'消息计数',debugtype:'int',dataIndex: 'messageCount',width:'9'},
{title:'过滤器健值',debugtype:'string',dataIndex: 'filterKey',width:'18'},
{title:'链接网址',debugtype:'string',dataIndex: 'linkUrl',width:'40'},
{title:'用户',debugtype:'community_user',dataIndex: 'user',width:'13'},

      
    ];

class MessageFilterConfirmationTable extends PureComponent {
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
          scroll={{x:1110}}
        />
      </div>
    );
  }
}

export default MessageFilterConfirmationTable;

