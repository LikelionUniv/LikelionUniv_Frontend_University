import * as D from './DevlopersStyle'

interface InfoProp {
    name: string
    from: string
    position?: string|null
    profile?: string|null
}

const DevInfo:React.FC<InfoProp> = (props) => {
  return (
    <D.InfoBox>
        <img src='https://cdn.pixabay.com/photo/2019/12/11/18/06/snowman-4688913_1280.jpg' alt='' className='image'/>
        <div className='info'>
            <p className='name'>{props.name}</p>
            <p className='from'>{props.from}</p>
            {props.position && <p className='position'>{props.position}</p>}
        </div>
      
    </D.InfoBox>
  )
}

export default DevInfo
