import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'
import { connect } from 'dva'
import moment from 'moment'
import {
  Row,
  Col,
  Icon,
  Card,
  Tabs,
  Table,
  Radio,
  DatePicker,
  Tooltip,
  Menu,
  Dropdown,
} from 'antd'
import { Link, Route, Redirect, Switch } from 'dva/router'
import numeral from 'numeral'
import {
  ChartCard,
  yuan,
  MiniArea,
  MiniBar,
  MiniProgress,
  Field,
  Bar,
  Pie,
  TimelineChart,
} from '../../components/Charts'
import Trend from '../../components/Trend'
import NumberInfo from '../../components/NumberInfo'
import { getTimeDistance } from '../../utils/utils'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import styles from './AvailableVehicleUseCharacter.dashboard.less'
import DescriptionList from '../../components/DescriptionList'
import ImagePreview from '../../components/ImagePreview'
const { Description } = DescriptionList
const { TabPane } = Tabs
const { RangePicker } = DatePicker

const topColResponsiveProps = {
  xs: 8,
  sm: 6,
  md: 6,
  lg: 4,
  xl: 4,
  style: { marginBottom: 24 },
}
const summaryOf = availableVehicleUseCharacter => {
  return (
    <DescriptionList className={styles.headerList} size="small" col="4">
      <Description term="ID">{availableVehicleUseCharacter.id}</Description>
      <Description term="名称">{availableVehicleUseCharacter.name}</Description>
      <Description term="别名">
        {availableVehicleUseCharacter.aliasName}
      </Description>
      <Description term="可6年免检">
        {availableVehicleUseCharacter.canDoExempt ? '是' : '否'}
      </Description>
      <Description term="商用车辆">
        {availableVehicleUseCharacter.commercialVehicle ? '是' : '否'}
      </Description>
    </DescriptionList>
  )
}

@connect(state => ({
  availableVehicleUseCharacter: state._availableVehicleUseCharacter,
}))
export default class AvailableVehicleUseCharacterDashboard extends Component {
  componentDidMount() {
    /*
    // const { form, dispatch, submitting, selectedRows, currentUpdateIndex } = this.props;
    // const { getFieldDecorator, setFieldsValue } = this.props.form;
    const { dispatch, location, availableVehicleUseCharacter } = this.props;
    
    if(!availableVehicleUseCharacter){
    	return;
    }
    const {displayName} = availableVehicleUseCharacter;
    if(!displayName){
    	return;
    }
	const link = location.pathname;
	
    dispatch({ type: 'breadcrumb/gotoLink', payload: { displayName, link }})
  	*/
  }

  render() {
    // eslint-disable-next-line max-len
    const { id, displayName } = this.props.availableVehicleUseCharacter
    const cardsData = {
      cardsName: '车辆使用性质',
      cardsFor: 'availableVehicleUseCharacter',
      cardsSource: this.props.availableVehicleUseCharacter,
      subItems: [],
    }

    return (
      <PageHeaderLayout
        title={`${cardsData.cardsName}: ${displayName}`}
        content={summaryOf(cardsData.cardsSource)}
        wrapperClassName={styles.advancedForm}
      >
        <div>
          <Row gutter={24}>
            {cardsData.subItems.map(item => (
              <Col {...topColResponsiveProps} key={item.name}>
                <Card
                  title={`${item.displayName}(${numeral(item.count).format(
                    '0,0'
                  )})`}
                  style={{ width: 180 }}
                >
                  <p>
                    <Link
                      to={`/${cardsData.cardsFor}/${id}/list/${item.name}/${
                        item.displayName
                      }列表`}
                    >
                      <FontAwesome name="gear" />&nbsp;管理
                    </Link>
                  </p>
                  <p>
                    <Link
                      to={`/${cardsData.cardsFor}/${id}/list/${
                        item.type
                      }CreateForm`}
                    >
                      <FontAwesome name="plus" />&nbsp;新增
                    </Link>
                  </p>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </PageHeaderLayout>
    )
  }
}