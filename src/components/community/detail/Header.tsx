import { useState } from 'react';
import * as D from './DetailStyle'
import profileImage from '../../../img/about/profile.png'
import { ReactComponent as HeartIcon } from '../../../img/community/heart20.svg';
import { ReactComponent as CommentIcon } from '../../../img/community/comment20.svg';

const Header = () => {
    const [isFollowed, setIsFollowed] = useState(false);

    const toggleFollow = () => {
        setIsFollowed(!isFollowed);
    };

    return (
        <>
            <D.Title>
                멋사 플젝 디자이너를 모집합니다.
            </D.Title>
            <D.User>
                <div className='left'>
                    <img src={profileImage} alt='' className='image' />
                    <div>
                        <div className='userBox'>
                            <p className='name'>이유빈</p>
                            <div className='followBtn'
                                 onClick={toggleFollow}
                                >팔로우
                            </div>
                        </div>
                        <div className='userInfo'>
                            <p>11기</p><D.Dot />
                            <p>중앙대학교</p><D.Dot />
                            <p>2023. 7. 18</p>
                        </div>
                    </div>
                </div>
                <div className='right'>
                    <div className='icons'>
                        <HeartIcon />23
                    </div>
                    <div className='icons'>
                        <CommentIcon />14
                    </div>
                </div>
            </D.User>
        </>

    )
}

export default Header
