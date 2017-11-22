
import React, { PureComponent } from 'react';
import moment from 'moment';
import { Table, Alert, Badge } from 'antd';
import styles from './Task.table.less';



const columns = [
{title:'序号',dataIndex: 'id',width:'20'},
{title:'标题',dataIndex: 'title',width:'15'},
{title:'选定的任务',dataIndex: 'selectedTask',width:'5'},
{title:'创建时间',dataIndex: 'createTime',width:'9'},
{title:'内容',dataIndex: 'content',width:'107'},
{title:'创建者',dataIndex: 'creator',width:'13'},
{title:'社区',dataIndex: 'community',width:'13'},
{title:'主页',dataIndex: 'homePage',width:'13'},
{title:'任务页面',dataIndex: 'taskPage',width:'13'},
{title:'视频网址',dataIndex: 'videoUrl',width:'50'},
{title:'封面图像路径1',dataIndex: 'coverImagePath1',width:'13'},
{title:'封面图像路径2',dataIndex: 'coverImagePath2',width:'13'},
{title:'封面图像路径3',dataIndex: 'coverImagePath3',width:'13'},
{title:'图1',dataIndex: 'imagePath1',width:'13'},
{title:'图2',dataIndex: 'imagePath2',width:'13'},
{title:'图3',dataIndex: 'imagePath3',width:'13'},
{title:'图4',dataIndex: 'imagePath4',width:'13'},
{title:'图5',dataIndex: 'imagePath5',width:'13'},
{title:'发布人的奖金',dataIndex: 'creatorBonus',width:'7'},
{title:'额外的奖金',dataIndex: 'additionalBonus',width:'7'},
{title:'躲藏',dataIndex: 'hiding',width:'13'},
{title:'解决',dataIndex: 'resolving',width:'13'},
{title:'悬赏',dataIndex: 'reward',width:'13'},
{title:'当前用户已点赞',dataIndex: 'likeByCurrentUser',width:'9'},
{title:'当前用户已回复',dataIndex: 'repliedByCurrentUser',width:'9'},
{title:'当前状态',dataIndex: 'currentStatus',width:'12'},

      
    ];

class TaskTable extends PureComponent {
  state = {
    selectedRowKeys: []
  };

  componentWillReceiveProps(nextProps) {
    // clean state
    if (nextProps.selectedRows.length === 0) {
      this.setState({
        selectedRowKeys: []
      });
    }
  }

  handleRowSelectChange = (selectedRowKeys, selectedRows) => {
    

    if (this.props.onSelectRow) {
      this.props.onSelectRow(selectedRows);
    }

    this.setState({ selectedRowKeys });
  }

  handleTableChange = (pagination, filters, sorter) => {
    this.props.onChange(pagination, filters, sorter);
  }

  cleanSelectedKeys = () => {
    this.handleRowSelectChange([], []);
  }

  render() {
    const { selectedRowKeys } = this.state;
    const { data } = this.props;

   
    

    const paginationProps = {
      showSizeChanger: true,
      showQuickJumper: true,
      
    };

    const rowSelection = {
      selectedRowKeys,
      onChange: this.handleRowSelectChange,
      getCheckboxProps: record => ({
        disabled: record.disabled,
      }),
    };

    return (
      <div className={styles.standardTable}>
        <div className={styles.tableAlert}>
          <Alert
            message={(
              <p>
                已选择 <a style={{ fontWeight: 600 }}>{selectedRowKeys.length}</a> 项 
                
                <a onClick={this.cleanSelectedKeys} style={{ marginLeft: 24 }}>清空</a>
              </p>
            )}
            type="info"
            showIcon
          />
        </div>
        <Table
          loading={false}
          rowKey={record => record.id}
          rowSelection={rowSelection}
          dataSource={data}
          columns={columns}
          pagination={paginationProps}
          onChange={this.handleTableChange}
          scroll={{x:4860}}
        />
      </div>
    );
  }
}

export default TaskTable;

