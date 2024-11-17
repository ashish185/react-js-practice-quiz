1. Critical Rendering Path.
2. Minimize HTTP requests
3. async/defer
4. Avoid Redirection
5. Resource Hinting
6. Fetch Priority
7. Early Hints
8. HTTP upgrade methods (htt 1.1 vs http2 vs http3)
9. Compression: brotli/gzip
10. HTTP caching: Cache Control
11. Caching using Service worker.

## Explanation
1. Critical Rendering Path:
Critical Rendering Path involves creation Of DOM tree, CSSOM tree then DOM + CSSOm -> Rendering Tree:
It says that critical thing could be get in first load, so that FCP could happen first, which makes page faster.
For ex: Showing loading if rest of things take time.

2. Minimize HTTP requests
Sending Parallel request adds latency during there round trip, the better way is to
for better first page speed Make the CSS and JS inline instead of fetching it from file.
So it helps, ek hi request m sab load ho jayega instead multiple request m krne k.
```html
<!-- This is how we do it -->
<html>
 <head>
    <link href="./index.css" rel="stylesheet" /> 
    <script defer src="./index.js"></script>
 </head>
</html>

```
```html
<!-- This can improve performance -->
<html>
    <head>
     <style>
        .card-wrapper {
        display: flex;
        gap: 15px;
        padding: 15px;
      }
     </style>
     <link href="./index.css" rel="stylesheet" /> 
    <head>
    <body>
         <div class="card-wrapper" />
         <script> 
         function addListner() {
            document.querySelectorAll(".card").forEach((card) =>
            card.addEventListener("click", function () {
            alert("Hi");
         })
         );}
        window.onload = addListner;
        </script>
    </body>
</html>
```
3. async/defer


   
   