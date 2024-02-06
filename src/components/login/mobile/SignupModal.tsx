import React, { startTransition, useCallback, useState } from 'react';
import * as SM from './SignupModal.style';
import { regionTab } from '../../univ/UnivTabData';
import useGetLocationUniv, {
    IUniversity,
} from '../../../query/get/useGetLocationUniv';

function SignupModal() {
    const [activeTab, setActiveTab] = useState('서울');
    const universities: IUniversity[] = useGetLocationUniv({ activeTab });

    const onTabClick = useCallback((tab: string) => {
        startTransition(() => {
            setActiveTab(tab);
        });
    }, []);

    const onUniversityClick = (univName: string) => {
        console.log(univName);
        // 폼데이터에 학교 전달
        // 모달창 닫기
    };

    return (
        <SM.ModalWrapper>
            <SM.ModalBackground />
            <SM.ModalContainer>
                <SM.ModalHeader>
                    학교 선택
                    <SM.ModalClose />
                </SM.ModalHeader>

                <SM.ModalContent>
                    <SM.LocalSection>
                        {regionTab.map((region, idx) => (
                            <SM.LocationItem
                                key={region + idx}
                                active={activeTab === region}
                                onClick={() => onTabClick(region)}
                            >
                                {region}
                            </SM.LocationItem>
                        ))}
                    </SM.LocalSection>

                    <SM.UniversitySection>
                        {universities.map((item, idx) => (
                            <SM.UniversityItem
                                key={item.universityName + idx}
                                onClick={() =>
                                    onUniversityClick(item.universityName)
                                }
                            >
                                {item.universityName}
                            </SM.UniversityItem>
                        ))}
                    </SM.UniversitySection>
                </SM.ModalContent>
            </SM.ModalContainer>
        </SM.ModalWrapper>
    );
}

export default SignupModal;
