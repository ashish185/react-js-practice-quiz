## A library that helps with cross-browser compatibility while providing prototypes (possibly polyfills)
Core-JS
es @babel/preset-env to include only necessary polyfills.
```js
import "core-js/es/array/includes";  // Import only what's needed

const numbers = [1, 2, 3];

if (numbers.includes(2)) {
    console.log("Number found!");
} else {
    console.log("Number not found!");
}

```


## What is Core web vitals?
LCP(), CLS, INP

## Time:
LCP:  (Best)2.5sec<=NeedImprovement<=4sec (worst)
CLS:  (Best)0.1<=NeedImprovement<=0.25 (worst)
INP: (Best)0.2se<=NeedImprovement<=0.5 (worst)


## Score
0-49: Poor,
50-89: Good,
90-100: Best

## Weighage
TBT(total Blocking time):25%,
Speed index,
LCP, CLS: 30%, 30%

## How to reduce LCP?
1. Reduce unused JavaScript: Tree Shaking
2. Use Compression techniques: gZip, brotli.
3. Serve image in next gen format: like WebP.
4. Optimize image:
1Use Modern Image Formats: WebP, AVIF, and JPEG 2000 offer better compression without losing quality, reducing image load times.
Responsive Images: Use srcset to load different image sizes based on the viewport, so users get images that are appropriately sized for their device.
Lazy Load Images: For non-critical images below the fold, use loading="lazy" to delay their loading until they are about to enter the viewport.
Compress Images: Use image optimization tools (like TinyPNG or ImageOptim) to reduce file sizes without significant quality loss.
5. Lazy load below the fold content like images,videos.
6. Optimize Server Response Time (TTFB)
7. Optimize the Critical Rendering Path(DOm=>CSSOm=>). Use the rel="preload" attribute to preload important resources such as the main stylesheet, fonts, and critical images,



## How do we measure scalability of frontend?
1. Real World testing.
2. Stress testing: using JMeter.
3. Performance benchmark: FCP, LCP lighthouse
4. Analytics and Monitoring:  Google Analytics, New Relic, or Datadog



### **Key Differences**

| Feature                | `<link rel="preload">`              | `<link rel="prefetch">`              |
|------------------------|-------------------------------------|--------------------------------------|
| **Purpose**            | Load critical resources now.       | Load future resources in advance.   |
| **Priority**           | High priority.                     | Low priority.                       |
| **When Used**          | Current page needs it immediately. | For future pages or interactions.   |
| **Blocking**           | Blocks rendering until loaded (for critical CSS/JS). | Does not block rendering.           |
| **Impact on User**     | Improves current page performance. | Improves perceived next-page speed. |

---