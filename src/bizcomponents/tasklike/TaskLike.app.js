

import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import { Layout } from 'antd';
import '../../style/index.less';

import TaskLikeBizSider from './TaskLike.sider'
import TaskLikeBizHeader from './TaskLike.header'

const { Sider, Header, Content, Footer } = Layout;


class TaskLikeBizApp extends Component {
   
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
                 <TaskLikeBizSider path={this.props.location.pathname} collapsed={this.state.collapsed}>left sidebar</TaskLikeBizSider>
                       
                <Layout>
                    <TaskLikeBizHeader collapsed={this.state.collapsed} toggle={this.toggle}>header</TaskLikeBizHeader>
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

//export default connect(mapStateToProps, mapDispatchToProps)(TaskLikeBizApp);
export default connect(mapStateToProps)(TaskLikeBizApp);

