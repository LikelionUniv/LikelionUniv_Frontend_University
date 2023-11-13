import React, { useState, useEffect } from "react";
import Modal from 'react-modal';
import { customStyles } from "./RecruitModal.style";
import * as RM from './RecruitModal.style';
import Close from './../../../img/recruit/close.svg';
import SearchWindow from "./SearchWindow";
import useInput from "../../../hooks/useInput";
import UnivDemo from "./UnivDemo";
import SearchResult from "./SearchResult";
import NoSearchResult from "./NoSearchResult";

Modal.setAppElement('#root');

interface RecruitModalProps {
  isOpen: boolean;
  closeModal: () => void;
}


function RecruitModal({isOpen, closeModal}: RecruitModalProps) {
  const [keyword, onChange, setKeyword] = useInput<string>('');
  const [results, setResults] = useState<string[]>([]);
  const [selected, setSelected] = useState<string>('');
  const [noUniv, setNoUniv] = useState<string>('');

  const onSearch = (): void => {
    if (keyword.trim() === '') return;

    const results = UnivDemo.filter(univ => univ.includes(keyword));
    setResults(results);

    if (results.length <= 0) {
      setNoUniv(keyword);
      return;
    }

    setNoUniv('');
  }

  useEffect(() => {
    setKeyword(selected);
    setResults([]);
  }, [selected, setKeyword]);

  const condition = {
    searchResult: results.length > 0,
    btn: selected !== '' && results.length === 0 && noUniv === '',
    noSearchResult: results.length === 0 && noUniv !== '',
  }

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
      <RM.ModalHeader>
        <RM.Blank />
        <RM.ModalTitle>지원하기</RM.ModalTitle>
        <RM.Close src={Close} onClick={closeModal} />
      </RM.ModalHeader>

      <RM.Content>
        <RM.Title>재학 중인 학교를 선택해주세요.</RM.Title>
        <SearchWindow keyword={keyword} onChange={onChange} onSearch={onSearch} />
        {condition.searchResult && (
          <SearchResult results={results} setSelected={setSelected}/>
        )}
        {condition.btn && <RM.Btn active={selected !== ''}>지원서 작성하기</RM.Btn>}
        {condition.noSearchResult && <NoSearchResult keyword={noUniv} />}
      </RM.Content>
    </Modal>
  )
}

export default RecruitModal;
