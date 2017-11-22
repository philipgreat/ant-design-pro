
import React, { PureComponent } from 'react';
import moment from 'moment';
import { Table, Alert, Badge } from 'antd';
import styles from './ThreadReply.table.less';



const columns = [
{title:'序号',dataIndex: 'id',width:'20'},
{title:'回复时间',dataIndex: 'replyTime',width:'9'},
{title:'内容',dataIndex: 'content',width:'22'},
{title:'应答者',dataIndex: 'replier',width:'13'},
{title:'主贴',dataIndex: 'thread',width:'13'},
{title:'当前用户已点赞',dataIndex: 'likeByCurrentUser',width:'9'},

      
    ];

class ThreadReplyTable extends PureComponent {
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
          scroll={{x:800}}
        />
      </div>
    );
  }
}

export default ThreadReplyTable;

