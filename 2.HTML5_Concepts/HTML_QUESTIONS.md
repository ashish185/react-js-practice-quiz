1. How many tags generaly present in head tag?
Ans <head> contains <title> and <meta> tags

1. General Structure of HTML5?
<!DOCTYPE html><!-- This DocType is not -->
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

1. Meta tag?
<!-- They helped in SEO also -->
<meta name="keywords"content="Mobiles,Shopping"></meta> //They are EMpty tags       
<meta name="description "content="Mobiles,Shopping"></meta>
<meta name="description "content="Mobiles,Shopping"></meta>

1. Question: What will happen if the doctype is not specified in an HTML web page?
Answer:If the doctype is not specified in an HTML web page, then the web browser will be unable to interpret 
the new HTML5-specific tags.
Markup is what HTML tags do to the text inside of them

2. Question: Why do you think the addition of drag-and-drop functionality in HTML5 is important? 
How will you make an image draggable in HTML5?
Ans: <img draggable = "true">

3. Question: What is the server-sent events in HTML5?
Ans)The events that flow from the webserver to the browsers 
are called server-sent events.
<eventsource src = "/cgi-bin/myfile.cgi" />

4. Question: Briefly explain various page structure elements in HTML5.
Answer: Following are the various page structure elements available in HTML5:

<article> - Represents a set of information on a web page
<aside> - Represents the sidebar of a web page
<footer> - Represents the footer section of a web page
<header> - Represents the header section of a web page
<nav> - Represents the navigational elements of a web page
<section> - Represents the set of instructions used inside an article block for defining the basic structure of a web page

5. What is BOM?
Ans: The Browser Object Model: The Browser Object Model (BOM) allows JavaScript to "talk to" the browser.
The Browser default page is window object. 
Underneath window object we have various object -> 1.document , 2. screen, 3. navigator, 4. history, 5.location

6. New features of HTML5?
1.Audio and video, 2. Canvas and SVG 3. Web Storage 4. Drag and drop 5. Content Editable 6. server-sent events 7. Web worker 8. New Semantics
9.Validation on form. 10.GeoLocation api

7. How do you handle if some browser do not supports HTML5?
In that case I can use Modernizr library: Modernizr library gives the information about the browser does not support HTML5.

8. What are web workers?
Agar UI par bhut jada time consuming script h to web worker UI Ko hang nhi hone dete
    <script>
         var worker = new Worker('bigLoop.js');
         
         worker.onmessage = function (event) {
            alert("Completed " + event.data + "iterations" );
         };
         
         function sayHello() {
            alert("Hello sir...." );
         }
      </script>

URL input type used for the web address. Use one or more attributes using type = "url"
Week - Pick a week by using type = "week."

7. How to add video tag?
Ans)<video width = "640" height = "360" controls>
<source src = "videofile.mp4" type = "video/mp4>
</video>

6. Question: Please explain the new form input types in HTML5.
Answer: The HTML5 introduces the following 14 new form input types:
Color, Date, Email, Month, Number 
Datetime - Combination of date and time. Pick a date and time by using type = "datetime"
Datetime-local - Doesn't include the timezone. Pick a date and time by using type = "datetime-local."
Search - Allows searching queries by inputting text. Enter one or many search queries by using type = "search."
Placeholder - Displays a short hint in the input fields before entering a value. Write a short hint in the input field using type = "placeholder."
Range - Inserts a numerical value within a specific range. Enter a numerical value within a range using type = "range."
Time - Pick a time by using type = "time.".

7. 

8. Block level elements
Block: div, section, p,li,ul,nav
Inline: Span, button,<textarea>

9. The <button> tag permits phrasing content inside button element contents like text or images etc, along work with type functionality defined. But the input type=”button” attribute does not permit content.