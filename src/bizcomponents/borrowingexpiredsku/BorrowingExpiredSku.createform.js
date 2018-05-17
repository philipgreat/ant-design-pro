import React, { Component } from 'react'
import { AutoComplete, Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover,Switch } from 'antd'

import { connect } from 'dva'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
//import PictureEdit from '../../components/PictureEdit'
//import OSSPictureEdit from '../../components/PictureEdit'
import {ImageComponent} from '../../axios/tools'
import FooterToolbar from '../../components/FooterToolbar'
//import ImageUpload from '../../components/ImageUpload'
import styles from './BorrowingExpiredSku.createform.less'
import {mapBackToImageValues, mapFromImageValues} from '../../axios/tools'
import GlobalComponents from '../../custcomponents';
const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input
const fieldLabels = {
  id: 'ID',
  borrower: '借款人',
  bookCopy: '书副本',
  book: '书',
  bookName: '书的名字',
  lendingStore: '贷款商店',
  lendingDatetime: '贷款Datetime',
  returnStore: '返回商店',
  returnDatetime: '返回日期时间',
  expiredDays: '天到期',
  expiredFee: '过期的费用',
  costPaymentStatus: '成本付款状态',
  borrowingHistory: '借贷历史',
}
const testValues = {};
/*
const testValues = {
  bookName: '书籍名称',
  lendingDatetime: '2998-10-17 00:32:22',
  returnDatetime: '2997-06-25 16:25:49',
  expiredDays: '7',
  expiredFee: '6.93',
  costPaymentStatus: '已支付',
  borrowerId: 'C000001',
  bookCopyId: 'BC000001',
  bookId: 'B000001',
  lendingStoreId: 'S000001',
  returnStoreId: 'S000001',
  borrowingHistoryId: 'BH000001',
}
*/
const imageURLPrefix = '//localhost:2090'


const imageKeys = [
]


class BorrowingExpiredSkuCreateForm extends Component {
  state = {
    previewVisible: false,
    previewImage: '',
    convertedImagesValues: {},
  }

  componentDidMount() {
    // const { getFieldDecorator,setFieldsValue } = this.props.form
    const { setFieldsValue } = this.props.form
    //setFieldsValue(testValues)
      
    this.executeCandidateBorrowerSearch("")
    
    
    this.executeCandidateBookCopySearch("")
    
    
    this.executeCandidateBookSearch("")
    
    
    this.executeCandidateLendingStoreSearch("")
    
    
    this.executeCandidateReturnStoreSearch("")
    
    
    this.executeCandidateBorrowingHistorySearch("")
    
 
    
    
    
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

  
  executeCandidateBorrowerSearch = (filterKey) =>{

    const {BorrowingExpiredSkuService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = BorrowingExpiredSkuService.requestCandidateBorrower("customer", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateBorrowerList=>{
      this.setState({
        candidateBorrowerList
      })

    })

  }	 
  handleCandidateBorrowerSearch = (value) => {
    this.executeCandidateBorrowerSearch(value)
  }

  executeCandidateBookCopySearch = (filterKey) =>{

    const {BorrowingExpiredSkuService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = BorrowingExpiredSkuService.requestCandidateBookCopy("bookCopy", id, filterKey, pageNo);
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

  executeCandidateBookSearch = (filterKey) =>{

    const {BorrowingExpiredSkuService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = BorrowingExpiredSkuService.requestCandidateBook("book", id, filterKey, pageNo);
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

  executeCandidateLendingStoreSearch = (filterKey) =>{

    const {BorrowingExpiredSkuService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = BorrowingExpiredSkuService.requestCandidateLendingStore("store", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateLendingStoreList=>{
      this.setState({
        candidateLendingStoreList
      })

    })

  }	 
  handleCandidateLendingStoreSearch = (value) => {
    this.executeCandidateLendingStoreSearch(value)
  }

  executeCandidateReturnStoreSearch = (filterKey) =>{

    const {BorrowingExpiredSkuService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = BorrowingExpiredSkuService.requestCandidateReturnStore("store", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateReturnStoreList=>{
      this.setState({
        candidateReturnStoreList
      })

    })

  }	 
  handleCandidateReturnStoreSearch = (value) => {
    this.executeCandidateReturnStoreSearch(value)
  }

  executeCandidateBorrowingHistorySearch = (filterKey) =>{

    const {BorrowingExpiredSkuService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = BorrowingExpiredSkuService.requestCandidateBorrowingHistory("borrowingHistory", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateBorrowingHistoryList=>{
      this.setState({
        candidateBorrowingHistoryList
      })

    })

  }	 
  handleCandidateBorrowingHistorySearch = (value) => {
    this.executeCandidateBorrowingHistorySearch(value)
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
          type: `${owner.type}/addBorrowingExpiredSku`,
          payload: { id: owner.id, type: 'borrowingExpiredSku', parameters },
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
          type: `${owner.type}/addBorrowingExpiredSku`,
          payload: { id: owner.id, type: 'borrowingExpiredSku', parameters, continueNext: true },
        })
      })
    }
    
    const goback = () => {
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/goback`,
        payload: { id: owner.id, type: 'borrowingExpiredSku',listName:'借款到期Sku列表' },
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
    

    
    const {candidateBorrowerList} = this.state
    if(!candidateBorrowerList){
      return (<div>等等</div>)
    }
    if(!candidateBorrowerList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateBookCopyList} = this.state
    if(!candidateBookCopyList){
      return (<div>等等</div>)
    }
    if(!candidateBookCopyList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateBookList} = this.state
    if(!candidateBookList){
      return (<div>等等</div>)
    }
    if(!candidateBookList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateLendingStoreList} = this.state
    if(!candidateLendingStoreList){
      return (<div>等等</div>)
    }
    if(!candidateLendingStoreList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateReturnStoreList} = this.state
    if(!candidateReturnStoreList){
      return (<div>等等</div>)
    }
    if(!candidateReturnStoreList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateBorrowingHistoryList} = this.state
    if(!candidateBorrowingHistoryList){
      return (<div>等等</div>)
    }
    if(!candidateBorrowingHistoryList.candidates){
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
        title="新建一个借款到期Sku"
        content="新建一个借款到期Sku"
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
                <Form.Item label={fieldLabels.lendingDatetime} {...formItemLayout}>
                  {getFieldDecorator('lendingDatetime', {
                    rules: [{ required: true, message: '请输入贷款Datetime' }],
                  })(
                    <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" placeholder="请输入贷款Datetime" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.returnDatetime} {...formItemLayout}>
                  {getFieldDecorator('returnDatetime', {
                    rules: [{ required: true, message: '请输入返回日期时间' }],
                  })(
                    <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" placeholder="请输入返回日期时间" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.expiredDays} {...formItemLayout}>
                  {getFieldDecorator('expiredDays', {
                    rules: [{ required: true, message: '请输入天到期' }],
                  })(
                    <Input placeholder="请输入天到期" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.expiredFee} {...formItemLayout}>
                  {getFieldDecorator('expiredFee', {
                    rules: [{ required: true, message: '请输入过期的费用' }],
                  })(
                    <Input placeholder="请输入过期的费用" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.costPaymentStatus} {...formItemLayout}>
                  {getFieldDecorator('costPaymentStatus', {
                    rules: [{ required: true, message: '请输入成本付款状态' }],
                  })(
                    <Input placeholder="请输入成本付款状态" />
                  )}
                </Form.Item>
              </Col>

            </Row>
          </Form>
        </Card>



       
        









        <Card title="关联" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.borrower} {...formItemLayout}>
                  {getFieldDecorator('borrowerId', {
                  	initialValue: tryinit('borrower'),
                    rules: [{ required: true, message: '请输入借款人' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidateBorrowerList.candidates}
                    
                    
                    onSearch={this.handleCandidateBorrowerSearch}
                    placeholder="请输入借款人"
                    
                    disabled={!availableForEdit('borrower')}
                  >
                  {candidateBorrowerList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.nickName}(${item.id})`}</Option>);
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
                <Form.Item label={fieldLabels.lendingStore} {...formItemLayout}>
                  {getFieldDecorator('lendingStoreId', {
                  	initialValue: tryinit('lendingStore'),
                    rules: [{ required: true, message: '请输入贷款商店' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidateLendingStoreList.candidates}
                    
                    
                    onSearch={this.handleCandidateLendingStoreSearch}
                    placeholder="请输入贷款商店"
                    
                    disabled={!availableForEdit('lendingStore')}
                  >
                  {candidateLendingStoreList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.storeName}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.returnStore} {...formItemLayout}>
                  {getFieldDecorator('returnStoreId', {
                  	initialValue: tryinit('returnStore'),
                    rules: [{ required: true, message: '请输入返回商店' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidateReturnStoreList.candidates}
                    
                    
                    onSearch={this.handleCandidateReturnStoreSearch}
                    placeholder="请输入返回商店"
                    
                    disabled={!availableForEdit('returnStore')}
                  >
                  {candidateReturnStoreList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.storeName}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.borrowingHistory} {...formItemLayout}>
                  {getFieldDecorator('borrowingHistoryId', {
                  	initialValue: tryinit('borrowingHistory'),
                    rules: [{ required: true, message: '请输入借贷历史' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidateBorrowingHistoryList.candidates}
                    
                    
                    onSearch={this.handleCandidateBorrowingHistorySearch}
                    placeholder="请输入借贷历史"
                    
                    disabled={!availableForEdit('borrowingHistory')}
                  >
                  {candidateBorrowingHistoryList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.borrowerMemberLevel}(${item.id})`}</Option>);
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
}))(Form.create()(BorrowingExpiredSkuCreateForm))




