

import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import { Layout } from 'antd';
import '../../style/index.less';

import ThreadCompletionBizSider from './ThreadCompletion.sider'
import ThreadCompletionBizHeader from './ThreadCompletion.header'

const { Sider, Header, Content, Footer } = Layout;


class ThreadCompletionBizApp extends Component {
   
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
                 <ThreadCompletionBizSider path={this.props.location.pathname} collapsed={this.state.collapsed}>left sidebar</ThreadCompletionBizSider>
                       
                <Layout>
                    <ThreadCompletionBizHeader collapsed={this.state.collapsed} toggle={this.toggle}>header</ThreadCompletionBizHeader>
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

//export default connect(mapStateToProps, mapDispatchToProps)(ThreadCompletionBizApp);
export default connect(mapStateToProps)(ThreadCompletionBizApp);

