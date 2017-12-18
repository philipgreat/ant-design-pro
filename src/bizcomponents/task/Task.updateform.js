import React, { PureComponent } from 'react';
import { Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover } from 'antd';

import { connect } from 'dva';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import PictureEdit from '../../components/PictureEdit'
import FooterToolbar from '../../components/FooterToolbar';

import styles from './Task.updateform.less';

const { Option } = Select;
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const fieldLabels = {
id: '序号',
title: '标题',
selectedTask: '选定的任务',
createTime: '创建时间',
content: '内容',
creator: '创建者',
community: '社区',
homePage: '主页',
taskPage: '任务页面',
videoUrl: '视频网址',
coverImagePath1: '封面图像路径1',
coverImagePath2: '封面图像路径2',
coverImagePath3: '封面图像路径3',
imagePath1: '图1',
imagePath2: '图2',
imagePath3: '图3',
imagePath4: '图4',
imagePath5: '图5',
creatorBonus: '发布人的奖金',
additionalBonus: '额外的奖金',
hiding: '躲藏',
resolving: '解决',
reward: '悬赏',
likeByCurrentUser: '当前用户已点赞',
repliedByCurrentUser: '当前用户已回复',
currentStatus: '当前状态',


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




class TaskUpdateForm extends PureComponent {

  state = {
    currentUpdateIndex: 0,
  };

  handleChange = ({ fileList }) =>{
    console.log("filelist", fileList);

  }
   componentDidMount() {
        
    const { form, dispatch, submitting,selectedRows } = this.props;
    const { currentUpdateIndex } = this.state;

    const { getFieldDecorator, setFieldsValue } = this.props.form;
    if(!selectedRows){
      return;
    }
    if(currentUpdateIndex<selectedRows.length){
      setFieldsValue(selectedRows[currentUpdateIndex]);
    }
    
        
        
  }

  render() {
    const { form, dispatch, submitting,selectedRows } = this.props;
    const { getFieldDecorator, validateFieldsAndScroll, getFieldsError } = form;
    const { currentUpdateIndex } = this.state;
    const { setFieldsValue } = this.props.form;
    
    const submitUpdateForm = () => {
      validateFieldsAndScroll((error, values) => {
         if (error){
          console.log("code go here", error);
          return;
        }
        
        const {owner} = this.props;
        const parameters={...values, ...imagesValues};
      	dispatch({
         type: owner.type+'/updateTask',
         payload: {id:owner.id,type:'task', parameters: parameters},
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
        const parameters = { ...values, ...imagesValues };

        const { currentUpdateIndex } = this.state;
        
       if(currentUpdateIndex>=selectedRows.length-1){
          return;
       }
       this.setState({
        currentUpdateIndex: currentUpdateIndex+1,
       });
        setFieldsValue(selectedRows[currentUpdateIndex+1]);

        
       
      });
    };
    
    const goback = () => {
      const {owner} = this.props;
      dispatch({
         type: owner.type+'/goback',
         payload: {id:owner.id,type:'task'},
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
        
        title={"更新任务"+(currentUpdateIndex+1)+"/"+selectedRows.length}
        content="更新任务"
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
                <Form.Item label={fieldLabels.selectedTask}>
                  {getFieldDecorator('selectedTask', {
                    rules: [{ required: true, message: '请输入选定的任务' }],
                  })(
                    <Input placeholder="请输入请输入选定的任务string" />
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
                <Form.Item label={fieldLabels.creatorBonus}>
                  {getFieldDecorator('creatorBonus', {
                    rules: [{ required: true, message: '请输入发布人的奖金' }],
                  })(
                    <Input placeholder="请输入请输入发布人的奖金int" />
                  )}
                </Form.Item>
              </Col>			
			
			
             <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.additionalBonus}>
                  {getFieldDecorator('additionalBonus', {
                    rules: [{ required: true, message: '请输入额外的奖金' }],
                  })(
                    <Input placeholder="请输入请输入额外的奖金int" />
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
}))(Form.create()(TaskUpdateForm));




