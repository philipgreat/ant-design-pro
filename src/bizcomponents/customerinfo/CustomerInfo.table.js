
import React, { PureComponent } from 'react';
import moment from 'moment';
import { Table, Alert, Badge } from 'antd';
import styles from './CustomerInfo.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
{title:'序号',debugtype:'string',dataIndex: 'id',width:'20'},
{title:'平台',dataIndex: 'platform',render: (text,record)=>(record.platform?record.platform.id:"暂无")},
{title:'客户名称',debugtype:'string',dataIndex: 'customerName',width:'7'},
{title:'客户的电话号码',debugtype:'string',dataIndex: 'customerPhoneNumber',width:'15'},
{title:'客户身份证号',debugtype:'string',dataIndex: 'customerIdentifyCardNumber',width:'22'},
{title:'客户身份证正面照片',dataIndex: 'customerIdentifyCardFrontImage',render: (text,record)=><ImagePreview imageTitle={"客户身份证正面照片"} imageLocation={record.customerIdentifyCardFrontImage}/>},
{title:'客户身份证背面照片',dataIndex: 'customerIdentifyCardBackImage',render: (text,record)=><ImagePreview imageTitle={"客户身份证背面照片"} imageLocation={record.customerIdentifyCardBackImage}/>},

      
    ];

class CustomerInfoTable extends PureComponent {
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

export default CustomerInfoTable;

