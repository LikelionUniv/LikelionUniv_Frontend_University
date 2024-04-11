import React from 'react';
import * as S from './SearchWindow.style';

import Search from '../../../img/recruit/search.svg';

interface ISearchWindow {
    keyword: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSearch: () => void;
}

function SearchWindow({ keyword, onChange, onSearch }: ISearchWindow) {
    return (
        <S.SearchWindow>
            <S.Input value={keyword} onChange={onChange} />
            <S.Search src={Search} onClick={onSearch} />
        </S.SearchWindow>
    );
}

export default SearchWindow;
