
import React, { PureComponent } from 'react';
import moment from 'moment';
import { Table, Alert, Badge } from 'antd';
import styles from './EncyclopediaItem.table.less';



const columns = [
{title:'序号',debugtype:'string',dataIndex: 'id',width:'20'},
{title:'标题',debugtype:'string',dataIndex: 'title',width:'15'},
{title:'发布时间',dataIndex: 'publishTime',render: (text,record)=>moment(record.publishTime).format('YYYY-MM-DD')},
{title:'内容',debugtype:'string',dataIndex: 'content',width:'107'},
{title:'社区',debugtype:'community',dataIndex: 'community',width:'13'},
{title:'主页',debugtype:'home_page',dataIndex: 'homePage',width:'13'},

      
    ];

class EncyclopediaItemConfirmationTable extends PureComponent {
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
          scroll={{x:2115}}
        />
      </div>
    );
  }
}

export default EncyclopediaItemConfirmationTable;

