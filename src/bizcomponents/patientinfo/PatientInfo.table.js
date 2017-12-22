
import React, { PureComponent } from 'react';
import moment from 'moment';
import { Table, Alert, Badge } from 'antd';
import styles from './PatientInfo.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
{title:'序号',debugtype:'string',dataIndex: 'id',width:'20'},
{title:'名称',debugtype:'string',dataIndex: 'name',width:'6'},
{title:'昵称',debugtype:'string',dataIndex: 'nickName',width:'6'},
{title:'性别',debugtype:'string_gender',dataIndex: 'gender',width:'5'},
{title:'生日',dataIndex: 'birthday',render: (text,record)=>moment(record.birthday).format('YYYY-MM-DD')},
{title:'佩戴设备类型',debugtype:'string',dataIndex: 'wearDeviceType',width:'8'},
{title:'磨损的开始时间',dataIndex: 'wearStartTime',render: (text,record)=>moment(record.wearStartTime).format('YYYY-MM-DD')},
{title:'康复计划',debugtype:'string',dataIndex: 'recoverPlan',width:'15'},
{title:'复苏开始时间',dataIndex: 'recoverStartTime',render: (text,record)=>moment(record.recoverStartTime).format('YYYY-MM-DD')},
{title:'用户',dataIndex: 'user',render: (text,record)=>(record.user?record.user.id:"暂无")},

      
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
          scroll={{x:800}}
        />
      </div>
    );
  }
}

export default PatientInfoTable;

