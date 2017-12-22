

import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Row, Col, Card, Form, Input, Select, Icon, Button, Dropdown, Menu, InputNumber, DatePicker, Modal, message } from 'antd';

import styles from './MessageFilter.search.less';

const FormItem = Form.Item;
const { Option } = Select;
const getValue = obj => Object.keys(obj).map(key => obj[key]).join(',');

@Form.create()
export default class MessageFilterSearchForm extends PureComponent {
    state = {
        addInputValue: '',
        modalVisible: false,
        expandForm: false,
        selectedRows: [],
        formValues: {},
      };
    toggleForm = () => {
        this.setState({
          expandForm: !this.state.expandForm,
        });
      }
    componentDidMount() {
        
        const { dispatch } = this.props;
        //console.log(this.props);
        const { getFieldDecorator,setFieldsValue } = this.props.form;
        const {searchFormParameters} = this.props;       
        if(!searchFormParameters){
            return;
        }
        //console.log("searchFormParameters", searchFormParameters);        
        setFieldsValue(searchFormParameters);
        
        
    }
    handleFormReset = () => {
        const { form, dispatch } = this.props;
        form.resetFields();
        dispatch({
          type: 'rule/fetch',
          payload: {},
        });
      }
    buildStringSearchParameters=(formValues,fieldName)=>{
        const fieldValue = formValues[fieldName]
        if(!fieldValue){
            console.log("NO VALUE")
            return {};
        }
        return {messageFilterList:1,
            "messageFilterList.searchField":fieldName,
            "messageFilterList.searchVerb":"startsWith",
            "messageFilterList.searchValue":fieldValue}
    
       }
   handleSearch = (e) => {
        e.preventDefault();
    
        const { dispatch, form } = this.props;
    
        form.validateFields((err, fieldsValue) => {
          if (err) return;

          
          const params = {
          			...this.buildStringSearchParameters(fieldsValue,"id"),
			...this.buildStringSearchParameters(fieldsValue,"name"),
			...this.buildStringSearchParameters(fieldsValue,"filterKey"),
			...this.buildStringSearchParameters(fieldsValue,"linkUrl"),

               
              };

          
         
          
          const {owner} = this.props;
          
          

          dispatch({
             type: owner.type+'/load',
             payload: {id:owner.id, parameters:params, messageFilterSearchFormParameters:fieldsValue},
          });
          
        });
      }
      
    renderSimpleForm() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSearch} layout="inline">
                <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
                
                
                
                    <Col md={8} sm={24}>
                        <FormItem label="序号">
                            {getFieldDecorator('id')(
                                <Input placeholder="请输入序号" />
                            )}
                        </FormItem>
                    </Col>
                   
                    
                    
                    <Col md={8} sm={24}>
                        <FormItem label="名称">
                            {getFieldDecorator('name')(
                                <Input placeholder="请输入名称" />
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
                        <FormItem label="序号">
                            {getFieldDecorator('id')(
                                <Input placeholder="请输入序号" />
                            )}
                        </FormItem>
                    </Col>
                    
                    
                    
                    <Col md={8} sm={24}>
                        <FormItem label="名称">
                            {getFieldDecorator('name')(
                                <Input placeholder="请输入名称" />
                            )}
                        </FormItem>
                    </Col>
                    
                    
                    
                    <Col md={8} sm={24}>
                        <FormItem label="过滤器健值">
                            {getFieldDecorator('filterKey')(
                                <Input placeholder="请输入过滤器健值" />
                            )}
                        </FormItem>
                    </Col>
                    
                    
                    
                    <Col md={8} sm={24}>
                        <FormItem label="链接网址">
                            {getFieldDecorator('linkUrl')(
                                <Input placeholder="请输入链接网址" />
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



