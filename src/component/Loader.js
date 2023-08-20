


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


export const TableTypeLoader = (props) =>{
    return(
        <div className="tbtx-load">
            <div className="header">
                {Array.from({length:props.row}).map((_,i)=>{
                    return(
                        <div key={i} className="header-column">
                        </div>
                    )
                })}
            </div>
            {Array.from({length:props.columns}).map((_,j)=>{
                return(
                    <div key={j} className="body">
                        <div className="row">
                            {Array.from({length:props.row}).map((_,i)=>{
                                return(
                                    <div className="row-column">
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}