const API_HOST_URL = process.env.API_URL;

export const Login = (userdata, history) => dispatch => {
  return fetch(`${API_HOST_URL}/auth/login`, {
    method: 'POST',
    body: JSON.stringify(userdata),
    headers: {
      'content-type': 'application/json',
    }
  })
    .then(res => res.json())
    .then(responseData => {
      if (responseData.token){
        alert(responseData.message);
        if(responseData.message === 'You have been successfully logged in!'){
          history.push('/menu');
          localStorage.setItem('usertoken');
        }
      } 
      else {
        alert(responseData.error)
      }
    });
};

export function logout() {
  return function(dispatch) {
    localStorage.removeItem('usertoken');
    dispatch({ type: SIGNOUT });
  };
 }
