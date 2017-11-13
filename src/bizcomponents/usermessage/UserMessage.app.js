

import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import { Layout } from 'antd';
import '../../style/index.less';

import UserMessageBizSider from './UserMessage.sider'
import UserMessageBizHeader from './UserMessage.header'

const { Sider, Header, Content, Footer } = Layout;


class UserMessageBizApp extends Component {
   
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
                 <UserMessageBizSider path={this.props.location.pathname} collapsed={this.state.collapsed}>left sidebar</UserMessageBizSider>
                       
                <Layout>
                    <UserMessageBizHeader collapsed={this.state.collapsed} toggle={this.toggle}>header</UserMessageBizHeader>
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

//export default connect(mapStateToProps, mapDispatchToProps)(UserMessageBizApp);
export default connect(mapStateToProps)(UserMessageBizApp);
