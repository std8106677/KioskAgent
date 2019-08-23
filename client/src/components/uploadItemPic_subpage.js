import React, { Component } from "react";
import { connect } from "react-redux";
import { withCookies } from "react-cookie";
import { setPage } from "../actions";
import { } from "react-bootstrap";
import { } from 'reactstrap';
import { } from "../utils/api";
import { Locales } from "../lang/language";
class UploadItemPicPage extends Component {
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
        <div style={{margin: 10}}>{"店看看ViuKiosk上傳品項圖片"}</div>
        <table align="center" cellPadding="8" border="1" width="80%">
          <thead>
            <tr>
              <td><span>{"item"}</span></td>
              <td><span>{"name"}</span></td>
              <td><span>{"media"}</span></td>
              <td><span>{"upload"}</span></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span>{"琥珀珍珠奶茶"}</span></td>
              <td><span>{"珍奶促銷"}</span></td>
              <td><span>{""}</span></td>
              <td><span>{"/xxx/xxx/xxx/xxx.jpg"}</span></td>
            </tr>
            <tr>
              <td><span>{"熱帶水果茶"}</span></td>
              <td><span>{"夏日廣告"}</span></td>
              <td><span>{""}</span></td>
              <td><span>{"/xxx/xxx/xxx/xxx.jpg"}</span></td>
            </tr>
            <tr>
              <td><span>{"高山烏龍茶"}</span></td>
              <td><span>{""}</span></td>
              <td><span>{""}</span></td>
              <td><span>{"上傳"}</span></td>
            </tr>
            <tr>
              <td><span>{"阿里山紅茶"}</span></td>
              <td><span>{""}</span></td>
              <td><span>{""}</span></td>
              <td><span>{"上傳"}</span></td>
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
export default connect(mapStateToProps, { setPage })(withCookies(UploadItemPicPage));
