import React, { useState } from 'react';
import * as S from './SearchBar.style';
import SearchBtn from '../../../../img/admin/Cancel.svg';

interface SearchBarProps {
    setunivName: React.Dispatch<React.SetStateAction<string | undefined>>;
}

function SearchBar({ setunivName }: SearchBarProps) {
    const [query, setQuery] = useState<string>('');

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.currentTarget.value);
    };

    const onSearch = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        if (query.trim() === '') return;

        setunivName(query);
    };

    return (
        <S.Container onSubmit={onSearch}>
            {' '}
            <S.Input
                type="text"
                placeholder="이름 혹은 대학 이름 검색"
                onChange={onChange}
            />
            <S.Search src={SearchBtn} onClick={() => setunivName(query)} />
        </S.Container>
    );
}

export default SearchBar;
