import { Menu, Icon } from 'antd';
import React from 'react';

import { Link } from 'react-router';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class TopMenu extends React.Component {
  state = {
    current: 'mail',
  }
  handleClick = (e) => {
    console.log('click ', e);

    console.log("props", this.props);
    const dispatch=this.props.dispatch;
    dispatch({type:"launcher/showlogin"});
    this.setState({
      current: e.key,
    });
    

  }

  linkto = (value) => {
    
    console.log("current selected", value)
    console.log("linkto props", this.props);
    const dispatch=this.props.dispatch;
    dispatch({type:"launcher/logout"});
  }

  render() {



    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
        theme="dark"
      >
        <Menu.Item key="mail">
          <Icon type="mail" />账户
        </Menu.Item>
        <Menu.Item key="app1" >
        <Icon type="appstore"/>退出
        </Menu.Item>
        <Menu.Item key="app2" >
          <Icon type="appstore" />消息
        </Menu.Item>
        <Menu.Item key="app3" >
          <Icon type="appstore" />待办事项
        </Menu.Item>
 
      </Menu>
    );
  }
}

export default TopMenu;