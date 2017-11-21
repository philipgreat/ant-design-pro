
import React, { PureComponent } from 'react';
import moment from 'moment';
import { Table, Alert, Badge } from 'antd';
import styles from './Thread.table.less';



const columns = [
{title:'序号',dataIndex: 'id'},
{title:'标题',dataIndex: 'title'},
{title:'显示顺序',dataIndex: 'displayOrder'},
{title:'创建时间',dataIndex: 'createTime'},
{title:'事件时间',dataIndex: 'eventTime'},
{title:'注册时间停止',dataIndex: 'registrationStopTime'},
{title:'事件的位置',dataIndex: 'eventLocation'},
{title:'城市',dataIndex: 'city'},
{title:'社区组',dataIndex: 'communityGroup'},
{title:'帖子类型',dataIndex: 'threadType'},
{title:'社区',dataIndex: 'community'},
{title:'创建者',dataIndex: 'creator'},
{title:'主页',dataIndex: 'homePage'},
{title:'群组页面',dataIndex: 'groupPage'},
{title:'视频网址',dataIndex: 'videoUrl'},
{title:'封面图像路径1',dataIndex: 'coverImagePath1'},
{title:'封面图像路径2',dataIndex: 'coverImagePath2'},
{title:'封面图像路径3',dataIndex: 'coverImagePath3'},
{title:'图1',dataIndex: 'imagePath1'},
{title:'图2',dataIndex: 'imagePath2'},
{title:'图3',dataIndex: 'imagePath3'},
{title:'图4',dataIndex: 'imagePath4'},
{title:'图5',dataIndex: 'imagePath5'},
{title:'内容',dataIndex: 'content'},
{title:'验收',dataIndex: 'approval'},
{title:'取消',dataIndex: 'canceling'},
{title:'完成',dataIndex: 'completion'},
{title:'躲藏',dataIndex: 'hiding'},
{title:'当前用户已点赞',dataIndex: 'likeByCurrentUser'},
{title:'当前用户已回复',dataIndex: 'repliedByCurrentUser'},
{title:'由当前用户注册',dataIndex: 'registeredByCurrentUser'},
{title:'当前状态',dataIndex: 'currentStatus'},

      
    ];

class ThreadTable extends PureComponent {
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

export default ThreadTable;

