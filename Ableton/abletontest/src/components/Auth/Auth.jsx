import '../../scss/Auth/Auth.scss'
export function Auth() {
    return(
            <div className="Auth">
                <div className="LogInControl">
                    <div className="Log">
                        <h1>
                            Log in
                        </h1>
                        <h2>
                            Why do I need to log in?
                        </h2>
                        <p>
                            To use any version of Live (including Live Lite or our free trial) you 
                            need an Ableton account. It takes less than a minute to create one, 
                            and even less to log in if you already have one.
                        </p>
                        <div className="LogFrame">
                            <div className="EmailUser">
                                <label htmlFor=""></label>
                                <input type="text" name="" id="" />
                            </div>
                            <div className="Password">
                                <div className="TextPassword">

                                </div>
                                <input />
                            </div>
                            <button className="LogInButton">
                                Log In
                            </button>

                        </div>
                    </div>
                </div>
                <div className="RegControl">
                    <div className="Reg">
                        <h1>Register</h1>
                        <h2>New Customer? Please create an account.</h2>
                        <p>Your account lets you authorize and download Live plus your included library content.</p>
                        <div className='RegFrame'>
                            <div className="Emai">
                                <label htmlFor="">Email</label>
                                <input type="text" />
                            </div>
                            <div className="Password">
                                <label htmlFor="">Password</label>
                                <input type="text" />
                            </div>
                            <div className="FirstName">
                                <label htmlFor="">FirstName</label>
                                <input type="text" />
                            </div>
                            <div className="Lastname">
                                <label htmlFor="">LastName</label>
                                <input type="text" placeholder='optional' />
                            </div>
                            <div className="CountryRegion">
                                <label htmlFor="">Country or Region</label>
                                <select></select>
                            </div>
                        </div>
                        <div className='Conditions'>
                            <input type='checkbox' />
                            <p className='condtionsP'>
                                Sign up to the Ableton newsletter to stay up to date with the latest 
                                special offers, tutorial videos, downloads, surveys and other news. It’s free
                                and you can unsubscribe at any time. Further information is available in our 
                                <a className='PrivacyPolicy'>Privacy Policy</a>
                            </p>
                        </div>
                        <button>Create Account</button>
                    </div>
                </div>
            </div>
    )
    
}