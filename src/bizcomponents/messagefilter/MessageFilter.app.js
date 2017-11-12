

import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import { Layout } from 'antd';
import '../../style/index.less';

import MessageFilterBizSider from './MessageFilter.sider'
import MessageFilterBizHeader from './MessageFilter.header'

const { Sider, Header, Content, Footer } = Layout;


class MessageFilterBizApp extends Component {
   
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
                 <MessageFilterBizSider path={this.props.location.pathname} collapsed={this.state.collapsed}>left sidebar</MessageFilterBizSider>
                       
                <Layout>
                    <MessageFilterBizHeader collapsed={this.state.collapsed} toggle={this.toggle}>header</MessageFilterBizHeader>
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

//export default connect(mapStateToProps, mapDispatchToProps)(MessageFilterBizApp);
export default connect(mapStateToProps)(MessageFilterBizApp);

