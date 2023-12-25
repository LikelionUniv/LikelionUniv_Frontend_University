import { useEffect, useState } from 'react';
import Select, { ActionMeta, components } from 'react-select';
import styled from 'styled-components';
import { ReactComponent as Arrow } from '../../img/arrow.svg';
import { schoolStyle } from './customSelectStyles';

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
    { value: 33, label: '충북/충남' },
    { value: 32, label: '강원' },

    { value: 21, label: '부산' },
    { value: 26, label: '울산' },
    { value: 22, label: '대구' },
    { value: 37, label: '경북/경남' },

    { value: 24, label: '광주' },
    { value: 35, label: '전북/전남' },
    { value: 39, label: '제주' },
];

// 대학 코드 번호 앞자리 2개가 지역 코드와 일치할 때만 필터링함
const universityOptions: UniversityOptionType[] = [
    { value: 1101, label: '서울대학교1' },
    { value: 1102, label: '서울대학교2' },
    { value: 1103, label: '서울대학교3' },
    { value: 1104, label: '서울대학교4' },
    { value: 1105, label: '서울대학교5' },
    { value: 1106, label: '서울대학교6' },
    { value: 1107, label: '서울대학교7' },
    { value: 1108, label: '서울대학교8' },
    { value: 1109, label: '서울대학교9' },
    { value: 1110, label: '서울대학교10' },
    { value: 1111, label: '서울대학교11' },
    { value: 1112, label: '서울대학교12' },
    { value: 3101, label: '경기대학교1' },
    { value: 3102, label: '경기대학교2' },
    { value: 2301, label: '인천대학교1' },
    { value: 2302, label: '인천대학교2' },
    { value: 2501, label: '대전대학교1' },
    { value: 2502, label: '대전대학교2' },
    { value: 2901, label: '세종대학교1' },
    { value: 2902, label: '세종대학교2' },
];

 export function findLabelByValue(value: number) {
    const foundOption = universityOptions.find(option => option.value === value);
  
    if (!foundOption) {
      return "해당하는 대학이 없습니다.";
    }
  
    return foundOption.label;
  }

const SchoolDropDown = ({ onChange }: SchoolDropDownProps) => {
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
