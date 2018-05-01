import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {
  menuName: '行驶证',
  menuFor: 'vehiclePermit',
  subItems: [],
}

const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '姓名', debugtype: 'string', dataIndex: 'holderName', width: '57' },
  {
    title: '驾驶证号码',
    debugtype: 'string',
    dataIndex: 'licenseNumber',
    width: '20',
  },
  {
    title: '有效期至',
    dataIndex: 'expirationDate',
    render: (text, record) =>
      moment(record.expirationDate).format('YYYY-MM-DD'),
  },
  {
    title: '图1',
    dataIndex: 'image1',
    render: (text, record) => (
      <ImagePreview imageTitle="图1" imageLocation={record.image1} />
    ),
  },
  {
    title: '图2',
    dataIndex: 'image2',
    render: (text, record) => (
      <ImagePreview imageTitle="图2" imageLocation={record.image2} />
    ),
  },
  {
    title: '图3',
    dataIndex: 'image3',
    render: (text, record) => (
      <ImagePreview imageTitle="图3" imageLocation={record.image3} />
    ),
  },
  {
    title: '图4',
    dataIndex: 'image4',
    render: (text, record) => (
      <ImagePreview imageTitle="图4" imageLocation={record.image4} />
    ),
  },
  {
    title: '图5',
    dataIndex: 'image5',
    render: (text, record) => (
      <ImagePreview imageTitle="图5" imageLocation={record.image5} />
    ),
  },
]

const fieldLabels = {
  id: 'ID',
  holderName: '姓名',
  licenseNumber: '驾驶证号码',
  expirationDate: '有效期至',
  image1: '图1',
  image2: '图2',
  image3: '图3',
  image4: '图4',
  image5: '图5',
}

const VehiclePermitBase = { menuData, displayColumns, fieldLabels }
export default VehiclePermitBase
