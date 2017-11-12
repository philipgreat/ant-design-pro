

import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import { Layout } from 'antd';
import '../../style/index.less';

import UserAppBizSider from './UserApp.sider'
import UserAppBizHeader from './UserApp.header'

const { Sider, Header, Content, Footer } = Layout;


class UserAppBizApp extends Component {
   
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
                 <UserAppBizSider path={this.props.location.pathname} collapsed={this.state.collapsed}>left sidebar</UserAppBizSider>
                       
                <Layout>
                    <UserAppBizHeader collapsed={this.state.collapsed} toggle={this.toggle}>header</UserAppBizHeader>
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

//export default connect(mapStateToProps, mapDispatchToProps)(UserAppBizApp);
export default connect(mapStateToProps)(UserAppBizApp);

