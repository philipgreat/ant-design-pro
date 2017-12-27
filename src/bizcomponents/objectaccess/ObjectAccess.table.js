
import React, { PureComponent } from 'react';
import moment from 'moment';
import { Table, Alert, Badge } from 'antd';
import styles from './ObjectAccess.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '显示名称', debugtype: 'string', dataIndex: 'displayName', width: '11' },
  { title: '对象类型', debugtype: 'string', dataIndex: 'objectType', width: '32' },
  { title: '列表1', debugtype: 'string', dataIndex: 'list1', width: '24' },
  { title: '列表2', debugtype: 'string', dataIndex: 'list2', width: '24' },
  { title: '列表3', debugtype: 'string', dataIndex: 'list3', width: '24' },
  { title: '列表4', debugtype: 'string', dataIndex: 'list4', width: '24' },
  { title: '列表5', debugtype: 'string', dataIndex: 'list5', width: '24' },
  { title: '列表6', debugtype: 'string', dataIndex: 'list6', width: '24' },
  { title: '列表7', debugtype: 'string', dataIndex: 'list7', width: '24' },
  { title: '列表8', debugtype: 'string', dataIndex: 'list8', width: '24' },
  { title: '列表9', debugtype: 'string', dataIndex: 'list9', width: '24' },
  { title: '应用程序', dataIndex: 'app', render: (text, record) => (record.app ? record.app.id : '暂无') },

];

class ObjectAccessTable extends PureComponent {
  state = {
    selectedRowKeys: [],
  };

  componentWillReceiveProps(nextProps) {
    // clean state
    if (nextProps.selectedRows.length === 0) {
      this.setState({
        selectedRowKeys: [],
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
    // const { data, count, current, owner } = this.props;
    const { data, count, current } = this.props;

    const paginationProps = {
      showSizeChanger: true,
      showQuickJumper: true,
      pageSize: 20,
      total: count,
      current,
      
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
          scroll={{ x: 3405 }}
        />
      </div>
    );
  }
}

export default ObjectAccessTable;

