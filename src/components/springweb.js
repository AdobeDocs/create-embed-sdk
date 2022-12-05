import React, { useState, useRef, useMemo, useEffect } from 'react'
import { CodeSnippetSVG } from './IconsSvg'
import AnimatedImageFrame from '../hooks/useAnimationFrame'

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
  const [count, setCount] = useState(0)
  const imageRef = useRef()
  const isViewed = useIsInViewport(imageRef)

  return (
    <div className="flex fill center" style={{position: 'relative', display: 'flex', width: '55%'}}>
        {isViewed &&
            <AnimatedImageFrame count={count} setCount={setCount} imageRef={imageRef} slides={slides} />
        }
        <img src='' alt='animeImages' ref={imageRef} className='image-bg' style={{width: '100%', backgroundRepeat: 'no-repeat', marginLeft: '0', marginBottom: '1%'}} />
        <div className='snippet-img'>
          <CodeSnippetSVG name={ Math.round(count) === 0 ? 'image-resize' : Math.round(count) === 1 ? 'remove-background' : 'convert-to-png'}  />
        </div>
    </div>
  )
}