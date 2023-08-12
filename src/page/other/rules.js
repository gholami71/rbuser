

const Rules = () => {



    return (

        <div className="user-login">
            <header>
                <div className='logos'>
                    <img className='circle' src={process.env.PUBLIC_URL + '/img/circle.png'}></img>
                    <div className='logoConteiner'>
                        <img className='logoAbsolote' src={process.env.PUBLIC_URL + '/img/logo.svg'}></img>
                        <img src={process.env.PUBLIC_URL + '/img/subLogo.svg'}></img>
                    </div>

                </div>

            </header>
            <div className='parag-cntnt'>
                <h3>قوانین</h3>
                <ul>
                    <li>
                        <h6>محدودیت های استفاده</h6>
                        <ul>
                            <li>
                                <p>هرگونه بهره برداری از رند ترید به منزله پذیرش کلیه قوانین آن میباشد.</p>
                            </li>
                            <li>
                                <p>بهره گیری از رندترید در مواردی که خلاف قوانین جمهوری اسلامی ایران باشد ممنوع بوده و مسئولیت آن بر عهده کاربر میباشد.</p>
                            </li>
                            <li>
                                <p>رندترید میتواند در صورت تشخیص هر کونه فعالیت مشکوک و مخرب حساب کاربر را بدون اطلاع قبلی مسدود کند.</p>
                            </li>
                            <li>
                                <p>در صورت بروز هرگونه حادثه یا سوء‌استفاده رندترید با دستور قضایی به معرفی خاطیان و همکاری با مقام قضایی خواهد پرداخت</p>
                            </li>
                            <li>
                                <p>استفاده از رند ترید رایگان نیست و کاربران میبایست نسبت به سطوح دسترسی مورد نیاز و مدت زمان استفاده اشتراک تهیه کنند که مستلزم پرداخت هزینه است</p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h6>محدودیت های فنی</h6>
                        <ul>
                            <li>
                                <p>پیشنیاز استفاده از رندترید بهره مندی کاربر از مرورگر استاندار و اینترنت پرسرعت میباشد.</p>
                            </li>
                            <li>
                                <p>رندترید عموما در دسترس است ولی هیچ تعهدی نسبت به کیفیت بالا و دسترسی 24 ساعته ندارد و ممکن است در برخی موارد برای نگهداری و برخی موارد دیگر از دسترس خارج شود</p>
                            </li>
                            <li>
                                <p>ابزار های ارائه شده در رندترید ممکن است در برخی موارد با خطا احتمالی مواجه شود و خطر استفاده از آن بر عهده کاربر خواهد بود</p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h6>تغییر در قوانین</h6>
                        <ul>
                            <li>
                                <p>رندترید حق تغییر و بروزرسانی در قوانین خود را دارد</p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h6>بازگشت وجه</h6>
                        <ul>
                            <li>
                                <p>بازگشت هزینه به صورت ریالی به کاربران به هیچ وجه امکان پذیر نیست</p>
                            </li>
                            <li>
                                <p>بازگشت هزینه به صورت افزودن مدت اشتراک صرفا با تشخیص رندترید صورت میپذیرد</p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h6>حریم خصوصی</h6>
                        <ul>
                            <li>
                                <p>اطلاعات کاربران به هیچ عنوان به خارج از رندترید منتقل نمیشود مگر مواردی که الزام قانونی وجو داشته باشد </p>
                            </li>
                            <li>
                                <p>اطلاعات تراکنش های بانکی توسط شرکتهای ثالث صورت میگیرد و رندترید مسئولیتی در این مورد ندارد</p>
                            </li>
                        </ul>
                    </li>
                </ul>

            </div>






            <div className='License'>
                <a referrerPolicy="origin" target="_blank" href="https://trustseal.enamad.ir/?id=366425&amp;Code=BTyNCNsAGUglHioh2tdU"><img referrerPolicy="origin" src="https://Trustseal.eNamad.ir/logo.aspx?id=366425&amp;Code=BTyNCNsAGUglHioh2tdU" alt="" style={{cursor:"pointer"}} id="BTyNCNsAGUglHioh2tdU"></img></a>
                <footer>
                    <button>قوانیــن</button>
                </footer>
            </div>
        </div>
    )
}
export default Rules