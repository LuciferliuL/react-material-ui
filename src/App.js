import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import {Grid, Row, Col} from 'react-bootstrap';
import '../ '
import ComponentA from './component/ComponentList/ComponentA'
import ComponentB from './component/ComponentList/ComponentB'

import Collapsebtn from './component/Collapse/Collapsebtn'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Grid>
          <Row className="show-grid">
          <Col xs={2} sm={2} lg={1} className="leftSide">
          <Collapsebtn>
            <Link to="/ComponentA">2222</Link>
          </Collapsebtn>
          <Collapsebtn>
            <Link to="/ComponentB">3333</Link>
          </Collapsebtn>
          <Collapsebtn></Collapsebtn>
          <Collapsebtn></Collapsebtn>
          <div  className="bottom">11111</div>
        </Col>
        <Col xs={8} sm={8}>
          <Route path="/ComponentA" component={ComponentA}></Route>
          <Route path="/ComponentB" component={ComponentB}></Route>
        </Col>
        </Row>       
        </Grid>
      
          
      </BrowserRouter>
    );
  }
}

export default App;
