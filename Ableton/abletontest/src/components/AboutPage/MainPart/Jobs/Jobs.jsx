import { Commerce } from "./Commerc";
import { JobsAtAblPhoto } from "./JobsAtAblPhoto";
import { WorkingProc } from "./Working";
import '../../../../scss/Jobs/Jobs.scss'
export function JobsTest() {
    return(
        <div className="Jobs">
            <JobsAtAblPhoto />
            <WorkingProc />
            <Commerce />
        </div>
    )
}