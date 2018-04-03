import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import 'element-theme-default'
import {Layout, Menu} from 'element-react'
import MenuRight from './component/MenuRight/MenuRight'

class App extends Component {
  render() {
    return (
      <div>
        <Layout.Row>
          <Layout.Col span='3'>
            <MenuRight></MenuRight>
          </Layout.Col>
          <Layout.Col span='21'>123</Layout.Col>
        </Layout.Row>
      </div>
    );
  }
}

export default App ;
