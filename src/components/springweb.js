import React, { useState, useRef, useEffect } from 'react'
import { CodeSnippetSVG } from './CodeSnippetSVG'
import AnimatedImageFrame from '../hooks/useAnimationFrame'

// to start animated image frame is in view port
function useIsInViewport(ref) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {

    if (window) {
      const observer = new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting)
      )
      observer.observe(ref.current)
      return () => {
        observer.disconnect()
      };
    }
  }, [ref])

  return isIntersecting
}

export default function SpringImage({ slides }) {
  const [count, setCount] = useState(0)
  const imageRef = useRef()
  const isViewed = useIsInViewport(imageRef)

  return (
    <div className="flex fill center codeSnippetAlignment" style={{ position: 'relative', display: 'flex', width: '55%' }}>
      {isViewed &&
        <AnimatedImageFrame count={count} setCount={setCount} imageRef={imageRef} slides={slides} />
      }
      <img src='' alt='animeImages' ref={imageRef} className='image-bg' style={{ width: '100%', backgroundRepeat: 'no-repeat', marginLeft: '0', marginBottom: '11%', marginTop: '11%' }} />
      <div className='snippet-img'>
        <CodeSnippetSVG count={count} />
      </div>
    </div>
  )
}