
import React, { PureComponent } from 'react';
import moment from 'moment';
import { Table, Alert, Badge } from 'antd';
import styles from './CommunityUser.table.less';



const columns = [
{title:'序号',dataIndex: 'id'},
{title:'手机',dataIndex: 'mobile'},
{title:'昵称',dataIndex: 'nickName'},
{title:'性别',dataIndex: 'gender'},
{title:'用户类型',dataIndex: 'userType'},
{title:'头像',dataIndex: 'avatar'},
{title:'生日',dataIndex: 'birthday'},
{title:'成长值',dataIndex: 'experiencePoint'},
{title:'积分',dataIndex: 'bonusPoint'},
{title:'城市',dataIndex: 'city'},
{title:'状态',dataIndex: 'status'},
{title:'隐藏的信息',dataIndex: 'hideInfo'},
{title:'管理员',dataIndex: 'administrator'},
{title:'社区',dataIndex: 'community'},

      
    ];

class CommunityUserTable extends PureComponent {
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

export default CommunityUserTable;

