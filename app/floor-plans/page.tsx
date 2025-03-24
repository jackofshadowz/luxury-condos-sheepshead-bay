import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download } from "lucide-react"
import { MobileNav } from "../components/mobile-nav"
import dynamic from "next/dynamic"

// Lazy load components
const ImageWithFallback = dynamic(() => import("../components/image-with-fallback"), {
  ssr: true,
  loading: () => (
    <div className="w-full h-full bg-muted flex items-center justify-center">
      <div className="w-10 h-10 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
    </div>
  ),
})

export default function FloorPlansPage() {
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
            <Link href="/neighborhood" className="text-sm font-medium transition-colors hover:text-primary">
              Neighborhood
            </Link>
            <Link href="/floor-plans" className="text-sm font-medium text-primary transition-colors">
              Floor Plans
            </Link>
            <Link href="/#gallery" className="text-sm font-medium transition-colors hover:text-primary">
              Gallery
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
          <div className="relative h-[30vh] md:h-[40vh] overflow-hidden">
            <Image
              src="/images/building-exterior.webp"
              alt="Bayview Residences Building Exterior"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="container px-4 md:px-6 text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tighter text-white mb-4 md:mb-6">
                Floor Plans
              </h1>
              <p className="mx-auto max-w-[700px] text-base md:text-lg text-white/90">
                Explore our thoughtfully designed residences with premium finishes and breathtaking views
              </p>
            </div>
          </div>
        </section>

        {/* One Bedroom Floor Plans */}
        <section className="py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 md:mb-12">
              <div className="space-y-2">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter">One Bedroom Residences</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground text-sm md:text-base lg:text-xl">
                  Elegant living spaces with premium finishes and waterfront views
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="relative h-[400px] md:h-[600px] rounded-lg overflow-hidden border bg-white">
                <div className="relative w-full h-full">
                  <ImageWithFallback
                    src="/images/1br-floorplan.png"
                    alt="One Bedroom Floor Plan"
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              <div className="space-y-4 md:space-y-6">
                <h3 className="text-xl md:text-2xl font-bold">One Bedroom Residence</h3>
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  <div className="p-3 md:p-4 bg-muted rounded-lg">
                    <p className="text-xs md:text-sm text-muted-foreground">Interior</p>
                    <p className="text-lg md:text-xl font-medium">750 sq ft</p>
                  </div>
                  <div className="p-3 md:p-4 bg-muted rounded-lg">
                    <p className="text-xs md:text-sm text-muted-foreground">Balcony</p>
                    <p className="text-lg md:text-xl font-medium">100-150 sq ft</p>
                  </div>
                  <div className="p-3 md:p-4 bg-muted rounded-lg">
                    <p className="text-xs md:text-sm text-muted-foreground">Bathroom</p>
                    <p className="text-lg md:text-xl font-medium">1</p>
                  </div>
                  <div className="p-3 md:p-4 bg-muted rounded-lg">
                    <p className="text-xs md:text-sm text-muted-foreground">Starting Price</p>
                    <p className="text-lg md:text-xl font-medium">$1.2M</p>
                  </div>
                </div>
                <div className="space-y-3 md:space-y-4">
                  <h4 className="text-base md:text-lg font-medium">Features</h4>
                  <ul className="space-y-1 md:space-y-2 text-sm md:text-base">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-medium">•</span>
                      <span>Spacious living/kitchen/dining area (16'4" × 11'11")</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-medium">•</span>
                      <span>Comfortable bedroom (10'3" × 9'6")</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-medium">•</span>
                      <span>In-unit washer and dryer</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-medium">•</span>
                      <span>Premium kitchen with dishwasher and full-size refrigerator</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-medium">•</span>
                      <span>Luxury bathroom with walk-in shower</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-medium">•</span>
                      <span>Private balcony with bay views (not shown in floor plan)</span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                  <Button className="flex-1 text-sm md:text-base" asChild>
                    <Link href="/#contact">Schedule a Tour</Link>
                  </Button>
                  <Button variant="outline" className="flex gap-2 text-sm md:text-base" asChild>
                    <Link href="/#contact">
                      <Download className="h-4 w-4" /> Download PDF
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Two Bedroom Floor Plans */}
        <section className="py-12 md:py-20 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 md:mb-12">
              <div className="space-y-2">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter">Two Bedroom Residences</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground text-sm md:text-base lg:text-xl">
                  Spacious layouts with expansive living areas and premium finishes
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="space-y-4 md:space-y-6 order-2 md:order-1">
                <h3 className="text-xl md:text-2xl font-bold">Two Bedroom Residence</h3>
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  <div className="p-3 md:p-4 bg-background rounded-lg">
                    <p className="text-xs md:text-sm text-muted-foreground">Interior</p>
                    <p className="text-lg md:text-xl font-medium">1,200 sq ft</p>
                  </div>
                  <div className="p-3 md:p-4 bg-background rounded-lg">
                    <p className="text-xs md:text-sm text-muted-foreground">Balcony</p>
                    <p className="text-lg md:text-xl font-medium">150-200 sq ft</p>
                  </div>
                  <div className="p-3 md:p-4 bg-background rounded-lg">
                    <p className="text-xs md:text-sm text-muted-foreground">Bathrooms</p>
                    <p className="text-lg md:text-xl font-medium">2</p>
                  </div>
                  <div className="p-3 md:p-4 bg-background rounded-lg">
                    <p className="text-xs md:text-sm text-muted-foreground">Starting Price</p>
                    <p className="text-lg md:text-xl font-medium">$2.1M</p>
                  </div>
                </div>
                <div className="space-y-3 md:space-y-4">
                  <h4 className="text-base md:text-lg font-medium">Features</h4>
                  <ul className="space-y-1 md:space-y-2 text-sm md:text-base">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-medium">•</span>
                      <span>Expansive living/kitchen/dining area (23'9" × 16'7")</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-medium">•</span>
                      <span>Two spacious bedrooms (12'2" × 11'2" and 12'16" × 11'1")</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-medium">•</span>
                      <span>Two full bathrooms (one with bathtub, one with shower)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-medium">•</span>
                      <span>In-unit washer and dryer</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-medium">•</span>
                      <span>Gourmet kitchen with premium appliances</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-medium">•</span>
                      <span>Generous closet space throughout</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-medium">•</span>
                      <span>Private balcony with bay views (not shown in floor plan)</span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                  <Button className="flex-1 text-sm md:text-base" asChild>
                    <Link href="/#contact">Schedule a Tour</Link>
                  </Button>
                  <Button variant="outline" className="flex gap-2 text-sm md:text-base" asChild>
                    <Link href="/#contact">
                      <Download className="h-4 w-4" /> Download PDF
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative h-[400px] md:h-[600px] rounded-lg overflow-hidden border bg-white order-1 md:order-2">
                <div className="relative w-full h-full">
                  <ImageWithFallback
                    src="/images/2br-floorplan.png"
                    alt="Two Bedroom Floor Plan"
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Penthouse Floor Plans */}
        <section className="py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 md:mb-12">
              <div className="space-y-2">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter">Penthouse Residences</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground text-sm md:text-base lg:text-xl">
                  Exclusive luxury living with panoramic views and custom finishes
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="relative h-[400px] md:h-[600px] rounded-lg overflow-hidden border bg-white">
                <div className="relative w-full h-full">
                  <ImageWithFallback
                    src="/images/penthouse-floorplan.jpeg"
                    alt="Penthouse Floor Plan"
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              <div className="space-y-4 md:space-y-6">
                <h3 className="text-xl md:text-2xl font-bold">Penthouse Residence</h3>
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  <div className="p-3 md:p-4 bg-muted rounded-lg">
                    <p className="text-xs md:text-sm text-muted-foreground">Interior</p>
                    <p className="text-lg md:text-xl font-medium">1,800 sq ft</p>
                  </div>
                  <div className="p-3 md:p-4 bg-muted rounded-lg">
                    <p className="text-xs md:text-sm text-muted-foreground">Terrace</p>
                    <p className="text-lg md:text-xl font-medium">600 sq ft</p>
                  </div>
                  <div className="p-3 md:p-4 bg-muted rounded-lg">
                    <p className="text-xs md:text-sm text-muted-foreground">Bedrooms</p>
                    <p className="text-lg md:text-xl font-medium">2</p>
                  </div>
                  <div className="p-3 md:p-4 bg-muted rounded-lg">
                    <p className="text-xs md:text-sm text-muted-foreground">Bathrooms</p>
                    <p className="text-lg md:text-xl font-medium">2</p>
                  </div>
                </div>
                <div className="p-3 md:p-4 bg-muted rounded-lg">
                  <p className="text-xs md:text-sm text-muted-foreground">Starting Price</p>
                  <p className="text-lg md:text-xl font-medium">$4.5M</p>
                </div>
                <div className="space-y-3 md:space-y-4">
                  <h4 className="text-base md:text-lg font-medium">Features</h4>
                  <ul className="space-y-1 md:space-y-2 text-sm md:text-base">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-medium">•</span>
                      <span>Expansive living/dining/kitchen area (27'1" × 21'4")</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-medium">•</span>
                      <span>Master bedroom (14'6" × 13'7") with walk-in closet</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-medium">•</span>
                      <span>Second bedroom (12'5" × 12'4") with en-suite bathroom</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-medium">•</span>
                      <span>Luxury bathrooms with premium fixtures</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-medium">•</span>
                      <span>Gourmet kitchen with high-end appliances</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-medium">•</span>
                      <span>Spacious private terrace with panoramic bay views</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-medium">•</span>
                      <span>In-unit washer/dryer and mechanical room</span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                  <Button className="flex-1 text-sm md:text-base" asChild>
                    <Link href="/#contact">Schedule a Tour</Link>
                  </Button>
                  <Button variant="outline" className="flex gap-2 text-sm md:text-base" asChild>
                    <Link href="/#contact">
                      <Download className="h-4 w-4" /> Download PDF
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-8 md:py-12 bg-muted">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter mb-4 md:mb-6">
              Experience Bayview Residences
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground text-sm md:text-base lg:text-xl mb-6 md:mb-8">
              Contact our sales team to schedule a private tour and discover your perfect waterfront residence
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
              <Button size="lg" className="text-sm md:text-base" asChild>
                <Link href="/#contact">Schedule a Tour</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-sm md:text-base" asChild>
                <Link href="/">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
                </Link>
              </Button>
            </div>
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

