import React, { Component } from 'react';
import { Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover } from 'antd';
import moment from 'moment';
import { connect } from 'dva';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import PictureEdit from '../../components/PictureEdit'
import OSSPictureEdit from '../../components/OSSPictureEdit'

import FooterToolbar from '../../components/FooterToolbar';

import styles from './ObjectAccess.updateform.less';

const { Option } = Select;
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const fieldLabels = {
id: '序号',
displayName: '显示名称',
objectType: '对象类型',
list1: '列表1',
list2: '列表2',
list3: '列表3',
list4: '列表4',
list5: '列表5',
list6: '列表6',
list7: '列表7',
list8: '列表8',
list9: '列表9',
app: '应用程序',


};



const imageURLPrefix = "//localhost:2090"


const imageKeys = [
];




class ObjectAccessUpdateForm extends Component {

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
        if(value.response.indexOf("//")==0){
          targetImages[key] = value.response;
          return;
        }
        if(value.response.indexOf("http://")==0){
          targetImages[key] = value.response;
          return;
        }
        if(value.response.indexOf("https://")==0){
          targetImages[key] = value.response;
          return;
        }
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
        const objectAccessId = values.id;
        const imagesValues = this.mapBackToImageValues(convertedImagesValues);
        const parameters = { ...values,objectAccessId, ...imagesValues };

	    const newIndex= currentUpdateIndex+1;
        dispatch({
          type: owner.type+'/updateObjectAccess',
          payload: {id:owner.id,type:'objectAccess', 
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
        const objectAccessId = values.id;
        const imagesValues = this.mapBackToImageValues(convertedImagesValues);
        const parameters = { ...values,objectAccessId, ...imagesValues };

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
          type: owner.type+'/updateObjectAccess',
          payload: {id:owner.id,type:'objectAccess', 
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
          type: owner.type+'/gotoNextObjectAccessUpdateRow',
            payload: {
              id:owner.id,type:'objectAccess', 
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
         payload: {id:owner.id,type:'objectAccess'},
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
        
        title={"更新对象访问"+(currentUpdateIndex+1)+"/"+selectedRows.length}
        content="更新对象访问"
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
                <Form.Item label={fieldLabels.displayName}>
                  {getFieldDecorator('displayName', {
                    rules: [{ required: true, message: '请输入显示名称' }],
                  })(
                    <Input placeholder="请输入请输入显示名称string" />
                  )}
                </Form.Item>
              </Col>			
			
			
             <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.objectType}>
                  {getFieldDecorator('objectType', {
                    rules: [{ required: true, message: '请输入对象类型' }],
                  })(
                    <Input placeholder="请输入请输入对象类型string" />
                  )}
                </Form.Item>
              </Col>			
			
			
             <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.list1}>
                  {getFieldDecorator('list1', {
                    rules: [{ required: true, message: '请输入列表1' }],
                  })(
                    <Input placeholder="请输入请输入列表1string" />
                  )}
                </Form.Item>
              </Col>			
			
			
             <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.list2}>
                  {getFieldDecorator('list2', {
                    rules: [{ required: true, message: '请输入列表2' }],
                  })(
                    <Input placeholder="请输入请输入列表2string" />
                  )}
                </Form.Item>
              </Col>			
			
			
             <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.list3}>
                  {getFieldDecorator('list3', {
                    rules: [{ required: true, message: '请输入列表3' }],
                  })(
                    <Input placeholder="请输入请输入列表3string" />
                  )}
                </Form.Item>
              </Col>			
			
			
             <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.list4}>
                  {getFieldDecorator('list4', {
                    rules: [{ required: true, message: '请输入列表4' }],
                  })(
                    <Input placeholder="请输入请输入列表4string" />
                  )}
                </Form.Item>
              </Col>			
			
			
             <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.list5}>
                  {getFieldDecorator('list5', {
                    rules: [{ required: true, message: '请输入列表5' }],
                  })(
                    <Input placeholder="请输入请输入列表5string" />
                  )}
                </Form.Item>
              </Col>			
			
			
             <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.list6}>
                  {getFieldDecorator('list6', {
                    rules: [{ required: true, message: '请输入列表6' }],
                  })(
                    <Input placeholder="请输入请输入列表6string" />
                  )}
                </Form.Item>
              </Col>			
			
			
             <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.list7}>
                  {getFieldDecorator('list7', {
                    rules: [{ required: true, message: '请输入列表7' }],
                  })(
                    <Input placeholder="请输入请输入列表7string" />
                  )}
                </Form.Item>
              </Col>			
			
			
             <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.list8}>
                  {getFieldDecorator('list8', {
                    rules: [{ required: true, message: '请输入列表8' }],
                  })(
                    <Input placeholder="请输入请输入列表8string" />
                  )}
                </Form.Item>
              </Col>			
			
			
             <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.list9}>
                  {getFieldDecorator('list9', {
                    rules: [{ required: true, message: '请输入列表9' }],
                  })(
                    <Input placeholder="请输入请输入列表9string" />
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
}))(Form.create()(ObjectAccessUpdateForm));


