

import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import { Layout } from 'antd';
import '../../style/index.less';

import FollowBizSider from './Follow.sider'
import FollowBizHeader from './Follow.header'

const { Sider, Header, Content, Footer } = Layout;


class FollowBizApp extends Component {
   
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
                 <FollowBizSider path={this.props.location.pathname} collapsed={this.state.collapsed}>left sidebar</FollowBizSider>
                       
                <Layout>
                    <FollowBizHeader collapsed={this.state.collapsed} toggle={this.toggle}>header</FollowBizHeader>
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

//export default connect(mapStateToProps, mapDispatchToProps)(FollowBizApp);
export default connect(mapStateToProps)(FollowBizApp);
