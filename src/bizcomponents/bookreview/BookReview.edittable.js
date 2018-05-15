

import React, { PureComponent } from 'react'
import moment from 'moment'
import {Form,Button, Table, Alert, Badge,Input,Divider,Popconfirm } from 'antd'
import styles from './BookReview.edittable.less'
import ImagePreview from '../../components/ImagePreview'






const getRowById = (data,id) => {
  return data.filter(item => item.id === id)[0];
}

const toggleEdit = (e,data,id) =>{
  const row =  data.filter(item => item.id === id)[0];
  row[editable] = true
}




class BookReviewEditTable extends PureComponent {

  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      data: props.data,
      

    };
  }


  componentWillReceiveProps(nextProps) {

    const {data}=nextProps;
    this.setState({
        data: data,
    });
    
  }


  render() {
    // const { data,count,current, owner } = this.props
    const { data } = this.state
    const {appendInProcess} =  this.state;

    const changeText =(e, fieldName, record)=>{
      const newData = [...this.state.data];
      
      const row = getRowById(newData,record.id);
      console.log("text is changed row", row)
      if(row){
        row[fieldName] = e.target.value
        this.setState({ data: newData });
      }

    }

    const toggleEdit = (e,record) =>{
      const newData = [...this.state.data];
      const row =  newData.filter(item => item.id === record.id)[0];
      row.editable = !row.editable 
      this.setState({ data: newData });
    }
    const removeFromArray = (array, element) => {
      const index = array.indexOf(element);
      console.log("remove from array")
      if (index !== -1) {
        console.log("-------------remove from array")
          array.splice(index, 1);
      }
  }
    const cancelAppend = (e,record) =>{
      const newData = [...this.state.data];
      removeFromArray(newData,record);
      this.setState({ data: newData, appendInProcess:false });
    }
    const remapReference = (record) => {
			const bookInfoId = record.bookInfo.id
			const bookCopyId = record.bookCopy.id
			const bookReviewTypeId = record.bookReviewType.id
			const reviewerId = record.reviewer.id

      //const communityId = record.community.id;
      return {bookInfoId,bookCopyId,bookReviewTypeId,reviewerId,};
    }
    const deleteRecord = (e,record) =>{
      const {dispatch, owner} = this.props
      const {data} = this.state
      const bookReviewIds = [record.id];
      const parameters = { bookReviewIds }
      dispatch({
        type: `${owner.type}/removeBookReviewList`,
        payload: { id: owner.id, type: 'bookReview', parameters },
      })
    }


    const addRecord = (e,record) =>{
      const {dispatch, owner} = this.props
      const {data} = this.state
      const communityId = record.community.id;
      const parameters = { ...record, ...remapReference(record)}
      const newData = [...data];
      

      dispatch({
        type: `${owner.type}/addBookReview`,
        payload: {
          id: owner.id,
          type: 'bookReview',
          parameters,
          selectedRows:newData,
          currentUpdateIndex: 0,
          continueNext: true,
        },
      })
      this.setState({ appendInProcess: false });

    }

    const updateRecord = (e,record) =>{
      const {dispatch, owner} = this.props
      const {data} = this.state
      const {bookReviewId} = record.id
      const parameters = { ...record, bookReviewId }
      const newData = [...data];
      const row =  newData.filter(item => item.id === record.id)[0];
      row.editable = !row.editable 

      dispatch({
        type: `${owner.type}/updateBookReview`,
        payload: {
          id: owner.id,
          type: 'bookReview',
          parameters,
          selectedRows:newData,
          currentUpdateIndex: 0,
          continueNext: true,
        },
      })
     

    }

    const isAppendingRow =(record)=>{

      return appendInProcess&&record.id.indexOf("+")===0;
    }

    const renderStringEdit = (name, text, record)=>{
 
      if(isAppendingRow(record)){
        return (<Input size={"small"} style={{width:'80%'}} value={text} onChange={(e)=>changeText(e, name, record)} placeholder={"NO"}/>) 
      }
      if(record.editable){
        return (<Input size={"small"} style={{width:'80%'}} value={text} onChange={(e)=>changeText(e, name, record)} placeholder={"NO"}/>) 
      }
      return text;
    }

    const renderActions = (text,record)=>{
    
      if(isAppendingRow(record)){
        return (<div><a onClick={(e)=>addRecord(e,record)}>增加</a>
         <Divider type="vertical" />
         <a onClick={(e)=>cancelAppend(e,record)}>取消</a></div>) 
    
      }
      if(record.editable){
        return (<div><a onClick={(e)=>updateRecord(e,record)}>保存</a> 
         <Divider type="vertical" />
        <a onClick={(e)=>toggleEdit(e,record)}>取消</a></div>) 
      }
      return (<div><a onClick={(e)=>toggleEdit(e,record)}>编辑</a> 
        <Divider type="vertical" />
        
        <Popconfirm title="是否要删除此行？" onConfirm={(e)=>deleteRecord(e,record)}>
          <a>删除</a>
        </Popconfirm>  </div>
    
    );

    }
    
    
    
    const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20',  },
  { title: '书的信息', dataIndex: 'bookInfo', render: (text, record) => (record.bookInfo ? record.bookInfo.displayName : '暂无') },
  { title: '书副本', dataIndex: 'bookCopy', render: (text, record) => (record.bookCopy ? record.bookCopy.displayName : '暂无') },
  { title: '书评类型', dataIndex: 'bookReviewType', render: (text, record) => (record.bookReviewType ? record.bookReviewType.displayName : '暂无') },
  { title: '评论家', dataIndex: 'reviewer', render: (text, record) => (record.reviewer ? record.reviewer.displayName : '暂无') },
  { title: '评论发布日期时间', dataIndex: 'reviewPublishDatetime', render: (text, record) => moment(record.reviewPublishDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '审查内容', debugtype: 'string', dataIndex: 'reviewContent', width: '13', render: (text, record) => renderStringEdit('reviewContent',text, record)  },
  { title: '回顾Image1', dataIndex: 'reviewImage1', render: (text, record) => <ImagePreview imageLocation={record.reviewImage1} /> },
  { title: '回顾Image2', dataIndex: 'reviewImage2', render: (text, record) => <ImagePreview imageLocation={record.reviewImage2} /> },
  { title: '回顾Image3', dataIndex: 'reviewImage3', render: (text, record) => <ImagePreview imageLocation={record.reviewImage3} /> },
  { title: '回顾Image4', dataIndex: 'reviewImage4', render: (text, record) => <ImagePreview imageLocation={record.reviewImage4} /> },
  { title: '回顾Image5', dataIndex: 'reviewImage5', render: (text, record) => <ImagePreview imageLocation={record.reviewImage5} /> },
{ title: '操作',
   render: (text, record) => renderActions(text, record)}]
   
    const newRecord =()=>{
      const newBookReviewToAppend  = {
      	'id':`+1`, 
				'bookInfo':'',
				'bookCopy':'',
				'bookReviewType':'',
				'reviewer':'',
				'reviewPublishDatetime':'',
				'reviewContent':'',
				'reviewImage1':'',
				'reviewImage2':'',
				'reviewImage3':'',
				'reviewImage4':'',
				'reviewImage5':'',


      };
      const newData = data ? [...data]:[];
      newData.push(newBookReviewToAppend);
      this.setState({ data: newData, appendInProcess: true });


    }
    

   
    
    return (
      <div className={styles.standardTable}>
        
        <Table
          rowKey={record => record.id}
          dataSource={data}
          columns={columns}
          size="small"
          pagination={false}
          scroll={{ x: 800 }}
        />

       {
        !appendInProcess&&(<Button
          style={{ width: '100%', marginTop: 16, marginBottom: 8 }}
          type="dashed"
          onClick={newRecord}
          icon="plus"
        >
          新增
        </Button>)}
      </div>
    )
  }
}

export default Form.create()(BookReviewEditTable)



