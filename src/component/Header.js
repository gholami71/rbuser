import InfoUser from './infoUser'
import {RxExit} from 'react-icons/rx'


const Header = () =>{
    return(
        <header>
            <div className='Conteiner'>
                <div className="logos">
                    <img className="logo" src={process.env.PUBLIC_URL+'/img/logo.svg'} ></img> 
                    <img src={process.env.PUBLIC_URL+'/img/subLogoDashboard.svg'}></img>            
                </div>
                <div className="Info">
                    <InfoUser/>
                </div>                             
            </div>
            <div className="exit">
                <p><RxExit/></p>
                <p>خروج</p>
            </div>
            
        </header>
    )
}

export default Header