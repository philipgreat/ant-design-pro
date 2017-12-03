import React, { PureComponent } from 'react';
import { Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover } from 'antd';
import { connect } from 'dva';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';

import FooterToolbar from '../../components/FooterToolbar';

import styles from './Thread.createform.less';

const { Option } = Select;
const { RangePicker } = DatePicker;

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



class ThreadCreateForm extends PureComponent {
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
                <Form.Item label={fieldLabels.content}>
                  {getFieldDecorator('content', {
                    rules: [{ required: true, message: '请输入内容' }],
                  })(
                    <Input placeholder="请输入请输入内容string" />
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
			
			
             <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.currentStatus}>
                  {getFieldDecorator('currentStatus', {
                    rules: [{ required: true, message: '请输入当前状态' }],
                  })(
                    <Input placeholder="请输入请输入当前状态string" />
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
                <Form.Item label={fieldLabels.coverImagePath1}>
                  {getFieldDecorator('coverImagePath1', {
                    rules: [{ required: true, message: '请输入封面图像路径1' }],
                  })(
                    <Input placeholder="请输入请输入封面图像路径1string_image" />
                  )}
                </Form.Item>
              </Col>			
			
			
             <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.coverImagePath2}>
                  {getFieldDecorator('coverImagePath2', {
                    rules: [{ required: true, message: '请输入封面图像路径2' }],
                  })(
                    <Input placeholder="请输入请输入封面图像路径2string_image" />
                  )}
                </Form.Item>
              </Col>			
			
			
             <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.coverImagePath3}>
                  {getFieldDecorator('coverImagePath3', {
                    rules: [{ required: true, message: '请输入封面图像路径3' }],
                  })(
                    <Input placeholder="请输入请输入封面图像路径3string_image" />
                  )}
                </Form.Item>
              </Col>			
			
			
             <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.imagePath1}>
                  {getFieldDecorator('imagePath1', {
                    rules: [{ required: true, message: '请输入图1' }],
                  })(
                    <Input placeholder="请输入请输入图1string_image" />
                  )}
                </Form.Item>
              </Col>			
			
			
             <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.imagePath2}>
                  {getFieldDecorator('imagePath2', {
                    rules: [{ required: true, message: '请输入图2' }],
                  })(
                    <Input placeholder="请输入请输入图2string_image" />
                  )}
                </Form.Item>
              </Col>			
			
			
             <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.imagePath3}>
                  {getFieldDecorator('imagePath3', {
                    rules: [{ required: true, message: '请输入图3' }],
                  })(
                    <Input placeholder="请输入请输入图3string_image" />
                  )}
                </Form.Item>
              </Col>			
			
			
             <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.imagePath4}>
                  {getFieldDecorator('imagePath4', {
                    rules: [{ required: true, message: '请输入图4' }],
                  })(
                    <Input placeholder="请输入请输入图4string_image" />
                  )}
                </Form.Item>
              </Col>			
			
			
             <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.imagePath5}>
                  {getFieldDecorator('imagePath5', {
                    rules: [{ required: true, message: '请输入图5' }],
                  })(
                    <Input placeholder="请输入请输入图5string_image" />
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
                <Form.Item label={fieldLabels.community}>
                  {getFieldDecorator('community', {
                    rules: [{ required: true, message: '请输入社区' }],
                  })(
                    <Input placeholder="请输入请输入社区community" />
                  )}
                </Form.Item>
              </Col>			
			
			
             <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.creator}>
                  {getFieldDecorator('creator', {
                    rules: [{ required: true, message: '请输入创建者' }],
                  })(
                    <Input placeholder="请输入请输入创建者community_user" />
                  )}
                </Form.Item>
              </Col>			
			
			
             <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.homePage}>
                  {getFieldDecorator('homePage', {
                    rules: [{ required: true, message: '请输入主页' }],
                  })(
                    <Input placeholder="请输入请输入主页home_page" />
                  )}
                </Form.Item>
              </Col>			
			
			
             <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.groupPage}>
                  {getFieldDecorator('groupPage', {
                    rules: [{ required: true, message: '请输入群组页面' }],
                  })(
                    <Input placeholder="请输入请输入群组页面group_page" />
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
}))(Form.create()(ThreadCreateForm));




