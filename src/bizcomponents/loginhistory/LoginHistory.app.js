

import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import { Layout } from 'antd';
import '../../style/index.less';

import LoginHistoryBizSider from './LoginHistory.sider'
import LoginHistoryBizHeader from './LoginHistory.header'

const { Sider, Header, Content, Footer } = Layout;


class LoginHistoryBizApp extends Component {
   
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
                 <LoginHistoryBizSider path={this.props.location.pathname} collapsed={this.state.collapsed}>left sidebar</LoginHistoryBizSider>
                       
                <Layout>
                    <LoginHistoryBizHeader collapsed={this.state.collapsed} toggle={this.toggle}>header</LoginHistoryBizHeader>
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

//export default connect(mapStateToProps, mapDispatchToProps)(LoginHistoryBizApp);
export default connect(mapStateToProps)(LoginHistoryBizApp);

