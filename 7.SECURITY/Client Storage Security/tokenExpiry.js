/* eslint-disable no-undef */
const token= generateToken();
localStorage.setItem('token', token);

setTimeout(() => {
  localStorage.removeItem('token');
 }, tokenExpirationTime);