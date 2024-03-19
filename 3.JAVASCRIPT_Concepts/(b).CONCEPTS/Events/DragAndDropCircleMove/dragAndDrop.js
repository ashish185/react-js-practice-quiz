console.log('Check that script is running or not');
/* querySelector returns the element not array */
const content = document.querySelector('.content');

const box = document.getElementsByClassName('box'); //It always give array

/* 1. Caution: native js k events m camel casing nhi chlti, X dragStart, Yes dragstart
2. it can be also done like this <element ondragStart='myFunctionName' />
*/
/* Events fired on the draggable target (the source element):
1. ondragstart - occurs when the user starts to drag an element
2. ondrag - occurs when an element is being dragged
3. ondragend - occurs when the user has finished dragging the element

Events fired on the drop target:
4. ondragenter - occurs when the dragged element enters the drop target
5. ondragover - occurs when the dragged element is over the drop target
6. ondragleave - occurs when the dragged element leaves the drop target
7. ondrop - occurs when the dragged element is dropped on the drop target
*/
content.addEventListener('dragstart', (e) => {
   console.log('dragstart event is fired');
   //this.className = 'red-border'; // Wrong here this is window object
   e.target.className += ' red-border'; //It will add red border outside circle on drag start
   setTimeout(() => { e.target.className = 'hide' }, 0);
});

content.addEventListener('dragend', (e) => {
   console.log('dragend event is fired');
   e.target.className = 'content';
});

for (b of box) {
   b.addEventListener('dragover', (e) => {
      e.preventDefault();
      /* //Because by no element is allowed to drag over other element. With the help of this there is no
      not allowed section
       */
      console.log('dragover event is fired');
   });
   b.addEventListener('dragenter', (e) => {
      console.log('dragenter event is fired');
      e.target.className += ' dashed-on-enter';
   })

   b.addEventListener('dragleave', (e) => {
      e.target.className = 'box';
      console.log('dragleave event is fired');
   })

   b.addEventListener('drop', (e) => {
      e.target.append(content);
      console.log('drop event is fired');
   })
}