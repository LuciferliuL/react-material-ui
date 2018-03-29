import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import ComponentA from './component/ComponentList/ComponentA'
import ComponentB from './component/ComponentList/ComponentB'
import DropDownMenuRight from './component/DropDownMenu/DropDownMenu'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <DropDownMenuRight></DropDownMenuRight>
      </MuiThemeProvider>
        
    );
  }
}

export default App;
