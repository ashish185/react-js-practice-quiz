 ## XSS
 Attacker tries to inject code.

Like if code has
-  innerHtml,
- dangerouslySetHtml
- might be html with script loaded from 2nd page.

- Solution:
1. DomPurify
2. Replace <html> to html
3. Use CSP headers. so that origin from script is loaded is same Content-Security-Policy: default-src 'self' script-src 'self' ; 
4. replace innerHtml to innerText/innerContent

## CSRF (Cross site request forgery)
1. Kisi or site par redirect krte h, so that attacker want to use some information on unauthroized page like bank details.

- Solution
1. Backend par referer bna skte h, it will always check ki hmari request knha se aa rhi h.
2. CSRF token use kar skte. Enn token ko store krke in cookie via request bhejo to ye validate honge.
3. Cookie k andar 'sameSiteStrict = true' hona chiye.
