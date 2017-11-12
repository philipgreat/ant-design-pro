

import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import { Layout } from 'antd';
import '../../style/index.less';

import ThreadRegistrationBizSider from './ThreadRegistration.sider'
import ThreadRegistrationBizHeader from './ThreadRegistration.header'

const { Sider, Header, Content, Footer } = Layout;


class ThreadRegistrationBizApp extends Component {
   
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
                 <ThreadRegistrationBizSider path={this.props.location.pathname} collapsed={this.state.collapsed}>left sidebar</ThreadRegistrationBizSider>
                       
                <Layout>
                    <ThreadRegistrationBizHeader collapsed={this.state.collapsed} toggle={this.toggle}>header</ThreadRegistrationBizHeader>
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

//export default connect(mapStateToProps, mapDispatchToProps)(ThreadRegistrationBizApp);
export default connect(mapStateToProps)(ThreadRegistrationBizApp);

