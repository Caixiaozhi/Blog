import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Layout, Menu,  Icon } from 'antd';
import { bindActionCreators } from 'redux';
import { get } from 'lodash';
import style from './style.less';
import * as acts from './actions';
import TestComponent from '_components/TestComponent';
import HeaderComponent from '_containers/HeaderComponent';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

export class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false,
    };
  }
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }
  componentWillMount() {
  }
  handleClickOnMenu = (e) => {
    const { key } = e
    switch(key){
      case '1': 
        this.props.history.push('/home/edit')
      break
      case '2':
        this.props.history.push('/home/cxz')
      break
    }
  }
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className={style.logo} />
          <Menu theme="dark" 
            defaultSelectedKeys={['1']} 
            mode="inline"
            onClick = {this.handleClickOnMenu}>
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>编辑文章</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>Option 2</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={<span><Icon type="user" /><span>User</span></span>}
            >
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={<span><Icon type="team" /><span>Team</span></span>}
            >
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <Icon type="file" />
              <span>File</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <HeaderComponent />
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <div style={{ margin: '16px 0' }}>
            </div>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            ©2017 Created by ELWG
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.getIn('count')
  }
}

function mapDispatchToProps(dispatch) {
  const actions = {
    ...acts,
  }
  const actionMap = {
    actions: bindActionCreators(actions, dispatch)
  }
  return actionMap
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomePage));
