
import React, { PureComponent } from 'react';
import moment from 'moment';
import { Table, Alert, Badge } from 'antd';
import styles from './SecUser.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
{title:'序号',debugtype:'string',dataIndex: 'id',width:'20'},
{title:'登录',debugtype:'string',dataIndex: 'login',width:'9'},
{title:'手机',debugtype:'string_china_mobile_phone',dataIndex: 'mobile',width:'15'},
{title:'电子邮件',debugtype:'string_email',dataIndex: 'email',width:'23'},
{title:'PWD',debugtype:'string_password',dataIndex: 'pwd',width:'11'},
{title:'验证码',debugtype:'int',dataIndex: 'verificationCode',width:'11'},
{title:'验证码过期',dataIndex: 'verificationCodeExpire',render: (text,record)=>moment(record.verificationCodeExpire).format('YYYY-MM-DD')},
{title:'最后登录时间',dataIndex: 'lastLoginTime',render: (text,record)=>moment(record.lastLoginTime).format('YYYY-MM-DD')},
{title:'域',dataIndex: 'domain',render: (text,record)=>(record.domain?record.domain.id:"暂无")},
{title:'屏蔽',dataIndex: 'blocking',render: (text,record)=>(record.blocking?record.blocking.id:"暂无")},
{title:'当前状态',debugtype:'string',dataIndex: 'currentStatus',width:'11'},

      
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
    const { data,count,current, owner } = this.props;

   
    

    const paginationProps = {
      showSizeChanger: true,
      showQuickJumper: true,
      pageSize: 20,
      total: count,
      current: current
      
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
                一共 <a style={{ fontWeight: 600 }}>{count}</a> 项 
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

