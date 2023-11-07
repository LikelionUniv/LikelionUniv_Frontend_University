import { ReactComponent as ArrowIcon } from '../../img/arrow_up_right.svg';

function UnivFooterATag() {
    return (
        <>
            <a href="/" target="_blank">
                개인정보 처리방침
                <ArrowIcon />
            </a>
            <a href="/" target="_blank">
                인스타그램
                <ArrowIcon />
            </a>
            <a
                href="mailto:your-email@example.com"
                target="_blank"
                rel="noreferrer"
            >
                이메일
                <ArrowIcon />
            </a>
        </>
    );
}

export default UnivFooterATag;
