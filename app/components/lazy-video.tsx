"use client"

import { useState, useEffect } from "react"

export default function LazyVideo() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Small delay to ensure component is mounted
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted">
          <div className="w-10 h-10 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
        </div>
      )}
      <div className="absolute inset-0 overflow-hidden">
        <div className="relative w-full h-full">
          {isLoaded && (
            <iframe
              className="absolute inset-0 w-[220%] h-[220%] left-[-60%] top-[-60%]"
              src="https://www.youtube-nocookie.com/embed/BGN9ITGtpOY?start=1243&end=1518&autoplay=1&mute=1&controls=0&loop=1&playlist=BGN9ITGtpOY&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1"
              title="Sheepshead Bay Neighborhood"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            ></iframe>
          )}
        </div>
      </div>
      {/* Overlay to prevent interaction with YouTube player controls */}
      <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
    </>
  )
}

