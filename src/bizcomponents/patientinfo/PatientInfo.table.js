
import React, { PureComponent } from 'react';
import moment from 'moment';
import { Table, Alert, Badge } from 'antd';
import styles from './PatientInfo.table.less';



const columns = [
{title:'序号',dataIndex: 'id',width:'20'},
{title:'名称',dataIndex: 'name',width:'6'},
{title:'昵称',dataIndex: 'nickName',width:'6'},
{title:'性别',dataIndex: 'gender',width:'5'},
{title:'生日',dataIndex: 'birthday',width:'14'},
{title:'佩戴设备类型',dataIndex: 'wearDeviceType',width:'8'},
{title:'磨损的开始时间',dataIndex: 'wearStartTime',width:'14'},
{title:'康复计划',dataIndex: 'recoverPlan',width:'15'},
{title:'复苏开始时间',dataIndex: 'recoverStartTime',width:'14'},
{title:'用户',dataIndex: 'user',width:'13'},

      
    ];

class PatientInfoTable extends PureComponent {
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

export default PatientInfoTable;

