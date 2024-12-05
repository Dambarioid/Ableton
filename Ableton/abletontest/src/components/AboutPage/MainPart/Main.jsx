
import '../../../scss/MainPart/Main.scss'
import { FirstScroll } from "./FirstScroll";
import { SecondScroll } from "./SecondScroll";
import { ThirdScroll } from "./ThirdScroll";
import { FourthScroll } from "./FourthScroll";
import { FifthScroll } from "./FifthScroll";
import { SixthScroll } from "./SixthScroll";
import { SeventhScroll } from "./SeventhScroll";
import { EighthScroll } from "./EighthScroll";
import { LastScroll } from "./LastScroll";
export function Main() {
    return(
        <div className="MainDiv">
            <FirstScroll />
            <SecondScroll />
            <ThirdScroll />
            <FourthScroll />
            <FifthScroll />
            <SixthScroll />
            <SeventhScroll />
            <EighthScroll />
            <LastScroll />
        </div>
    ) 
}