
import { CiUser } from "react-icons/ci";
import { useNavigate } from "react-router-dom";


const InfoUser = () =>{

    const navigate = useNavigate()
    return(
        <div className="InfoUser">
            <div className="Info">
                <p className="icons"><CiUser/></p>
                <ul>
                    <li>
                        <p onClick={()=>navigate('profile')}>پروفایل</p>
                    </li>
                    <li>
                        <p>تاریخچه اشتراک</p>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default InfoUser