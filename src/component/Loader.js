


export const MiniLoader = () =>{
    return(
        <div className="mini-load">
            <div className="circle">
                <img src={process.env.PUBLIC_URL+'/img/logoMini.svg'}></img>
            </div>
            <p>لطفا صبر کنید</p>
        </div>
    )
}



export const TextTypeLoader = (props) =>{
    return(
        <div className="txtp-load">
            {Array.from({length:props.length}).map((_,i)=>{
                return(
                    <div key={i} className="cntnr">
                        <div className="square"></div>
                        <div className="lines">
                            <div className="line"></div>
                            <div className="line"></div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}