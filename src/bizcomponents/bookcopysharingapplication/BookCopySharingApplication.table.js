
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge} from 'antd'
import { Link } from 'dva/router'
import styles from './BookCopySharingApplication.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '书副本数量', debugtype: 'string', dataIndex: 'bookCopyQuantity', width: '9' },
  { title: '书副本Image1', dataIndex: 'bookCopyImage1', render: (text, record) => <ImagePreview imageTitle="书副本Image1" imageLocation={record.bookCopyImage1} /> },
  { title: '书副本Image2', dataIndex: 'bookCopyImage2', render: (text, record) => <ImagePreview imageTitle="书副本Image2" imageLocation={record.bookCopyImage2} /> },
  { title: '书副本Image3', dataIndex: 'bookCopyImage3', render: (text, record) => <ImagePreview imageTitle="书副本Image3" imageLocation={record.bookCopyImage3} /> },
  { title: '书副本Image4', dataIndex: 'bookCopyImage4', render: (text, record) => <ImagePreview imageTitle="书副本Image4" imageLocation={record.bookCopyImage4} /> },
  { title: '书副本Image5', dataIndex: 'bookCopyImage5', render: (text, record) => <ImagePreview imageTitle="书副本Image5" imageLocation={record.bookCopyImage5} /> },
  { title: '提供的方法', debugtype: 'string', dataIndex: 'deliverMethod', width: '8' },
  { title: '目的地存储', dataIndex: 'destinationStore', render: (text, record) => (record.destinationStore ? record.destinationStore.displayName : '暂无') },
  { title: '联系地址', debugtype: 'string', dataIndex: 'contactAddress', width: '18' },
  { title: '联系人姓名', debugtype: 'string', dataIndex: 'contactName', width: '6' },
  { title: '联系手机', debugtype: 'string_china_mobile_phone', dataIndex: 'contactMobile', width: '15' },
  { title: '状态', debugtype: 'string', dataIndex: 'status', width: '7' },
  { title: '客户', dataIndex: 'customer', render: (text, record) => (record.customer ? record.customer.displayName : '暂无') },
  { title: '员工', dataIndex: 'employee', render: (text, record) => (record.employee ? record.employee.displayName : '暂无') },


]

class BookCopySharingApplicationTable extends PureComponent {
  state = {
    selectedRowKeys: [],
  }

  componentWillReceiveProps(nextProps) {
    // clean state
    if (nextProps.selectedRows.length === 0) {
      this.setState({
        selectedRowKeys: [],
      })
    }
  }

  handleRowSelectChange = (selectedRowKeys, selectedRows) => {
    if (this.props.onSelectRow) {
      this.props.onSelectRow(selectedRows)
    }
    this.setState({ selectedRowKeys })
  }

  handleTableChange = (pagination, filters, sorter) => {
    this.props.onChange(pagination, filters, sorter)
  }

  cleanSelectedKeys = () => {
    this.handleRowSelectChange([], [])
  }
 calcDisplayColumns=()=>{

    const {owner} =  this.props
    const {referenceName} = owner
    
    if(!referenceName){
      return columns
    }
    const remainColumns = columns.filter((item)=> item.dataIndex!=referenceName)
    const operationColumn={
      title: '操作',
      fixed: 'right',
      width: 100,
      render: (text, record) => (
        <p>
          <a key="__" onClick={()=>this.gotoEdit(text, record)}>编辑</a>
          {
            record.actionList&&record.actionList.map((item)=>(<a key={item.actionId} onClick={()=>this.executeAction(item,text, record)}><span className={styles.splitLine} />{item.actionName}</a>))

          }
        </p>
      ),
    }
    remainColumns.push(
      operationColumn
    )
    return remainColumns

  }
  executeAction = (action, text, record) => {
    console.log("executeAction",action)
    const {dispatch,owner} = this.props
    const {actionPath}=action;
    const url = actionPath
    const successAction={

      type:`${owner.type}/view`,
      payload: {id:`${owner.id}`}

    }
    dispatch({
      type:"actioncenter/executeAction",
      payload:{action,url,successAction}

    })



  }
  
  gotoEdit = (text, record) =>{
    this.handleRowSelectChange([record.id], [record])
    const{dispatch,owner} = this.props
    const selectedRows = [];
    selectedRows.push(record)
    console.log("selectedRows",selectedRows)

    if(selectedRows.length<1){
      return
    }
    const currentUpdateIndex = 0
    dispatch({
      type: `${owner.type}/gotoUpdateForm`,
      payload: {
        id: owner.id,
        type: 'bookCopySharingApplication',
        selectedRows,
        currentUpdateIndex,
      },
    })

  }
	
  render() {
    const { selectedRowKeys } = this.state
    // const { data, count, current, owner } = this.props
    const { data, count, current } = this.props

    const paginationProps = {
      showSizeChanger: true,
      showQuickJumper: true,
      pageSize: 20,
      total: count,
      current,
      
    }

    const rowSelection = {
      selectedRowKeys,
      onChange: this.handleRowSelectChange,
      getCheckboxProps: record => ({
        disabled: record.disabled,
      }),
    }

    return (
      <div className={styles.standardTable}>
        <div className={styles.tableAlert}>
          <Alert
            message={(
              <p>
                一共 <a style={{ fontWeight: 600 }}>{count}</a> 项 
                已选择 <a style={{ fontWeight: 600 }}>{selectedRowKeys.length}</a> 项 
                <a onClick={this.cleanSelectedKeys} style={{ marginLeft: 24 }}>清空</a>
              </p>
            )}
            type="info"
            showIcon
          />
        </div>
        <Table
          loading={false}
          rowKey={record => record.id}
          rowSelection={rowSelection}
          dataSource={data}
          columns={this.calcDisplayColumns()}
          pagination={paginationProps}
          onChange={this.handleTableChange}
          scroll={{ x: 1740 }}
        />
      </div>
    )
  }
}

export default BookCopySharingApplicationTable

