import { Divider, Drawer } from '@material-ui/core'
import React, { Component } from 'react'

export default class SidePanel extends Component {
  
  render() {

    console.log(this.props.userInfo);
    return (
      <Drawer anchor={"left"} {...this.props}>
        <div className="mainPanel-userPanelMargin
                        mainPanel-minSize">
          <h1>User Information</h1>
          <Divider variant="left"/>
          <h2>Welcome {this.props.userInfo.getFirstName()} {this.props.userInfo.getLastName()}</h2>

        </div>
      </Drawer>
    )
  }
}
