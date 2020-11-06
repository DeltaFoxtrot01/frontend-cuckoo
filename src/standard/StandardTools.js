import React, { Component } from 'react';

import 'standard/css/colors.css';
import 'standard/css/size.css';
import 'standard/css/efects.css';
import 'standard/css/borders.css';
import 'standard/css/fonts.css';
import 'standard/css/layout.css';
import Login from 'login/Login';
import MainPanel from 'mainPanel/MainPanel';
import { Route, Switch } from 'react-router';


/**
 * This component represents all the components that are common to 
 * each interface such as the top bar or the side menu.
 * It is supposed to be used only for internal tools
 */
class StandardTools extends Component {


  render() {
    let currentPath = this.props.match.path;

    return (
      <>
        <Switch>
          <Route path={`${currentPath}`} exact component={Login}/>
          <Route path={`${currentPath}panel`} component={MainPanel}/>
        </Switch>
      </>
    );
  }
}

export default StandardTools;