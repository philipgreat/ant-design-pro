

import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import { Layout } from 'antd';
import '../../style/index.less';

import ThreadLikeBizSider from './ThreadLike.sider'
import ThreadLikeBizHeader from './ThreadLike.header'

const { Sider, Header, Content, Footer } = Layout;


class ThreadLikeBizApp extends Component {
   
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
                 <ThreadLikeBizSider path={this.props.location.pathname} collapsed={this.state.collapsed}>left sidebar</ThreadLikeBizSider>
                       
                <Layout>
                    <ThreadLikeBizHeader collapsed={this.state.collapsed} toggle={this.toggle}>header</ThreadLikeBizHeader>
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

//export default connect(mapStateToProps, mapDispatchToProps)(ThreadLikeBizApp);
export default connect(mapStateToProps)(ThreadLikeBizApp);

