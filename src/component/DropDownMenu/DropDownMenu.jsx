import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import {BrowserRouter, Route, Link} from 'react-router-dom';
import ComponentA from '../ComponentList/ComponentA'

export default class DropDownMenuright extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: 2};
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <BrowserRouter>
      <DropDownMenu value={this.state.value} onChange={this.handleChange} openImmediately={false}>
      <MenuItem value={1} primaryText="Never">
      </MenuItem>
      <MenuItem value={2} primaryText="Every Night" />
      <MenuItem value={3} primaryText="Weeknights" />
      <MenuItem value={4} primaryText="Weekends" />
      <MenuItem value={5} primaryText="Weekly" />
      </DropDownMenu>
      </BrowserRouter>
     
    );
  }
}