import '../../../../scss/AnimationStart/StartBlockTwo.scss'
import { motion } from 'framer-motion'
export function StartBlockTwo() {
    const VerticalSpanList = ["SpanHor1", "SpanHor2", "SpanHor3", 'SpanHor4']
    return (
        <motion.span className='MainSpanAnim2' initial={{translateY:"-300%"}} animate={{rotate:"180deg",translateY:"0%",transition:{duration:2,delay:1}}}>
            {VerticalSpanList.map(spe => (
                <motion.span className={spe}>

                </motion.span>
            ))}
        </motion.span>
    )
    
}