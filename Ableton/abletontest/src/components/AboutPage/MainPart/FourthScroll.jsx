import ReactPlayer from 'react-player'
import '../../../scss/MainPart/FourthScroll.scss'
import Video from '../../../assets/img/poster-juanpe.avif'
export function FourthScroll() {
    return(
        <div className="Why">
            <div className="Making">
                <div>
                    <p className="NotEasy">
                        Making music isn't easy. It takes time, effort, and learning. But
                        when you’re in the flow, it’s incredibly rewarding. 
                    </p>
                </div>
                <div>
                    <p className="Proud">
                        We feel the same way about making Ableton products. The driving force behind Ableton is our passion 
                        for what we make, and the people we make it for.
                    </p>
                </div>
            </div>
            <div className="VideoDiv">
                <ReactPlayer className="ReactVideo" url="https://www.youtube.com/watch?v=9SbnhgjeyXA" height="450px" width="800px" light={<img src={Video}/>}></ReactPlayer>
                <label htmlFor="" className='UnderVideo'>Why Abelton - Juanpe Bolivar</label>
            </div>
            <div className="Community">
                <div className='Countries'>
                    <p className='CountriesP'>
                        We are more than 350 people from 30 different countries divided 
                        between our headquarters in Berlin and our offices in Los Angeles 
                        and Tokyo.
                    </p>
                </div>
                <div className='Creators'>
                    <p className='CreatorsP'> 
                        Most of us are active musicians, producers, and DJs, and many of us use Live and Push every day. We 
                        come from a wide range of cultural and professional backgrounds. Some of us have PhDs, some are 
                        self-taught, and most of us are somewhere in between. What connects us is the shared belief that each 
                        of us has the skills and knowledge to contribute to something big: helping to shape the future of music culture.
                    </p>
                </div>
            </div>
        </div>
    )
    
}