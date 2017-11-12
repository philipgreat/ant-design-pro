

import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import { Layout } from 'antd';
import '../../style/index.less';

import SlideBizSider from './Slide.sider'
import SlideBizHeader from './Slide.header'

const { Sider, Header, Content, Footer } = Layout;


class SlideBizApp extends Component {
   
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
                 <SlideBizSider path={this.props.location.pathname} collapsed={this.state.collapsed}>left sidebar</SlideBizSider>
                       
                <Layout>
                    <SlideBizHeader collapsed={this.state.collapsed} toggle={this.toggle}>header</SlideBizHeader>
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

//export default connect(mapStateToProps, mapDispatchToProps)(SlideBizApp);
export default connect(mapStateToProps)(SlideBizApp);

