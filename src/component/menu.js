import { useNavigate } from "react-router"
import InfoUserMenu from "./infoUserMenu"

const Menu = () =>{
    const navigate = useNavigate()
    return(
        <div className="menu">
            <InfoUserMenu/>
            <p onClick={()=>{navigate('alarms')}}>هشدارها</p>
        </div>
    )
}
export default Menu