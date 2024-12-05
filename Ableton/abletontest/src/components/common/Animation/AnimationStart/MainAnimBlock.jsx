import {AnimatePresence, delay, motion, transform} from 'framer-motion'
import { StartBlockOne } from './FirstFigure'
import '../../../../scss/AnimationStart/AllBlockInOne.scss'
import { StartBlockTwo } from './StartBlockTwo'
export function MainBlockAnim(){
    return(
        <AnimatePresence>
            <motion.div className='AllBlockInOne' animate={{transition:{duration:2,delay:4},translateY:"-300%"}}>
                <motion.div className='InnerContainerAnim' >
                    <StartBlockOne />
                    <StartBlockTwo />
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}