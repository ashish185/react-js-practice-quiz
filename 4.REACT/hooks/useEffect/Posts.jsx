import React, { useState } from 'react'
import { useEffect } from "react";

/**
 * This will fetch Post from api
 * Reference: https://www.youtube.com/watch?v=QQYeipc_cik&t=30s
 * Notes: notes/useEffect
 */
const Posts = () => {
  const [list, setList] = useState([]);
  
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://jsonplaceholder.typicode.com/posts", { signal })
      .then((response) => response.json())
      .then((json) => {
        setList(json);
      }).catch((err)=>{
        if(err.name ==='AbortError'){
            console.log("Cancelled");
        }
      });
      return ()=>{
        console.log('Cancelled');
        controller.abort();
      }
  }, []);

//   useEffect(() => {
//     let isCancelled=false;
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((response) => response.json())
//       .then((json) => {
//         if (!isCancelled) {
//           setList(json);
//         }
//       });
//       return ()=>{
//         console.log('Cancelled');
//         isCancelled = true;
//       }
//   }, []);

  return (
    <div>
      {list.map((el) => (
        <div key={el.id}>{`{id:${el?.id}, title:${el?.title}}`}</div>
      ))}
    </div>
  );
};

export default Posts;