import React, { PureComponent } from 'react';
import { Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover } from 'antd';

import { connect } from 'dva';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import PictureEdit from '../../components/PictureEdit'
import FooterToolbar from '../../components/FooterToolbar';

import styles from './CarInfo.createform.less';

const { Option } = Select;
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const fieldLabels = {
id: '序号',
carLicensePlateNumber: '车牌号',
carType: '汽车类型',
carSeatsQuantity: '汽车座椅的数量',
carRegistrationDate: '汽车登记日期',
carInspectionValidationDate: '汽车年检有效期至',
carEngineNumber: '汽车发动机号码',
vehicleIdentificationNumber: '车架号',
carInsuranceValidationDate: '汽车保险有效期至',
platform: '平台',
owner: '车主',


};



const testValues={
        
      			carLicensePlateNumber:'川ACD234',
			carType:'面包车',
			carSeatsQuantity:'5',
			carRegistrationDate:'2038-08-11',
			carInspectionValidationDate:'2039-01-04',
			carEngineNumber:'3284',
			vehicleIdentificationNumber:'WAUZZZ4E24N016553',
			carInsuranceValidationDate:'2038-09-24',
			platformId:'CIP000001',
			ownerId:'CI000001',

        
        };

const imagesValues={
        
      
        
        };




class CarInfoCreateForm extends PureComponent {

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
         type: owner.type+'/addCarInfo',
         payload: {id:owner.id,type:'carInfo', parameters: parameters},
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
         type: owner.type+'/addCarInfo',
         payload: {id:owner.id,type:'carInfo', parameters: parameters, continueNext:true},
      }); 
      });
    };
    
    const goback = () => {
      const {owner} = this.props;
      dispatch({
         type: owner.type+'/goback',
         payload: {id:owner.id,type:'carInfo'},
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
        title="新建一个汽车信息"
        content="新建一个汽车信息"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
            
            
             <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.carLicensePlateNumber}>
                  {getFieldDecorator('carLicensePlateNumber', {
                    rules: [{ required: true, message: '请输入车牌号' }],
                  })(
                    <Input placeholder="请输入请输入车牌号string" />
                  )}
                </Form.Item>
              </Col>			
			
			
             <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.carType}>
                  {getFieldDecorator('carType', {
                    rules: [{ required: true, message: '请输入汽车类型' }],
                  })(
                    <Input placeholder="请输入请输入汽车类型string" />
                  )}
                </Form.Item>
              </Col>			
			
			
             <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.carSeatsQuantity}>
                  {getFieldDecorator('carSeatsQuantity', {
                    rules: [{ required: true, message: '请输入汽车座椅的数量' }],
                  })(
                    <Input placeholder="请输入请输入汽车座椅的数量int" />
                  )}
                </Form.Item>
              </Col>			
			
			
             <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.carRegistrationDate}>
                  {getFieldDecorator('carRegistrationDate', {
                    rules: [{ required: true, message: '请输入汽车登记日期' }],
                  })(
                    <Input placeholder="请输入请输入汽车登记日期date" />
                  )}
                </Form.Item>
              </Col>			
			
			
             <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.carInspectionValidationDate}>
                  {getFieldDecorator('carInspectionValidationDate', {
                    rules: [{ required: true, message: '请输入汽车年检有效期至' }],
                  })(
                    <Input placeholder="请输入请输入汽车年检有效期至date" />
                  )}
                </Form.Item>
              </Col>			
			
			
             <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.carEngineNumber}>
                  {getFieldDecorator('carEngineNumber', {
                    rules: [{ required: true, message: '请输入汽车发动机号码' }],
                  })(
                    <Input placeholder="请输入请输入汽车发动机号码int" />
                  )}
                </Form.Item>
              </Col>			
			
			
             <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.vehicleIdentificationNumber}>
                  {getFieldDecorator('vehicleIdentificationNumber', {
                    rules: [{ required: true, message: '请输入车架号' }],
                  })(
                    <Input placeholder="请输入请输入车架号string" />
                  )}
                </Form.Item>
              </Col>			
			
			
             <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.carInsuranceValidationDate}>
                  {getFieldDecorator('carInsuranceValidationDate', {
                    rules: [{ required: true, message: '请输入汽车保险有效期至' }],
                  })(
                    <Input placeholder="请输入请输入汽车保险有效期至date" />
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
                    rules: [{ required: true, message: '请输入平台' }],
                  })(
                    <Input placeholder="请输入请输入平台" />
                  )}
                </Form.Item>
              </Col>			
			
			
             <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.owner}>
                  {getFieldDecorator('ownerId', {
                    rules: [{ required: true, message: '请输入车主' }],
                  })(
                    <Input placeholder="请输入请输入车主" />
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
}))(Form.create()(CarInfoCreateForm));




