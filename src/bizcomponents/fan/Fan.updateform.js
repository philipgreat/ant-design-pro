import React, { PureComponent } from 'react';
import { Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover } from 'antd';

import { connect } from 'dva';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import PictureEdit from '../../components/PictureEdit'
import FooterToolbar from '../../components/FooterToolbar';

import styles from './Fan.updateform.less';

const { Option } = Select;
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const fieldLabels = {
id: '序号',
user: '用户',
fanId: '粉丝的ID',
addingTime: '添加时间',


};





const imagesValues={
        
      
        
        };




class FanUpdateForm extends PureComponent {

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
         type: owner.type+'/updateFan',
         payload: {id:owner.id,type:'fan', parameters: parameters},
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
         payload: {id:owner.id,type:'fan'},
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
        
        title={"更新粉丝"+(currentUpdateIndex+1)+"/"+selectedRows.length}
        content="更新粉丝"
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
                <Form.Item label={fieldLabels.fanId}>
                  {getFieldDecorator('fanId', {
                    rules: [{ required: true, message: '请输入粉丝的ID' }],
                  })(
                    <Input placeholder="请输入请输入粉丝的IDstring" />
                  )}
                </Form.Item>
              </Col>			
			
			
             <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.addingTime}>
                  {getFieldDecorator('addingTime', {
                    rules: [{ required: true, message: '请输入添加时间' }],
                  })(
                    <Input placeholder="请输入请输入添加时间date_time_now" />
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
}))(Form.create()(FanUpdateForm));




