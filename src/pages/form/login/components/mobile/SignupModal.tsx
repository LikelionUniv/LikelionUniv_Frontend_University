import React, { startTransition, useCallback, useState } from 'react';
import * as SM from './SignupModal.style';
import useGetLocationUniv, {
    IUniversity,
} from '../../../../../query/get/useGetLocationUniv';
import { regionTab } from '../../../../univ/components/UnivTabData';

interface SignupModalProps {
    isOpen: boolean;
    onSelect: (univName: string) => void;
    onClose: () => void;
}

function SignupModal({ isOpen, onSelect, onClose }: SignupModalProps) {
    const [activeTab, setActiveTab] = useState('서울');
    const universities: IUniversity[] = useGetLocationUniv({ activeTab });

    const onTabClick = useCallback((tab: string) => {
        startTransition(() => {
            setActiveTab(tab);
        });
    }, []);

    if (!isOpen) return null;
    return (
        <SM.ModalWrapper>
            <SM.ModalBackground />
            <SM.ModalContainer>
                <SM.ModalHeader>
                    학교 선택
                    <SM.ModalClose onClick={onClose} />
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
                                onClick={() => onSelect(item.universityName)}
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
