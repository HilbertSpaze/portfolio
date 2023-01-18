import * as React from 'react'
import { useInView, animated } from '@react-spring/web'

import { buildInteractionObserverThreshold } from '../../utils/threshold'

export const AnimatedHeader = (props) => {
  const {color, title, fontSize} = props
  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 100,
        textAlign:"center"
      },
      to: {
        opacity: 1,
        color:`${color}`,
        fontSize:fontSize,
        textAlign:"center",
        y: 0,
      },
    }),
    {
      // rootMargin: '35% 0px -45% 0px',
      amount: buildInteractionObserverThreshold(),
    }
  )

  return (
    <animated.h2 ref={ref} style={springs}>
      {title}
    </animated.h2>
  )
}