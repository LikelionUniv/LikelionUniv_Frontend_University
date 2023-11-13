import React from 'react'
import * as ESR from './EachSearchResult.style'

interface IEachSearchResult {
  univ: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

function EachSearchResult({univ, setSelected}: IEachSearchResult) {
  const onClick = (): void => {
    setSelected(univ);
  }

  return (
    <ESR.Element onClick={onClick}>{univ}</ESR.Element>
  )
}

export default EachSearchResult