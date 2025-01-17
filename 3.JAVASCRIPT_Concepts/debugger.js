/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
  const arr=s.split(' ');
    console.log(arr)
  if(pattern.length !== arr.length){
      return false;
  }
  const mp=new Map();
  for(let i=0; i<s.length; i++){
      console.log({ ch1:arr[i]})
      const arrVal=arr[i];
      const ch= s.charAt(i);
      if(!mp.has(ch)){
          mp.set(ch, arrVal);    
      }else{
          const val= mp.get(ch);
          if (val !== arrVal){
              console.log({val, ch2:arrVal})
              return false;
          }
      }
  }
  return true;
};

wordPattern('abba', "dog cat cat dog");