
import React, { Component } from 'react'
import SidePanel from 'mainPanel/components/SidePanel'
import TopBar from 'mainPanel/components/TopBar'

export default class MainPanel extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
       panelOpened: false
    }
  }

  openDrawer = () => {
    this.setState({panelOpened: true});
  }
  
  closeDrawer = () => {
    this.setState({panelOpened: false});
  }

  render() {
    return (
      <>
        <TopBar    onClick={this.openDrawer.bind(this)}/>
        <SidePanel onClose={this.closeDrawer.bind(this)}
                   open={this.state.panelOpened}/>
      </>
    )
  }
}
