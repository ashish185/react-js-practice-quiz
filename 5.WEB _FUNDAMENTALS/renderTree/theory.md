Link of article: https://shuvamk.medium.com/why-exactly-do-we-need-a-virtual-dom-7e6821d2b17d
https://www.youtube.com/watch?v=zEuO9cyc4RE

1. Layout step: To create layout, 
where is my div going to be located and what is coordinate of div on the screen.
2. Paint method

**Why the Dom manipulation is Expensive**
Because of the four steps each time the dom updated causes slowness.
React find the changes by using the diffing algorithm and changes the Dom at once in batch mode.
