import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, ArrowLeft } from "lucide-react"
import { MobileNav } from "../components/mobile-nav"
import NeighborhoodVideoSection from "../components/neighborhood-video-section"

export default function NeighborhoodPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 md:h-20 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-lg md:text-xl font-bold tracking-tighter">BAYVIEW RESIDENCES</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/#residences" className="text-sm font-medium transition-colors hover:text-primary">
              Residences
            </Link>
            <Link href="/#amenities" className="text-sm font-medium transition-colors hover:text-primary">
              Amenities
            </Link>
            <Link href="/neighborhood#overview" className="text-sm font-medium text-primary transition-colors">
              Neighborhood
            </Link>
            <Link href="/floor-plans" className="text-sm font-medium transition-colors hover:text-primary">
              Floor Plans
            </Link>
            <Link href="/#contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button asChild className="hidden md:inline-flex">
              <Link href="/#contact">Schedule a Tour</Link>
            </Button>
            <MobileNav />
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-10 bg-black/30" />
          <div className="relative h-[40vh] md:h-[60vh] overflow-hidden">
            <Image
              src="/images/aerial-view.webp"
              alt="Aerial view of Sheepshead Bay"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="container px-4 md:px-6 text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tighter text-white mb-4 md:mb-6">
                Sheepshead Bay
              </h1>
              <p className="mx-auto max-w-[700px] text-base md:text-lg text-white/90 mb-6 md:mb-8">
                Brooklyn's waterfront gem offering the perfect balance of urban convenience and coastal tranquility
              </p>
            </div>
          </div>
        </section>

        {/* Neighborhood Overview */}
        <div id="overview" className="scroll-mt-20 md:scroll-mt-24"></div>
        <section className="py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 md:mb-12">
              <div className="space-y-2">
                <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter">
                  Discover Sheepshead Bay
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground text-sm md:text-base lg:text-xl">
                  A vibrant waterfront community with rich history and modern amenities
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="space-y-4 md:space-y-6">
                <p className="text-sm md:text-lg">
                  Sheepshead Bay is a charming waterfront neighborhood in Brooklyn, named after the sheepshead fish once
                  found in the bay's waters. This vibrant community offers a unique blend of coastal living and urban
                  convenience.
                </p>
                <p className="text-sm md:text-lg">
                  The neighborhood is centered around the iconic bay, which serves as both a working fishing port and a
                  recreational marina. The waterfront promenade is lined with seafood restaurants, offering fresh
                  catches and spectacular views.
                </p>
                <p className="text-sm md:text-lg">
                  Beyond the waterfront, Sheepshead Bay features tree-lined residential streets with a mix of
                  single-family homes, low-rise apartment buildings, and new luxury developments. The area has seen
                  significant revitalization in recent years, attracting new residents while maintaining its distinctive
                  character.
                </p>
              </div>
              <NeighborhoodVideoSection />
            </div>
          </div>
        </section>

        {/* Dining & Entertainment */}
        <section className="py-12 md:py-20 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 md:mb-12">
              <div className="space-y-2">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter">Dining & Entertainment</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground text-sm md:text-base lg:text-xl">
                  From waterfront seafood to global cuisine
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="bg-background rounded-lg p-4 md:p-6 shadow-sm">
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Waterfront Dining</h3>
                <p className="mb-3 md:mb-4 text-sm md:text-base">
                  Sheepshead Bay's waterfront is famous for its row of seafood restaurants along Emmons Avenue. Enjoy
                  fresh catches while watching boats come and go from the marina.
                </p>
                <ul className="space-y-2 text-sm md:text-base">
                  <li className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Randazzo's Clam Bar - Classic seafood institution</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Il Fornetto - Waterfront Italian dining</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Roll-N-Roaster - Iconic roast beef sandwiches</span>
                  </li>
                </ul>
              </div>

              <div className="bg-background rounded-lg p-4 md:p-6 shadow-sm">
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Global Cuisine</h3>
                <p className="mb-3 md:mb-4 text-sm md:text-base">
                  The neighborhood's diverse population is reflected in its wide range of international restaurants,
                  from Eastern European to Middle Eastern and Asian cuisines.
                </p>
                <ul className="space-y-2 text-sm md:text-base">
                  <li className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Nargis Cafe - Uzbek and Central Asian cuisine</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Masal Cafe - Turkish delights</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Anatolian Gyro - Mediterranean specialties</span>
                  </li>
                </ul>
              </div>

              <div className="bg-background rounded-lg p-4 md:p-6 shadow-sm">
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Entertainment</h3>
                <p className="mb-3 md:mb-4 text-sm md:text-base">
                  Beyond dining, Sheepshead Bay offers various entertainment options, from fishing charters and party
                  boats to shopping and nightlife.
                </p>
                <ul className="space-y-2 text-sm md:text-base">
                  <li className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Sheepshead Bay Fishing Fleet - Deep sea fishing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>UA Sheepshead Bay - Multiplex cinema</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Kings Bay Y - Community center with activities</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Recreation & Outdoors */}
        <section className="py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 md:mb-12">
              <div className="space-y-2">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter">Recreation & Outdoors</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground text-sm md:text-base lg:text-xl">
                  Enjoy the natural beauty and outdoor activities
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden order-2 md:order-1">
                <Image
                  src="/images/metro-overpass.webp"
                  alt="Sheepshead Bay neighborhood"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>

              <div className="space-y-4 md:space-y-6 order-1 md:order-2">
                <h3 className="text-xl md:text-2xl font-bold">Waterfront Activities</h3>
                <p className="text-sm md:text-lg">
                  The bay itself is a hub for water activities. Residents and visitors can enjoy fishing charters, party
                  boats, or simply strolling along the waterfront promenade. The marina is home to numerous private
                  boats, creating a picturesque nautical atmosphere.
                </p>

                <h3 className="text-xl md:text-2xl font-bold">Parks and Green Spaces</h3>
                <p className="text-sm md:text-lg">
                  Sheepshead Bay is surrounded by several parks and green spaces. Manhattan Beach Park offers a quieter
                  alternative to the more famous Brighton Beach, with beautiful views of the Atlantic Ocean. Marine
                  Park, Brooklyn's largest park, is just a short distance away, offering extensive recreational
                  facilities.
                </p>

                <h3 className="text-xl md:text-2xl font-bold">Emmons Avenue</h3>
                <p className="text-sm md:text-lg">
                  The heart of the neighborhood is Emmons Avenue, which runs along the waterfront. This bustling street
                  is perfect for evening walks, with views of the illuminated boats and the opportunity to watch
                  fishermen bringing in their daily catch.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Transportation */}
        <section className="py-12 md:py-20 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 md:mb-12">
              <div className="space-y-2">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter">Transportation</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground text-sm md:text-base lg:text-xl">
                  Convenient access to Manhattan and beyond
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="bg-background rounded-lg p-4 md:p-6 shadow-sm">
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Subway</h3>
                <p className="mb-3 md:mb-4 text-sm md:text-base">
                  The B and Q subway lines serve the neighborhood at the Sheepshead Bay station, providing direct access
                  to Manhattan. The journey to Midtown takes approximately 45 minutes.
                </p>
                <ul className="space-y-2 text-sm md:text-base">
                  <li className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Sheepshead Bay Station (B, Q trains)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Neck Road Station (Q train)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-background rounded-lg p-4 md:p-6 shadow-sm">
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Bus</h3>
                <p className="mb-3 md:mb-4 text-sm md:text-base">
                  Several bus routes connect Sheepshead Bay to other parts of Brooklyn and Manhattan, including express
                  bus service for a more comfortable commute.
                </p>
                <ul className="space-y-2 text-sm md:text-base">
                  <li className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>B4, B36, B49 - Local service</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>BM3, BM4 - Express to Manhattan</span>
                  </li>
                </ul>
              </div>

              <div className="bg-background rounded-lg p-4 md:p-6 shadow-sm">
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Car & Bike</h3>
                <p className="mb-3 md:mb-4 text-sm md:text-base">
                  The neighborhood offers good access to major roadways, including the Belt Parkway, making it
                  convenient for car owners. Bike lanes are also available for cyclists.
                </p>
                <ul className="space-y-2 text-sm md:text-base">
                  <li className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Belt Parkway - Easy access to JFK Airport</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Ocean Parkway Bike Path - Protected cycling</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 md:mb-12">
              <div className="space-y-2">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter">Neighborhood Gallery</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground text-sm md:text-base lg:text-xl">
                  Experience the beauty of Sheepshead Bay
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src="/images/aerial-view.webp"
                  alt="Aerial view of Sheepshead Bay"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src="/images/metro-overpass.webp"
                  alt="Sheepshead Bay neighborhood"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src="/images/building-exterior.webp"
                  alt="Modern architecture in Sheepshead Bay"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Back to Residences */}
        <section className="py-8 md:py-12 bg-muted">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter mb-4 md:mb-6">
              Experience Luxury Living in Sheepshead Bay
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground text-sm md:text-base lg:text-xl mb-6 md:mb-8">
              Return to Bayview Residences to discover how you can make this vibrant neighborhood your home
            </p>
            <Button size="lg" className="text-sm md:text-base" asChild>
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Bayview Residences
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <footer className="border-t bg-muted/50">
        <div className="container flex flex-col gap-6 py-8 md:py-12 px-4 md:px-6 md:flex-row md:justify-between">
          <div className="space-y-3 md:space-y-4 md:max-w-xs">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-lg md:text-xl font-bold tracking-tighter">BAYVIEW RESIDENCES</span>
            </Link>
            <p className="text-xs md:text-sm text-muted-foreground">
              Luxury waterfront residences in Sheepshead Bay, Brooklyn. A new standard of coastal living.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-8">
            <div className="space-y-2 md:space-y-3">
              <h3 className="text-sm font-medium">Explore</h3>
              <ul className="space-y-1 md:space-y-2">
                <li>
                  <Link href="/#residences" className="text-xs md:text-sm text-muted-foreground hover:text-foreground">
                    Residences
                  </Link>
                </li>
                <li>
                  <Link href="/#amenities" className="text-xs md:text-sm text-muted-foreground hover:text-foreground">
                    Amenities
                  </Link>
                </li>
                <li>
                  <Link href="/neighborhood" className="text-xs md:text-sm text-muted-foreground hover:text-foreground">
                    Neighborhood
                  </Link>
                </li>
                <li>
                  <Link href="/#gallery" className="text-xs md:text-sm text-muted-foreground hover:text-foreground">
                    Gallery
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2 md:space-y-3">
              <h3 className="text-sm font-medium">Contact</h3>
              <ul className="space-y-1 md:space-y-2">
                <li>
                  <Link href="/#contact" className="text-xs md:text-sm text-muted-foreground hover:text-foreground">
                    Schedule a Tour
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="text-xs md:text-sm text-muted-foreground hover:text-foreground">
                    Sales Office
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="text-xs md:text-sm text-muted-foreground hover:text-foreground">
                    Press Inquiries
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2 md:space-y-3">
              <h3 className="text-sm font-medium">Legal</h3>
              <ul className="space-y-1 md:space-y-2">
                <li>
                  <Link href="/#contact" className="text-xs md:text-sm text-muted-foreground hover:text-foreground">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="text-xs md:text-sm text-muted-foreground hover:text-foreground">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="text-xs md:text-sm text-muted-foreground hover:text-foreground">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t py-4 md:py-6">
          <div className="container flex flex-col items-center justify-center gap-3 md:gap-4 px-4 md:px-6 md:flex-row md:justify-between">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Bayview Residences. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              The complete offering terms are in an offering plan available from sponsor. File No. CD23-0123.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

