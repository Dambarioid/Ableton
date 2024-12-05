import {Link} from 'react-router-dom'
import '../../../../scss/Jobs/Commerce.scss'
export function Commerce() {
    return(
        <div className="CommerceCntrl">
            <div className="Commerce">
                <h2 className="CommerceName">Commerce</h2>
                <ul>
                    <li>
                        <Link>Ausbildung zur/zum Kauffrau/-mann für Büromanagement (d/w/m)</Link>
                        <label htmlFor="">Ableton AG / Germany</label>
                    </li>
                    <li>
                        <Link>Legal Assistant / Paralegal (d/w/m)</Link>
                        <label htmlFor="">Ableton AG / Germany</label>
                    </li>
                    <li>
                        <Link>Referendar:in für die Wahlstation bzw. als Teil der Anwaltsstation (d/w/m)</Link>
                        <label htmlFor="">Ableton AG / Germany</label>
                    </li>
                </ul>
            </div>
        </div>
    )
}