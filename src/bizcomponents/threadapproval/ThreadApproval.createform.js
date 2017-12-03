import React, { PureComponent } from 'react';
import { Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover } from 'antd';
import { connect } from 'dva';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';

import FooterToolbar from '../../components/FooterToolbar';

import styles from './ThreadApproval.createform.less';

const { Option } = Select;
const { RangePicker } = DatePicker;

const fieldLabels = {
id: '序号',
who: '谁',
actionTime: '行动时间',
comment: '评论',


};



class ThreadApprovalCreateForm extends PureComponent {
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
        title="新建一个线审批"
        content="新建一个线审批"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
            
            
             <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.comment}>
                  {getFieldDecorator('comment', {
                    rules: [{ required: true, message: '请输入评论' }],
                  })(
                    <Input placeholder="请输入请输入评论string" />
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
        </FooterToolbar>
      </PageHeaderLayout>
    );
  }
}

export default connect(state => ({
  collapsed: state.global.collapsed,
  submitting: state.formtest.advancedFormSubmitting,
}))(Form.create()(ThreadApprovalCreateForm));



