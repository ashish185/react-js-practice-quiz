import React, { useEffect, useState } from "react";
import "./pagination.css";

const Card = ({ src, title }) => {
  return (
    <div className="card">
      <img src={src} alt={'The is product'} loading="lazy" width={150} height={150}></img>
      <p>
        <b>{title}</b>
      </p>
    </div>
  );
};

const dummyData = [
  {
    thumbnail:
      "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/thumbnail.png",
    title: "xyz",
    price: "400",
  },
];
const InfiniteScroll = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(100);
  const [data, setData] = useState([]);

  const getApiData = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const jsonData = await res.json();
    return jsonData;
  };

  useEffect(() => {
    (async () => {
      const data = await getApiData();
      setData(data.products);
      console.log("data", data);
    })();
    document.addEventListener('scroll', (event)=>{
      console.log("Event", event);

    })
    return ()=>{
      window.removeEventListener('scroll', ()=>{})
    };
    /* 
    Left  with logic
    */
  }, []);

  const printDimnension=()=> {
    // window.innerHeight;
    // document.body.scrollHeight;
    // window.scrollY;
  }

  const renderCards = () => {
    
    return data.map((obj, index) => {
      const { thumbnail, title } = obj;
      return <Card key={thumbnail} src={thumbnail} title={title} />;
    });
  };

  return (
    <div>
      <h1>Infinite Scroll</h1>
      <div className="card-wrapper">{renderCards()}</div>
    </div>
  );
};

export default InfiniteScroll;
