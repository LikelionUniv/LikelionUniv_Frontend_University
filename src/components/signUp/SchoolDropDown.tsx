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
    { value: 1101, label: '가톨릭대학교' },
    { value: 1102, label: '강남대학교' },
    { value: 1103, label: '건국대학교' },
    { value: 1104, label: '고려대학교' },
    { value: 1105, label: '광운대학교' },
    { value: 1106, label: '국민대학교' },
    { value: 1107, label: '단국대학교' },
    { value: 1108, label: '덕성여자대학교' },
    { value: 1109, label: '동국대학교' },
    { value: 1110, label: '동덕여자대학교' },
    { value: 1111, label: '명지대학교(서울)' },
    { value: 1112, label: '삼육대학교' },
    { value: 1113, label: '상명대학교(서울)' },
    { value: 1114, label: '서강대학교' },
    { value: 1115, label: '서경대학교' },
    { value: 1116, label: '서울대학교' },
    { value: 1117, label: '서울여자대학교' },
    { value: 1118, label: '성공회대학교' },
    { value: 1119, label: '성균관대학교' },
    { value: 1120, label: '성신여자대학교' },
    { value: 1121, label: '세종대학교' },
    { value: 1122, label: '숙명여자대학교' },
    { value: 1123, label: '숭실대학교' },
    { value: 1124, label: '연세대학교' },
    { value: 1125, label: '이화여자대학교' },
    { value: 1126, label: '중앙대학교' },
    { value: 1127, label: '한국외국어대학교(서울)' },
    { value: 1128, label: '한성대학교' },
    { value: 1129, label: '한양여자대학교' },
    { value: 1130, label: '홍익대학교' },
    { value: 2101, label: '부산외국어대학교' },
    { value: 2201, label: '계명대학교' },
    { value: 2301, label: '인천대학교' },
    { value: 2302, label: '인하대학교' },
    { value: 2501, label: '을지대학교(성남)' },
    { value: 2502, label: '충남대학교' },
    { value: 2503, label: '한남대학교' },
    { value: 2504, label: '한밭대학교' },
    { value: 3101, label: '명지대학교(자연)' },
    { value: 3102, label: '성결대학교' },
    { value: 3103, label: '아주대학교' },
    { value: 3104, label: '중부대학교(고양)' },
    { value: 3105, label: '한국외국어대학교(글로벌)' },
    { value: 3106, label: '한국항공대학교' },
    { value: 3107, label: '한양대학교(에리카)' },
    { value: 2901, label: '고려대학교(세종)' },
    { value: 3201, label: '강원대학교' },
    { value: 3202, label: '한림대학교' },
    { value: 3301, label: '한국교통대학교' },
    { value: 3302, label: '남서울대학교' },
    { value: 3303, label: '상명대학교(천안)' },
    { value: 3304, label: '순천향대학교' },
    { value: 3305, label: '한서대학교' },
    { value: 3501, label: '순천대학교' },
    { value: 3502, label: '전북대학교' },
    { value: 3701, label: '경남대학교' },
    { value: 3702, label: '경상국립대학교' },
];

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
