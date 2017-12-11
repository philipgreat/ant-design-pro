import React, { PureComponent } from 'react';
import { Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover } from 'antd';

import { connect } from 'dva';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import PictureEdit from '../../components/PictureEdit'
import FooterToolbar from '../../components/FooterToolbar';

import styles from './Thread.createform.less';

const { Option } = Select;
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const fieldLabels = {
id: '序号',
title: '标题',
displayOrder: '显示顺序',
createTime: '创建时间',
eventTime: '事件时间',
registrationStopTime: '注册时间停止',
eventLocation: '事件的位置',
city: '城市',
communityGroup: '社区组',
threadType: '帖子类型',
community: '社区',
creator: '创建者',
homePage: '主页',
groupPage: '群组页面',
videoUrl: '视频网址',
coverImagePath1: '封面图像路径1',
coverImagePath2: '封面图像路径2',
coverImagePath3: '封面图像路径3',
imagePath1: '图1',
imagePath2: '图2',
imagePath3: '图3',
imagePath4: '图4',
imagePath5: '图5',
content: '内容',
approval: '验收',
canceling: '取消',
completion: '完成',
hiding: '躲藏',
likeByCurrentUser: '当前用户已点赞',
repliedByCurrentUser: '当前用户已回复',
registeredByCurrentUser: '由当前用户注册',
currentStatus: '当前状态',


};



const testValues={
        
      			title:'听力损失儿童回归的优点',
			displayOrder:'0',
			eventTime:'2035-04-24 23:47:24',
			registrationStopTime:'2039-06-02 06:52:58',
			eventLocation:'奥克斯广场阳光咖啡',
			city:'成都',
			communityGroup:'最新',
			threadType:'TOPIC',
			videoUrl:'https://player.youku.com/embed/XMzE0ODQ0NTA2NA',
			likeByCurrentUser:'0',
			repliedByCurrentUser:'0',
			registeredByCurrentUser:'0',
			communityId:'C000001',
			creatorId:'CU000001',
			homePageId:'HP000001',
			groupPageId:'GP000001',
			content:'多数听力损失儿童除了听力问题，其他的发展和一般孩子   并无明显差异，所以当他们经过特殊学校训练后，具备听和说的沟通能力时，   我们应该鼓励他们回归普通学校就读。回归能带给听力损失儿童哪些有益的方便   ',

        
        };

const imagesValues={
        
      			coverImagePath1:'cover.jpg',
			coverImagePath2:'cover.jpg',
			coverImagePath3:'cover.jpg',
			imagePath1:'image.jpg',
			imagePath2:'image.jpg',
			imagePath3:'image.jpg',
			imagePath4:'image.jpg',
			imagePath5:'image.jpg',

        
        };




class ThreadCreateForm extends PureComponent {

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
         type: owner.type+'/addThread',
         payload: {id:owner.id,type:'thread', parameters: parameters},
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
         type: owner.type+'/addThread',
         payload: {id:owner.id,type:'thread', parameters: parameters, continueNext:true},
      }); 
      });
    };
    
    const goback = () => {
      const {owner} = this.props;
      dispatch({
         type: owner.type+'/goback',
         payload: {id:owner.id,type:'thread'},
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
        title="新建一个主贴"
        content="新建一个主贴"
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
                <Form.Item label={fieldLabels.displayOrder}>
                  {getFieldDecorator('displayOrder', {
                    rules: [{ required: true, message: '请输入显示顺序' }],
                  })(
                    <Input placeholder="请输入请输入显示顺序int" />
                  )}
                </Form.Item>
              </Col>			
			
			
             <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.eventTime}>
                  {getFieldDecorator('eventTime', {
                    rules: [{ required: true, message: '请输入事件时间' }],
                  })(
                    <Input placeholder="请输入请输入事件时间date_time" />
                  )}
                </Form.Item>
              </Col>			
			
			
             <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.registrationStopTime}>
                  {getFieldDecorator('registrationStopTime', {
                    rules: [{ required: true, message: '请输入注册时间停止' }],
                  })(
                    <Input placeholder="请输入请输入注册时间停止date_time" />
                  )}
                </Form.Item>
              </Col>			
			
			
             <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.eventLocation}>
                  {getFieldDecorator('eventLocation', {
                    rules: [{ required: true, message: '请输入事件的位置' }],
                  })(
                    <Input placeholder="请输入请输入事件的位置string" />
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
                <Form.Item label={fieldLabels.communityGroup}>
                  {getFieldDecorator('communityGroup', {
                    rules: [{ required: true, message: '请输入社区组' }],
                  })(
                    <Input placeholder="请输入请输入社区组string" />
                  )}
                </Form.Item>
              </Col>			
			
			
             <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.threadType}>
                  {getFieldDecorator('threadType', {
                    rules: [{ required: true, message: '请输入帖子类型' }],
                  })(
                    <Input placeholder="请输入请输入帖子类型string" />
                  )}
                </Form.Item>
              </Col>			
			
			
             <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.videoUrl}>
                  {getFieldDecorator('videoUrl', {
                    rules: [{ required: true, message: '请输入视频网址' }],
                  })(
                    <Input placeholder="请输入请输入视频网址string_url" />
                  )}
                </Form.Item>
              </Col>			
			
			
             <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.likeByCurrentUser}>
                  {getFieldDecorator('likeByCurrentUser', {
                    rules: [{ required: true, message: '请输入当前用户已点赞' }],
                  })(
                    <Input placeholder="请输入请输入当前用户已点赞bool" />
                  )}
                </Form.Item>
              </Col>			
			
			
             <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.repliedByCurrentUser}>
                  {getFieldDecorator('repliedByCurrentUser', {
                    rules: [{ required: true, message: '请输入当前用户已回复' }],
                  })(
                    <Input placeholder="请输入请输入当前用户已回复bool" />
                  )}
                </Form.Item>
              </Col>			
			
			
             <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.registeredByCurrentUser}>
                  {getFieldDecorator('registeredByCurrentUser', {
                    rules: [{ required: true, message: '请输入由当前用户注册' }],
                  })(
                    <Input placeholder="请输入请输入由当前用户注册bool" />
                  )}
                </Form.Item>
              </Col>			
			
			
            
          </Row>    
          </Form>  
        </Card>
        
     
        
 
        
        <Card title="内容" className={styles.card} bordered={false}>
           <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
            
           
             <Col lg={24} md={24} sm={24}>
                <Form.Item>
                  {getFieldDecorator('content', {
                    rules: [{ required: true, message: '请输入内容' }],
                  })(
                    <TextArea rows={4} placeholder="请输入请输入内容" />
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
                <PictureEdit buttonTitle={"封面图像路径1"} handleChange={this.handleChange}/> 
              </Col>			
			
			
             <Col lg={6} md={12} sm={24}>
                <PictureEdit buttonTitle={"封面图像路径2"} handleChange={this.handleChange}/> 
              </Col>			
			
			
             <Col lg={6} md={12} sm={24}>
                <PictureEdit buttonTitle={"封面图像路径3"} handleChange={this.handleChange}/> 
              </Col>			
			
			
             <Col lg={6} md={12} sm={24}>
                <PictureEdit buttonTitle={"图1"} handleChange={this.handleChange}/> 
              </Col>			
			
			
             <Col lg={6} md={12} sm={24}>
                <PictureEdit buttonTitle={"图2"} handleChange={this.handleChange}/> 
              </Col>			
			
			
             <Col lg={6} md={12} sm={24}>
                <PictureEdit buttonTitle={"图3"} handleChange={this.handleChange}/> 
              </Col>			
			
			
             <Col lg={6} md={12} sm={24}>
                <PictureEdit buttonTitle={"图4"} handleChange={this.handleChange}/> 
              </Col>			
			
			
             <Col lg={6} md={12} sm={24}>
                <PictureEdit buttonTitle={"图5"} handleChange={this.handleChange}/> 
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
			
			
             <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.creator}>
                  {getFieldDecorator('creatorId', {
                    rules: [{ required: true, message: '请输入创建者' }],
                  })(
                    <Input placeholder="请输入请输入创建者" />
                  )}
                </Form.Item>
              </Col>			
			
			
             <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.homePage}>
                  {getFieldDecorator('homePageId', {
                    rules: [{ required: true, message: '请输入主页' }],
                  })(
                    <Input placeholder="请输入请输入主页" />
                  )}
                </Form.Item>
              </Col>			
			
			
             <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.groupPage}>
                  {getFieldDecorator('groupPageId', {
                    rules: [{ required: true, message: '请输入群组页面' }],
                  })(
                    <Input placeholder="请输入请输入群组页面" />
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
  submitting: state.formtest.advancedFormSubmitting,
}))(Form.create()(ThreadCreateForm));




