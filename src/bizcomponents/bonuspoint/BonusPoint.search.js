
import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Row, Col, Card, Form, Input, Select, Icon, Button, Dropdown, Menu, InputNumber, DatePicker, Modal, message } from 'antd';
import BonusPointTable from './BonusPoint.table';
import BonusPointConfirmationTable from './BonusPoint.confirmmationtable';

import BonusPointSearchForm from './BonusPoint.searchform';

import PageHeaderLayout from '../../layouts/PageHeaderLayout';

import styles from './BonusPoint.search.less';

const FormItem = Form.Item;
const { Option } = Select;
const getValue = obj => Object.keys(obj).map(key => obj[key]).join(',');


@Form.create()
export default class BonusPointSearch extends PureComponent {
 state = {
    addInputValue: '',
    modalVisible: false,
    expandForm: false,
    selectedRows: [],
    formValues: {},
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
      bonusPointList:1,
      bonusPointListCurrentPage: pagination.current,
      bonusPointListRowsPerPage: pagination.pageSize,
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
  
  
  handleCreate = () => {
 
   	const {dispatch,owner} = this.props;
	dispatch({
       type: owner.type+'/gotoCreateForm',
       payload: {id:owner.id,type:'bonusPoint'},
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
    const { selectedRows, modalVisible, addInputValue } = this.state;

    const menu = (
      <Menu onClick={this.handleMenuClick} selectedKeys={[]}>
        <Menu.Item key="remove">删除</Menu.Item>
        <Menu.Item key="approval">批量审批</Menu.Item>
      </Menu>
    );

    return (
      <PageHeaderLayout title="积分列表">
        <Card bordered={false}>
          <div className={styles.tableList}>
            <div className={styles.tableListForm}>
              <BonusPointSearchForm {...this.props}/>
            </div>
            <div className={styles.tableListOperator}>
              <Button icon="plus" type="primary" onClick={() => this.handleCreate()}>新建</Button>
              {
                selectedRows.length > 0 && (
                  <span>
                     <Button onClick={this.handleModalVisible} >批量删除</Button>
                    <Dropdown overlay={menu}>
                      <Button>
                        更多操作 <Icon type="down" />
                      </Button>
                    </Dropdown>
                  </span>
                )
              }
            </div>
            <BonusPointTable
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
         
        <BonusPointConfirmationTable
         
          data={selectedRows}
          owner={owner}
        />

        </Modal>
        
        
      </PageHeaderLayout>
    );
  }
}


