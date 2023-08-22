import axios from 'axios'
import InfoUser from './infoUser'
import {RxExit} from 'react-icons/rx'
import { OnRun } from '../config/OnRun'
import { getCookie, setCookie } from '../function/cookie'
import { useNavigate } from 'react-router'
import { GoPerson } from "react-icons/go";
import InfoUserMenu from './infoUserMenu'
import { useState } from 'react'

const Header = () =>{

    const phu = getCookie('phu')
    const [showInfoUser,setShowInfoUser] = useState(false)
    const navigate = useNavigate()

    const handleExit = () =>{
        setCookie('phu', '',0)
        navigate('/')
    }


    return(
        <header>
            <div className='Conteiner'>
                <div className="logos" onClick={()=>navigate('/dashboard')}>
                    <img className="logo" src={process.env.PUBLIC_URL+'/img/logo.svg'} ></img> 
                    <img src={process.env.PUBLIC_URL+'/img/subLogoDashboard.svg'}></img>            
                </div>
                <div className='account' onClick={()=>setShowInfoUser(!showInfoUser)}>
                    <span><GoPerson/></span>
                    {
                        showInfoUser?
                        <>
                            <div className='containerInfoUser'>
                                <InfoUserMenu />
                            </div>
                            <div className="hide" onClick={()=>setShowInfoUser(false)}></div>
                        </>

                        :null
                    }
                </div>
                <div className="Info">
                    <InfoUser/>
                </div>                             
            </div>
            <div className="exit" onClick={handleExit}>
                <p><RxExit/></p>
                <p >خروج</p>
            </div>
            
        </header>
    )
}

export default Header