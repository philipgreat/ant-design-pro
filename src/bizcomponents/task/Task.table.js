
import React, { PureComponent } from 'react';
import moment from 'moment';
import { Table, Alert, Badge } from 'antd';
import styles from './Task.table.less';



const columns = [
{title:'序号',dataIndex: 'id'},
{title:'标题',dataIndex: 'title'},
{title:'选定的任务',dataIndex: 'selectedTask'},
{title:'创建时间',dataIndex: 'createTime'},
{title:'内容',dataIndex: 'content'},
{title:'创建者',dataIndex: 'creator'},
{title:'社区',dataIndex: 'community'},
{title:'主页',dataIndex: 'homePage'},
{title:'任务页面',dataIndex: 'taskPage'},
{title:'视频网址',dataIndex: 'videoUrl'},
{title:'封面图像路径1',dataIndex: 'coverImagePath1'},
{title:'封面图像路径2',dataIndex: 'coverImagePath2'},
{title:'封面图像路径3',dataIndex: 'coverImagePath3'},
{title:'图1',dataIndex: 'imagePath1'},
{title:'图2',dataIndex: 'imagePath2'},
{title:'图3',dataIndex: 'imagePath3'},
{title:'图4',dataIndex: 'imagePath4'},
{title:'图5',dataIndex: 'imagePath5'},
{title:'发布人的奖金',dataIndex: 'creatorBonus'},
{title:'额外的奖金',dataIndex: 'additionalBonus'},
{title:'躲藏',dataIndex: 'hiding'},
{title:'解决',dataIndex: 'resolving'},
{title:'悬赏',dataIndex: 'reward'},
{title:'当前用户已点赞',dataIndex: 'likeByCurrentUser'},
{title:'当前用户已回复',dataIndex: 'repliedByCurrentUser'},
{title:'当前状态',dataIndex: 'currentStatus'},

      
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
        />
      </div>
    );
  }
}

export default TaskTable;

