import styled from 'styled-components';
import React, { useState} from 'react';
import { ReactComponent as ArrowIcon } from '../../img/community/arrow_left.svg';
import search from '../../img/community/search.svg';

interface SearchProps {
    onSearch : (query:string) => void;
    searchQuery? : string;
}

const Search:React.FC<SearchProps> = ({onSearch, searchQuery}) => {
    const isSearching = searchQuery !== undefined && searchQuery !== '';
    const [searchCompleted, setSearchCompleted] = useState<boolean>(isSearching);
    const [inputValue, setInputValue] = useState<string>(searchQuery || '');
    
    const handleSearch = async() => {
        await setSearchCompleted(true);
        onSearch(inputValue);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        setSearchCompleted(false);
    };


    return (
        <Wrapper searchCompleted={searchCompleted}>
            <SearchBox>
                <ArrowIcon onClick={()=> {window.location.reload()}}/>
                <TextInput>
                    <input
                        className='textInput'
                        type="text"
                        value={inputValue}
                        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                            if (e.key === 'Enter') {
                                handleSearch();
                            }
                        }}
                        onChange={handleChange}
                    />
                    <img
                        style={{ marginLeft: '8px' }}
                        src={search}
                        onClick={handleSearch}
                        alt="검색"
                    />
                </TextInput>
            </SearchBox>
        </Wrapper>
    )
}

export default Search

const Wrapper = styled.div<{searchCompleted : boolean}>`
    width: 100%;
    background-color: #fff;
    height: ${props => props.searchCompleted ? '0' : '100vh'};
    z-index: 1000;
    position: fixed;
    top: 56px;
`

const SearchBox = styled.div`
    width: 100%;
    background: var(--Orange-600, #FF7710);
    z-index: 1000;
    position: fixed;
    height: 56px;
    top:0;
    display: flex;
    padding: 8px 20px 8px 16px;
    align-items: center;
    gap: 8px;
`


const TextInput = styled.div`
    height: 40px;
    width: 100%;
    border-radius: 6px;
    align-items: center;
    display: inline-flex;
    justify-content: space-between;
    padding: 0 8px 0 16px;
    background: var(--White, #FFF);

    .textInput{
        color: var(--Grey-900, #212224);
        font-family: Pretendard;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 150%; /* 24px */

        width: 100%;
        outline: none;
        border: none;
    }
`;
