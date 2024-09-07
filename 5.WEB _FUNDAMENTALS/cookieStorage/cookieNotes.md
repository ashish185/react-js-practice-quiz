## What are cookies in js?
1. Cookies in JavaScript are small pieces of data stored on the user's browser that websites use to remember information between different pages or visits. 
2. They are key-value pairs that can store information like user preferences, session identifiers, and tracking data. Cookies are sent back and forth between the browser and server with each HTTP request and response.

## Two types of Cookies
1. Session cookies — cookies without a Max-Age or Expires attribute – are deleted when the current session ends. 
2. Persistent Cookies - Cookies with Max age or Expires attribute

## Size
Max Size is: 4KB/domain
Local Storage: 5MB

## QUESTIONS
1. What is difference between httpOnly and secure?
A: - httpOnly: reduces the risk JavaScript to read the cookie, hence prevent XSS.
      Note: It cannot be set by client. It can only add by server.      
   - secure:The Secure flag ensures that the cookie is only sent to the server over HTTPS, not over an unsecured HTTP connection. 
   ```js
   document.cookie = "username=JohnDoe; path=/; secure";
   ```
4. What is special about cookie?
A: Cookies can be set via both client and server.
   Ex: Via Client
   ```js
      document.cookie = name + '=' + value + expires + '; path=/';
   ```
   Ex: via Server
   ```js
    app.post('/set-preferences', (req, res) => {
      /* Set in response */
       res.cookie('userPreferences', preferences, { maxAge: 3600000, httpOnly: true }); // Cookie expires in 1 hour
       res.redirect('/');
   });
   ```

2. How to do crud operations with cookie?
A: Create: By server or client
   Delete:
   1: Max age -1 
   2: Best way is to send the response header as it will clear the storage.
   res.setHeader('Clear-Site-Data', '"cache", "cookies", "storage"')


3. What are the different attributes of cookie?

5. Diff between max-age and expires?
6. How it works with incognito tab?


Here's a table that outlines common cookie attributes, their possible values, and how to handle them:

| **Attribute** | **Possible Values**                                           | **Description**                                                                 | **How to Deal With It**                                                                                                                                          |
|---------------|----------------------------------------------------------------|---------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `name`        | Any valid string                                               | The name of the cookie.                                                         | Choose a unique and descriptive name for each cookie. Avoid spaces and special characters.                                                                       |
| `value`       | Any valid string                                               | The value of the cookie.                                                        | Store the data you need, but be mindful of the size. Encode the value using `encodeURIComponent()` if it contains special characters.                            |
| `expires`     | A specific date and time (e.g., `Wed, 21 Oct 2025 07:28:00 GMT`) | Determines when the cookie expires.                                             | Set a specific expiration date if you want the cookie to persist beyond the session. Use `new Date()` to create a valid date string in JavaScript.               |
| `max-age`     | Number of seconds (e.g., `3600` for 1 hour)                    | The maximum age in seconds before the cookie expires.                           | Use `max-age` instead of `expires` for more precise control over the lifetime. `max-age=0` can be used to delete a cookie immediately.                          |
| `domain`      | A domain name (e.g., `.example.com`)                           | Specifies the domain that can access the cookie.                                | Set the domain to allow subdomains to access the cookie. Example: `.example.com` allows `sub.example.com` to access the cookie.                                  |
| `path`        | A URL path (e.g., `/`, `/path/`)                               | Limits the cookie to a specific path within the domain.                         | Use this to restrict access to certain paths on your website. For example, setting `path=/admin` restricts the cookie to pages under the `/admin` directory.    |
| `secure`      | `true` or `false`                                              | Ensures the cookie is sent only over HTTPS.                                     | Always set this flag to `true` for sensitive cookies to ensure they are only sent over secure HTTPS connections.                                                 |
| `HttpOnly`    | `true` or `false`                                              | Prevents access to the cookie via JavaScript.                                   | Set this to `true` for cookies that should not be accessible via JavaScript, such as session cookies, to enhance security against XSS attacks.                  |
| `SameSite`    | `Strict`, `Lax`, `None`                                        | Controls whether the cookie is sent with cross-site requests.                   | Use `Strict` to prevent cross-site request forgery (CSRF) attacks. Use `Lax` for less strict control, and `None` if cross-site requests are required (with `Secure`). |

### Handling Different Attributes

1. **Name and Value:**
   - **Encoding:** Use `encodeURIComponent()` for encoding cookie values to handle special characters safely.
   - **Size:** Keep cookie values small as cookies are sent with every HTTP request.

2. **Expires and Max-Age:**
   - **Long-Term Cookies:** Use a distant `expires` date or a large `max-age` for cookies you want to persist.
   - **Session Cookies:** Omit `expires` and `max-age` to create a session cookie that expires when the browser is closed.

3. **Domain and Path:**
   - **Subdomain Access:** Set the `domain` attribute to allow access across subdomains.
   - **Path Restriction:** Use the `path` attribute to limit where the cookie is accessible within your site.

4. **Secure and HttpOnly:**
   - **Security Best Practices:** Always use `Secure` for sensitive cookies (e.g., session tokens) and `HttpOnly` to prevent client-side scripts from accessing cookies.

5. **SameSite:**
   - **Cross-Site Requests:** Use `SameSite=Strict` to prevent cookies from being sent with requests initiated by third-party websites, which helps protect against CSRF attacks.

### Example

Here’s how you might set a cookie with all these attributes in an Express.js application:

```javascript
res.cookie('sessionToken', 'abc123', {
    expires: new Date(Date.now() + 3600000), // Expires in 1 hour
    domain: '.example.com',
    path: '/',
    secure: true,
    httpOnly: true,
    sameSite: 'Strict'
});
```

This cookie:
- Expires in 1 hour.
- Is accessible across all subdomains of `example.com`.
- Is only sent over HTTPS.
- Cannot be accessed via JavaScript.
- Is not sent with cross-site requests.

This setup is typical for session management in web applications, emphasizing security and controlled access.