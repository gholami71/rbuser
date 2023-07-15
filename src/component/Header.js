import axios from 'axios'
import InfoUser from './infoUser'
import {RxExit} from 'react-icons/rx'
import { OnRun } from '../config/OnRun'
import { getCookie, setCookie } from '../function/cookie'
import { useNavigate } from 'react-router'


const Header = () =>{

    const phu = getCookie('phu')
    const navigate = useNavigate()

    const handleExit = () =>{
        axios.post(OnRun+'/user/atuh', {phu:phu})
        .then(response=>{
            if (response.data.reply){

            }
            else{
                setCookie('phu', '',0)
                navigate('/')
            }
        })
    }
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
                <p onClick={handleExit}>خروج</p>
            </div>
            
        </header>
    )
}

export default Header