

import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import { Layout } from 'antd';
import '../../style/index.less';

import BonusPointBizSider from './BonusPoint.sider'
import BonusPointBizHeader from './BonusPoint.header'

const { Sider, Header, Content, Footer } = Layout;


class BonusPointBizApp extends Component {
   
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
                 <BonusPointBizSider path={this.props.location.pathname} collapsed={this.state.collapsed}>left sidebar</BonusPointBizSider>
                       
                <Layout>
                    <BonusPointBizHeader collapsed={this.state.collapsed} toggle={this.toggle}>header</BonusPointBizHeader>
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

//export default connect(mapStateToProps, mapDispatchToProps)(BonusPointBizApp);
export default connect(mapStateToProps)(BonusPointBizApp);

