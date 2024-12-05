import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
export function More(props) {
  const [switcher, setSwitcher] = useState(false);
  const FirstDivLinks = {};
  return (
    <AnimatePresence>
      {}
      <div className="MoreCtrl">
        <div className="More">
          <div className="OnAbl">
            <h1>More on Ableton.com:</h1>
            <ul>
              {FirstDivLinks.map((el) => (
                <li>
                  <Link to={el}>el</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h1>More from Ableton:</h1>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
}
