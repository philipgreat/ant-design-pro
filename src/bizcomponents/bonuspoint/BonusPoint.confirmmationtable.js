
import React, { PureComponent } from 'react';
import moment from 'moment';
import { Table, Alert, Badge } from 'antd';
import styles from './BonusPoint.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '10' },
  { title: '获得时间', dataIndex: 'obtainTime', render: (text, record) => moment(record.obtainTime).format('YYYY-MM-DD') },
  { title: '点', debugtype: 'int', dataIndex: 'points', width: '8' },
  { title: '用户',dataIndex: 'user', render: (text, record) => (record.user ? record.user.id : '暂无') },
];

class BonusPointConfirmationTable extends PureComponent {
  render() {
    // const { data,count,current, owner } = this.props;
    const { data } = this.props;


    return (
      <div className={styles.standardTable}>
        <div className={styles.tableAlert}>
          <Alert
            message={(
              <p>
                一共 <a style={{ fontWeight: 600 }}>{data.length}</a> 项 
              </p>
            )}
            type="warning"
            showIcon
          />
        </div>
        <Table
          rowKey={record => record.id}
          dataSource={data}
          columns={columns}
          size="small"
          scroll={{ x: 800 }}
        />
      </div>
    );
  }
}

export default BonusPointConfirmationTable;

