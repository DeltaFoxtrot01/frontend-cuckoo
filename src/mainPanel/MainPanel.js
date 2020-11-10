
import React, { Component } from 'react'
import SidePanel from 'mainPanel/components/SidePanel'
import TopBar from 'mainPanel/components/TopBar'
import { Dialog } from '@material-ui/core'
import QRScanner from './components/QRScanner'
import { LoginService } from 'tools/remoteServices/LoginService'

export default class MainPanel extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
       panelOpened: false,
       popupOpened: false
    }
    LoginService.getUserInfo()
    .then(response => {
      console.log(response);
    })
    .catch(response => {
      console.log(response);
    })
  }

  openDrawer = () => {
    this.setState({panelOpened: true});
  }
  
  closeDrawer = () => {
    this.setState({panelOpened: false});
  }

  openPopup = () => {
    this.setState({popupOpened: true});
  }

  closePopup = () => {
    this.setState({popupOpened: false});
  }

  render() {
    return (
      <>
        <TopBar    onClick={this.openDrawer.bind(this)}
                   onClickScanner={this.openPopup.bind(this)}/>
        <SidePanel onClose={this.closeDrawer.bind(this)}
                   open={this.state.panelOpened}/>
        <Dialog open={this.state.popupOpened} onClose={this.closePopup.bind(this)}>
          <QRScanner />
        </Dialog>
      </>
    )
  }
}
