import * as M from './MessageStyle';

const Message = () => {
    return (
        <M.Container className="message owner">
            <M.Content>
                <p style={{ flexWrap: 'wrap' }}>안녕하세요</p>
                <M.TimeInfo className="message owner">
                    <span>{}</span>
                </M.TimeInfo>
            </M.Content>
        </M.Container>
    );
};

export default Message;
