import axios from "./axios_setting";
import "@babel/polyfill";
let apiCancelList =[];
export function toCancelApi(){
  while (apiCancelList.length > 0) {
    apiCancelList.pop()('取消連線');
  }
}

// =========================== Login =========================== //
export function apiLogin(data) {
  const body = {
    account: data.account,
    password: data.password
  };
  return axios.post("/api/login", body);
}
// =========================== Login =========================== //
