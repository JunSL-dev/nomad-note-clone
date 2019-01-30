import React, { Component, Fragment } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Add from '../../Routes/Add'
import Edit from '../../Routes/Edit'
import Note from '../../Routes/Note'
import Notes from '../../Routes/Notes'

import {Heading, Nav, Container} from '../../style'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>  
          <Nav>
            <Heading color="#eee" to={"/"}>
              Nomad Note Clone
            </Heading>
          </Nav>
          <Container>
            <Switch>
              <Route exact path={'/'} component={Notes} />
              <Route path={'/note/:id'} component={Note} />
              <Route path={'/add'} component={Add} />
              <Route path={'/edit/:id'} component={Edit} />          
            </Switch>
          </Container>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
