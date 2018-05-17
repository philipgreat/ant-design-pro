import React, { Component } from 'react'
import { AutoComplete, Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover,Switch } from 'antd'

import { connect } from 'dva'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
//import PictureEdit from '../../components/PictureEdit'
//import OSSPictureEdit from '../../components/PictureEdit'
import {ImageComponent} from '../../axios/tools'
import FooterToolbar from '../../components/FooterToolbar'
//import ImageUpload from '../../components/ImageUpload'
import styles from './BookCopySku.createform.less'
import {mapBackToImageValues, mapFromImageValues} from '../../axios/tools'
import GlobalComponents from '../../custcomponents';
const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input
const fieldLabels = {
  id: 'ID',
  book: '书',
  bookCopy: '书副本',
  bookName: '书的名字',
  bookCover: '书的封面',
  bookAuthor: '书的作者',
  bookPublisher: '图书出版者',
  bookPubdate: '书的作用',
  listPrice: '列出的价格',
  evaluationPrice: '评估价格',
  bookIsbn13: '书Isbn13',
  bookIsbn10: '书Isbn10',
  bookStatus: '书的地位',
  bookManagement: '图书管理',
}
const testValues = {};
/*
const testValues = {
  bookName: '飘',
  bookAuthor: '吕之华',
  bookPublisher: '中信出版社',
  bookPubdate: '2010-10-16',
  listPrice: '59.20',
  evaluationPrice: '70.02',
  bookIsbn13: '9787505715660',
  bookIsbn10: '1032714476',
  bookStatus: '待定-还没想好 这个状态用来干嘛，比如说，这本书籍 out of date 等等...',
  bookId: 'B000001',
  bookCopyId: 'BC000001',
  bookManagementId: 'BM000001',
}
*/
const imageURLPrefix = '//localhost:2090'


const imageKeys = [
  'bookCover',
]


class BookCopySkuCreateForm extends Component {
  state = {
    previewVisible: false,
    previewImage: '',
    convertedImagesValues: {},
  }

  componentDidMount() {
    // const { getFieldDecorator,setFieldsValue } = this.props.form
    const { setFieldsValue } = this.props.form
    //setFieldsValue(testValues)
      
    this.executeCandidateBookSearch("")
    
    
    this.executeCandidateBookCopySearch("")
    
    
    this.executeCandidateBookManagementSearch("")
    
 
    
    
    
  }
  shouldComponentUpdate() {
    return true
  }
  handlePreview = (file) => {
    console.log('preview file', file)
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    })
  }

  
  executeCandidateBookSearch = (filterKey) =>{

    const {BookCopySkuService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = BookCopySkuService.requestCandidateBook("book", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateBookList=>{
      this.setState({
        candidateBookList
      })

    })

  }	 
  handleCandidateBookSearch = (value) => {
    this.executeCandidateBookSearch(value)
  }

  executeCandidateBookCopySearch = (filterKey) =>{

    const {BookCopySkuService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = BookCopySkuService.requestCandidateBookCopy("bookCopy", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateBookCopyList=>{
      this.setState({
        candidateBookCopyList
      })

    })

  }	 
  handleCandidateBookCopySearch = (value) => {
    this.executeCandidateBookCopySearch(value)
  }

  executeCandidateBookManagementSearch = (filterKey) =>{

    const {BookCopySkuService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = BookCopySkuService.requestCandidateBookManagement("bookManagement", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateBookManagementList=>{
      this.setState({
        candidateBookManagementList
      })

    })

  }	 
  handleCandidateBookManagementSearch = (value) => {
    this.executeCandidateBookManagementSearch(value)
  }
 



  handleChange = (event, source) => {
    console.log('get file list from change in update change:', source)

    const { fileList } = event
    const { convertedImagesValues } = this.state

    convertedImagesValues[source] = fileList
    this.setState({ convertedImagesValues })
    console.log('/get file list from change in update change:', source)
  }


  render() {
    const { form, dispatch, submitting } = this.props
    const { convertedImagesValues } = this.state

    const { getFieldDecorator, validateFieldsAndScroll, getFieldsError } = form
    const submitCreateForm = () => {
      validateFieldsAndScroll((error, values) => {
        if (error) {
          console.log('code go here', error)
          return
        }

        const { owner } = this.props
        const imagesValues = mapBackToImageValues(convertedImagesValues)

        const parameters = { ...values, ...imagesValues }
        dispatch({
          type: `${owner.type}/addBookCopySku`,
          payload: { id: owner.id, type: 'bookCopySku', parameters },
        })
      })
    }
    const submitCreateFormAndContinue = () => {
      validateFieldsAndScroll((error, values) => {
        if (error) {
          console.log('code go here', error)
          return
        }
        
        const { owner } = this.props
        const imagesValues = mapBackToImageValues(convertedImagesValues)
        
        const parameters = { ...values, ...imagesValues }
        dispatch({
          type: `${owner.type}/addBookCopySku`,
          payload: { id: owner.id, type: 'bookCopySku', parameters, continueNext: true },
        })
      })
    }
    
    const goback = () => {
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/goback`,
        payload: { id: owner.id, type: 'bookCopySku',listName:'书副本Sku列表' },
      })
    }
    const errors = getFieldsError()
    const getErrorInfo = () => {
      const errorCount = Object.keys(errors).filter(key => errors[key]).length
      if (!errors || errorCount === 0) {
        return null
      }
      // eslint-disable-next-line no-unused-vars
      const scrollToField = (fieldKey) => {
        const labelNode = document.querySelector('label[for="${fieldKey}"]')
        if (labelNode) {
          labelNode.scrollIntoView(true)
        }
      }
      const errorList = Object.keys(errors).map((key) => {
        if (!errors[key]) {
          return null
        }
        return (
          <li key={key} className={styles.errorListItem} onClick={() => scrollToField(key)}>
            <Icon type="cross-circle-o" className={styles.errorIcon} />
            <div className={styles.errorMessage}>{errors[key][0]}</div>
            <div className={styles.errorField}>{fieldLabels[key]}</div>
          </li>
        )
      })
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
      )
    }
    

    
    const {candidateBookList} = this.state
    if(!candidateBookList){
      return (<div>等等</div>)
    }
    if(!candidateBookList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateBookCopyList} = this.state
    if(!candidateBookCopyList){
      return (<div>等等</div>)
    }
    if(!candidateBookCopyList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateBookManagementList} = this.state
    if(!candidateBookManagementList){
      return (<div>等等</div>)
    }
    if(!candidateBookManagementList.candidates){
      return (<div>等等</div>)
    }   
    
    
    
    const tryinit  = (fieldName) => {
      const { owner } = this.props
      const { referenceName } = owner
      if(referenceName!=fieldName){
        return null
      }
      return owner.id
    }
    
    const availableForEdit= (fieldName) =>{
      const { owner } = this.props
      const { referenceName } = owner
      if(referenceName!=fieldName){
        return true
      }
      return false
    
    }
    const formItemLayout = {
      labelCol: { span: 10 },
      wrapperCol: { span: 14 },
    }
    const switchFormItemLayout = {
      labelCol: { span: 14 },
      wrapperCol: { span: 4 },
    }
    return (
      <PageHeaderLayout
        title="新建一个书副本Sku"
        content="新建一个书副本Sku"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.bookName} {...formItemLayout}>
                  {getFieldDecorator('bookName', {
                    rules: [{ required: true, message: '请输入书的名字' }],
                  })(
                    <Input placeholder="请输入书的名字" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.bookAuthor} {...formItemLayout}>
                  {getFieldDecorator('bookAuthor', {
                    rules: [{ required: true, message: '请输入书的作者' }],
                  })(
                    <Input placeholder="请输入书的作者" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.bookPublisher} {...formItemLayout}>
                  {getFieldDecorator('bookPublisher', {
                    rules: [{ required: true, message: '请输入图书出版者' }],
                  })(
                    <Input placeholder="请输入图书出版者" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.bookPubdate} {...formItemLayout}>
                  {getFieldDecorator('bookPubdate', {
                    rules: [{ required: true, message: '请输入书的作用' }],
                  })(
                    <DatePicker format="YYYY-MM-DD" placeholder="请输入书的作用" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.listPrice} {...formItemLayout}>
                  {getFieldDecorator('listPrice', {
                    rules: [{ required: true, message: '请输入列出的价格' }],
                  })(
                    <Input placeholder="请输入列出的价格" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.evaluationPrice} {...formItemLayout}>
                  {getFieldDecorator('evaluationPrice', {
                    rules: [{ required: true, message: '请输入评估价格' }],
                  })(
                    <Input placeholder="请输入评估价格" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.bookIsbn13} {...formItemLayout}>
                  {getFieldDecorator('bookIsbn13', {
                    rules: [{ required: true, message: '请输入书Isbn13' }],
                  })(
                    <Input placeholder="请输入书Isbn13" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.bookIsbn10} {...formItemLayout}>
                  {getFieldDecorator('bookIsbn10', {
                    rules: [{ required: true, message: '请输入书Isbn10' }],
                  })(
                    <Input placeholder="请输入书Isbn10" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.bookStatus} {...formItemLayout}>
                  {getFieldDecorator('bookStatus', {
                    rules: [{ required: true, message: '请输入书的地位' }],
                  })(
                    <Input placeholder="请输入书的地位" />
                  )}
                </Form.Item>
              </Col>

            </Row>
          </Form>
        </Card>



       
        







        <Card title="附件" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>

              <Col lg={6} md={12} sm={24}>
                <ImageComponent
                  buttonTitle="书的封面"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'bookCover')}
                  fileList={convertedImagesValues.bookCover}
                />
              </Col>

            </Row>
          </Form>
        </Card>



        <Card title="关联" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.book} {...formItemLayout}>
                  {getFieldDecorator('bookId', {
                  	initialValue: tryinit('book'),
                    rules: [{ required: true, message: '请输入书' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidateBookList.candidates}
                    
                    
                    onSearch={this.handleCandidateBookSearch}
                    placeholder="请输入书"
                    
                    disabled={!availableForEdit('book')}
                  >
                  {candidateBookList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.bookName}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.bookCopy} {...formItemLayout}>
                  {getFieldDecorator('bookCopyId', {
                  	initialValue: tryinit('bookCopy'),
                    rules: [{ required: true, message: '请输入书副本' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidateBookCopyList.candidates}
                    
                    
                    onSearch={this.handleCandidateBookCopySearch}
                    placeholder="请输入书副本"
                    
                    disabled={!availableForEdit('bookCopy')}
                  >
                  {candidateBookCopyList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.wxaId}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.bookManagement} {...formItemLayout}>
                  {getFieldDecorator('bookManagementId', {
                  	initialValue: tryinit('bookManagement'),
                    rules: [{ required: true, message: '请输入图书管理' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidateBookManagementList.candidates}
                    
                    
                    onSearch={this.handleCandidateBookManagementSearch}
                    placeholder="请输入图书管理"
                    
                    disabled={!availableForEdit('bookManagement')}
                  >
                  {candidateBookManagementList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.bookManagementName}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
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
    )
  }
}

export default connect(state => ({
  collapsed: state.global.collapsed,
}))(Form.create()(BookCopySkuCreateForm))




