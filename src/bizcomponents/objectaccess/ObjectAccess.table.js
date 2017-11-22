
import React, { PureComponent } from 'react';
import moment from 'moment';
import { Table, Alert, Badge } from 'antd';
import styles from './ObjectAccess.table.less';



const columns = [
{title:'序号',dataIndex: 'id',width:'20'},
{title:'显示名称',dataIndex: 'displayName',width:'11'},
{title:'对象类型',dataIndex: 'objectType',width:'32'},
{title:'列表1',dataIndex: 'list1',width:'24'},
{title:'列表2',dataIndex: 'list2',width:'24'},
{title:'列表3',dataIndex: 'list3',width:'24'},
{title:'列表4',dataIndex: 'list4',width:'24'},
{title:'列表5',dataIndex: 'list5',width:'24'},
{title:'列表6',dataIndex: 'list6',width:'24'},
{title:'列表7',dataIndex: 'list7',width:'24'},
{title:'列表8',dataIndex: 'list8',width:'24'},
{title:'列表9',dataIndex: 'list9',width:'24'},
{title:'应用程序',dataIndex: 'app',width:'13'},

      
    ];

class ObjectAccessTable extends PureComponent {
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
          scroll={{x:3405}}
        />
      </div>
    );
  }
}

export default ObjectAccessTable;

