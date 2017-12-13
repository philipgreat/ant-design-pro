
import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Row, Col, Card, Form, Input, Select, Icon, Button, Dropdown, Menu, InputNumber, DatePicker, Modal, message } from 'antd';
import Result from '../../components/Result';

import InvitationCodeTable from './InvitationCode.table';
import InvitationCodeConfirmationTable from './InvitationCode.confirmmationtable';

import InvitationCodeSearchForm from './InvitationCode.searchform';

import PageHeaderLayout from '../../layouts/PageHeaderLayout';

import styles from './InvitationCode.search.less';

const FormItem = Form.Item;
const { Option } = Select;
const getValue = obj => Object.keys(obj).map(key => obj[key]).join(',');


@Form.create()
export default class InvitationCodeSearch extends PureComponent {
 state = {
    addInputValue: '',
    modalVisible: false,
    expandForm: false,
    selectedRows: [],
    formValues: {},
    showDeleteResult: false
  };

  componentDidMount() {
    const { dispatch } = this.props;
   
  }

  handleStandardTableChange = (pagination, filtersArg, sorter) => {
    const { dispatch } = this.props;
    const { formValues } = this.state;

    const filters = Object.keys(filtersArg).reduce((obj, key) => {
      const newObj = { ...obj };
      newObj[key] = getValue(filtersArg[key]);
      return newObj;
    }, {});

    const params = {
      invitationCodeList:1,
      invitationCodeListCurrentPage: pagination.current,
      invitationCodeListRowsPerPage: pagination.pageSize,
      ...formValues,
      ...filters,
    };
    if (sorter.field) {
      params.sorter = `_`;
    }
	
	const {owner} = this.props;
	dispatch({
       type: owner.type+'/load',
       payload: {id:owner.id, parameters:params},
    });
  }
  




  handleMenuClick = (e) => {
    const { dispatch } = this.props;
    const { selectedRows } = this.state;

    if (!selectedRows) return;

    switch (e.key) {
      case 'remove':
        dispatch({
          type: 'rule/remove',
          payload: {
            no: selectedRows.map(row => row.no).join(','),
          },
          callback: () => {
            this.setState({
              selectedRows: [],
            });
          },
        });
        break;
      default:
        break;
    }
  }

  handleSelectRows = (rows) => {
    this.setState({
      selectedRows: rows,
    });




  }

  

  handleModalVisible = (flag) => {
    this.setState({
      modalVisible: !!flag,
    });
  }
  handleDelete = () => {
    const { selectedRows } = this.state;
    const {dispatch,owner} = this.props;
    console.log("things to delete", selectedRows)
    this.setState({
      modalVisible: true,
      showDeleteResult: true
    });
    
  }
  
  
  handleCreate = () => {
 
   	const {dispatch,owner} = this.props;
	dispatch({
       type: owner.type+'/gotoCreateForm',
       payload: {id:owner.id,type:'invitationCode'},
    });
  }

  handleAddInput = (e) => {
    this.setState({
      addInputValue: e.target.value,
    });
  }

  handleAdd = () => {
    this.props.dispatch({
      type: 'rule/add',
      payload: {
        description: this.state.addInputValue,
      },
    });

    message.success('添加成功');
    this.setState({
      modalVisible: false,
    });
  }

  


  render() {
    const { data,loading,count,currentPage,owner } = this.props;
    const { showDeleteResult, selectedRows, modalVisible, addInputValue } = this.state;

    const menu = (
      <Menu onClick={this.handleMenuClick} selectedKeys={[]}>
        <Menu.Item key="remove">删除</Menu.Item>
        <Menu.Item key="approval">批量审批</Menu.Item>
      </Menu>
    );


    const modalContent =(data, owner)=>{

      if(showDeleteResult){
        return (<Result
        type="success"
        title="提交成功"
        description="提交结果页用于反馈一系列操作任务的处理结果，
        如果仅是简单操作，使用 Message 全局提示反馈即可。
        本文字区域可以展示简单的补充说明，如果有类似展示
        “单据”的需求，下面这个灰色区域可以呈现比较复杂的内容。"
       
        style={{ marginTop: 48, marginBottom: 16 }} />)
      }

      return (<InvitationCodeConfirmationTable
        
         data={selectedRows}
         owner={owner}
       />);


    }
    return (
      <PageHeaderLayout title="邀请码列表">
        <Card bordered={false}>
          <div className={styles.tableList}>
            <div className={styles.tableListForm}>
              <InvitationCodeSearchForm {...this.props}/>
            </div>
            <div className={styles.tableListOperator}>
              <Button icon="plus" type="primary" onClick={() => this.handleCreate()}>新建</Button>
              {
                selectedRows.length > 0 && (
                  <span>
                     <Button onClick={this.handleModalVisible} type="danger" icon="delete">批量删除</Button>
                    <Dropdown overlay={menu}>
                      <Button>
                        更多操作 <Icon type="down" />
                      </Button>
                    </Dropdown>
                  </span>
                )
              }
            </div>
            <InvitationCodeTable
              selectedRows={selectedRows}
              loading={loading}
              data={data}
              count={count}
              current={currentPage}
              onSelectRow={this.handleSelectRows}
              onChange={this.handleStandardTableChange}
              owner={owner}
            />
          </div>
        </Card>
        <Modal
          title={"注意！你正在删除数据，执行之后不可恢复"}
          visible={modalVisible}
          onOk={this.handleDelete}
          onCancel={() => this.handleModalVisible()}
          width={920}
          style={{ top: 40 }}

        >
   
      
          {modalContent(data,owner)}
        </Modal>
        
        
      </PageHeaderLayout>
    );
  }
}


