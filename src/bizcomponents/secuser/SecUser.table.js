
import React, { PureComponent } from 'react';
import moment from 'moment';
import { Table, Alert, Badge } from 'antd';
import styles from './SecUser.table.less';



const columns = [
{title:'序号',dataIndex: 'id',width:'20'},
{title:'登录',dataIndex: 'login',width:'9'},
{title:'手机',dataIndex: 'mobile',width:'15'},
{title:'电子邮件',dataIndex: 'email',width:'23'},
{title:'PWD',dataIndex: 'pwd',width:'11'},
{title:'验证码',dataIndex: 'verificationCode',width:'11'},
{title:'验证码过期',dataIndex: 'verificationCodeExpire',width:'23'},
{title:'最后登录时间',dataIndex: 'lastLoginTime',width:'23'},
{title:'域',dataIndex: 'domain',width:'13'},
{title:'屏蔽',dataIndex: 'blocking',width:'13'},
{title:'当前状态',dataIndex: 'currentStatus',width:'11'},

      
    ];

class SecUserTable extends PureComponent {
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
          scroll={{x:1755}}
        />
      </div>
    );
  }
}

export default SecUserTable;

