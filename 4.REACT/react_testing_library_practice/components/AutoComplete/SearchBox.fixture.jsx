import React, { useState, useCallaback } from "react";
import Autocomplete from "./AutoComplete.fixture";
import {
  getResults,
  renderResultItem,
  showMoreResults,
} from "./search-box-helper";

const SearchBox = () => {
  return (
    <Autocomplete
      getResults={getResults}
      renderItem={renderResultItem}
      showMoreResults={showMoreResults}
      cacheSize={10}
      closeButton={true}
      minLength={1}
      maxResults={10}
      debounceDelayTime={300}
      onClear={() => {}}
      onClose={() => {}}
      closeOnEscape={true}
      renderLoader
    />
  );
};

export default {
  default: <Autocomplete />,
  withProps: SearchBox(),
  // Add more scenarios as needed
};
