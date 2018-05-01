import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {
  menuName: '身份证',
  menuFor: 'identityCard',
  subItems: [],
}

const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '姓名', debugtype: 'string', dataIndex: 'holderName', width: '57' },
  {
    title: '身份证号码',
    debugtype: 'string',
    dataIndex: 'cardNumber',
    width: '22',
  },
  {
    title: '身份证正面照片',
    dataIndex: 'frontImage',
    render: (text, record) => (
      <ImagePreview
        imageTitle="身份证正面照片"
        imageLocation={record.frontImage}
      />
    ),
  },
  {
    title: '身份证背面照片',
    dataIndex: 'backImage',
    render: (text, record) => (
      <ImagePreview
        imageTitle="身份证背面照片"
        imageLocation={record.backImage}
      />
    ),
  },
  {
    title: '有效期至',
    dataIndex: 'expirationDate',
    render: (text, record) =>
      moment(record.expirationDate).format('YYYY-MM-DD'),
  },
]

const fieldLabels = {
  id: 'ID',
  holderName: '姓名',
  cardNumber: '身份证号码',
  frontImage: '身份证正面照片',
  backImage: '身份证背面照片',
  expirationDate: '有效期至',
}

const IdentityCardBase = { menuData, displayColumns, fieldLabels }
export default IdentityCardBase
