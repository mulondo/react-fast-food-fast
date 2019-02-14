import { GET_MENU } from '../constants';

const API_HOST_URL = process.env.API_URL;
const token = window.localStorage.getItem('user_token');


export const getMenu = () => dispatch => {
  // console.log(">>>>>>>>>>");
  return fetch(`${API_HOST_URL }/menu`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${token}`
    }
  })
    .then(res => res.json())
    .then(response => {
      // console.log("action +++++++",response.menu);
      dispatch({
        type: GET_MENU,
        payload: response.menu
      });
    });
};