import React, { PureComponent } from 'react';
import { Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover } from 'antd';
import moment from 'moment';
import { connect } from 'dva';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import PictureEdit from '../../components/PictureEdit'
import FooterToolbar from '../../components/FooterToolbar';

import styles from './PatientInfo.updateform.less';

const { Option } = Select;
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const fieldLabels = {
id: '序号',
name: '名称',
nickName: '昵称',
gender: '性别',
birthday: '生日',
wearDeviceType: '佩戴设备类型',
wearStartTime: '磨损的开始时间',
recoverPlan: '康复计划',
recoverStartTime: '复苏开始时间',
user: '用户',


};





const imagesValues={
        
      
        
        };




class PatientInfoUpdateForm extends PureComponent {



  handleChange = ({ fileList }) =>{
    console.log("filelist", fileList);

  }
   componentDidMount() {
        
    const { form, dispatch, submitting,selectedRows,currentUpdateIndex } = this.props;
 

    const { getFieldDecorator, setFieldsValue } = this.props.form;
    if(!selectedRows){
      return;
    }
    if(currentUpdateIndex<selectedRows.length){
    	
   	
      const convertiedValues = selectedRows.map((item)=>{

          return {...item, 
			birthday: moment(item.birthday).format('YYYY-MM-DD'),
			wearStartTime: moment(item.wearStartTime).format('YYYY-MM-DD'),
			recoverStartTime: moment(item.recoverStartTime).format('YYYY-MM-DD'),
  
          }

      });
      setFieldsValue(convertiedValues[currentUpdateIndex]);
    }
    
        
        
  }

  render() {
    const { form, dispatch, submitting,selectedRows,currentUpdateIndex } = this.props;
    const { getFieldDecorator, validateFieldsAndScroll, getFieldsError } = form;
    
    const { setFieldsValue } = this.props.form;
    
    const submitUpdateForm = () => {
     validateFieldsAndScroll((error, values) => {
        if (error) {
          console.log("code go here", error);
          return;
        }

        const { owner } = this.props;
        const patientInfoId = values.id;
        const parameters = { ...values,patientInfoId, ...imagesValues };

       
       setFieldsValue(selectedRows[currentUpdateIndex+1]);
       const newIndex= currentUpdateIndex+1;
       dispatch({
          type: owner.type+'/updatePatientInfo',
          payload: {id:owner.id,type:'patientInfo', 
            parameters: parameters,
            selectedRows,currentUpdateIndex:0,continueNext:false},
       });
        
       
      });
      
    };
    
    const submitUpdateFormAndContinue = () => {
      validateFieldsAndScroll((error, values) => {
        if (error) {
          console.log("code go here", error);
          return;
        }

        const { owner } = this.props;
        const patientInfoId = values.id;
        const parameters = { ...values,patientInfoId, ...imagesValues };

        const { currentUpdateIndex } = this.props;
        
        if(currentUpdateIndex>=selectedRows.length-1){
          return;
       }
       this.setState({
        currentUpdateIndex: currentUpdateIndex+1,
       });
       setFieldsValue(selectedRows[currentUpdateIndex+1]);
       const newIndex= currentUpdateIndex+1;
       dispatch({
          type: owner.type+'/updatePatientInfo',
          payload: {id:owner.id,type:'patientInfo', 
            parameters: parameters,
            selectedRows,currentUpdateIndex:newIndex,continueNext:true},
       });
        
       
      });
    };
    
    const goback = () => {
      const {owner} = this.props;
      dispatch({
         type: owner.type+'/goback',
         payload: {id:owner.id,type:'patientInfo'},
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
        
        title={"更新病人信息"+(currentUpdateIndex+1)+"/"+selectedRows.length}
        content="更新病人信息"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
            
            
             <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.id}>
                  {getFieldDecorator('id', {
                    rules: [{ required: true, message: '请输入序号' }],
                  })(
                    <Input placeholder="请输入请输入序号string" disabled={true}/>
                  )}
                </Form.Item>
              </Col>			
			
			
             <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.name}>
                  {getFieldDecorator('name', {
                    rules: [{ required: true, message: '请输入名称' }],
                  })(
                    <Input placeholder="请输入请输入名称string" />
                  )}
                </Form.Item>
              </Col>			
			
			
             <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.nickName}>
                  {getFieldDecorator('nickName', {
                    rules: [{ required: true, message: '请输入昵称' }],
                  })(
                    <Input placeholder="请输入请输入昵称string" />
                  )}
                </Form.Item>
              </Col>			
			
			
             <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.gender}>
                  {getFieldDecorator('gender', {
                    rules: [{ required: true, message: '请输入性别' }],
                  })(
                    <Input placeholder="请输入请输入性别string_gender" />
                  )}
                </Form.Item>
              </Col>			
			
			
             <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.birthday}>
                  {getFieldDecorator('birthday', {
                    rules: [{ required: true, message: '请输入生日' }],
                  })(
                    <Input placeholder="请输入请输入生日date" />
                  )}
                </Form.Item>
              </Col>			
			
			
             <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.wearDeviceType}>
                  {getFieldDecorator('wearDeviceType', {
                    rules: [{ required: true, message: '请输入佩戴设备类型' }],
                  })(
                    <Input placeholder="请输入请输入佩戴设备类型string" />
                  )}
                </Form.Item>
              </Col>			
			
			
             <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.wearStartTime}>
                  {getFieldDecorator('wearStartTime', {
                    rules: [{ required: true, message: '请输入磨损的开始时间' }],
                  })(
                    <Input placeholder="请输入请输入磨损的开始时间date" />
                  )}
                </Form.Item>
              </Col>			
			
			
             <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.recoverPlan}>
                  {getFieldDecorator('recoverPlan', {
                    rules: [{ required: true, message: '请输入康复计划' }],
                  })(
                    <Input placeholder="请输入请输入康复计划string" />
                  )}
                </Form.Item>
              </Col>			
			
			
             <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.recoverStartTime}>
                  {getFieldDecorator('recoverStartTime', {
                    rules: [{ required: true, message: '请输入复苏开始时间' }],
                  })(
                    <Input placeholder="请输入请输入复苏开始时间date" />
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
        <Button type="primary" onClick={submitUpdateFormAndContinue} loading={submitting} disabled={currentUpdateIndex+1>=selectedRows.length}>
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
}))(Form.create()(PatientInfoUpdateForm));




