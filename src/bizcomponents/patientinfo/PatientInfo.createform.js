import React, { Component } from 'react';
import { Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover } from 'antd';

import { connect } from 'dva';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import PictureEdit from '../../components/PictureEdit'
import FooterToolbar from '../../components/FooterToolbar';

import styles from './PatientInfo.createform.less';

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


const testValues={
        
      			name:'刘利',
			nickName:'喀拉',
			gender:'男',
			birthday:'2035-05-11',
			wearDeviceType:'新发现',
			wearStartTime:'2030-05-17',
			recoverPlan:'幼儿龄段（0-3岁）',
			recoverStartTime:'2032-09-30',
			userId:'CU000001',

        
};

const imageURLPrefix = "//localhost:2090"


const imageKeys = [
];



class PatientInfoCreateForm extends Component {


  state = {
    previewVisible: false,
    previewImage: '',
    convertedImagesValues: {}
  };

  handlePreview = (file) => {
    console.log("preview file", file)
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  }
  shouldComponentUpdate() {
    return true;
  }
  componentDidMount() {
 
        const { getFieldDecorator,setFieldsValue } = this.props.form;               
        setFieldsValue(testValues);
  }
  handleChange = (event, source) => {
    console.log("get file list from change in update change: ", source);

    const { fileList } = event;
    var convertedImagesValues = this.state.convertedImagesValues;

    convertedImagesValues[source] = fileList;
    this.setState({ convertedImagesValues })


    console.log("/get file list from change in update change: ", source);

  }

  mapBackToImageValues(convertedImagesValues) {
    var targetImages = new Array()
    Object.keys(convertedImagesValues).map((key) => {
      if(!convertedImagesValues){
        return;
      }
      if(!convertedImagesValues[key]){
        return;
      }
      if(!convertedImagesValues[key][0]){
        return;
      }
      const value = convertedImagesValues[key][0];
      if(value.response){
        targetImages[key] = imageURLPrefix + value.response;
        return;
      }
      if(value.url){
        targetImages[key] = value.url;
        return;
      }
      

    });
    return targetImages;

  }
  
  mapFromImageValues(selectedRow) {
    var targetImages = new Object()
    
    const buildFileList=(key,value)=>{
      if(value){
        return [{ uid: key, url: value }];
      }
      return [];
    }
    imageKeys.map((key) => {
      
      targetImages[key] = buildFileList(key,selectedRow[key]);

    });
    console.log(targetImages);
    return targetImages;

  }
  

  render() {
    const { form, dispatch, submitting } = this.props;
    const { convertedImagesValues } = this.state
    
    const { getFieldDecorator, validateFieldsAndScroll, getFieldsError } = form;
    const submitCreateForm = () => {
      validateFieldsAndScroll((error, values) => {
         if (error){
          console.log("code go here", error);
          return;
        }
        
        const {owner} = this.props;
        const imagesValues = this.mapBackToImageValues(convertedImagesValues);
        
        const parameters={...values, ...imagesValues};
      	dispatch({
         type: owner.type+'/addPatientInfo',
         payload: {id:owner.id,type:'patientInfo', parameters: parameters},
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
        const imagesValues = this.mapBackToImageValues(convertedImagesValues);
        
        const parameters={...values, ...imagesValues};
      	dispatch({
         type: owner.type+'/addPatientInfo',
         payload: {id:owner.id,type:'patientInfo', parameters: parameters, continueNext:true},
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
        title="新建一个病人信息"
        content="新建一个病人信息"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
            
            
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
        
     
        
 
            
        
      
      
            
        

        
        
        
        
                 
        
        <Card title="关联" className={styles.card} bordered={false}>
           <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
            
            
             <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.user}>
                  {getFieldDecorator('userId', {
                    rules: [{ required: true, message: '请输入用户' }],
                  })(
                    <Input placeholder="请输入请输入用户" />
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
}))(Form.create()(PatientInfoCreateForm));



