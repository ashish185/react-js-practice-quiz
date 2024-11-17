Here’s a summarized overview of **Content-Security-Policy (CSP):**

| **Aspect**             | **Description**                                                                                   |
|-------------------------|---------------------------------------------------------------------------------------------------|
| **Purpose**            | Protects web applications from XSS, clickjacking, and other injection attacks by controlling resource loading. |
| **Syntax**             | `Content-Security-Policy: directive source-list; directive source-list;`                          |
| **Common Directives**  | - `default-src`: Fallback for all resources. <br> - `script-src`: Allowed sources for JavaScript. <br> - `style-src`: Allowed sources for CSS. <br> - `img-src`: Allowed sources for images. |
| **Examples**           | - `default-src 'self'`: Restrict all resources to the same origin. <br> - `script-src 'self' https://example.com`: Allow JavaScript from the same origin and a trusted source. |
| **Security Levels**    | - **Restrictive CSP**: Limits resources to trusted sources. <br> - **Relaxed CSP**: Allows more sources for compatibility. |
| **Reporting**          | - `report-uri`: Specifies a URL to send CSP violation reports. <br> - `report-to`: Newer reporting mechanism. |
| **Best Practices**     | - Avoid wildcards (`*`). <br> - Restrict inline scripts (`'unsafe-inline'`). <br> - Test using `Content-Security-Policy-Report-Only`. |
| **Challenges**         | - Compatibility with older browsers. <br> - Configuring CSP for third-party scripts. <br> - Balancing security and functionality. |

Example CSP header:
```http
Content-Security-Policy: default-src 'self'; script-src 'self' https://trusted.com; img-src 'self' data:;
``` 

This allows:
- All resources from the same origin (`'self'`).
- JavaScript from the same origin and `https://trusted.com`.
- Images from the same origin and inline data URLs (`data:`).