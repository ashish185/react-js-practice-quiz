import React, { useEffect, useState } from "react";
import "./pagination.css";

const Card = ({ src, title }) => {
  return (
    <div className="card">
      <img src={src}></img>
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
const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(100);
  const [data, setData] = useState(dummyData);

  const getApiData = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=10&skip=10");
    const jsonData = await res.json();
    return jsonData;
  };

  useEffect(() => {
    (async () => {
      const data = await getApiData();
      setData(data.products);
      console.log("data", data);
    })();
  }, []);

  const renderCards = () => {
    return data.map((obj, index) => {
      const { thumbnail, title } = obj;
      return <Card key={thumbnail} src={thumbnail} title={title} />;
    });
  };

  return (
    <div>
      <div>Current Page/Total Pages: {`${currentPage}/${totalPage}`}</div>
      <div className="card-wrapper">{renderCards()}</div>
      <div>
        <button>Prev</button>
        <span className="page-number">1</span>
        <button>Next</button>
      </div>
    </div>
  );
};

export default Pagination;
