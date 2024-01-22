// SearchContext.js
import React, { createContext, useContext, useState } from 'react';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [noResultsFound, setNoResultsFound] = useState(false);
  const [searchLetterStore, setSearchLetterStore] = useState("");

  const contextValue = {
    searchResults,
    setSearchResults,
    loading,
    setLoading,
    noResultsFound,
    setNoResultsFound,searchLetterStore, setSearchLetterStore
  };

  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  return useContext(SearchContext);
};
