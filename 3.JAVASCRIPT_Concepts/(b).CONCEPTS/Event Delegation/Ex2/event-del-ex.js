document.querySelector('#inputId').addEventListener('keyup',(event  
)=>{
  console.log(event.target.dataset.myuppercase);
  if(event.target.dataset.myuppercase !== undefined){
    event.target.value=event.target.value.toUpperCase();
  }
  /* event.target.value=event.target.value.toupperCase(); */
})