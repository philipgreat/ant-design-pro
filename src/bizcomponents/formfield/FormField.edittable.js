

import React, { PureComponent } from 'react'
import moment from 'moment'
import {Form,Button, Table, Alert, Badge,Input,Divider,Popconfirm } from 'antd'
import styles from './FormField.edittable.less'
import ImagePreview from '../../components/ImagePreview'






const getRowById = (data,id) => {
  return data.filter(item => item.id === id)[0];
}

const toggleEdit = (e,data,id) =>{
  const row =  data.filter(item => item.id === id)[0];
  row[editable] = true
}




class FormFieldEditTable extends PureComponent {

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
			const formId = record.form.id

      //const communityId = record.community.id;
      return {formId,};
    }
    const deleteRecord = (e,record) =>{
      const {dispatch, owner} = this.props
      const {data} = this.state
      const formFieldIds = [record.id];
      const parameters = { formFieldIds }
      dispatch({
        type: `${owner.type}/removeFormFieldList`,
        payload: { id: owner.id, type: 'formField', parameters },
      })
    }


    const addRecord = (e,record) =>{
      const {dispatch, owner} = this.props
      const {data} = this.state
      const communityId = record.community.id;
      const parameters = { ...record, ...remapReference(record)}
      const newData = [...data];
      

      dispatch({
        type: `${owner.type}/addFormField`,
        payload: {
          id: owner.id,
          type: 'formField',
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
      const {formFieldId} = record.id
      const parameters = { ...record, formFieldId }
      const newData = [...data];
      const row =  newData.filter(item => item.id === record.id)[0];
      row.editable = !row.editable 

      dispatch({
        type: `${owner.type}/updateFormField`,
        payload: {
          id: owner.id,
          type: 'formField',
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
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20',  },
  { title: '标签', debugtype: 'string', dataIndex: 'label', width: '7', render: (text, record) => renderStringEdit('label',text, record)  },
  { title: '语言环境的关键', debugtype: 'string', dataIndex: 'localeKey', width: '15', render: (text, record) => renderStringEdit('localeKey',text, record)  },
  { title: '参数名称', debugtype: 'string', dataIndex: 'parameterName', width: '8', render: (text, record) => renderStringEdit('parameterName',text, record)  },
  { title: '类型', debugtype: 'string', dataIndex: 'type', width: '13', render: (text, record) => renderStringEdit('type',text, record)  },
  { title: '形式', dataIndex: 'form', render: (text, record) => (record.form ? record.form.displayName : '暂无') },
  { title: '占位符', debugtype: 'string', dataIndex: 'placeholder', width: '16', render: (text, record) => renderStringEdit('placeholder',text, record)  },
  { title: '默认值', debugtype: 'string', dataIndex: 'defaultValue', width: '7', render: (text, record) => renderStringEdit('defaultValue',text, record)  },
  { title: '描述', debugtype: 'string', dataIndex: 'description', width: '16', render: (text, record) => renderStringEdit('description',text, record)  },
  { title: '字段组', debugtype: 'string', dataIndex: 'fieldGroup', width: '8', render: (text, record) => renderStringEdit('fieldGroup',text, record)  },
  { title: '最小值', debugtype: 'string', dataIndex: 'minValue', width: '19', render: (text, record) => renderStringEdit('minValue',text, record)  },
  { title: '最大的价值', debugtype: 'string', dataIndex: 'maxValue', width: '22', render: (text, record) => renderStringEdit('maxValue',text, record)  },
  { title: '要求', dataIndex: 'required', render: (text, record) => (record.required ? '是' : '否') },
  { title: '禁用', dataIndex: 'disabled', render: (text, record) => (record.disabled ? '是' : '否') },
  { title: '自定义渲染', dataIndex: 'customRendering', render: (text, record) => (record.customRendering ? '是' : '否') },
  { title: '候选人的价值观', debugtype: 'string', dataIndex: 'candidateValues', width: '7', render: (text, record) => renderStringEdit('candidateValues',text, record)  },
  { title: '建议值', debugtype: 'string', dataIndex: 'suggestValues', width: '7', render: (text, record) => renderStringEdit('suggestValues',text, record)  },
{ title: '操作',
   render: (text, record) => renderActions(text, record)}]
   
    const newRecord =()=>{
      const newFormFieldToAppend  = {
      	'id':`+1`, 
				'label':'',
				'localeKey':'',
				'parameterName':'',
				'type':'',
				'form':'',
				'placeholder':'',
				'defaultValue':'',
				'description':'',
				'fieldGroup':'',
				'minValue':'',
				'maxValue':'',
				'required':'',
				'disabled':'',
				'customRendering':'',
				'candidateValues':'',
				'suggestValues':'',


      };
      const newData = data ? [...data]:[];
      newData.push(newFormFieldToAppend);
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

export default Form.create()(FormFieldEditTable)



