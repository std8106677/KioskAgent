export const SET_USER = "setUser";
export const SET_PAGE = "setPage";

export function setUser(user) {
  return {
    type: SET_USER,
    payload: user
  };
}

export function setPage(page) {
  return {
    type: SET_PAGE,
    payload: page
  };
}
