import notify from 'msg-notify';

const API_HOST_URL = process.env.API_URL;
export const signUp = (userdata, history) => dispatch => {
  return fetch(`${API_HOST_URL}/auth/signup`, {
    method: 'POST',
    body: JSON.stringify(userdata),
    headers: {
      'content-type': 'application/json',
    }
  })
    .then(res => res.json())
    .then( responseData => {
      if (responseData.message === 'you were successfully registered!' ){
        notify('Welcome, thank you for registering', 'success');
        history.push('/login');
        
      }
       else if (responseData.error === 'Password must contain atleast one lowercase letter, one uppercase letter, a digit and be 6 to 12 characters long!') {
          notify('Password  must contain atlest one [A-Z,a-z] and a digit', 'error');
      }
    })
};
