import React, {Component} from 'react';
import './App.css';
import 'element-theme-default'
import {Layout, Menu} from 'element-react'
import {BrowserRouter, Route, Link} from 'react-router-dom';

import ComponentA from './component/ComponentList/ComponentA';
import ComponentB from './component/ComponentList/ComponentB';

class App extends Component {

  onOpen() {}

  onClose() {}
  render() {
    return (
      <BrowserRouter>
        <Layout.Row>
          <Layout.Col span='3' >
            <Menu
              defaultActive="2"
              className="el-menu-vertical-demo"
              onOpen={this
              .onOpen
              .bind(this)}
              onClose={this
              .onClose
              .bind(this)}>
              <Menu.SubMenu
                title={<span> <i className="el-icon-share"></i>菜单 </span>}
                index="1">
                <Menu.Item index="1-1">
                  <Link to="/ComponentA">ComponentA</Link>
                </Menu.Item>
                <Menu.Item index="1-2">
                  <Link to="/ComponentB">ComponentB</Link>
                </Menu.Item>

              </Menu.SubMenu>
              <Menu.SubMenu
                title={<span> <i className="el-icon-share"></i>菜单 </span>}
                index="2">
                <Menu.Item index="2-1">
                  <Link to="/ComponentA">ComponentA</Link>
                </Menu.Item>
                <Menu.Item index="2-2">
                  <Link to="/ComponentB">ComponentB</Link>
                </Menu.Item>

              </Menu.SubMenu>
              <Menu.SubMenu
                title={<span> <i className="el-icon-share"></i>菜单 </span>}
                index="3">
                <Menu.Item index="3-1">
                  <Link to="/ComponentA">ComponentA</Link>
                </Menu.Item>
                <Menu.Item index="3-2">
                  <Link to="/ComponentB">ComponentB</Link>
                </Menu.Item>

              </Menu.SubMenu>
              <Menu.SubMenu
                title={<span> <i className="el-icon-share"></i>菜单 </span>}
                index="4">
                <Menu.Item index="4-1"> 
                  <Link to="/ComponentA">ComponentA</Link>
                </Menu.Item>
                <Menu.Item index="4-2">
                  <Link to="/ComponentB">ComponentB</Link>
                </Menu.Item>

              </Menu.SubMenu>
            </Menu>
            <div className="bottomDiv">123</div>
          </Layout.Col>
          <Layout.Col span='21'>
            <Route path="/ComponentA" component={ComponentA}></Route>
            <Route path="/ComponentB" component={ComponentB}></Route>
          </Layout.Col>
        </Layout.Row>
      </BrowserRouter>
    );
  }
}

export default App;
