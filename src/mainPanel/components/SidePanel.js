import { Divider, Drawer } from '@material-ui/core'
import React, { Component } from 'react'
import StandardButton from './StandardButton';

export default class SidePanel extends Component {

  render() {
    if(this.props.userinfo === null)
      return (<></>);
    return (
      <Drawer anchor={"left"} {...this.props}>
        <div className="mainPanel-userPanelMargin
                        mainPanel-minSize">
          <h1>User Information</h1>
          <Divider/>
          <h2>Welcome {this.props.userinfo.getFirstName()} {this.props.userinfo.getLastName()}</h2>
          <div className="mainPanel-center mainPanel-logoutWidth">
            <StandardButton onClick={this.props.onClick} color="secondary">
              Logout
            </StandardButton>
          </div>
        </div>
      </Drawer>
    )
  }
}
