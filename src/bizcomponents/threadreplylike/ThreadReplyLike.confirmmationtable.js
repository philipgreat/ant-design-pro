
import React, { PureComponent } from 'react';
import moment from 'moment';
import { Table, Alert, Badge } from 'antd';
import styles from './ThreadReplyLike.table.less';



const columns = [
{title:'序号',debugtype:'string',dataIndex: 'id',width:'20'},
{title:'点赞时间',dataIndex: 'likeTime',render: (text,record)=>moment(record.likeTime).format('YYYY-MM-DD')},
{title:'应答者',debugtype:'community_user',dataIndex: 'replier',width:'13'},
{title:'跟帖回复',debugtype:'thread_reply',dataIndex: 'threadReply',width:'13'},

      
    ];

class ThreadReplyLikeConfirmationTable extends PureComponent {
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

export default ThreadReplyLikeConfirmationTable;

