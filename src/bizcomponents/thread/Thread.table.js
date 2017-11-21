
import React, { PureComponent } from 'react';
import moment from 'moment';
import { Table, Alert, Badge } from 'antd';
import styles from './Thread.table.less';



const columns = [
{title:'Id',dataIndex: 'id'},
{title:'Title',dataIndex: 'title'},
{title:'Display Order',dataIndex: 'displayOrder'},
{title:'Create Time',dataIndex: 'createTime'},
{title:'Event Time',dataIndex: 'eventTime'},
{title:'Registration Stop Time',dataIndex: 'registrationStopTime'},
{title:'Event Location',dataIndex: 'eventLocation'},
{title:'City',dataIndex: 'city'},
{title:'Community Group',dataIndex: 'communityGroup'},
{title:'Thread Type',dataIndex: 'threadType'},
{title:'Community',dataIndex: 'community'},
{title:'Creator',dataIndex: 'creator'},
{title:'Home Page',dataIndex: 'homePage'},
{title:'Group Page',dataIndex: 'groupPage'},
{title:'Video Url',dataIndex: 'videoUrl'},
{title:'Cover Image Path1',dataIndex: 'coverImagePath1'},
{title:'Cover Image Path2',dataIndex: 'coverImagePath2'},
{title:'Cover Image Path3',dataIndex: 'coverImagePath3'},
{title:'Image Path1',dataIndex: 'imagePath1'},
{title:'Image Path2',dataIndex: 'imagePath2'},
{title:'Image Path3',dataIndex: 'imagePath3'},
{title:'Image Path4',dataIndex: 'imagePath4'},
{title:'Image Path5',dataIndex: 'imagePath5'},
{title:'Content',dataIndex: 'content'},
{title:'Approval',dataIndex: 'approval'},
{title:'Canceling',dataIndex: 'canceling'},
{title:'Completion',dataIndex: 'completion'},
{title:'Hiding',dataIndex: 'hiding'},
{title:'Like By Current User',dataIndex: 'likeByCurrentUser'},
{title:'Replied By Current User',dataIndex: 'repliedByCurrentUser'},
{title:'Registered By Current User',dataIndex: 'registeredByCurrentUser'},
{title:'Current Status',dataIndex: 'currentStatus'},

      
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

