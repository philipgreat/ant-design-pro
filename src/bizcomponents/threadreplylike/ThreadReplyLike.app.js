

import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import { Layout } from 'antd';
import '../../style/index.less';

import ThreadReplyLikeBizSider from './ThreadReplyLike.sider'
import ThreadReplyLikeBizHeader from './ThreadReplyLike.header'

const { Sider, Header, Content, Footer } = Layout;


class ThreadReplyLikeBizApp extends Component {
   
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
                 <ThreadReplyLikeBizSider path={this.props.location.pathname} collapsed={this.state.collapsed}>left sidebar</ThreadReplyLikeBizSider>
                       
                <Layout>
                    <ThreadReplyLikeBizHeader collapsed={this.state.collapsed} toggle={this.toggle}>header</ThreadReplyLikeBizHeader>
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

//export default connect(mapStateToProps, mapDispatchToProps)(ThreadReplyLikeBizApp);
export default connect(mapStateToProps)(ThreadReplyLikeBizApp);

