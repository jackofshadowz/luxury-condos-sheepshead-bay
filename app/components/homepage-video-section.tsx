"use client"
import dynamic from "next/dynamic"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, ArrowRight } from "lucide-react"

// Lazy load the video component with ssr: false
const LazyVideo = dynamic(() => import("./lazy-video"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-muted flex items-center justify-center">
      <div className="w-10 h-10 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
    </div>
  ),
})

export default function HomepageVideoSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
      <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden order-1 md:order-1">
        <LazyVideo />
      </div>
      <div className="space-y-4 md:space-y-6 order-2 md:order-2">
        <h3 className="text-xl md:text-2xl font-bold">Brooklyn's Hidden Gem</h3>
        <p className="text-sm md:text-base">
          Sheepshead Bay offers a unique coastal lifestyle with its charming waterfront, diverse dining scene, and easy
          access to Manhattan. Residents enjoy the perfect balance of urban convenience and seaside tranquility.
        </p>
        <div className="space-y-3 md:space-y-4">
          <div className="flex items-start gap-2">
            <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div>
              <h4 className="font-medium">Waterfront Dining</h4>
              <p className="text-xs md:text-sm text-muted-foreground">
                Enjoy fresh seafood at renowned waterfront restaurants
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div>
              <h4 className="font-medium">Recreation</h4>
              <p className="text-xs md:text-sm text-muted-foreground">Access to beaches, parks, and water activities</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div>
              <h4 className="font-medium">Transportation</h4>
              <p className="text-xs md:text-sm text-muted-foreground">
                30 minutes to Manhattan via subway or express bus
              </p>
            </div>
          </div>
        </div>
        <Button className="mt-2 md:mt-4 text-sm md:text-base" asChild>
          <Link href="/neighborhood">
            Explore the Neighborhood <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

