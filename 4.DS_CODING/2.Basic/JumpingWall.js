/* heights[] = {11, 11}
X = 10;
Y = 1; 
Output : 4
*/
const heights=[28,11];
let x=10;
let y=1;
function getAns(){
    let counter=0;
    for(let i=0;i<heights.length;i++){
        let wallheight=heights[i];
        if(wallheight<=x){
            counter++;
        }
        else {
            counter++;
          while(wallheight>x){
                wallheight=wallheight-x+y;
                counter++;
            }
        }
    }
   console.log(counter);
}
getAns();