'use client'
import { useEffect, useState } from "react";
import { MemeCard } from "./MemeCard";
import Shimmer from "./Shimeer";

const LIMIT = 10;
const InfiniteScroll = () => {
  const [memes, setMemes] = useState([]);
  const [showShimmer, setShowShimmer] = useState(false);
  const [totalPage, setTotalPage] = useState();
  const [currentPage, setCurrnetPage] = useState(1);
  const [numberOfRecords, setNumberOfRecords] = useState(LIMIT);

  useEffect(() => {

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    fetchMemes((currentPage - 1) * LIMIT);
  }, [currentPage]);

  const handleScroll = () => {
    //scrollY - how much I have scrolled
    // innerHeight - heigh of the window(visible setion)
    // document.body.scrollHeight - total height of the web page
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
        setCurrnetPage((currentPage) => currentPage + 1);
    }
  };

  const getApiData = async (recordsToSkip) => {
    console.log('number of records', numberOfRecords);
    const res = await fetch(
      `https://dummyjson.com/products?limit=${LIMIT}&skip=${recordsToSkip}`
    );
    const jsonData = await res.json();
    return jsonData;
  };

  const fetchMemes = async (rec) => {
    setShowShimmer(true);
    const json = await getApiData(rec);
    console.log(json.total);
    setTotalPage(Math.ceil(parseInt(json.total) / LIMIT));
    console.log(json);
    

    setShowShimmer(false);
    setMemes((memes) => [...memes, ...json.products]);
  };

  return (
    <div style={{ display: "flex", flexWrap: 'wrap' }}>
      <h1>Total Pages are: {`${totalPage}`}</h1>
      {memes.map((meme, i) => (
        <MemeCard key={i} data={meme} />
      ))}

      {showShimmer && <Shimmer />}
    </div>
  );
};
export default InfiniteScroll;
