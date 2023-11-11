import React from 'react';
import * as F from './NewFooter.style';
import { ReactComponent as Logo } from '../../img/nav/logo.svg';

function NewFooter() {
    return (
        <div>
            <F.Info>
                <div className="container">
                    <div className="left">
                        <Logo className="title" />
                        <p className="text">
                            (주)멋쟁이사자처럼 | 대표이사 이두희
                        </p>
                        <p className="text">
                            서울특별시 종로구 종로3길 17 D타워, 16-17층
                        </p>
                        <p className="text">
                            사업자 번호 : 264-88-01106 | 통신판매업 신고번호 :
                            2019 - 서울강남 - 00774
                        </p>
                        <p className="text">문의처 contact@likelion.net</p>
                    </div>
                </div>
            </F.Info>
        </div>
    );
}

export default NewFooter;
