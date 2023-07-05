import { useNavigate } from "react-router"
import InfoUser from "./infoUser"

const Menu = () =>{
    const navigate = useNavigate()
    return(
        <div className="menu">
            <InfoUser/>
            <p onClick={()=>{navigate('alarms')}}>هشدارها</p>
        </div>
    )
}
export default Menu