import React, { PureComponent } from 'react';
import { Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover } from 'antd';
import { connect } from 'dva';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';

import FooterToolbar from '../../components/FooterToolbar';

import styles from './LoginHistory.createform.less';

const { Option } = Select;
const { RangePicker } = DatePicker;

const fieldLabels = {
id: '序号',
loginTime: '登录时间',
fromIp: '从IP',
description: '描述',
secUser: 'SEC的用户',


};



class LoginHistoryCreateForm extends PureComponent {
  render() {
    const { form, dispatch, submitting } = this.props;
    const { getFieldDecorator, validateFieldsAndScroll, getFieldsError } = form;
    const validate = () => {
      validateFieldsAndScroll((error, values) => {
        if (!error) {
          // submit the values
          dispatch({
            type: 'formtest/submitStepFormAdvancedForm',
            payload: values,
          });
        }
      });
    };
    
    const goback = () => {
      const {owner} = this.props;
      dispatch({
         type: owner.type+'/goback',
         payload: {id:owner.id,type:'loginHistory'},
      }); 
    };
    const errors = getFieldsError();
    const getErrorInfo = () => {
      const errorCount = Object.keys(errors).filter(key => errors[key]).length;
      if (!errors || errorCount === 0) {
        return null;
      }
      const scrollToField = (fieldKey) => {
        const labelNode = document.querySelector(`label[for=""]`);
        if (labelNode) {
          labelNode.scrollIntoView(true);
        }
      };
      const errorList = Object.keys(errors).map((key) => {
        if (!errors[key]) {
          return null;
        }
        return (
          <li key={key} className={styles.errorListItem} onClick={() => scrollToField(key)}>
            <Icon type="cross-circle-o" className={styles.errorIcon} />
            <div className={styles.errorMessage}>{errors[key][0]}</div>
            <div className={styles.errorField}>{fieldLabels[key]}</div>
          </li>
        );
      });
      return (
        <span className={styles.errorIcon}>
          <Popover
            title="表单校验信息"
            content={errorList}
            overlayClassName={styles.errorPopover}
            trigger="click"
            getPopupContainer={trigger => trigger.parentNode}
          >
            <Icon type="exclamation-circle" />
          </Popover>
          {errorCount}
        </span>
      );
    };
    return (
      <PageHeaderLayout
        title="新建一个登录历史"
        content="新建一个登录历史"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
            
            
             <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.fromIp}>
                  {getFieldDecorator('fromIp', {
                    rules: [{ required: true, message: '请输入从IP' }],
                  })(
                    <Input placeholder="请输入请输入从IPstring" />
                  )}
                </Form.Item>
              </Col>			
			
			
             <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.description}>
                  {getFieldDecorator('description', {
                    rules: [{ required: true, message: '请输入描述' }],
                  })(
                    <Input placeholder="请输入请输入描述string" />
                  )}
                </Form.Item>
              </Col>			
			
			
            
          </Row>    
          </Form>  
        </Card>
        
        
        
         
        
        
        
                 
        
        <Card title="关联" className={styles.card} bordered={false}>
           <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
            
            
             <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.secUser}>
                  {getFieldDecorator('secUser', {
                    rules: [{ required: true, message: '请输入SEC的用户' }],
                  })(
                    <Input placeholder="请输入请输入SEC的用户sec_user" />
                  )}
                </Form.Item>
              </Col>			
			
			
            
          </Row>    
          </Form>  
         
        </Card>
       
        
        
        
        
        <FooterToolbar>
          {getErrorInfo()}
          <Button type="primary" onClick={validate} loading={submitting}>
            提交
          </Button>
          <Button type="danger" onClick={goback} loading={submitting}>
            放弃
          </Button>
        </FooterToolbar>
      </PageHeaderLayout>
    );
  }
}

export default connect(state => ({
  collapsed: state.global.collapsed,
  submitting: state.formtest.advancedFormSubmitting,
}))(Form.create()(LoginHistoryCreateForm));




