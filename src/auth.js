import axios from "axios";

export async function loginUser(email, password) {

  try {
    let response = await axios.post('http://localhost:5000/api/v1/users/login', { email, password })
    if (response.data.auth) {
      localStorage.setItem('token', response.data.token)
      return { auth: true, ack: response.data.message }
    }
    return { ack: response.data.message, auth: false }

  }
  catch (err) {
    return { ack: "Network Error", auth: false }
  }

}

export function logoutUser() {
  localStorage.removeItem('token');
}

export function isAuthenticated() {
  return localStorage.getItem('token') ? true : false;
}
