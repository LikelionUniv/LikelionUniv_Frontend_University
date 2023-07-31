import React from 'react'
import '../styles/nav.css'

import {useMatch , Link} from 'react-router-dom';

interface INavTo {
    to : string,
    children : React.ReactNode,
}

const Nav:React.FC = () => {

    return (
    <section className='container'>
        <div className='nav-box'>
            <div className='nav-container'>
                <Link to="/">
                    <div className='nav-logo'>LIKELION</div>
                </Link>
                <ul className='nav-list'>
                    <LinkTo to="/signup">/singup</LinkTo>
                    <LinkTo to="/login">/login</LinkTo>
                    <LinkTo to="/#">프로젝트</LinkTo>
                    <LinkTo to="/#">커뮤니티</LinkTo>
                </ul>
            </div>
            <div className='nav-btn'>
                <Link to="/login" className='nav-login-btn' >
                    로그인
                </Link>
            </div>
        </div>
    </section>
    );
}

const LinkTo = ({to ,children}:INavTo)=>{
  const match = useMatch(to);
  return (
    <li>
      <Link to={to} className={match ? "active":""}>{children}</Link>
    </li>
  );
}

export default Nav;