import React, { Component } from "react";
import { connect } from "react-redux";
import { withCookies } from "react-cookie";
import { setPage } from "../actions";
import { } from "react-bootstrap";
import { } from 'reactstrap';
import { } from "../utils/api";
import MenuPage from "../components/menu_subpage";
import ChangePasswordPage from "../components/changePassword_subpage";
import StoreConfigPage from "../components/storeConfig_subpage";
import UploadADPicPage from "../components/uploadADPic_subpage";
import UploadItemPicPage from "../components/uploadItemPic_subpage";
import { Locales } from "../lang/language";
class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
    Locales.setLanguage("cn");
    this.props.setPage("menu");
  }

  renderSubPage(){
    const {page}=this.props;
    switch(page) {
      case "menu": return <MenuPage/>
      case "changePassword": return <ChangePasswordPage/>
      case "storeConfig": return <StoreConfigPage/>
      case "uploadADPic": return <UploadADPicPage/>
      case "uploadItemPic": return <UploadItemPicPage/>
      default: return <MenuPage/>
    }
  }

  render() {
    return (
      <div>
        {this.renderSubPage()}
      </div>
    );
  }
}

function mapStateToProps({ page }, ownProps) {
  return { page };
}


//this.props.fetchPost
//this.props.deletePost
export default connect(mapStateToProps, { setPage })(withCookies(MainPage));
