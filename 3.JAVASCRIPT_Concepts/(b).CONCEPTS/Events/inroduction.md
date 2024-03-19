1. What is Event, how it is related to HTML and JS?
Ans: Kis kam ka hona is basically event. UI par HTML element par kuch hona is event and
uss event par kya kam hoga is js.

2. Basically what are these we generally use e.preventDefault(), e.stopPropagation(), e.target(), and how to know how many they are?
Ans: 
They are certain Event Methods and properties:
//Below are the methods
preventDefault()
stopPropagation()

//Below are the properties
event.target,
event.type

//Baki ess link par mil jayenge
https://www.w3schools.com/jsref/dom_obj_event.asp

3. 
Dragged Element: Jisko Drag kar rhe h.
Target: Jnha drop target krenge.

Events fired on the draggable target (the source element):
1. ondragstart - occurs when the user starts to drag an element
2. ondrag - occurs when an element is being dragged
3. ondragend - occurs when the user has finished dragging the element

Events fired on the drop target:
4. ondragenter - occurs when the dragged element enters the drop target
5. ondragover - occurs when the dragged element is over the drop target
6. ondragleave - occurs when the dragged element leaves the drop target
7. ondrop - occurs when the dragged element is dropped on the drop target

