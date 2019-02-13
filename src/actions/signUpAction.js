const API_HOST_URL = process.env.API_URL;

export const signUp = userdata =>{
  return fetch(`${API_HOST_URL}/auth/signup`, {
    method: 'POST',
    body: JSON.stringify(userdata),
    headers: {
      'content-type': 'application/json',
    }
  })
    .then(res => res.json())
};
