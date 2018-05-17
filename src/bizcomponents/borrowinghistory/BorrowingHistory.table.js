
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge} from 'antd'
import { Link } from 'dva/router'
import styles from './BorrowingHistory.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id',  render: (text, record)=>(<Link to={`/borrowingHistory/${text}/dashboard`}>{text}</Link>) },
  { title: '借款人', dataIndex: 'borrower', render: (text, record) => (record.borrower ? record.borrower.displayName : '暂无') },
  { title: '借款人会员级别', debugtype: 'string', dataIndex: 'borrowerMemberLevel',},
  { title: '借方成员服务过期日期。', dataIndex: 'borrowerMemberServiceExpiredDatetime', render: (text, record) => moment(record.borrowerMemberServiceExpiredDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '书', dataIndex: 'book', render: (text, record) => (record.book ? record.book.displayName : '暂无') },
  { title: '书副本', dataIndex: 'bookCopy', render: (text, record) => (record.bookCopy ? record.bookCopy.displayName : '暂无') },
  { title: '书副本共享类型', debugtype: 'string', dataIndex: 'bookCopySharingType',},
  { title: '书的名字', debugtype: 'string', dataIndex: 'bookName',},
  { title: '贷款商店', dataIndex: 'lendingStore', render: (text, record) => (record.lendingStore ? record.lendingStore.displayName : '暂无') },
  { title: '贷款存储类型', debugtype: 'string', dataIndex: 'lendingStoreType',},
  { title: '贷款Datetime', dataIndex: 'lendingDatetime', render: (text, record) => moment(record.lendingDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '自由借贷天', debugtype: 'int', dataIndex: 'freeLendingDays',},
  { title: '免费贷款到期日期时间', dataIndex: 'freeLendingExpiredDatetime', render: (text, record) => moment(record.freeLendingExpiredDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '到期贷款利率', dataIndex: 'expiredLendingRate', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '到期贷款计算频率', debugtype: 'int', dataIndex: 'expiredLendingComputeFrequency',},
  { title: '返回日期时间', dataIndex: 'returnDatetime', render: (text, record) => moment(record.returnDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '返回商店', dataIndex: 'returnStore', render: (text, record) => (record.returnStore ? record.returnStore.displayName : '暂无') },
  { title: '贷款的日子', debugtype: 'int', dataIndex: 'lendingDays',},
  { title: '免费贷款到期', dataIndex: 'freeLendingExpired', render: (text, record) => (record.freeLendingExpired ? '是' : '否') },
  { title: '借贷状态', debugtype: 'string', dataIndex: 'borrowingStatus',},


]

class BorrowingHistoryTable extends PureComponent {
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
    const remainColumns = columns.filter((item,index)=> item.dataIndex!=referenceName&&index<5&&item.dataIndex!=='content')
    //fixed: 'right',
    const operationColumn={
      title: '操作',
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
        type: 'borrowingHistory',
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
          
        />
      </div>
    )
  }
}

export default BorrowingHistoryTable

