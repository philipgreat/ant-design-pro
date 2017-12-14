import FontAwesome from 'react-fontawesome';
import { Row, Col, Card, Table, Popconfirm, Button } from 'antd';

import React from 'react';
import { Link } from 'react-router';
import TopMenu from './TopMenu';

//import BizRouter from './BizRouter'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';




import { Layout } from 'antd';

const { Content, Footer } = Layout;

class HomeScreen extends React.Component {



    gotoApp = (e, id) => {
        console.log('click ', id);
        const dispatch = this.props.dispatch;
        dispatch({type:"launcher/gotoApp", payload:{appId:id}});
    }



    appList = () => {
        return (<div>

            <FontAwesome name="user" />

        </div>)

    }

    lowercaseFirst = (stringExpr) => {
        if(typeof(stringExpr)!="string"){
            throw "parameter stringExpr is not a string";
        }
        //let stringExpr="";
        if(stringExpr.length<=0){
            return "";
        }
        if(stringExpr.length==1){
            return stringExpr.substring(0,1);
        }
        return stringExpr.substring(0,1).toLowerCase()+stringExpr.substring(1);
    }

    calcLink =(link)=>{
        let theCamelForm = this.lowercaseFirst(link);
        console.log("processing: "+theCamelForm);
        return theCamelForm+'App/dash';
        //return '/login';

    }

    render() {

        const appList = this.props.launcher.data.userAppList;
        const calcLink = this.calcLink;
        return (<div style={{ height:"100%"} }>
                <Row key="1" >
                    <Col className="gutter-row" span={24} >
                        <TopMenu {...this.props} />
                    </Col>
                </Row>
                <Row key="2" gutter={16}>
                    <Col className="gutter-row" span={24} style={{ paddingTop: "20px", textAlign: "center" }}>
                        <h1>审车平台</h1>
                    </Col>
                </Row>
                <Row key="3" gutter={16} justify="center" align="center" >
                    {appList.map((app, i) => (
                        <Col key={i} className="gutter-row" span={6} style={{ textAlign: "center"}}
                            onClick={(e)=>this.gotoApp(e,app.id)}
                        >
                            

                                <br /><br />
                                <FontAwesome name={app.appIcon} size='5x' />
                                <br />{app.title}
                            
                        </Col>))}
                </Row>

            </div>)

    }
}


const mapStateToProps = state => {
    return state;
};
const mapDispatchToProps = dispatch => ({
    receiveData: bindActionCreators({}, dispatch)
});

//export default connect(mapStateToProps, mapDispatchToProps)(UserSkillBizApp);
export default connect(mapStateToProps)(HomeScreen);

