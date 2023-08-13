


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
