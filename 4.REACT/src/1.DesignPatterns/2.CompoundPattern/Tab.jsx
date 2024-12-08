/* eslint-disable react/display-name */
import { createContext, useContext } from "react";
import "./tab.scss";

const TabContext = createContext();

export default function Tab({ children, value, onChange }) {
  return (
    <div>
      <TabContext.Provider value={{ value, onChange }}>
        {children}
      </TabContext.Provider>
    </div>
  );
}

Tab.Item = function TabItem({ label, index }) {
  const { value, onChange } = useContext(TabContext);
  const handleClick = () => {
    onChange(index);
  };

  return (
    <div
      onClick={handleClick}
      className={`item ${index === value ? "active" : ""}`}
    >
      {label}
    </div>
  );
};

Tab.ContentWrapper = function TabContentWrapper({ children }) {
  return <div className="contentWrapper">{children}</div>;
};

Tab.Content = function TabContent({ children, index }) {
  const { value } = useContext(TabContext);
  return value === index ? <div>{children}</div> : null;
};
