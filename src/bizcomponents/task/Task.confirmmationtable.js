
import React, { PureComponent } from 'react';
import moment from 'moment';
import { Table, Alert, Badge } from 'antd';
import styles from './Task.table.less';



const columns = [
{title:'序号',debugtype:'string',dataIndex: 'id',width:'20'},
{title:'标题',debugtype:'string',dataIndex: 'title',width:'15'},
{title:'选定的任务',debugtype:'string',dataIndex: 'selectedTask',width:'5'},
{title:'创建时间',dataIndex: 'createTime',render: (text,record)=>moment(record.createTime).format('YYYY-MM-DD')},
{title:'内容',debugtype:'string',dataIndex: 'content',width:'107'},
{title:'创建者',debugtype:'community_user',dataIndex: 'creator',width:'13'},
{title:'社区',debugtype:'community',dataIndex: 'community',width:'13'},
{title:'主页',debugtype:'home_page',dataIndex: 'homePage',width:'13'},
{title:'任务页面',debugtype:'task_page',dataIndex: 'taskPage',width:'13'},
{title:'视频网址',debugtype:'string_url',dataIndex: 'videoUrl',width:'50'},
{title:'封面图像路径1',debugtype:'string_image',dataIndex: 'coverImagePath1',width:'13'},
{title:'封面图像路径2',debugtype:'string_image',dataIndex: 'coverImagePath2',width:'13'},
{title:'封面图像路径3',debugtype:'string_image',dataIndex: 'coverImagePath3',width:'13'},
{title:'图1',debugtype:'string_image',dataIndex: 'imagePath1',width:'13'},
{title:'图2',debugtype:'string_image',dataIndex: 'imagePath2',width:'13'},
{title:'图3',debugtype:'string_image',dataIndex: 'imagePath3',width:'13'},
{title:'图4',debugtype:'string_image',dataIndex: 'imagePath4',width:'13'},
{title:'图5',debugtype:'string_image',dataIndex: 'imagePath5',width:'13'},
{title:'发布人的奖金',debugtype:'int',dataIndex: 'creatorBonus',width:'7'},
{title:'额外的奖金',debugtype:'int',dataIndex: 'additionalBonus',width:'7'},
{title:'躲藏',debugtype:'task_hiding',dataIndex: 'hiding',width:'13'},
{title:'解决',debugtype:'task_resolving',dataIndex: 'resolving',width:'13'},
{title:'悬赏',debugtype:'task_reward',dataIndex: 'reward',width:'13'},
{title:'当前用户已点赞',debugtype:'bool',dataIndex: 'likeByCurrentUser',width:'9'},
{title:'当前用户已回复',debugtype:'bool',dataIndex: 'repliedByCurrentUser',width:'9'},
{title:'当前状态',debugtype:'string',dataIndex: 'currentStatus',width:'12'},

      
    ];

class TaskConfirmationTable extends PureComponent {
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
          scroll={{x:4860}}
        />
      </div>
    );
  }
}

export default TaskConfirmationTable;

