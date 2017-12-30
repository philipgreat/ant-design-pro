

import React, { PureComponent } from 'react'
import moment from 'moment'
import {Form,Button, Table, Alert, Badge,Input } from 'antd'
import styles from './InvitationCode.table.less'
import ImagePreview from '../../components/ImagePreview'




const getRowById = (data,id) => {
  return data.filter(item => item.id === id)[0];
}

const toggleEdit = (e,data,id) =>{
  const row =  data.filter(item => item.id === id)[0];
  row[editable] = true
}




class InvitationCodeEditTable extends PureComponent {

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
    
    const changeText =(e, fieldName, record)=>{
      const newData = [...this.state.data];
      console.log("text is changed e", e)
      console.log("text is changed f", fieldName)
      console.log("text is changed key", record.id)
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


    const renderStringEdit = (name, text, record)=>{
      if(!record.editable){
        return text;
      }  
    
      return (<Input value={text} onChange={(e)=>changeText(e, name, record)} placeholder={"NO"}/>) 
    
    }

    const renderActions = (text,record)=>{
      if(!record.editable){
        return (<div><a onClick={(e)=>toggleEdit(e,record)}>编辑</a> <a >删除</a></div>);
      } 
    
      return (<div><a onClick={(e)=>toggleEdit(e,record)}>保存</a> <a >取消</a></div>) 
    
    }
    const columns = [
      { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20'  },
      { title: '名称', debugtype: 'string', dataIndex: 'name', width: '7',
        render: (text, record) => renderStringEdit('name',text, record) 
      },
      { title: '代码', debugtype: 'int', dataIndex: 'code', width: '10',
      render: (text, record) => renderStringEdit('name',text, record)
    
    },
      { title: '创建时间', dataIndex: 'createTime', render: (text, record) => moment(record.createTime).format('YYYY-MM-DD') },
      { title: '社区', dataIndex: 'community', render: (text, record) => (record.community ? record.community.id : '暂无') },
      { title: '已经使用', dataIndex: 'used', render: (text, record) => (record.used ? '是' : '否') },
      { title: '操作',
      render: (text, record) => renderActions(text, record)},
      
    ]


    


    
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
        <Button
          style={{ width: '100%', marginTop: 16, marginBottom: 8 }}
          type="dashed"
          onClick={this.newMember}
          icon="plus"
        >
          新增
        </Button>
      </div>
    )
  }
}
//Form.create()(CommunityCreateForm)
export default Form.create()(InvitationCodeEditTable)

