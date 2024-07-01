import profile_img from '../../img/chatting/chat_profile.svg';
import * as P from './PannelStyle';
import Messages from './Messages';
import Input from './Input';
import Loading from './Loading';
import { useRecoilValue } from 'recoil';
import { loadingAtom, userNameAtom } from './atoms';

const Pannel = () => {
    const loading = useRecoilValue(loadingAtom);
    const activeUserName = useRecoilValue(userNameAtom);

    return (
        <P.Container>
            <P.Header>
                <P.ChatInfo>
                    <img
                        src={profile_img}
                        alt="chat profile"
                        style={{
                            border: '1px solid #eaeaea',
                            borderRadius: '50%',
                        }}
                    />
                    <P.ChatName>{activeUserName}</P.ChatName>
                </P.ChatInfo>
            </P.Header>
            <P.Shadow />
            {loading ? <Loading /> : <Messages />}
            <Input />
        </P.Container>
    );
};

export default Pannel;
