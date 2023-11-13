import React from "react";
import * as SR from './SearchResult.style';
import EachSearchResult from "./EachSearchResult";

interface ISearchResult {
  results: string[];
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

function SearchResult({results, setSelected}: ISearchResult) {
  return (
    <SR.Container>
      <SR.Inner>
        {results.length > 0 && (
          results.map((result, idx) => (
            <EachSearchResult key={`univ-${idx}`} univ={result} setSelected={setSelected} />
          ))
        )}
      </SR.Inner>
    </SR.Container>
  );
};

export default SearchResult;
