

import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import { Layout } from 'antd';
import '../../style/index.less';

import PatientInfoBizSider from './PatientInfo.sider'
import PatientInfoBizHeader from './PatientInfo.header'

const { Sider, Header, Content, Footer } = Layout;


class PatientInfoBizApp extends Component {
   
    state = {
        collapsed: true,
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    render() {

        return (
            <Layout className="ant-layout-has-sider">
                 <PatientInfoBizSider path={this.props.location.pathname} collapsed={this.state.collapsed}>left sidebar</PatientInfoBizSider>
                       
                <Layout>
                    <PatientInfoBizHeader collapsed={this.state.collapsed} toggle={this.toggle}>header</PatientInfoBizHeader>
                    <Layout>
                        <Content>{this.props.children}</Content>
                        
                    </Layout>
                    
                </Layout>
            </Layout>
        );
    }
}

const mapStateToProps = state => {   
    return state;
};
const mapDispatchToProps = dispatch => ({
    receiveData: bindActionCreators({}, dispatch)
});

//export default connect(mapStateToProps, mapDispatchToProps)(PatientInfoBizApp);
export default connect(mapStateToProps)(PatientInfoBizApp);

