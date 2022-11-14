import React, { useState } from 'react'
import { useTransition, animated } from 'react-spring'
import { CodeSnippetSVG } from './IconsSvg'

export default function SpringImage({slides}) {
  const [index, set] = useState(0)
  const transitions = useTransition(index, {
    key: index,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 1000 },
    onRest: (_a, _b, item) => {
      console.log('iteem', item);
      console.log('index', index);
      if (index === item) {
        set(state => (state + 1) % slides.length)
      }
    },
    exitBeforeEnter: true,
  })
  return (
    <div className="flex fill center" style={{position:"absolute"}}>
      {transitions((style, i) => (
          <>
          <animated.div >
            <img src={`${slides[i]}`} style={{marginLeft:"30px",marginTop:"60px"}} ></img>
            <div style={{position: "absolute",right: "325px",top: "75px"}}>
              <CodeSnippetSVG name={ i=== 0 ? 'image-resize' : i === 1 ? 'remove-background' : 'convert-to-png'}  />
            </div>
            
          </animated.div>
          {/* <animated.img
          src={`${slides[i]}`} alt={`${i}_imagenotfound`} 
          style={{marginLeft:"30px",marginTop:"40px"}}
        /> */}
          </>
      ))}
    </div>
  )
}