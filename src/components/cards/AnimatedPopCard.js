import React from 'react'
import { useInView, useSpring, animated } from '@react-spring/web'

import { buildInteractionObserverThreshold } from '../../utils/threshold'


export const Window = (props) => {
  const {childElement, rootMargin} = props   
  const [ref, isInView] = useInView({
    rootMargin: `${rootMargin}`,
    amount: buildInteractionObserverThreshold(),
  })


  const styles = useSpring({
    scale: isInView ? 1 : 0.8,
    opacity: isInView ? 1: 0,
    config: {
      tension: 120,
    },
  })

  return (
    <animated.div style={styles} ref={ref}>
      {childElement}
    </animated.div>
  )
}
