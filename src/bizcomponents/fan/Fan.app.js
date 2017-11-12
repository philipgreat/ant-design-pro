

import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import { Layout } from 'antd';
import '../../style/index.less';

import FanBizSider from './Fan.sider'
import FanBizHeader from './Fan.header'

const { Sider, Header, Content, Footer } = Layout;


class FanBizApp extends Component {
   
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
                 <FanBizSider path={this.props.location.pathname} collapsed={this.state.collapsed}>left sidebar</FanBizSider>
                       
                <Layout>
                    <FanBizHeader collapsed={this.state.collapsed} toggle={this.toggle}>header</FanBizHeader>
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

//export default connect(mapStateToProps, mapDispatchToProps)(FanBizApp);
export default connect(mapStateToProps)(FanBizApp);

