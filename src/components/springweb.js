import React, { useState, useRef, useMemo, useEffect } from 'react'
import { CodeSnippetSVG } from './IconsSvg'
import AnimatedImageFrame from '../hooks/useAnimationFrame'
import './style.css'

// to start animated image frame is in view port
function useIsInViewport(ref) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting),
      ),
    [],
  )

  useEffect(() => {
    observer.observe(ref.current)

    return () => {
      observer.disconnect()
    };
  }, [ref, observer])

  return isIntersecting
}

export default function SpringImage({slides}) {
  const [index, set] = useState(0)
  const [count, setCount] = useState(0)
  const imageRef = useRef()
  const isViewed = useIsInViewport(imageRef)

  return (
    <div className="flex fill center" style={{position: 'absolute'}}>
        {isViewed &&
            <AnimatedImageFrame count={count} setCount={setCount} imageRef={imageRef} slides={slides} />
        }
        <img src='' alt='animeImages' ref={imageRef} className='image-bg' style={{width: '100%', backgroundRepeat: 'no-repeat', marginLeft: '0', marginTop: '7%'}} />
        <div style={{position: 'absolute',right: "75%",top: "9%"}}>
          <CodeSnippetSVG name={ Math.round(count) === 0 ? 'image-resize' : Math.round(count) === 1 ? 'remove-background' : 'convert-to-png'}  />
        </div>
    </div>
  )
}