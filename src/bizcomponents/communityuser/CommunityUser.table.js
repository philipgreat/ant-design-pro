
import React, { PureComponent } from 'react';
import moment from 'moment';
import { Table, Alert, Badge } from 'antd';
import styles from './CommunityUser.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '手机', debugtype: 'string_china_mobile_phone', dataIndex: 'mobile', width: '15' },
  { title: '昵称', debugtype: 'string', dataIndex: 'nickName', width: '6' },
  { title: '性别', debugtype: 'string_gender', dataIndex: 'gender', width: '5' },
  { title: '用户类型', debugtype: 'string', dataIndex: 'userType', width: '8' },
  { title: '头像', dataIndex: 'avatar', render: (text, record) => <ImagePreview imageTitle={"头像"} imageLocation={record.avatar}/> },
  { title: '生日', dataIndex: 'birthday', render: (text, record) => moment(record.birthday).format('YYYY-MM-DD') },
  { title: '成长值', debugtype: 'int', dataIndex: 'experiencePoint', width: '9' },
  { title: '积分', debugtype: 'int', dataIndex: 'bonusPoint', width: '11' },
  { title: '城市', debugtype: 'string', dataIndex: 'city', width: '7' },
  { title: '状态', debugtype: 'string', dataIndex: 'status', width: '12' },
  { title: '隐藏的信息', dataIndex: 'hideInfo', render: (text, record)=>(record.hideInfo ? '是' : '否') },
  { title: '管理员', dataIndex: 'administrator', render: (text, record)=>(record.administrator ? '是' : '否') },
  { title: '社区', dataIndex: 'community', render: (text, record) => (record.community ? record.community.id : '暂无') },

];

class CommunityUserTable extends PureComponent {
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
          scroll={{ x: 1155 }}
        />
      </div>
    );
  }
}

export default CommunityUserTable;

