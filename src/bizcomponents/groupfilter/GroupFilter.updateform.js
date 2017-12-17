import React, { PureComponent } from 'react';
import { Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover } from 'antd';

import { connect } from 'dva';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import PictureEdit from '../../components/PictureEdit'
import FooterToolbar from '../../components/FooterToolbar';

import styles from './GroupFilter.updateform.less';

const { Option } = Select;
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const fieldLabels = {
id: '序号',
filterLink: '滤波环节',
title: '标题',
groupPage: '群组页面',


};



const testValues={
        
      			filterLink:'groupPageManager/home/',
			title:'最新',

        
        };

const imagesValues={
        
      
        
        };




class GroupFilterUpdateForm extends PureComponent {

  handleChange = ({ fileList }) =>{
    console.log("filelist", fileList);

  }
   componentDidMount() {
        
        
 
           
        const { getFieldDecorator,setFieldsValue } = this.props.form;               
        setFieldsValue(testValues);
        
        
  }

  render() {
    const { form, dispatch, submitting } = this.props;
    const { getFieldDecorator, validateFieldsAndScroll, getFieldsError } = form;
    const submitUpdateForm = () => {
      validateFieldsAndScroll((error, values) => {
         if (error){
          console.log("code go here", error);
          return;
        }
        
        const {owner} = this.props;
        const parameters={...values, ...imagesValues};
      	dispatch({
         type: owner.type+'/updateGroupFilter',
         payload: {id:owner.id,type:'groupFilter', parameters: parameters},
      }); 
      });
    };
    
    const submitUpdateFormAndContinue = () => {
      validateFieldsAndScroll((error, values) => {
         if (error){
          console.log("code go here", error);
          return;
        }
        
        const {owner} = this.props;
        const parameters={...values, ...imagesValues};
      	dispatch({
         type: owner.type+'/updateGroupFilter',
         payload: {id:owner.id,type:'groupFilter', parameters: parameters, continueNext:true},
      }); 
      });
    };
    
    const goback = () => {
      const {owner} = this.props;
      dispatch({
         type: owner.type+'/goback',
         payload: {id:owner.id,type:'groupFilter'},
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
        title="更新群组过滤器"
        content="更新群组过滤器"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
            
            
             <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.filterLink}>
                  {getFieldDecorator('filterLink', {
                    rules: [{ required: true, message: '请输入滤波环节' }],
                  })(
                    <Input placeholder="请输入请输入滤波环节string" />
                  )}
                </Form.Item>
              </Col>			
			
			
             <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.title}>
                  {getFieldDecorator('title', {
                    rules: [{ required: true, message: '请输入标题' }],
                  })(
                    <Input placeholder="请输入请输入标题string" />
                  )}
                </Form.Item>
              </Col>			
			
			
            
          </Row>    
          </Form>  
        </Card>
        
     
        
 
            
        
      
      
            
        
         
        
        
        
 
     
        
        
        
        <FooterToolbar>
          {getErrorInfo()}
          <Button type="primary" onClick={submitUpdateForm} loading={submitting} htmlType="submit">
          更新
        </Button>
        <Button type="primary" onClick={submitUpdateFormAndContinue} loading={submitting}>
            更新并装载下一个
          </Button>
        <Button type="info" onClick={goback} loading={submitting}>
            取消
          </Button>
        </FooterToolbar>
        
      </PageHeaderLayout>
    );
  }
}

export default connect(state => ({
  collapsed: state.global.collapsed,
}))(Form.create()(GroupFilterUpdateForm));




