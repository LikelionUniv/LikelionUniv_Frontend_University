import React, { useState } from 'react';
import Select, { components } from 'react-select';
import styled from 'styled-components';
import arrow from '../../img/arrow.svg';
import { customSelectStyles } from './customSelectStyles';
import { customSelectStyles2 } from './customSelectStyles2';

interface SchoolDropProps {
    selectedUniversity: string;
    onChange: (selectedUniversity: string) => void;
}

type UniversityOptionsType = {
    [key: string]: { value: string; label: string }[];
};

/* 지역- 학교 선택하는 부분 style */

const Container = styled.div`
    display: flex;
    margin-bottom: 34px;
`;

/* 지역 select 크기 */
const SelectOne = styled(Select)`
    width: 122px;
    margin-right: 24px;
`;

/* 대학 select 크기 */
const SelectTwo = styled(Select)`
    width: 318px;
`;

/* 지역 라벨 */
const regionOptions = [
    { value: 'seoul', label: '서울' },
    { value: 'sejong', label: '세종' },
    { value: 'gyeonggi', label: '경기' },
    { value: 'daegu', label: '대구' },
    { value: 'daejeon', label: '대전' },
    { value: 'busan', label: '부산' },
    { value: 'ulsan', label: '울산' },
    { value: 'incheon', label: '인천' },
    { value: 'gangwon', label: '강원' },
    // ...더 많은 지역
];

/* 학교 라벨 */
const universityOptions: UniversityOptionsType = {
    seoul: [
        { value: 'seoul_univ1', label: '서울대학교1' },
        { value: 'seoul_univ2', label: '서울대학교2' },
    ],
    sejong: [
        { value: 'sejong_univ1', label: '세종대학교1' },
        { value: 'sejong_univ2', label: '세종대학교2' },
    ],
};

// DropdownIndicator 컴포넌트 재정의(드롭다운 선택시 화살표 돌아가는)
const DropdownIndicator = (props: any) => {
    return (
        <components.DropdownIndicator {...props}>
            <img
                src={arrow}
                style={{
                    transform: props.selectProps.menuIsOpen
                        ? 'rotate(180deg)'
                        : 'rotate(0deg)',
                }}
            ></img>
        </components.DropdownIndicator>
    );
};

const SchoolDrop = ({ onChange }: SchoolDropProps) => {
    const [selectedRegion, setSelectedRegion] = useState<string | null>('');

    return (
        <Container>
            <SelectOne
                styles={customSelectStyles}
                options={regionOptions}
                onChange={(option: any) => {
                    setSelectedRegion(option.value || null);
                }}
                placeholder="지역"
                components={{ DropdownIndicator }}
            />
            <SelectTwo
                styles={customSelectStyles2}
                options={universityOptions[selectedRegion || ''] || []}
                placeholder="학교명"
                isSearchable={false}
                components={{ DropdownIndicator }}
                onChange={(option: any) => {
                    onChange(option.value || '');
                }}
            />
        </Container>
    );
};

export default SchoolDrop;
