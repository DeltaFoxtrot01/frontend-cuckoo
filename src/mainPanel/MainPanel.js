
import React, { Component } from 'react'
import SidePanel from 'mainPanel/components/SidePanel'
import TopBar from 'mainPanel/components/TopBar'
import { Dialog } from '@material-ui/core'
import QRScanner from './components/QRScanner'
import { LoginService } from 'tools/remoteServices/LoginService'
import { withRouter } from 'react-router'

import "mainPanel/css/borders.css";
import "mainPanel/css/colors.css";
import "mainPanel/css/efects.css";
import "mainPanel/css/fonts.css";
import "mainPanel/css/size.css";
import "mainPanel/css/layout.css";
import { displayErrorMessage, displaySuccessMessage } from 'standard/reducer/StandardMethods'

class MainPanel extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
       panelOpened: false,
       popupOpened: false,
       userInfo: null
    }
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

  componentDidMount(){
    LoginService.getUserInfo()
    .then(response => {
      this.setState({userInfo: response});
    })
    .catch(response => {
    })
  }

  changeToHome(){
    this.props.history.push("/");
  }

  onQrScan(result){
    console.log(result);
    displaySuccessMessage("QR Code scanned with success");
    this.closePopup();
  }

  onQrError(error){
    displayErrorMessage("Error occured reading QR code");
    console.log(error);
    this.closePopup();
  }

  render() {
    return (
      <>
        <TopBar    onClick={this.openDrawer.bind(this)}
                   onClickScanner={this.openPopup.bind(this)}/>
        <SidePanel onClose={this.closeDrawer.bind(this)}
                   open={this.state.panelOpened}
                   userinfo={this.state.userInfo}/>
        <Dialog open={this.state.popupOpened} onClose={this.closePopup.bind(this)}>
          <QRScanner onScan={this.onQrScan.bind(this)} onError={this.onQrError.bind(this)} />
        </Dialog>
      </>
    )
  }
}


export default withRouter(MainPanel);