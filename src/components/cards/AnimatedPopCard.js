import React,{useEffect} from 'react'
import { useInView, useSpring, animated } from '@react-spring/web'
import Highlight from './Highlight'

import { buildInteractionObserverThreshold } from '../../utils/threshold'

const AnimatedWindow = animated(Highlight)

export const Window = () => {
    
  const [ref, isInView] = useInView({
    rootMargin: '-45% 0px -45% 0px',
    amount: buildInteractionObserverThreshold(),
  })


  const styles = useSpring({
    scale: isInView ? 2.5 : 0,
    config: {
      tension: 1300,
    },
  })

  return (
    <AnimatedWindow style={styles} ref={ref} className="window">
    </AnimatedWindow>
  )
}
