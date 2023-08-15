import { useNavigate } from "react-router"
import InfoUserMenu from "./infoUserMenu"
import { useState } from "react"

const Menu = () =>{
    const [active, setActive] = useState('')
    const navigate = useNavigate()
    const handler = (name) =>{
        navigate(name)
        setActive(name)
    }

    return(
        <div className="menu">
            <InfoUserMenu/>
            <div className="basic">
                <p className={active=='alarms'?'active':'noactive'} onClick={()=>{handler('alarms')}}>هشدارها</p>
                <p className={active=='alarms'?'active':'noactive'} onClick={()=>{handler('explor')}}>کاوش</p>
            </div>
    
        </div>
    )
}
export default Menu