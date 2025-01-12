/* 
10sec- Color: blue
5sec- Color: red
Infinite
the time should be shown as text
*/
import { useEffect, useState } from "react";

const ProgressBar = ({ timeInMillSec = 1000, defaultColor = 'yellow' }) => {
    const [count, setCount] = useState(10);
    const [color, setColor] = useState(defaultColor);
    useEffect(()=>{
        const id = setTimeout(() => {
            setCount((count) => {
                if(count ===5){
                    setColor('red')
                }
                if (count === 1) {
                    return 10;
                } 
                else{
                    return count-1
                }
            });
        }, 1000)
        return ()=>{
            clearTimeout(id);
        }
    },[count])

    return (<div style={{ backgroundColor: color, width: `${1000 - (500 - count * 10)}px`, border: '2px solid black' }}>
        {count}
    </div>)
};

const ProgressBarMain = () => {
    return (<ProgressBar />)
};

export default ProgressBarMain;
