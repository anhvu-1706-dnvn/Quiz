import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { findLast } from 'lodash';
import { history } from '../../../redux/store';

const sidebarMenu = [
  {
    key: 'dashboard',
    text: 'Dashboard',
    url: '/',
    icon: 'dashboard',
  },
  {
    key: 'find-a-quizz',
    text: 'Find a quizz',
    url: '/find-quizz',
    icon: 'search',
  },
  {
    key: 'my-quizzes',
    text: 'My quizzes',
    url: '/my-quizzes',
    icon: 'file-text',
  },
  {
    key: 'participants',
    text: 'Quản lý học sih',
    url: '/participants',
    icon: 'team',
  },
  {
    key: 'report',
    text: 'Quản lý điểm',
    url: '/marks',
    icon: 'bar-chart',
  },
];

export default class SideBarMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultSelectedKeys: findLast(
        sidebarMenu,
        (menu) => window.location.pathname.indexOf(menu.url) === 0
      ),
    };
  }

  render() {
    return (
      <Menu
        mode="inline"
        defaultSelectedKeys={[this.state.defaultSelectedKeys.key]}
        defaultOpenKeys={
          this.state.defaultSelectedKeys.key === 'transaction'
            ? ['transaction']
            : []
        }
        location={this.props.children}
        className="sidebarMenu"
      >
        {/* <Menu.Item key="dashboard" onClick={() => history.push("/")}>
          <span>
            <Icon type="dashboard" />
            <span>Dashboard</span>
          </span>
        </Menu.Item> */}

        {sidebarMenu.map((el) => (
          <Menu.Item key={el.key} onClick={() => history.push(el.url)}>
            <span>
              <Icon type={el.icon} />
              <span>{el.text}</span>
            </span>
          </Menu.Item>
        ))}
      </Menu>
    );
  }
}
