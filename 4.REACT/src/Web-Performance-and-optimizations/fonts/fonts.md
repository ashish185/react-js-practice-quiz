## Problem?
 - For ex: sansation_light.woff , ye time le skte h load hone m.
 - To text load nhi hota, esko bolte h FOIT.
 - FOIT: “Flash of Invisible Text.

## Solution.
1. ki font late download hota h, to ese hi pehle download karlo, ye line <head> m dal do
    <link rel="preload" as="font" href="sansation_light.woff" type="font/woff2" crossorigin>
    ## as, type, crossorigin  dena hota h.
    cross origin is for safety, whether to fetch resources from "annonymous" or "use-credentials".

2. font-display: swap: 
    1. block: eski wjah se FOIT(ek dum text invisible hona) hi aayega and layout shift bhi aayenge.
    2. swap: ye fallback font dega jab tak desired font load nhi hojata, but problem
        manlo, ki pehle jo font use kar rhe vo ek line m aa rha tha, but abb swap ki wjah se new fallback font,
        two lines same text dikha rha h. this cause layout shift.
    3. fallback:  It minimize the risk of layout shift.
    4. optional: It minimize the risk of layout shift.
    5. auto: set by user agent.

Ref: https://www.youtube.com/watch?v=wnpMeYARV4g

```css
      @font-face {
      font-family: 'myFont';
      src: url('sansation_light.woff');
      font-display: swap; /* block | swap | fallback | optional | auto */
    }
    ```
