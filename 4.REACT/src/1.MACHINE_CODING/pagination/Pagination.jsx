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

const LIMIT=10;

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [data, setData] = useState(dummyData);

  const getApiData = async () => {
    const res = await fetch(
      `https://dummyjson.com/products?limit=${LIMIT}&skip=${currentPage * LIMIT}`
    );
    const jsonData = await res.json();
    return jsonData;
  };

  useEffect(() => {
    (async () => {
       const { total, skip, limit, products } = = await getApiData();
      setData(products);
      setTotalPage(Math.ceil(total / limit));
      console.log("response1", res, Math.ceil(total / limit));
      console.log("data", products);
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
        <span
          onClick={() => setCurrentPage((page) => (page > 0 ? page - 1 : page))}
          className="page-number"
        >
          1
        </span>
        <button
          onClick={setCurrentPage((page) =>
            page < totalPage ? page + 1 : page
          )}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
