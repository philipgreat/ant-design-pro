
import React, { PureComponent } from 'react';
import moment from 'moment';
import { Table, Alert, Badge } from 'antd';
import styles from './CarInspectionOrder.table.less';



const columns = [
{title:'序号',debugtype:'string',dataIndex: 'id',width:'20'},
{title:'车牌号',debugtype:'string',dataIndex: 'carLicensePlateNumber',width:'11'},
{title:'汽车发动机号码',debugtype:'int',dataIndex: 'carEngineNumber',width:'8'},
{title:'车架号',debugtype:'string',dataIndex: 'vehicleIdentificationNumber',width:'18'},
{title:'平台',debugtype:'car_inspection_platform',dataIndex: 'platform',width:'13'},
{title:'车主',debugtype:'customer_info',dataIndex: 'owner',width:'13'},
{title:'接车商户',debugtype:'car_receiving_service_company',dataIndex: 'receivingServiceCompany',width:'13'},
{title:'汽车代检服务公司',debugtype:'car_inspection_service_company',dataIndex: 'inspectionServiceCompany',width:'13'},
{title:'汽车维修服务公司',debugtype:'car_repairing_service_company',dataIndex: 'repairingServiceCompany',width:'13'},

      
    ];

class CarInspectionOrderTable extends PureComponent {
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
          scroll={{x:1095}}
        />
      </div>
    );
  }
}

export default CarInspectionOrderTable;

