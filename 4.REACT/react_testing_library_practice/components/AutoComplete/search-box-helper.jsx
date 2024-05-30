const API = `https://dummyjson.com/products/search`;
const REDIRECT_URL = "https://www.google.com/search";

export const getResults = (queryString) => {
  return fetch(`${API}?q=${queryString}`)
    .then((res) => res.json())
    .then((data) => data?.products)
    .catch((err) => console.log("No results"));
};

export const renderResultItem = (item) => {
  const { title } = item;
  return <li key={title}>{title}</li>;
};

export const showMoreResults = (queryString) => {
  window.location.href = `${REDIRECT_URL}?q=${queryString}`;
};