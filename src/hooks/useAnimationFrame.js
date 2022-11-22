import React, { useRef, useEffect } from "react";

export default function AnimatedImageFrame({ count, setCount, imageRef, slides }) {
    const useAnimationFrame = (callback) => {
        // Use useRef for mutable variables that we want to persist
        // without triggering a re-render on their change
        const requestRef = useRef();
        const previousTimeRef = useRef();
        const animate = time => {
            if (previousTimeRef.current !== undefined) {
                const deltaTime = time - previousTimeRef.current;
                callback(deltaTime)
            }
            previousTimeRef.current = time;
            requestRef.current = requestAnimationFrame(animate);
        }

        useEffect(() => {
            requestRef.current = requestAnimationFrame(animate);

            return () => cancelAnimationFrame(requestRef.current);
        }, []); // Make sure the effect runs only once
    }

    useEffect(() => {
        imageRef.current.src = slides[Math.round(count)]
      }, [count, imageRef, slides])

    const Images = () => {
        useAnimationFrame(deltaTime => {
            // Pass on a function to the setter of the state
            // to make sure we always have the latest state
            setCount(prevCount => {
                return (prevCount + deltaTime * 0.0005) % 2
            })
        })
    }

    return (
        <>
          <Images />
        </>
      )
}