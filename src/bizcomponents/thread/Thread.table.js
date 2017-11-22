
import React, { PureComponent } from 'react';
import moment from 'moment';
import { Table, Alert, Badge } from 'antd';
import styles from './Thread.table.less';



const columns = [
{title:'序号',debugtype:'string',dataIndex: 'id',width:'20'},
{title:'标题',debugtype:'string',dataIndex: 'title',width:'15'},
{title:'显示顺序',debugtype:'int',dataIndex: 'displayOrder',width:'10'},
{title:'创建时间',dataIndex: 'createTime',render: (text,record)=>moment(record).format('YYYY-MM-DD HH:mm')},
{title:'事件时间',dataIndex: 'eventTime',render: (text,record)=>moment(record).format('YYYY-MM-DD HH:mm')},
{title:'注册时间停止',dataIndex: 'registrationStopTime',render: (text,record)=>moment(record).format('YYYY-MM-DD HH:mm')},
{title:'事件的位置',debugtype:'string',dataIndex: 'eventLocation',width:'13'},
{title:'城市',debugtype:'string',dataIndex: 'city',width:'6'},
{title:'社区组',debugtype:'string',dataIndex: 'communityGroup',width:'8'},
{title:'帖子类型',debugtype:'string',dataIndex: 'threadType',width:'9'},
{title:'社区',debugtype:'community',dataIndex: 'community',width:'13'},
{title:'创建者',debugtype:'community_user',dataIndex: 'creator',width:'13'},
{title:'主页',debugtype:'home_page',dataIndex: 'homePage',width:'13'},
{title:'群组页面',debugtype:'group_page',dataIndex: 'groupPage',width:'13'},
{title:'视频网址',debugtype:'string_url',dataIndex: 'videoUrl',width:'50'},
{title:'封面图像路径1',debugtype:'string_image',dataIndex: 'coverImagePath1',width:'13'},
{title:'封面图像路径2',debugtype:'string_image',dataIndex: 'coverImagePath2',width:'13'},
{title:'封面图像路径3',debugtype:'string_image',dataIndex: 'coverImagePath3',width:'13'},
{title:'图1',debugtype:'string_image',dataIndex: 'imagePath1',width:'13'},
{title:'图2',debugtype:'string_image',dataIndex: 'imagePath2',width:'13'},
{title:'图3',debugtype:'string_image',dataIndex: 'imagePath3',width:'13'},
{title:'图4',debugtype:'string_image',dataIndex: 'imagePath4',width:'13'},
{title:'图5',debugtype:'string_image',dataIndex: 'imagePath5',width:'13'},
{title:'内容',debugtype:'string',dataIndex: 'content',width:'107'},
{title:'验收',debugtype:'thread_approval',dataIndex: 'approval',width:'13'},
{title:'取消',debugtype:'thread_canceling',dataIndex: 'canceling',width:'13'},
{title:'完成',debugtype:'thread_completion',dataIndex: 'completion',width:'13'},
{title:'躲藏',debugtype:'thread_hiding',dataIndex: 'hiding',width:'13'},
{title:'当前用户已点赞',debugtype:'bool',dataIndex: 'likeByCurrentUser',width:'9'},
{title:'当前用户已回复',debugtype:'bool',dataIndex: 'repliedByCurrentUser',width:'9'},
{title:'由当前用户注册',debugtype:'bool',dataIndex: 'registeredByCurrentUser',width:'9'},
{title:'当前状态',debugtype:'string',dataIndex: 'currentStatus',width:'13'},

      
    ];

class ThreadTable extends PureComponent {
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
    const { data,count,current } = this.props;

   
    

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
          scroll={{x:5940}}
        />
      </div>
    );
  }
}

export default ThreadTable;

