## Client Storage Security.
- Storing sensitive data on client storage.
1. Try storing at server.
2. Encrypt data: Try to store the sensitive data in encrypted form.
```js
const sensitiveData= 'myPwd';
const encryptedData= encryptFunction(sensitiveData);
localStorage.setItem('encryptedData', encryptedData);
```
3. Token Expiry: Set Expiry token time.
```js
   const token= generateToken();
   localStorage.setItem('token', token);
   setTimeout(() => {
    localStorage.removeItem('token');
    }, tokenExpirationTime);
```

- Authentication.
  1. JWT/OAuth.
  2. Session token expiry.
  3. MFA(Multi Factor Authentication)

- Data Integrity.
  1. 
