/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  const ransomArr= [...ransomNote];
  const magazineArr= [...magazine];
  const mp= new Map();
  for(let i=0; i<ransomArr.length; i++){
      const ch= ransomArr[i];
      const val= mp.get(ch);
      if(val){
          mp.set(ch, val+1);
      }else {
          mp.set(ch, 1);
      }
  }
  for(let i=0; i<magazineArr.length; i++){
      const ch= magazineArr[i];
      const val= mp.get(ch);
      if(val){
          if(val==1){
          mp.delete(ch);
      }   else{
          mp.set(ch, val-1);
          }    
      }
  }
  return mp.size == 0;
};

canConstruct('aa','aab'); //true
canConstruct('aba','aab'); //true
canConstruct('abc','aaZ'); //false