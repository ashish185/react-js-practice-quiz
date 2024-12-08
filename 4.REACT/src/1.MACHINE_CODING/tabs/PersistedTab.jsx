import React, { useState } from "react";
import "./tab.css";

const Tabs = ({ children, onChange }) => {
  return (
    <ul
      className={"tab-decoration"}
      onClick={(event) => {
        const { target } = event;
        const { tagName, innerText, id } = target;
        if (tagName === "LI") {
          onChange({ tagName, id, innerText });
        }
      }}
    >
      {children}
    </ul>
  );
};

const Tab = ({ children, styles, id, selected }) => {
  return (
    <li id={id} data-selected={selected === id}>
      {children}
    </li>
  );
};

const TabContent = ({children}) => {
  return (
    <div className="tab-content">
    </div>
  );
};

const PersistedTab = () => {
  const [selectedTab, setSelectedTab] = useState([]);
  const onTabChange = (selectedTab) => {
    console.log("tab", selectedTab);
    const { id } = selectedTab;
    setSelectedTab(id);
  };
  return (
    <div>
      <Tabs onChange={onTabChange}>
        <Tab id="tab1" selected={selectedTab}>
          Tab1
        </Tab>
        <Tab id="tab2" selected={selectedTab}>
          Tab2
          <TabContent />
        </Tab>
        <Tab id="tab3" selected={selectedTab}>
          Tab3
          <TabContent />
        </Tab>
      </Tabs>
    </div>
  );
};

export default PersistedTab;
