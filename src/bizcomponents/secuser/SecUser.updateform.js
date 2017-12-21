import React, { PureComponent } from 'react';
import { Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover } from 'antd';
import moment from 'moment';
import { connect } from 'dva';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import PictureEdit from '../../components/PictureEdit'
import FooterToolbar from '../../components/FooterToolbar';

import styles from './SecUser.updateform.less';

const { Option } = Select;
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const fieldLabels = {
id: '序号',
login: '登录',
mobile: '手机',
email: '电子邮件',
pwd: 'PWD',
verificationCode: '验证码',
verificationCodeExpire: '验证码过期',
lastLoginTime: '最后登录时间',
domain: '域',
blocking: '屏蔽',
currentStatus: '当前状态',


};



const imageURLPrefix = "//localhost:2090"


const imageKeys = [
];




class SecUserUpdateForm extends PureComponent {

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
  componentDidMount() {

    //const { form, dispatch, submitting, selectedRows, currentUpdateIndex } = this.props;
    const { getFieldDecorator, setFieldsValue } = this.props.form;
   
    const selectedRow = this.getSelectedRow();
    if(!selectedRow){
      return;
    }
    setFieldsValue(selectedRow);
    

  }

  componentWillMount() {

    const selectedRow = this.getSelectedRow();
    if(!selectedRow){
      return;
    }
    
    this.setState({
      convertedImagesValues: this.mapFromImageValues(selectedRow)
    });

  }
  
  getSelectedRow(){
    const { form, dispatch, submitting, selectedRows, currentUpdateIndex } = this.props;
    if (!selectedRows) {
      return;
    }
    if (currentUpdateIndex >= selectedRows.length) {
      return;
    }
    const convertiedValues = selectedRows.map((item) => {
      return {
        ...item,
			verificationCodeExpire: moment(item.verificationCodeExpire).format('YYYY-MM-DD'),
			lastLoginTime: moment(item.lastLoginTime).format('YYYY-MM-DD'),
  
      }
    });
    const selectedRow = convertiedValues[currentUpdateIndex];
    return selectedRow;

  }

  render() {
    const { form, dispatch, submitting,selectedRows,currentUpdateIndex } = this.props;
    const { getFieldDecorator, validateFieldsAndScroll, getFieldsError } = form;
    const { convertedImagesValues } = this.state
    const { setFieldsValue } = this.props.form;
    
    
    const submitUpdateForm = () => {
     validateFieldsAndScroll((error, values) => {
        if (error) {
          console.log("code go here", error);
          return;
        }

        const { owner } = this.props;
        const secUserId = values.id;
        const imagesValues = this.mapBackToImageValues(convertedImagesValues);
        const parameters = { ...values,secUserId, ...imagesValues };

	    const newIndex= currentUpdateIndex+1;
        dispatch({
          type: owner.type+'/updateSecUser',
          payload: {id:owner.id,type:'secUser', 
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
        const secUserId = values.id;
        const imagesValues = this.mapBackToImageValues(convertedImagesValues);
        const parameters = { ...values,secUserId, ...imagesValues };

        const { currentUpdateIndex } = this.props;
        
        if(currentUpdateIndex>=selectedRows.length-1){
          return;
       }
       this.setState({
        currentUpdateIndex: currentUpdateIndex+1,
       });
       //setFieldsValue(selectedRows[currentUpdateIndex+1]);
       const newIndex= currentUpdateIndex+1;
       dispatch({
          type: owner.type+'/updateSecUser',
          payload: {id:owner.id,type:'secUser', 
            parameters: parameters,
            selectedRows,currentUpdateIndex:newIndex,continueNext:true},
       });
        
       
      });
    };
    
    const skipToNext = () => {

      const { currentUpdateIndex } = this.props;
      const { owner } = this.props;
        
      const newIndex= currentUpdateIndex+1;
      dispatch({
          type: owner.type+'/gotoNextSecUserUpdateRow',
            payload: {
              id:owner.id,type:'secUser', 
              selectedRows,currentUpdateIndex:newIndex,
              continueNext:true,
              update:false
            },
      });

      
    };
    
    const goback = () => {
      const {owner} = this.props;
      dispatch({
         type: owner.type+'/goback',
         payload: {id:owner.id,type:'secUser'},
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
    
    if (!selectedRows) {
      return (<div>缺少被更新的对象</div>)
    }
    
    return (
      <PageHeaderLayout
        
        title={"更新SEC的用户"+(currentUpdateIndex+1)+"/"+selectedRows.length}
        content="更新SEC的用户"
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
                <Form.Item label={fieldLabels.login}>
                  {getFieldDecorator('login', {
                    rules: [{ required: true, message: '请输入登录' }],
                  })(
                    <Input placeholder="请输入请输入登录string" />
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
                <Form.Item label={fieldLabels.email}>
                  {getFieldDecorator('email', {
                    rules: [{ required: true, message: '请输入电子邮件' }],
                  })(
                    <Input placeholder="请输入请输入电子邮件string_email" />
                  )}
                </Form.Item>
              </Col>			
			
			
             <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.pwd}>
                  {getFieldDecorator('pwd', {
                    rules: [{ required: true, message: '请输入PWD' }],
                  })(
                    <Input placeholder="请输入请输入PWDstring_password" />
                  )}
                </Form.Item>
              </Col>			
			
			
             <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.verificationCode}>
                  {getFieldDecorator('verificationCode', {
                    rules: [{ required: true, message: '请输入验证码' }],
                  })(
                    <Input placeholder="请输入请输入验证码int" />
                  )}
                </Form.Item>
              </Col>			
			
			
             <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.verificationCodeExpire}>
                  {getFieldDecorator('verificationCodeExpire', {
                    rules: [{ required: true, message: '请输入验证码过期' }],
                  })(
                    <Input placeholder="请输入请输入验证码过期date_time" />
                  )}
                </Form.Item>
              </Col>			
			
			
             <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.lastLoginTime}>
                  {getFieldDecorator('lastLoginTime', {
                    rules: [{ required: true, message: '请输入最后登录时间' }],
                  })(
                    <Input placeholder="请输入请输入最后登录时间date_time" />
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
        <Button type="info" onClick={skipToNext} loading={submitting} disabled={currentUpdateIndex+1>=selectedRows.length}>
            略过
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
}))(Form.create()(SecUserUpdateForm));



