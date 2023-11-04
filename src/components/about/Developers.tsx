import DevInfo from './DevInfo'
import * as D from './DevlopersStyle'

const Developers = () => {
  return (
    <D.Wrapper>
        <div className='year'>
            <p className='first'>1기</p>
        </div>

        <D.Container>
            <p className='part'>총괄</p>
            <D.PeopleBox>
                <DevInfo name='이태휘' from='00대학교 00기 운영진' position='PM'/>
            </D.PeopleBox>
            <D.Divider/>
            <p className='part'>PM</p>
            <D.PeopleBox>
                <DevInfo name='변주현' from='00대학교 00기 운영진' position='PM 파트장'/>
            </D.PeopleBox>
            <D.Divider/>
            <p className='part'>Design</p>
            <D.PeopleBox>
                <DevInfo name='박혜준' from='00대학교 00기 운영진' position='디자인 파트장'/>
            </D.PeopleBox>
            <D.Divider/>
            <p className='part'>Frontend</p>
            <D.PeopleBox>
                <DevInfo name='양화영' from='00대학교 00기 운영진' position='프론트엔드 파트장'/>
                <DevInfo name='김강민' from='00대학교 00기 운영진' />
                <DevInfo name='김예린' from='00대학교 00기 운영진' />
            
                <DevInfo name='김예지' from='00대학교 00기 운영진'/>
                <DevInfo name='김진호' from='00대학교 00기 운영진' />
                <DevInfo name='노하림' from='00대학교 00기 운영진'/>
            
                <DevInfo name='서가영' from='00대학교 00기 운영진'/>
                <DevInfo name='이서진' from='00대학교 00기 운영진' />
                <DevInfo name='조민규' from='00대학교 00기 운영진'/>
            
                <DevInfo name='최병찬' from='00대학교 00기 운영진'/>
                <DevInfo name='한영준' from='00대학교 00기 운영진' />
            </D.PeopleBox>
            <D.Divider/>
            <p className='part'>Backend</p>
            <D.PeopleBox>
                <DevInfo name='김슬기' from='00대학교 00기 운영진' position='백엔드 파트장'/>
                <DevInfo name='황제철' from='00대학교 00기 운영진' position='백엔드 파트장'/>
            </D.PeopleBox>
        </D.Container>
    </D.Wrapper>

  )
}

export default Developers
