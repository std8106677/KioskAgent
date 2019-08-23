import React, { Component } from "react";
import { connect } from "react-redux";
import { withCookies } from "react-cookie";
import { setPage } from "../actions";
import { Button } from "react-bootstrap";
import { } from 'reactstrap';
import { } from "../utils/api";
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

  clickConfirm() {

  }

  clickCancel() {

  }

  render() {
    return (
      <div>
        <div style={{margin: 10}}>{"店看看ViuKiosk修改密碼"}</div>
        <table align="center">
          <tbody>
            <tr>
              <td>
                <span>{"輸入原密碼"}</span>
              </td>
              <td>
                <input type="text" placeholder={"請輸入密碼"} value={this.state.password_old}
                  onChange={e => this.setState({ password_old: e.target.value })} />
              </td>
            </tr>
            <tr>
              <td>
                <span>{"輸入新密碼"}</span>
              </td>
              <td>
                <input type="text" placeholder={"請輸入密碼"} value={this.state.password_new}
                  onChange={e => this.setState({ password_new: e.target.value })} />
              </td>
            </tr>
            <tr>
              <td>
                <span>{"再次輸入新密碼"}</span>
              </td>
              <td>
                <input type="text" placeholder={"請輸入密碼"} value={this.state.password_new2}
                  onChange={e => this.setState({ password_new2: e.target.value })} />
              </td>
            </tr>
          </tbody>
        </table>
        <div style={{textAlign:"center"}}>
          <Button style={{margin: "0 auto"}} onClick={this.clickCancel}>{Locales.common.取消}</Button>
          <Button style={{margin: "0 auto"}} onClick={this.clickConfirm}>{Locales.common.確定}</Button>
        </div>
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
