import React, { Component } from 'react';
import { Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover } from 'antd';

import { connect } from 'dva';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import PictureEdit from '../../components/PictureEdit'
import FooterToolbar from '../../components/FooterToolbar';

import styles from './UserMessage.createform.less';

const { Option } = Select;
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const fieldLabels = {
id: '序号',
title: '标题',
messageKey: '信息的关键',
receiver: '接收者',
content: '内容',
linkUrl: '链接网址',
messageTime: '消息的时间',


};


const testValues={
        
      			title:'您有新的回复',
			messageKey:'URGENT_MESSAGE',
			content:'李亚青回复了你的信息',
			linkUrl:'taskManager/view/T000001/',
			receiverId:'CU000001',

        
};

const imageURLPrefix = "//localhost:2090"


const imageKeys = [
];



class UserMessageCreateForm extends Component {


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
         type: owner.type+'/addUserMessage',
         payload: {id:owner.id,type:'userMessage', parameters: parameters},
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
         type: owner.type+'/addUserMessage',
         payload: {id:owner.id,type:'userMessage', parameters: parameters, continueNext:true},
      }); 
      });
    };
    
    const goback = () => {
      const {owner} = this.props;
      dispatch({
         type: owner.type+'/goback',
         payload: {id:owner.id,type:'userMessage'},
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
        title="新建一个用户消息"
        content="新建一个用户消息"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
            
            
             <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.title}>
                  {getFieldDecorator('title', {
                    rules: [{ required: true, message: '请输入标题' }],
                  })(
                    <Input placeholder="请输入请输入标题string" />
                  )}
                </Form.Item>
              </Col>			
			
			
             <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.messageKey}>
                  {getFieldDecorator('messageKey', {
                    rules: [{ required: true, message: '请输入信息的关键' }],
                  })(
                    <Input placeholder="请输入请输入信息的关键string" />
                  )}
                </Form.Item>
              </Col>			
			
			
             <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.content}>
                  {getFieldDecorator('content', {
                    rules: [{ required: true, message: '请输入内容' }],
                  })(
                    <Input placeholder="请输入请输入内容string" />
                  )}
                </Form.Item>
              </Col>			
			
			
             <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.linkUrl}>
                  {getFieldDecorator('linkUrl', {
                    rules: [{ required: true, message: '请输入链接网址' }],
                  })(
                    <Input placeholder="请输入请输入链接网址string" />
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
                <Form.Item label={fieldLabels.receiver}>
                  {getFieldDecorator('receiverId', {
                    rules: [{ required: true, message: '请输入接收者' }],
                  })(
                    <Input placeholder="请输入请输入接收者" />
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
}))(Form.create()(UserMessageCreateForm));




