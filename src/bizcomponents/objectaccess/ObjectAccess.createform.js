import React, { PureComponent } from 'react';
import { Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover } from 'antd';
import { connect } from 'dva';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';

import FooterToolbar from '../../components/FooterToolbar';

import styles from './ObjectAccess.createform.less';

const { Option } = Select;
const { RangePicker } = DatePicker;

const fieldLabels = {
id: '序号',
displayName: '显示名称',
objectType: '对象类型',
list1: '列表1',
list2: '列表2',
list3: '列表3',
list4: '列表4',
list5: '列表5',
list6: '列表6',
list7: '列表7',
list8: '列表8',
list9: '列表9',
app: '应用程序',


};



class ObjectAccessCreateForm extends PureComponent {
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
        title="新建一个对象访问"
        content="新建一个对象访问"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
            
            
             <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.displayName}>
                  {getFieldDecorator('displayName', {
                    rules: [{ required: true, message: '请输入显示名称' }],
                  })(
                    <Input placeholder="请输入请输入显示名称string" />
                  )}
                </Form.Item>
              </Col>			
			
			
             <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.objectType}>
                  {getFieldDecorator('objectType', {
                    rules: [{ required: true, message: '请输入对象类型' }],
                  })(
                    <Input placeholder="请输入请输入对象类型string" />
                  )}
                </Form.Item>
              </Col>			
			
			
             <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.list1}>
                  {getFieldDecorator('list1', {
                    rules: [{ required: true, message: '请输入列表1' }],
                  })(
                    <Input placeholder="请输入请输入列表1string" />
                  )}
                </Form.Item>
              </Col>			
			
			
             <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.list2}>
                  {getFieldDecorator('list2', {
                    rules: [{ required: true, message: '请输入列表2' }],
                  })(
                    <Input placeholder="请输入请输入列表2string" />
                  )}
                </Form.Item>
              </Col>			
			
			
             <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.list3}>
                  {getFieldDecorator('list3', {
                    rules: [{ required: true, message: '请输入列表3' }],
                  })(
                    <Input placeholder="请输入请输入列表3string" />
                  )}
                </Form.Item>
              </Col>			
			
			
             <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.list4}>
                  {getFieldDecorator('list4', {
                    rules: [{ required: true, message: '请输入列表4' }],
                  })(
                    <Input placeholder="请输入请输入列表4string" />
                  )}
                </Form.Item>
              </Col>			
			
			
             <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.list5}>
                  {getFieldDecorator('list5', {
                    rules: [{ required: true, message: '请输入列表5' }],
                  })(
                    <Input placeholder="请输入请输入列表5string" />
                  )}
                </Form.Item>
              </Col>			
			
			
             <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.list6}>
                  {getFieldDecorator('list6', {
                    rules: [{ required: true, message: '请输入列表6' }],
                  })(
                    <Input placeholder="请输入请输入列表6string" />
                  )}
                </Form.Item>
              </Col>			
			
			
             <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.list7}>
                  {getFieldDecorator('list7', {
                    rules: [{ required: true, message: '请输入列表7' }],
                  })(
                    <Input placeholder="请输入请输入列表7string" />
                  )}
                </Form.Item>
              </Col>			
			
			
             <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.list8}>
                  {getFieldDecorator('list8', {
                    rules: [{ required: true, message: '请输入列表8' }],
                  })(
                    <Input placeholder="请输入请输入列表8string" />
                  )}
                </Form.Item>
              </Col>			
			
			
             <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.list9}>
                  {getFieldDecorator('list9', {
                    rules: [{ required: true, message: '请输入列表9' }],
                  })(
                    <Input placeholder="请输入请输入列表9string" />
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
                <Form.Item label={fieldLabels.app}>
                  {getFieldDecorator('app', {
                    rules: [{ required: true, message: '请输入应用程序' }],
                  })(
                    <Input placeholder="请输入请输入应用程序user_app" />
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
}))(Form.create()(ObjectAccessCreateForm));



