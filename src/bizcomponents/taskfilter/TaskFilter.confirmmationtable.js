
import React, { PureComponent } from 'react';
import moment from 'moment';
import { Table, Alert, Badge } from 'antd';
import styles from './TaskFilter.table.less';



const columns = [
{title:'序号',debugtype:'string',dataIndex: 'id',width:'20'},
{title:'名称',debugtype:'string',dataIndex: 'name',width:'8'},
{title:'过滤器健值',debugtype:'string',dataIndex: 'filterKey',width:'25'},
{title:'链接网址',debugtype:'string',dataIndex: 'linkUrl',width:'40'},
{title:'任务页面',debugtype:'task_page',dataIndex: 'taskPage',width:'13'},
{title:'主页',debugtype:'home_page',dataIndex: 'homePage',width:'13'},

      
    ];

class TaskFilterConfirmationTable extends PureComponent {
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
          scroll={{x:1275}}
        />
      </div>
    );
  }
}

export default TaskFilterConfirmationTable;

