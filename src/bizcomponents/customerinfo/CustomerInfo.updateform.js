import React, { PureComponent } from 'react';
import { Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover } from 'antd';
import moment from 'moment';
import { connect } from 'dva';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import PictureEdit from '../../components/PictureEdit'
import FooterToolbar from '../../components/FooterToolbar';

import styles from './CustomerInfo.updateform.less';

const { Option } = Select;
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const fieldLabels = {
id: '序号',
platform: '平台',
customerName: '客户名称',
customerPhoneNumber: '客户的电话号码',
customerIdentifyCardNumber: '客户身份证号',
customerIdentifyCardFrontImage: '客户身份证正面照片',
customerIdentifyCardBackImage: '客户身份证背面照片',


};





const imagesValues={
        
      			customerIdentifyCardFrontImage:'身份证正面.jpg',
			customerIdentifyCardBackImage:'身份证反面.jpg',

        
        };




class CustomerInfoUpdateForm extends PureComponent {

  state = {
    previewVisible: false,
    previewImage: '',

    convertedImagesValues:{
        
      customerIdentifyCardFrontImage:[
        {key:'123',uid:'123',url:"//localhost:2090/private/2e695fff-0b3b-4ca9-aed3-134c8147d418"},
      ],
    customerIdentifyCardBackImage:[
        {key:'123',uid:'123',url:"//localhost:2090/private/aa44c9e5-fbde-483e-8ce1-cd2799d987c7"},
      ],

  
  }


  };
  //fileList: []
  // fileList: [{key:'123',uid:'123',url:"//localhost:2090/private/2e695fff-0b3b-4ca9-aed3-134c8147d418"}],
  handlePreview = (file) => {
    console.log("preview file", file)
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  }
  shouldComponentUpdate(){
    return true;
  }

  handleChange = (event, source ) =>{ 
    console.log("get file list from change in update change: ", source);
   
    const {fileList} = event;
    var convertedImagesValues = this.state.convertedImagesValues;
    convertedImagesValues[source] = fileList;
    this.setState({ convertedImagesValues })


    console.log("/get file list from change in update change: ", source);
    
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
  
          }

      });
      setFieldsValue(convertiedValues[currentUpdateIndex]);
    }
    
        
        
  }

  render() {
    const { form, dispatch, submitting,selectedRows,currentUpdateIndex } = this.props;
    const { fileList } = this.state;
    console.log("render in updateform");
    const { getFieldDecorator, validateFieldsAndScroll, getFieldsError } = form;
    const {convertedImagesValues} = this.state
    const { setFieldsValue } = this.props.form;
    
    const submitUpdateForm = () => {
     validateFieldsAndScroll((error, values) => {
        if (error) {
          console.log("code go here", error);
          return;
        }

        const { owner } = this.props;
        const customerInfoId = values.id;
        const parameters = { ...values,customerInfoId, ...imagesValues };

       
       //setFieldsValue(selectedRows[currentUpdateIndex+1]);
       const newIndex= currentUpdateIndex+1;
       dispatch({
          type: owner.type+'/updateCustomerInfo',
          payload: {id:owner.id,type:'customerInfo', 
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
        const customerInfoId = values.id;
        const parameters = { ...values,customerInfoId, ...imagesValues };

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
          type: owner.type+'/updateCustomerInfo',
          payload: {id:owner.id,type:'customerInfo', 
            parameters: parameters,
            selectedRows,currentUpdateIndex:newIndex,continueNext:true},
       });
        
       
      });
    };
    
    const goback = () => {
      const {owner} = this.props;
      dispatch({
         type: owner.type+'/goback',
         payload: {id:owner.id,type:'customerInfo'},
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

    if(!selectedRows){
      return (<div>缺少被更新的对象</div>)
    }
    return (
      
      <PageHeaderLayout
        
        title={"更新客户信息"+(currentUpdateIndex+1)+"/"+selectedRows.length}
        content="更新客户信息"
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
                <Form.Item label={fieldLabels.customerName}>
                  {getFieldDecorator('customerName', {
                    rules: [{ required: true, message: '请输入客户名称' }],
                  })(
                    <Input placeholder="请输入请输入客户名称string" />
                  )}
                </Form.Item>
              </Col>			
			
			
             <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.customerPhoneNumber}>
                  {getFieldDecorator('customerPhoneNumber', {
                    rules: [{ required: true, message: '请输入客户的电话号码' }],
                  })(
                    <Input placeholder="请输入请输入客户的电话号码string" />
                  )}
                </Form.Item>
              </Col>			
			
			
             <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.customerIdentifyCardNumber}>
                  {getFieldDecorator('customerIdentifyCardNumber', {
                    rules: [{ required: true, message: '请输入客户身份证号' }],
                  })(
                    <Input placeholder="请输入请输入客户身份证号string" />
                  )}
                </Form.Item>
              </Col>			
			
			
            
          </Row>    
          </Form>  
        </Card>
        
     
        
 
            
        
      
      
            
        
         
        
        <Card title="附件" className={styles.card} bordered={false}>
           <Form layout="vertical" hideRequiredMark>
            <Row gutter={10}>
            
            
            <Col lg={6} md={12} sm={24}>
            <PictureEdit buttonTitle={"客户身份证正面照片"} 
            handleChange={(event)=>this.handleChange(event,"customerIdentifyCardFrontImage")} 
            handlePreview={this.handlePreview}
            
            fileList={convertedImagesValues.customerIdentifyCardFrontImage}/> 
          </Col>			
          <Col lg={6} md={12} sm={24}>
                <PictureEdit buttonTitle={"客户身份证正面照片"} 
                handleChange={(event)=>this.handleChange(event,"customerIdentifyCardBackImage")} 
                handlePreview={this.handlePreview}
                
                fileList={convertedImagesValues.customerIdentifyCardBackImage}/> 
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
}))(Form.create()(CustomerInfoUpdateForm));




