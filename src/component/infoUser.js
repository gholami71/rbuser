
import { CiUser } from "react-icons/ci";


const InfoUser = () =>{
    return(
        <div className="InfoUser">
            <div className="Info">
                <p className="icons"><CiUser/></p>
                <ul>
                    <li>
                        <p>پروفایل</p>
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