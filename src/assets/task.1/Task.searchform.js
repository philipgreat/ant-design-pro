

import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Row, Col, Card, Form, Input, Select, Icon, Button, Dropdown, Menu, InputNumber, DatePicker, Modal, message } from 'antd';

import styles from './Task.search.less';

const FormItem = Form.Item;
const { Option } = Select;
const getValue = obj => Object.keys(obj).map(key => obj[key]).join(',');

@Form.create()
export default class TaskSearchForm extends PureComponent {
    state = {
        addInputValue: '',
        modalVisible: false,
        expandForm: false,
        selectedRows: [],
        formValues: {},
      };

    componentDidMount() {
        
        const { dispatch } = this.props;
        //console.log(this.props);
        const { getFieldDecorator,setFieldsValue } = this.props.form;
        const {taskSearchFormParameters} = this.props;       
        if(!taskSearchFormParameters){
            return;
        }
        //console.log("taskSearchFormParameters", taskSearchFormParameters);        
        setFieldsValue(taskSearchFormParameters);
        
        
    }


    
    toggleForm = () => {
        this.setState({
          expandForm: !this.state.expandForm,
        });
      }

    handleFormReset = () => {
        const { form, dispatch } = this.props;
        form.resetFields();
        dispatch({
          type: 'rule/fetch',
          payload: {},
        });
      }
    handleSearch = (e) => {
        e.preventDefault();
    
        const { dispatch, form } = this.props;
    
        form.validateFields((err, fieldsValue) => {
          if (err) return;
            /*options.put(key+".searchField", field);
		options.put(key+".searchVerb", verb);
        options.put(key+".searchValue", value);*/
        //
          var taskSearchByIdParameters = {};

          if(fieldsValue.id){
            taskSearchByIdParameters={taskList:1,
                "taskList.searchField":"id",
                "taskList.searchVerb":"startsWith",
                "taskList.searchValue":fieldsValue.id,};

          }
          var taskSearchByNameParameters = {};
          if(fieldsValue.title){
            taskSearchByNameParameters={taskList:1,
                "taskList.searchField":"title",
                "taskList.searchVerb":"startsWith",
                "taskList.searchValue":fieldsValue.title,};

          }

          const params = {
            ...taskSearchByIdParameters,
            ...taskSearchByNameParameters,
          };
          
         
          
          const {owner} = this.props;
          
          

          dispatch({
             type: owner.type+'/load',
             payload: {id:owner.id, parameters:params, searchFormParameters:fieldsValue},
          });
          
        });
      }
    renderSimpleForm() {
        const { getFieldDecorator} = this.props.form;
        
        return (
            <Form onSubmit={this.handleSearch} layout="inline">
                <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
                    <Col md={8} sm={24}>
                        <FormItem label="编号">
                            {getFieldDecorator('id')(
                                <Input placeholder="请输入编号" />
                            )}
                        </FormItem>
                    </Col>
                    <Col md={8} sm={24}>
                    <FormItem label="标题">
                        {getFieldDecorator('title')(
                            <Input placeholder="请输入标题" />
                        )}
                    </FormItem>
                </Col>
                    <Col md={8} sm={24}>
                        <span className={styles.submitButtons}>
                            <Button type="primary" htmlType="submit">查询</Button>
                            <Button style={{ marginLeft: 8 }} onClick={this.handleFormReset}>重置</Button>
                            <a style={{ marginLeft: 8 }} onClick={this.toggleForm}>
                                展开 <Icon type="down" />
                            </a>
                        </span>
                    </Col>
                </Row>
            </Form>
        );
    }

    renderAdvancedForm() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSearch} layout="inline">
                <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
                    <Col md={8} sm={24}>
                        <FormItem label="编号">
                            {getFieldDecorator('id')(
                                <Input placeholder="请输入" />
                            )}
                        </FormItem>
                    </Col>
                    <Col md={8} sm={24}>
                        <FormItem label="使用状态">
                            {getFieldDecorator('status')(
                                <Select placeholder="请选择" style={{ width: '100%' }}>
                                    <Option value="0">关闭</Option>
                                    <Option value="1">运行中</Option>
                                </Select>
                            )}
                        </FormItem>
                    </Col>
                    <Col md={8} sm={24}>
                        <FormItem label="调用次数">
                            {getFieldDecorator('number')(
                                <InputNumber style={{ width: '100%' }} />
                            )}
                        </FormItem>
                    </Col>
                </Row>
                <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
                    <Col md={8} sm={24}>
                        <FormItem label="更新日期">
                            {getFieldDecorator('date')(
                                <DatePicker style={{ width: '100%' }} placeholder="请输入更新日期" />
                            )}
                        </FormItem>
                    </Col>
                    <Col md={8} sm={24}>
                        <FormItem label="使用状态">
                            {getFieldDecorator('status3')(
                                <Select placeholder="请选择" style={{ width: '100%' }}>
                                    <Option value="0">关闭</Option>
                                    <Option value="1">运行中</Option>
                                </Select>
                            )}
                        </FormItem>
                    </Col>
                    <Col md={8} sm={24}>
                        <FormItem label="使用状态">
                            {getFieldDecorator('status4')(
                                <Select placeholder="请选择" style={{ width: '100%' }}>
                                    <Option value="0">关闭</Option>
                                    <Option value="1">运行中</Option>
                                </Select>
                            )}
                        </FormItem>
                    </Col>
                </Row>
                <div style={{ overflow: 'hidden' }}>
                    <span style={{ float: 'right', marginBottom: 24 }}>
                        <Button type="primary" htmlType="submit">查询</Button>
                        <Button style={{ marginLeft: 8 }} onClick={this.handleFormReset}>重置</Button>
                        <a style={{ marginLeft: 8 }} onClick={this.toggleForm}>
                            收起 <Icon type="up" />
                        </a>
                    </span>
                </div>
            </Form>
        );
    }

    render() {
        return this.state.expandForm ? this.renderAdvancedForm() : this.renderSimpleForm();
    }


}



