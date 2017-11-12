

import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import { Layout } from 'antd';
import '../../style/index.less';

import SecUserBlockingBizSider from './SecUserBlocking.sider'
import SecUserBlockingBizHeader from './SecUserBlocking.header'

const { Sider, Header, Content, Footer } = Layout;


class SecUserBlockingBizApp extends Component {
   
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
                 <SecUserBlockingBizSider path={this.props.location.pathname} collapsed={this.state.collapsed}>left sidebar</SecUserBlockingBizSider>
                       
                <Layout>
                    <SecUserBlockingBizHeader collapsed={this.state.collapsed} toggle={this.toggle}>header</SecUserBlockingBizHeader>
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

//export default connect(mapStateToProps, mapDispatchToProps)(SecUserBlockingBizApp);
export default connect(mapStateToProps)(SecUserBlockingBizApp);

