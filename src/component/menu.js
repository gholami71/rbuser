import { useNavigate } from "react-router"
import InfoUserMenu from "./infoUserMenu"

const Menu = () =>{
    const navigate = useNavigate()
    return(
        <div className="menu">
            <div><InfoUserMenu/></div>
            <br/>
            <p onClick={()=>{navigate('alarms')}}>هشدارها</p>
        </div>
    )
}
export default Menu