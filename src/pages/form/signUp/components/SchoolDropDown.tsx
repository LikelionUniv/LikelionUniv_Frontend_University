import { useEffect, useState } from 'react';
import Select, { ActionMeta, components } from 'react-select';
import styled from 'styled-components';
import { ReactComponent as Arrow } from '../../../../img/arrow.svg';
import useGetLocationUniv, {
    IUniversity,
} from '../../../../query/get/useGetLocationUniv';
import { schoolStyle } from './customSelectStyles';

interface RegionCodeMap {
    [key: string]: number;
}

interface UniversityNumber {
    [key: string]: number;
}

export type RegionOptionType = {
    value: number;
    label: string;
};
export type UniversityOptionType = {
    value: number;
    label: string;
};
type SchoolDropDownProps = {
    onChange: (
        selectedOption: UniversityOptionType | null,
        actionMeta: ActionMeta<UniversityOptionType>,
    ) => void;
};

// 지역 코드 (임의로 생성, 테스트 코드로 백엔드 서버에 가져올 때 수정 필요)
const regionOptions: RegionOptionType[] = [
    { value: 11, label: '서울' },
    { value: 31, label: '경기' },
    { value: 23, label: '인천' },

    { value: 25, label: '대전' },
    { value: 29, label: '세종' },
    { value: 33, label: '충북' },
    { value: 34, label: '충남' },
    { value: 32, label: '강원' },

    { value: 21, label: '부산' },
    { value: 22, label: '대구' },
    { value: 37, label: '경남' },
    { value: 38, label: '경북' },

    { value: 35, label: '전북' },
    { value: 36, label: '전남' },
];

const regionCodeMap: RegionCodeMap = {
    서울: 11,
    경기: 31,
    인천: 23,
    대전: 25,
    세종: 29,
    충북: 33,
    충남: 34,
    강원: 32,
    부산: 21,
    대구: 22,
    경남: 37,
    전북: 35,
    전남: 36,
    경북: 38,
};

const universityOptions: UniversityOptionType[] = [];
export function findLabelByValue(value: number) {
    const foundOption = universityOptions.find(
        option => option.value === value,
    );

    if (!foundOption) {
        return '해당하는 대학이 없습니다.';
    }

    return foundOption.label;
}

const SchoolDropDown = ({ onChange }: SchoolDropDownProps) => {
    const universities: IUniversity[] = useGetLocationUniv({
        activeTab: '전체',
    });

    const universityNumber: UniversityNumber = {};

    // universityOptions 배열 생성
    const universityOptions = universities.map(data => {
        const regionCode = regionCodeMap[data.location];

        // 해당 지역의 대학교 번호를 1 증가시킴 (존재하지 않는 경우 1로 초기화)
        universityNumber[data.location] =
            (universityNumber[data.location] || 0) + 1;

        // 지역 코드와 대학교 번호를 결합하여 고유한 값을 생성
        const value = regionCode * 100 + universityNumber[data.location];

        return {
            value,
            label: data.universityName,
        };
    });

    // DropdownIndicator 컴포넌트 재정의(드롭다운 선택시 화살표 돌아가는)
    const DropdownIndicator = (props: any) => {
        return (
            <components.DropdownIndicator {...props}>
                <Arrow
                    style={{
                        transform: props.selectProps.menuIsOpen
                            ? 'rotate(0deg)'
                            : 'rotate(180deg)',
                        stroke: props.selectProps.menuIsOpen
                            ? '#4D5359'
                            : '#ADB3BA',
                    }}
                ></Arrow>
            </components.DropdownIndicator>
        );
    };

    // 지역에 따른 대학 필터링을 위한 코드
    const [filteredUniversity, setFilteredUniversity] =
        useState(universityOptions);
    const [regionCode, setRegionCode] = useState<Number>(11);
    useEffect(() => {
        setFilteredUniversity(
            universityOptions.filter(
                item =>
                    String(item.value)[0] + String(item.value)[1] ===
                    String(regionCode),
            ),
        );
    }, [regionCode]);

    // MenuList 컴포넌트 재정의
    const MenuList = (props: any) => {
        return (
            <CustomMenu>
                <CustomLeftMenuList>
                    {regionOptions.map(item => (
                        <CustomOption
                            onClick={() => setRegionCode(item.value)}
                            key={item.value}
                            style={{
                                backgroundColor:
                                    item.value === regionCode
                                        ? 'var(--grey-300, #EAECEE)'
                                        : '',
                            }}
                        >
                            {item.label}
                        </CustomOption>
                    ))}
                </CustomLeftMenuList>
                <Border />
                <components.MenuList {...props}></components.MenuList>
            </CustomMenu>
        );
    };

    return (
        <div style={{ marginBottom: '34px' }}>
            {filteredUniversity && (
                <Select
                    options={filteredUniversity}
                    styles={schoolStyle}
                    isSearchable={false}
                    placeholder="선택"
                    components={{ DropdownIndicator, MenuList }}
                    maxMenuHeight={138}
                    onChange={onChange}
                    blurInputOnSelect={true}
                />
            )}
        </div>
    );
};

export default SchoolDropDown;

// 커스텀 styled-components

const CustomMenu = styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;
`;
const CustomLeftMenuList = styled.div`
    height: 353px;
    width: 134px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding-left: 4px;
    overflow-x: scroll;
    overflow-x: hidden;
    margin: 4px 0;
    &::-webkit-scrollbar {
        width: 4px;
    }
    &::-webkit-scrollbar-track {
        border-radius: 3px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #d1d4d8;
        border-radius: 3px;
    }
    &::-webkit-scrollbar-thumb:hover {
        background-color: #d1d4d8;
    }
`;
const CustomOption = styled.div`
    padding: 4px;
    padding-left: 12px;
    font-family: 'Pretendard';
    font-size: 16px;
    font-weight: 500;
    width: 110px;
    height: 32px;
    flex-shrink: 0;
    color: var(--grey-900, #212224);
    border-radius: 4px;
    display: flex;
    align-items: center;
    &:hover {
        background-color: var(--grey-300, #eaecee);
    }
    &:active {
        background-color: var(--grey-400, #dcdfe3);
    }
`;

const Border = styled.div`
    position: absolute;
    left: 142px;
    height: 347px;
    margin-top: 5px;
    border-right: 1px solid var(--grey-400, #dcdfe3);
`;
