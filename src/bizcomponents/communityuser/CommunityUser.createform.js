import React, { Component } from 'react';
import { Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover } from 'antd';

import { connect } from 'dva';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import PictureEdit from '../../components/PictureEdit'
import FooterToolbar from '../../components/FooterToolbar';

import styles from './CommunityUser.createform.less';

const { Option } = Select;
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const fieldLabels = {
id: '序号',
mobile: '手机',
nickName: '昵称',
gender: '性别',
userType: '用户类型',
avatar: '头像',
birthday: '生日',
experiencePoint: '成长值',
bonusPoint: '积分',
city: '城市',
status: '状态',
hideInfo: '隐藏的信息',
administrator: '管理员',
community: '社区',


};


const testValues={
        
      			mobile:'13677778888',
			nickName:'喀拉',
			gender:'男',
			userType:'患者',
			birthday:'2034-11-20',
			experiencePoint:'9002',
			bonusPoint:'723323',
			city:'北京',
			status:'迎接更光明的明天',
			hideInfo:'1',
			administrator:'1',
			communityId:'C000001',

        
};

const imageURLPrefix = "//localhost:2090"


const imageKeys = [
  "avatar"
];



class CommunityUserCreateForm extends Component {


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
         type: owner.type+'/addCommunityUser',
         payload: {id:owner.id,type:'communityUser', parameters: parameters},
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
         type: owner.type+'/addCommunityUser',
         payload: {id:owner.id,type:'communityUser', parameters: parameters, continueNext:true},
      }); 
      });
    };
    
    const goback = () => {
      const {owner} = this.props;
      dispatch({
         type: owner.type+'/goback',
         payload: {id:owner.id,type:'communityUser'},
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
        title="新建一个社区用户"
        content="新建一个社区用户"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
            
            
             <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.mobile}>
                  {getFieldDecorator('mobile', {
                    rules: [{ required: true, message: '请输入手机' }],
                  })(
                    <Input placeholder="请输入请输入手机string_china_mobile_phone" />
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
                <Form.Item label={fieldLabels.userType}>
                  {getFieldDecorator('userType', {
                    rules: [{ required: true, message: '请输入用户类型' }],
                  })(
                    <Input placeholder="请输入请输入用户类型string" />
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
                <Form.Item label={fieldLabels.experiencePoint}>
                  {getFieldDecorator('experiencePoint', {
                    rules: [{ required: true, message: '请输入成长值' }],
                  })(
                    <Input placeholder="请输入请输入成长值int" />
                  )}
                </Form.Item>
              </Col>			
			
			
             <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.bonusPoint}>
                  {getFieldDecorator('bonusPoint', {
                    rules: [{ required: true, message: '请输入积分' }],
                  })(
                    <Input placeholder="请输入请输入积分int" />
                  )}
                </Form.Item>
              </Col>			
			
			
             <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.city}>
                  {getFieldDecorator('city', {
                    rules: [{ required: true, message: '请输入城市' }],
                  })(
                    <Input placeholder="请输入请输入城市string" />
                  )}
                </Form.Item>
              </Col>			
			
			
             <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.status}>
                  {getFieldDecorator('status', {
                    rules: [{ required: true, message: '请输入状态' }],
                  })(
                    <Input placeholder="请输入请输入状态string" />
                  )}
                </Form.Item>
              </Col>			
			
			
             <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.hideInfo}>
                  {getFieldDecorator('hideInfo', {
                    rules: [{ required: true, message: '请输入隐藏的信息' }],
                  })(
                    <Input placeholder="请输入请输入隐藏的信息bool" />
                  )}
                </Form.Item>
              </Col>			
			
			
             <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.administrator}>
                  {getFieldDecorator('administrator', {
                    rules: [{ required: true, message: '请输入管理员' }],
                  })(
                    <Input placeholder="请输入请输入管理员bool" />
                  )}
                </Form.Item>
              </Col>			
			
			
            
          </Row>    
          </Form>  
        </Card>
        
     
        
 
            
        
      
      
            
        

        
        <Card title="附件" className={styles.card} bordered={false}>
           <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
            
            
             <Col lg={6} md={12} sm={24}>
                <PictureEdit buttonTitle={"头像"} 
                	handlePreview={this.handlePreview}
                	handleChange={(event) => this.handleChange(event, "avatar")}
                 	fileList={convertedImagesValues.avatar} />
                 
              </Col>
			
			
            
          </Row>    
          </Form>  
         
        </Card>
       
        
        
        
        
                 
        
        <Card title="关联" className={styles.card} bordered={false}>
           <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
            
            
             <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.community}>
                  {getFieldDecorator('communityId', {
                    rules: [{ required: true, message: '请输入社区' }],
                  })(
                    <Input placeholder="请输入请输入社区" />
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
}))(Form.create()(CommunityUserCreateForm));




