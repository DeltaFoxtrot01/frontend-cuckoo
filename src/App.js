import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import StandardTools from 'standard/StandardTools';

class App extends Component {

  render(){
    return (
      <>
        <Switch>
          <Route path = "/" component={StandardTools}/>
        </Switch>
      </>
    );
  }

}
export default App;
