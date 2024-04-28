import React from 'react';

const FunctionBasedComp = () => {
    function handleClickNorm(str){
        str?alert(str): alert("no str")
    }
    const handleClickAsArrow = (str) =>{
        str?alert(str): alert("no str")
    }
    
    return (
        <div>
            <button onClick={handleClickNorm}>Click me</button>
            <button onClick={handleClickAsArrow}>Click me</button>      
            {/* It creates issue as you are calling function directly */}
            {/* <button onClick={handleClickNorm("calling direct")}>Click me</button>         */}
            {/* It does not give error but does not work properly */}
        {/*     <button onClick={handleClickAsArrow("calling direct")}>Click me</button>   */}
            <button onClick={()=>handleClickNorm("calling normal func via arrow")}>Click me</button>        
            <button onClick={()=>handleClickAsArrow("calling arrow func via arrow")}>Click me</button>        
        </div>
    );
};

export default FunctionBasedComp;