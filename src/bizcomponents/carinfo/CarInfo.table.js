
import React, { PureComponent } from 'react';
import moment from 'moment';
import { Table, Alert, Badge } from 'antd';
import styles from './CarInfo.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
{title:'序号',debugtype:'string',dataIndex: 'id',width:'20'},
{title:'车牌号',debugtype:'string',dataIndex: 'carLicensePlateNumber',width:'11'},
{title:'汽车类型',debugtype:'string',dataIndex: 'carType',width:'7'},
{title:'汽车座椅的数量',debugtype:'int',dataIndex: 'carSeatsQuantity',width:'5'},
{title:'汽车登记日期',dataIndex: 'carRegistrationDate',render: (text,record)=>moment(record.carRegistrationDate).format('YYYY-MM-DD')},
{title:'汽车年检有效期至',dataIndex: 'carInspectionValidationDate',render: (text,record)=>moment(record.carInspectionValidationDate).format('YYYY-MM-DD')},
{title:'汽车发动机号码',debugtype:'int',dataIndex: 'carEngineNumber',width:'8'},
{title:'车架号',debugtype:'string',dataIndex: 'vehicleIdentificationNumber',width:'21'},
{title:'汽车保险有效期至',dataIndex: 'carInsuranceValidationDate',render: (text,record)=>moment(record.carInsuranceValidationDate).format('YYYY-MM-DD')},
{title:'平台',dataIndex: 'platform',render: (text,record)=>(record.platform?record.platform.id:"暂无")},
{title:'车主',dataIndex: 'owner',render: (text,record)=>(record.owner?record.owner.id:"暂无")},

      
    ];

class CarInfoTable extends PureComponent {
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
          scroll={{x:1245}}
        />
      </div>
    );
  }
}

export default CarInfoTable;

