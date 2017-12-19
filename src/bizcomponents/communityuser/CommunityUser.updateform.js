import React, { PureComponent } from 'react';
import { Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover } from 'antd';

import { connect } from 'dva';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import PictureEdit from '../../components/PictureEdit'
import FooterToolbar from '../../components/FooterToolbar';

import styles from './CommunityUser.updateform.less';

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





const imagesValues={
        
      			avatar:'avatar.jpg',

        
        };




class CommunityUserUpdateForm extends PureComponent {

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
         type: owner.type+'/updateCommunityUser',
         payload: {id:owner.id,type:'communityUser', parameters: parameters},
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
        
        title={"更新社区用户"+(currentUpdateIndex+1)+"/"+selectedRows.length}
        content="更新社区用户"
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
                    <Input placeholder="请输入请输入序号string" disabled='true'/>
                  )}
                </Form.Item>
              </Col>			
			
			
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
                <PictureEdit buttonTitle={"头像"} handleChange={this.handleChange}/> 
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
}))(Form.create()(CommunityUserUpdateForm));




