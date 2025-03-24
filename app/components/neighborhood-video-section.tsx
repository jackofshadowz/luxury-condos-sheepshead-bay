"use client"
import dynamic from "next/dynamic"

// Lazy load the video component with ssr: false
const LazyVideo = dynamic(() => import("./lazy-video"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-muted flex items-center justify-center">
      <div className="w-10 h-10 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
    </div>
  ),
})

export default function NeighborhoodVideoSection() {
  return (
    <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
      <LazyVideo />
    </div>
  )
}

