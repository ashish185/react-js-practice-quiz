1. How many tags generally present in head tag?
```html
<head> contains <link rel="stylesheet" href="styles.css">,<title> and <meta> tags
```

2. General Structure of HTML5?
```html
<!DOCTYPE html><!-- This DocType is not a comment -->
<html lang="en">
<head><!-- Meta and title comes in head tag -->
   <!-- It give the browser instruction to understand page's dimension and scaling -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"><!-- Very imp -->
    <meta  name="Name given help in SEO" content="width=device-width, initial-scale=1.0">
    <meta name="keywords"content="Mobiles,Shopping"></meta>
    <title>Document</title>
</head>
<body>
</body>
</html>
```

1. Meta tag?
```html
<!-- They helped in SEO also -->
<meta name="keywords"content="Mobiles,Shopping"></meta> //They are EMpty tags       
<meta name="description "content="Mobiles,Shopping"></meta>
<meta name="description "content="Mobiles,Shopping"></meta>
```

3. What will happen if the doctype is not specified in an HTML web page?
```
Answer:If the doctype is not specified in an HTML web page, then the web browser will be unable to interpret 
the new HTML5-specific tags.
Markup is what HTML tags do to the text inside of them
```

4. Question: Why do you think the addition of drag-and-drop functionality in HTML5 is important? 
How will you make an image draggable in HTML5?
```html
 <img draggable = "true">
```

5. Question: What is the server-sent events in HTML5?
Ans)The events that flow from the webserver to the browsers 
are called server-sent events.
`<eventsource src = "/cgi-bin/myfile.cgi" />`

6. Question: Briefly explain various page structure elements in HTML5.
Answer: Following are the various page structure elements available in HTML5:
```html
<article> - Represents a set of information on a web page
<aside> - Represents the sidebar of a web page
<footer> - Represents the footer section of a web page
<header> - Represents the header section of a web page
<nav> - Represents the navigational elements of a web page
<section> - Represents the set of instructions used inside an article block for defining the basic structure of a web page
```

7. What is BOM?
Ans: The Browser Object Model: The Browser Object Model (BOM) allows JavaScript to "talk to" the browser.
The Browser default page is window object. 
Underneath window object we have various object -> 1.document , 2. screen, 3. navigator, 4. history, 5.location

8. New features of HTML5?
1.Audio and video, 2. Canvas and SVG 3. Web Storage 4. Drag and drop 5. Content Editable 6. server-sent events 7. Web worker 8. New Semantics
9.Validation on form. 10.GeoLocation api

9. How do you handle if some browser do not supports HTML5?
In that case I can use Modernizr library: Modernizr library gives the information about the browser does not support HTML5.

10. What are web workers?
Agar UI par bhut jada time consuming script h to web worker UI Ko hang nhi hone dete
```html
    <script>
         var worker = new Worker('bigLoop.js');
         
         worker.onmessage = function (event) {
            alert("Completed " + event.data + "iterations" );
         };
         
         function sayHello() {
            alert("Hello sir...." );
         }
      </script>
```
URL input type used for the web address. Use one or more attributes using type = "url"
Week - Pick a week by using type = "week."

11. How to add video tag?
Ans:
```html
<video width = "640" height = "360" controls>
<source src = "videofile.mp4" type = "video/mp4">
</video>
```

13. Block level elements
Block: div, section, p,li,ul,nav
Inline: Span, button,`<textarea>`

14. The `<button>` tag permits phrasing content inside button element contents like text or images etc, along work with type functionality defined. But the input type=”button” attribute does not permit content.

15. ## What is the difference between Anchor and Link tags in HTML5?
- Use Anchor tag for hyperlinks that users can click to navigate.
- Use Link to include resources like stylesheets or specify metadata for the page.

16. ## What is the difference between Anchor and Link tags in HTML5?
- Use Anchor tag for hyperlinks that users can click to navigate.
- Use Link to include resources like stylesheets or specify metadata for the page.

The `<b>` and `<strong>` tags in HTML both apply bold styling to text, but they differ in semantic meaning and usage.

---
17. ## What is the difference between `<strong>` and `<b>` tags in HTML5?
- Strong Tag
   1. Semantic: indicates importance text.
   2. Use when the text holds semantic importance, like warnings or critical info.
   3. Screen readers often stress the text for emphasis.
- Bold Tag
   1. Purely visual: makes text bold for presentation or no additional meaning
   2. Screen readers typically do not give it special emphasis.
   3. Use when bold is for visual purposes only, like titles or keywords.  

18. ## What are void elements in html?
- Void elements in HTML are self-closing tags that do not have any content or closing tag. 
Example: `<br>`
- In HTML5, you don’t need to use a / at the end (e.g., <br />), but it is allowed for compatibility.
```html
<img src="image.jpg" alt="Example image">
<br>
<input type="text" placeholder="Enter your name">
```

19. What is difference between <figure> and <img> and picture lies in their roles and usage in HTML?
-  `<figure>`: Grouping Media with Captions


20. Question: Please explain the new form input types in HTML5.
Answer: The HTML5 introduces the following 14 new form input types:
Color, Date, Email, Month, Number 
Datetime - Combination of date and time. Pick a date and time by using type = "datetime"
Datetime-local - Doesn't include the timezone. Pick a date and time by using type = "datetime-local."
Search - Allows searching queries by inputting text. Enter one or many search queries by using type = "search."
Placeholder - Displays a short hint in the input fields before entering a value. Write a short hint in the input field using type = "placeholder."
Range - Inserts a numerical value within a specific range. Enter a numerical value within a range using type = "range."
Time - Pick a time by using type = "time.".
