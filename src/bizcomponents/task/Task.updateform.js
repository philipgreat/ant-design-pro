import React, { Component } from 'react';
import { Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover } from 'antd';
import moment from 'moment';
import { connect } from 'dva';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import PictureEdit from '../../components/PictureEdit'
import OSSPictureEdit from '../../components/OSSPictureEdit'

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



const imageURLPrefix = "//localhost:2090"


const imageKeys = [
  "coverImagePath1",
  "coverImagePath2",
  "coverImagePath3",
  "imagePath1",
  "imagePath2",
  "imagePath3",
  "imagePath4",
  "imagePath5"
];




class TaskUpdateForm extends Component {

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
			createTime: moment(item.createTime).format('YYYY-MM-DD'),
  
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
        const taskId = values.id;
        const imagesValues = this.mapBackToImageValues(convertedImagesValues);
        const parameters = { ...values,taskId, ...imagesValues };

	    const newIndex= currentUpdateIndex+1;
        dispatch({
          type: owner.type+'/updateTask',
          payload: {id:owner.id,type:'task', 
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
        const taskId = values.id;
        const imagesValues = this.mapBackToImageValues(convertedImagesValues);
        const parameters = { ...values,taskId, ...imagesValues };

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
          type: owner.type+'/updateTask',
          payload: {id:owner.id,type:'task', 
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
          type: owner.type+'/gotoNextTaskUpdateRow',
            payload: {
              id:owner.id,type:'task', 
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
    
    if (!selectedRows) {
      return (<div>缺少被更新的对象</div>)
    }
    
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
                <Form.Item label={fieldLabels.id}>
                  {getFieldDecorator('id', {
                    rules: [{ required: true, message: '请输入序号' }],
                  })(
                    <Input placeholder="请输入请输入序号string" disabled={true}/>
                  )}
                </Form.Item>
              </Col>			
			
			
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
                <OSSPictureEdit buttonTitle={"封面图像路径1"} 
                	handlePreview={this.handlePreview}
                	handleChange={(event) => this.handleChange(event, "coverImagePath1")}
                 	fileList={convertedImagesValues.coverImagePath1} />
                 
              </Col>
			
			
             <Col lg={6} md={12} sm={24}>
                <OSSPictureEdit buttonTitle={"封面图像路径2"} 
                	handlePreview={this.handlePreview}
                	handleChange={(event) => this.handleChange(event, "coverImagePath2")}
                 	fileList={convertedImagesValues.coverImagePath2} />
                 
              </Col>
			
			
             <Col lg={6} md={12} sm={24}>
                <OSSPictureEdit buttonTitle={"封面图像路径3"} 
                	handlePreview={this.handlePreview}
                	handleChange={(event) => this.handleChange(event, "coverImagePath3")}
                 	fileList={convertedImagesValues.coverImagePath3} />
                 
              </Col>
			
			
             <Col lg={6} md={12} sm={24}>
                <OSSPictureEdit buttonTitle={"图1"} 
                	handlePreview={this.handlePreview}
                	handleChange={(event) => this.handleChange(event, "imagePath1")}
                 	fileList={convertedImagesValues.imagePath1} />
                 
              </Col>
			
			
             <Col lg={6} md={12} sm={24}>
                <OSSPictureEdit buttonTitle={"图2"} 
                	handlePreview={this.handlePreview}
                	handleChange={(event) => this.handleChange(event, "imagePath2")}
                 	fileList={convertedImagesValues.imagePath2} />
                 
              </Col>
			
			
             <Col lg={6} md={12} sm={24}>
                <OSSPictureEdit buttonTitle={"图3"} 
                	handlePreview={this.handlePreview}
                	handleChange={(event) => this.handleChange(event, "imagePath3")}
                 	fileList={convertedImagesValues.imagePath3} />
                 
              </Col>
			
			
             <Col lg={6} md={12} sm={24}>
                <OSSPictureEdit buttonTitle={"图4"} 
                	handlePreview={this.handlePreview}
                	handleChange={(event) => this.handleChange(event, "imagePath4")}
                 	fileList={convertedImagesValues.imagePath4} />
                 
              </Col>
			
			
             <Col lg={6} md={12} sm={24}>
                <OSSPictureEdit buttonTitle={"图5"} 
                	handlePreview={this.handlePreview}
                	handleChange={(event) => this.handleChange(event, "imagePath5")}
                 	fileList={convertedImagesValues.imagePath5} />
                 
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
}))(Form.create()(TaskUpdateForm));



