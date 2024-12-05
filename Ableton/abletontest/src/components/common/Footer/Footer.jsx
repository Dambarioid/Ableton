import '../../../scss/Footer/footer.scss'
import Youtube from '../../../assets/svg/youtube.svg'
import Facebook from '../../../assets/svg/Facebook.svg'
import Twitter from '../../../assets/svg/Twitter.svg'
import Instagram from '../../../assets/svg/Instagram.svg'
import TitTok from '../../../assets/svg/Tiktok.svg'
export function Footer() {
    return(
        <footer className='BottomPage'>
            <div className='ControlFoot'>
                <div className='TitleBottom'>
                    <h1>Ableton</h1>
                </div>
                <div className='Differents'>
                    <ul>
                        <li><a href="">Register Live or Push</a></li>
                        <li><a href="">About Ableton</a></li>
                        <li><a href="">Jobs</a></li>
                        <li>
                            <div>
                                <a href="">
                                    <img src={Facebook} alt="" />
                                </a>
                                <a href="">
                                    <img src={TitTok} alt="" />
                                </a>
                                <a href="">
                                    <img src={Instagram} alt="" className='Instagram'/>
                                </a>
                                <a href="">
                                    <img src={Youtube} alt="" />
                                </a>
                            </div>
                        </li>
                    </ul>
                    <ul>
                        <li><label htmlFor="">Education</label></li>
                        <li><a href="">Offers for students and teachers</a></li>
                        <li><a href="">Ableton for the Classroom</a></li>
                        <li><a href="">Ableton for Colleges and Universities</a></li>
                    </ul>
                    <ul>
                        <li><label htmlFor="">Sign up to our newsletter</label></li>
                        <li>
                            <p>
                            Enter your email address to stay up to date with the latest offers, tutorials, downloads, surveys and more. 
                            </p>
                        </li>
                        <li>
                            <div className='InputControl'>
                                <input type="text" placeholder='Email adress'/>
                                <button>Sign Up</button>
                            </div>
                        </li>
                    </ul>
                    <ul>
                        <li><label htmlFor="">Community</label></li>
                        <li><a href="">Find Ableton User Groups</a></li>
                        <li><a href="">Find Certified Training</a></li>
                        <li><a href="">Become a Certified Trainer</a></li>
                    </ul>
                    <ul>
                        <li><label htmlFor="">Language and Location</label></li>
                        <li><select name="" id=""></select></li>
                        <li><select name="" id=""></select></li>
                    </ul>
                </div>
                <div className='SitesInfo'></div>
            </div>
        </footer>
    )
    
}