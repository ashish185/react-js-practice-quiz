import React, { useState, useEffect } from "react";

// Higher-Order Component
function withLoading(Component) {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return <p>Loading...</p>;
  };
}

function DataComponent({ data }) {
  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}

// Wrap DataComponent with the withLoading HOC
const DataComponentWithLoading = withLoading(DataComponent);

const Main = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching
    setTimeout(() => {
      setData([
        { id: 1, name: "John" },
        { id: 2, name: "Jane" },
      ]);
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      <h1>My App</h1>
      <DataComponentWithLoading isLoading={isLoading} data={data} />
    </div>
  );
};

export default Main;
