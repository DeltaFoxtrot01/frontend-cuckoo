import { Button, Divider, Drawer } from '@material-ui/core'
import React, { Component } from 'react'

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
          <Button/>
        </div>
      </Drawer>
    )
  }
}
