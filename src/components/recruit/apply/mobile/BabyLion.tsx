import React, { useEffect, useState } from 'react';
import * as B from './BabyLion.style';
import SearchWindow from '../SearchWindow';
import useInput from '../../../../hooks/useInput';
import UnivDemo from '../UnivDemo';
import SearchResult from '../SearchResult';
import NoSearchResult from '../NoSearchResult';

function BabyLion() {
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
    };

    useEffect(() => {
        setKeyword(selected);
        setResults([]);
    }, [selected, setKeyword]);

    const condition = {
        searchResult: results.length > 0,
        noSearchResult: results.length === 0 && noUniv !== '',
    };

    return (
        <B.Container>
            <B.Title>지원하기</B.Title>
            <B.Paragraph>재학 중인 학교를 선택해주세요.</B.Paragraph>
            <SearchWindow
                keyword={keyword}
                onChange={onChange}
                onSearch={onSearch}
            />
            {condition.searchResult && (
                <SearchResult results={results} setSelected={setSelected} />
            )}
            {condition.noSearchResult && <NoSearchResult keyword={noUniv} />}
            <B.Btn active={selected !== ''}>지원서 작성하기</B.Btn>
        </B.Container>
    );
}

export default BabyLion;
