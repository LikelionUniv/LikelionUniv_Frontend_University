import styled from 'styled-components';
import { ReactComponent as HackathonImg } from '../../img/landing/hackathon.svg';
import { ReactComponent as IdeathonImg } from '../../img/landing/ideathon.svg';
import ActivityBox from './ActivityBox';

const InfoActivityTemp = () => {
  return (
    <Wrapper>
        <ActivityBox name='해커톤' />
        <ActivityBox name='아이디어톤'/>
        <ActivityBox name='학교별 스터디'/>
        <ActivityBox name='데모데이'/>
      
    </Wrapper>
  )
}

export default InfoActivityTemp

const Wrapper = styled.div`
    width: 100%;
    display: grid; 
    grid-gap: 24px; 
    grid-template-columns: repeat(2, minmax(auto, 1fr));
    grid-template-rows: repeat(2, auto); 
    align-items: start; 
    justify-content: space-around;

    @media (max-width: 600px) {
        grid-template-columns: repeat(1, 1fr); 
        grid-template-rows: none; 
    }
`