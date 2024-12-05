import {animate, delay, motion, transform} from 'framer-motion'
import '../../../../scss/AnimationStart/StartBlockOne.scss'
export function StartBlockOne() {
    const VerticalSpanList = ["Span1", "Span2", "Span3", 'Span4']
    return (
        <motion.span className='MainSpanAnim' initial={{translateY:"300%"}} animate={{rotate:"180deg",translateY:"0%",transition:{duration:2,delay:1}}}>
            {VerticalSpanList.map(spe => (
                <motion.span className={spe}>

                </motion.span>
            ))}
        </motion.span>
    )
}