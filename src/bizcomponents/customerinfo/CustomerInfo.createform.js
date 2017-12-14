import React, { PureComponent } from 'react';
import { Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover } from 'antd';

import { connect } from 'dva';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import PictureEdit from '../../components/PictureEdit'
import FooterToolbar from '../../components/FooterToolbar';

import styles from './CustomerInfo.createform.less';

const { Option } = Select;
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const fieldLabels = {
id: '序号',
platform: '站台',
customerName: '客户名称',
customerPhoneNumber: '客户的电话号码',
customerIdentifyCardNumber: '客户识别卡号',
customerIdentifyCardFrontImage: '客户识别卡前端图像',
customerIdentifyCardBackImage: '客户识别卡背面图像',


};



const testValues={
        
      			customerName:'张无忌',
			customerPhoneNumber:'19922335566',
			customerIdentifyCardNumber:'510124199012010000',
			customerIdentifyCardFrontImage:'身份证正面.jpg',
			customerIdentifyCardBackImage:'身份证反面.jpg',
			platformId:'CIP000001',

        
        };

const imagesValues={
        
      
        
        };




class CustomerInfoCreateForm extends PureComponent {

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
    const submitCreateForm = () => {
      validateFieldsAndScroll((error, values) => {
         if (error){
          console.log("code go here", error);
          return;
        }
        
        const {owner} = this.props;
        const parameters={...values, ...imagesValues};
      	dispatch({
         type: owner.type+'/addCustomerInfo',
         payload: {id:owner.id,type:'customerInfo', parameters: parameters},
      }); 
      });
    };
    
    const submitCreateFormAndContinue = () => {
      validateFieldsAndScroll((error, values) => {
         if (error){
          console.log("code go here", error);
          return;
        }
        
        const {owner} = this.props;
        const parameters={...values, ...imagesValues};
      	dispatch({
         type: owner.type+'/addCustomerInfo',
         payload: {id:owner.id,type:'customerInfo', parameters: parameters, continueNext:true},
      }); 
      });
    };
    
    const goback = () => {
      const {owner} = this.props;
      dispatch({
         type: owner.type+'/goback',
         payload: {id:owner.id,type:'customerInfo'},
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
        title="新建一个客户信息"
        content="新建一个客户信息"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
            
            
             <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.customerName}>
                  {getFieldDecorator('customerName', {
                    rules: [{ required: true, message: '请输入客户名称' }],
                  })(
                    <Input placeholder="请输入请输入客户名称string" />
                  )}
                </Form.Item>
              </Col>			
			
			
             <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.customerPhoneNumber}>
                  {getFieldDecorator('customerPhoneNumber', {
                    rules: [{ required: true, message: '请输入客户的电话号码' }],
                  })(
                    <Input placeholder="请输入请输入客户的电话号码string" />
                  )}
                </Form.Item>
              </Col>			
			
			
             <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.customerIdentifyCardNumber}>
                  {getFieldDecorator('customerIdentifyCardNumber', {
                    rules: [{ required: true, message: '请输入客户识别卡号' }],
                  })(
                    <Input placeholder="请输入请输入客户识别卡号string" />
                  )}
                </Form.Item>
              </Col>			
			
			
             <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.customerIdentifyCardFrontImage}>
                  {getFieldDecorator('customerIdentifyCardFrontImage', {
                    rules: [{ required: true, message: '请输入客户识别卡前端图像' }],
                  })(
                    <Input placeholder="请输入请输入客户识别卡前端图像string" />
                  )}
                </Form.Item>
              </Col>			
			
			
             <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.customerIdentifyCardBackImage}>
                  {getFieldDecorator('customerIdentifyCardBackImage', {
                    rules: [{ required: true, message: '请输入客户识别卡背面图像' }],
                  })(
                    <Input placeholder="请输入请输入客户识别卡背面图像string" />
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
                <Form.Item label={fieldLabels.platform}>
                  {getFieldDecorator('platformId', {
                    rules: [{ required: true, message: '请输入站台' }],
                  })(
                    <Input placeholder="请输入请输入站台" />
                  )}
                </Form.Item>
              </Col>			
			
			
            
          </Row>    
          </Form>  
         
        </Card>
       
        
     
        
        
        
        <FooterToolbar>
          {getErrorInfo()}
          <Button type="primary" onClick={submitCreateForm} loading={submitting} htmlType="submit">
          提交
        </Button>
        <Button type="primary" onClick={submitCreateFormAndContinue} loading={submitting}>
            提交并建下一个
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
}))(Form.create()(CustomerInfoCreateForm));




