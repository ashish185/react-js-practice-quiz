1. What are pseudo classes in JS?
A pseudo-class is used to define a special state of an element.
For example, it can be used to:
Style an element when a user mouses over it -> div:hover
Style visited and unvisited links differently -> a:link{ color:'blue'}
Style an element when it gets focus ->

2. p i:first-child { color:blue }, what does it mean?
Ans <p>Hi my name is <i> ash <i> rest <i> singhal <i>, it will blue ash only.

3. What are different pseudo classes available?
<body>
    <p>it's child of parent p1 of body</p>
    <p>it's child of parent p2 of body</p>
    <div>
        <p>it's first child of div </p>
        <p>it's second child of div </p>
    </div>
<body/>
Ans :hover,
:first-of-type,:nth-of-type(n) 
Ex p:first-of-type { color:yellow} 
//Selects every <p> element that is the first <p> element of its parent

4. Pseudo element?
Ans) p::after ->Insert content after every <p> element.

5. How many ways you can add css in file?
 /* 3 ways to add css in html file
1) External: Here we add <link rel="stylesheet" href="mystyle.css"> in html file.
<head>
  <link rel="stylesheet" href="styles.css">
</head>
2) Internal: Here we add css in <style> h1 {color:blue} </style> tag.
3) Inline: Passing the css in attribute <h1 style="color:blue;text-align:center;">This is a heading</h1>
*/

6. what is the diff between visibility:hidden and display:none?
Ans) Both hides the element, but diff is that in visibility:none space of element remains,
while in display: none space vanished.

7. What is CSS overflow property?
Ans) overflow property btati h ki what to do when content is too big to fit into an area.
Ex: overflow:scroll, overflow:hidden,overflow:auto (Scroll tbhi aayega jab jrurat hogi).
Note: Only applies for block level element like <div>,<p>,<h1>

8. Display?
The display property specifies if/how an element is displayed.
Every HTML element has a default display value depending on what type of element it is.
The default display value for most elements is block or inline. 
Block: Started with new line and takes the full width of page Ex div,h1,footer,form,section
inline: takes up as much width as necessary.

9. Selectors in css?
CSS selectors define the elements to which a set of CSS rules apply.
Relationships
1) *{color:blue } : Universal
2) p{ color:blue} : Type selector
3) #pid1 { color:blue} :ID selector
4) .pClass {}: Class selector

10. Combinator?
Ans) A combinator is something that explains the relationship between the selectors.
<div>
    <p>Para1 <p>sub para1</p> <p>
</div>
<p>Para2</p>
<p>Para3</p>

therefore:
Child of div:Para1 -> div>p (Child selector)
Descendent of div: Para1, sub para1 -> div p (Descendent selector)
Adjacent Sibling of div : Para2 -> div + p (Adjacent Sibling Selector)
Siblings of div:Para2,Para3 -> div ~ p (General sibling selector)
