import { useEffect } from "react"
import Menu from "../component/menu"
import { Outlet, useNavigate } from "react-router-dom"
import { getCookie,setCookie } from "../function/cookie"
import axios from "axios"
import { OnRun } from "../config/OnRun"
import Header from "../component/Header"

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
            <Header />
            <main>
                <Menu/>   
                <Outlet context={[cookie]}/>  
            </main>
        </div>
    )
}
export default Dashboard
