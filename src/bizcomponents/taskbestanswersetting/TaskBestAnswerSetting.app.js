

import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import { Layout } from 'antd';
import '../../style/index.less';

import TaskBestAnswerSettingBizSider from './TaskBestAnswerSetting.sider'
import TaskBestAnswerSettingBizHeader from './TaskBestAnswerSetting.header'

const { Sider, Header, Content, Footer } = Layout;


class TaskBestAnswerSettingBizApp extends Component {
   
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
                 <TaskBestAnswerSettingBizSider path={this.props.location.pathname} collapsed={this.state.collapsed}>left sidebar</TaskBestAnswerSettingBizSider>
                       
                <Layout>
                    <TaskBestAnswerSettingBizHeader collapsed={this.state.collapsed} toggle={this.toggle}>header</TaskBestAnswerSettingBizHeader>
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

//export default connect(mapStateToProps, mapDispatchToProps)(TaskBestAnswerSettingBizApp);
export default connect(mapStateToProps)(TaskBestAnswerSettingBizApp);

