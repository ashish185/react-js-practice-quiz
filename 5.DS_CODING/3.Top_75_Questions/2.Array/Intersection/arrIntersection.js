let intersect = function(nums1, nums2) {
    let final=[];
    for(let i=0;i<nums2.length;i++){
           let val=nums2[i];
           if(nums1.includes(val)){
               let spval=nums1.splice(nums1.indexOf(val),1);
               final.push(val);
           }
    }
    return final;
};