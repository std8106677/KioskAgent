import React, { Component } from "react";
import { connect } from "react-redux";
import { withCookies } from "react-cookie";
import { setPage } from "../actions";
import { Button } from "react-bootstrap";
import { Container, Row, Col } from 'reactstrap';
import { } from "../utils/api";
import { Redirect } from "react-router-dom";
import { Locales } from "../lang/language";
class MenuPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password_old: "",
      password_new: "",
      password_new2: "",
    };
  }

  render() {
    return (
      <div>
        <div style={{margin: 10}}>{"店看看ViuKiosk門店配置"}</div>
        <table align="center" cellPadding="8" border="1" width="80%">
          <thead>
            <tr>
              <td><span>{"Title"}</span></td>
              <td><span>{"Content"}</span></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span>{"門店名稱"}</span></td>
              <td><span>{"廈門自貿店"}</span></td>
            </tr>
            <tr>
              <td><span>{"Export"}</span></td>
              <td><span>{""}</span></td>
            </tr>
            <tr>
              <td><span>{"URL"}</span></td>
              <td><span>{""}</span></td>
            </tr>
            <tr>
              <td><span>{"DevID"}</span></td>
              <td><span>{"xxxxxx"}</span></td>
            </tr>
            <tr>
              <td><span>{"MerchantsID"}</span></td>
              <td><span>{"xxxxxx"}</span></td>
            </tr>
            <tr>
              <td><span>{"GroupID"}</span></td>
              <td><span>{""}</span></td>
            </tr>
            <tr>
              <td><span>{"ShopID"}</span></td>
              <td><span>{""}</span></td>
            </tr>
            <tr>
              <td><span>{"Version"}</span></td>
              <td><span>{""}</span></td>
            </tr>
            <tr>
              <td><span>{"DevPwd"}</span></td>
              <td><span>{""}</span></td>
            </tr>
            <tr>
              <td><span>{"MerchantsPwd"}</span></td>
              <td><span>{""}</span></td>
            </tr>
            <tr>
              <td><span>{"BeginHour"}</span></td>
              <td><span>{""}</span></td>
            </tr>
            <tr>
              <td><span>{"Interval"}</span></td>
              <td><span>{""}</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps({ page }, ownProps) {
  return { page };
}


//this.props.fetchPost
//this.props.deletePost
export default connect(mapStateToProps, { setPage })(withCookies(MenuPage));
