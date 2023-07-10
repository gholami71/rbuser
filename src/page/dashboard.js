import { useEffect } from "react"
import Menu from "../component/menu"
import { Outlet, useNavigate } from "react-router-dom"
import { getCookie,setCookie } from "../function/cookie"
import axios from "axios"
import { OnRun } from "../config/OnRun"

import { RxExit } from "react-icons/rx";
import InfoUser from "../component/infoUser"

const Dashboard = () =>{
    const Navigate = useNavigate()
    const cookie = getCookie('phu')

    const checkUser = () =>{
        axios.post(OnRun+'/user/atuh', {cookie:cookie}).then(response=>{
            if(!response.data.reply){
                setCookie('phu', '', 0)
                Navigate('/')               
            }
        })
    }

    useEffect(checkUser,[])

    return(
        
        <div className="dashboard">
            <header>
                <div className="logos">
                    <img className="logo" src={process.env.PUBLIC_URL+'/img/logo.svg'} ></img> 
                    <img src={process.env.PUBLIC_URL+'/img/subLogoDashboard.svg'}></img>            
                </div>
 
                <div className="Info">
                    <InfoUser/>
                </div>                             
                <div className="exit">
                    <p> <RxExit/></p>
                    <p>خروج</p>
                </div>
                 
            </header>
                <main>
                    <Menu/>   
                    <Outlet context={[cookie]}/>  
                </main>
        </div>
    )
}
export default Dashboard
