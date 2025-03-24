import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ChevronRight, Phone, Mail, Clock, MapPin } from "lucide-react"
import { MobileNav } from "./components/mobile-nav"
import HomepageVideoSection from "./components/homepage-video-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 md:h-20 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-lg md:text-xl font-bold tracking-tighter">BAYVIEW RESIDENCES</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#residences" className="text-sm font-medium transition-colors hover:text-primary">
              Residences
            </Link>
            <Link href="#amenities" className="text-sm font-medium transition-colors hover:text-primary">
              Amenities
            </Link>
            <Link href="#neighborhood" className="text-sm font-medium transition-colors hover:text-primary">
              Neighborhood
            </Link>
            <Link href="/floor-plans" className="text-sm font-medium transition-colors hover:text-primary">
              Floor Plans
            </Link>
            <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button asChild className="hidden md:inline-flex">
              <Link href="#contact-form">Schedule a Tour</Link>
            </Button>
            <MobileNav isHomePage={true} />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative">
          <div className="absolute inset-0 z-10 bg-black/30" />
          <div className="relative h-[70vh] md:h-[90vh] overflow-hidden">
            {/* Video container with custom styling to hide YouTube elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="relative w-full h-full pt-[56.25%]">
                <iframe
                  className="absolute inset-0 w-[120%] h-[120%] left-[-10%] top-[-10%]"
                  src="https://www.youtube.com/embed/FyFqWzkq8UU?start=134&end=389&autoplay=1&mute=1&controls=0&loop=1&playlist=FyFqWzkq8UU&rel=0&modestbranding=1"
                  title="Waterfront View"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="eager"
                ></iframe>
              </div>
            </div>
            {/* Additional overlay to block any YouTube UI elements */}
            <div className="absolute inset-0 bg-transparent pointer-events-none z-10"></div>
          </div>
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="container px-4 md:px-6 text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tighter text-white mb-4 md:mb-6">
                Luxury Waterfront Living in Sheepshead Bay
              </h1>
              <p className="mx-auto max-w-[700px] text-base md:text-lg lg:text-xl text-white/90 mb-6 md:mb-8">
                Experience unparalleled luxury with breathtaking views of the bay in Brooklyn's most exclusive new
                address
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" asChild className="text-sm md:text-base">
                  <Link href="#contact-form">Schedule a Tour</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-background/20 text-white border-white/20 hover:bg-background/30 text-sm md:text-base"
                  asChild
                >
                  <Link href="#residences">
                    View Residences <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="residences" className="py-12 md:py-20 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 md:mb-12">
              <div className="space-y-2">
                <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter">
                  Exquisite Residences
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground text-sm md:text-base lg:text-lg">
                  Meticulously designed living spaces with premium finishes and breathtaking views
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <div className="group relative overflow-hidden rounded-lg border">
                <div className="relative h-[280px] md:h-[320px] lg:h-[360px] w-full overflow-hidden">
                  <Image
                    src="/images/1bedroom.webp"
                    alt="One Bedroom Residence with Waterfront View"
                    fill
                    className="object-cover transition-transform group-hover:scale-105 residence-image"
                    loading="eager"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-xl md:text-2xl font-bold">One Bedroom Residence</h3>
                  <p className="text-sm text-muted-foreground mb-3 md:mb-4">Starting at $1.2M</p>
                  <p className="mb-3 md:mb-4 text-sm md:text-base">
                    Elegant one-bedroom residences featuring floor-to-ceiling windows, chef's kitchen, and private
                    balcony.
                  </p>
                  <Button variant="outline" className="w-full text-sm md:text-base" asChild>
                    <Link href="/floor-plans">View Floor Plans</Link>
                  </Button>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg border">
                <div className="relative h-[280px] md:h-[320px] lg:h-[360px] w-full overflow-hidden">
                  <Image
                    src="/images/2bedroom.webp"
                    alt="Two Bedroom Residence with Panoramic Waterfront View"
                    fill
                    className="object-cover transition-transform group-hover:scale-105 residence-image"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-xl md:text-2xl font-bold">Two Bedroom Residence</h3>
                  <p className="text-sm text-muted-foreground mb-3 md:mb-4">Starting at $2.1M</p>
                  <p className="mb-3 md:mb-4 text-sm md:text-base">
                    Spacious two-bedroom residences with expansive living areas, premium appliances, and waterfront
                    views.
                  </p>
                  <Button variant="outline" className="w-full text-sm md:text-base" asChild>
                    <Link href="/floor-plans">View Floor Plans</Link>
                  </Button>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg border">
                <div className="relative h-[280px] md:h-[320px] lg:h-[360px] w-full overflow-hidden">
                  <Image
                    src="/images/penthouse.webp"
                    alt="Penthouse Residence with Panoramic Bay Views"
                    fill
                    className="object-cover transition-transform group-hover:scale-105 residence-image"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-xl md:text-2xl font-bold">Penthouse Residence</h3>
                  <p className="text-sm text-muted-foreground mb-3 md:mb-4">Starting at $4.5M</p>
                  <p className="mb-3 md:mb-4 text-sm md:text-base">
                    Exclusive penthouse residences with panoramic bay views, private terraces, and custom luxury
                    finishes.
                  </p>
                  <Button variant="outline" className="w-full text-sm md:text-base" asChild>
                    <Link href="/floor-plans">View Floor Plans</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="amenities" className="py-16 md:py-24 bg-[#f8f9fa]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 md:mb-16">
              <div className="space-y-3">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight">
                  Curated Amenities
                </h2>
                <div className="w-20 h-[1px] bg-primary mx-auto my-4"></div>
                <p className="mx-auto max-w-[700px] text-muted-foreground text-sm md:text-base lg:text-lg font-light">
                  An exceptional collection of spaces designed for the most discerning residents
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
              <div className="group">
                <div className="overflow-hidden mb-6">
                  <div className="relative h-[250px] md:h-[300px] w-full overflow-hidden">
                    <Image
                      src="/images/amenities/infinity-pool.jpg"
                      alt="Luxury Infinity Pool"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-light mb-3">Infinity Pool</h3>
                <div className="w-10 h-[1px] bg-primary mb-4"></div>
                <p className="text-sm md:text-base text-muted-foreground font-light">
                  Enjoy panoramic bay views from our stunning rooftop infinity pool, complete with private cabanas and lounge areas.
                </p>
              </div>
              
              <div className="group">
                <div className="overflow-hidden mb-6">
                  <div className="relative h-[250px] md:h-[300px] w-full overflow-hidden">
                    <Image
                      src="/images/amenities/private-spa.jpg"
                      alt="Private Luxury Spa"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-light mb-3">Private Spa</h3>
                <div className="w-10 h-[1px] bg-primary mb-4"></div>
                <p className="text-sm md:text-base text-muted-foreground font-light">
                  Unwind in our exclusive spa featuring massage rooms, sauna, steam room, and a state-of-the-art hydrotherapy circuit.
                </p>
              </div>
              
              <div className="group">
                <div className="overflow-hidden mb-6">
                  <div className="relative h-[250px] md:h-[300px] w-full overflow-hidden">
                    <Image
                      src="/images/amenities/private-theater.jpg"
                      alt="Private Theater"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-light mb-3">Private Theater</h3>
                <div className="w-10 h-[1px] bg-primary mb-4"></div>
                <p className="text-sm md:text-base text-muted-foreground font-light">
                  Experience cinema in luxury with our private screening room featuring premium seating and state-of-the-art audio-visual technology.
                </p>
              </div>
              
              <div className="group">
                <div className="overflow-hidden mb-6">
                  <div className="relative h-[250px] md:h-[300px] w-full overflow-hidden">
                    <Image
                      src="/images/amenities/party-room.jpg"
                      alt="Party Room"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-light mb-3">Party Room</h3>
                <div className="w-10 h-[1px] bg-primary mb-4"></div>
                <p className="text-sm md:text-base text-muted-foreground font-light">
                  Entertain guests in our stylish party room, featuring a full bar, lounge seating, and state-of-the-art sound system.
                </p>
              </div>
              
              <div className="group">
                <div className="overflow-hidden mb-6">
                  <div className="relative h-[250px] md:h-[300px] w-full overflow-hidden">
                    <Image
                      src="https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt="Wellness Center"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-light mb-3">Wellness Center</h3>
                <div className="w-10 h-[1px] bg-primary mb-4"></div>
                <p className="text-sm md:text-base text-muted-foreground font-light">
                  Maintain your fitness routine in our premium wellness center with personal training, yoga studio, and cutting-edge equipment.
                </p>
              </div>
              
              <div className="group">
                <div className="overflow-hidden mb-6">
                  <div className="relative h-[250px] md:h-[300px] w-full overflow-hidden">
                    <Image
                      src="https://images.pexels.com/photos/6088389/pexels-photo-6088389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt="Private Wine Cellar"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-light mb-3">Private Wine Cellar</h3>
                <div className="w-10 h-[1px] bg-primary mb-4"></div>
                <p className="text-sm md:text-base text-muted-foreground font-light">
                  Store and showcase your collection in our temperature-controlled wine cellar with private lockers and tasting room.
                </p>
              </div>
            </div>
            
            {/* Removed "Explore All Amenities" button as requested */}
          </div>
        </section>

        <section id="neighborhood" className="py-12 md:py-20 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 md:mb-12">
              <div className="space-y-2">
                <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter">
                  Sheepshead Bay
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground text-sm md:text-base lg:text-xl">
                  A waterfront enclave offering the perfect balance of urban convenience and coastal tranquility
                </p>
              </div>
            </div>
            <HomepageVideoSection />
          </div>
        </section>

        <section id="gallery" className="py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 md:mb-12">
              <div className="space-y-2">
                <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter">Gallery</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground text-sm md:text-base lg:text-xl">
                  Experience the beauty and elegance of Bayview Residences
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
              <div className="relative h-[280px] md:h-[320px] lg:h-[360px] w-full overflow-hidden rounded-lg">
                <Image
                  src="/images/building-exterior.webp"
                  alt="Bayview Residences Building Exterior"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                />
              </div>
              <div className="relative h-[280px] md:h-[320px] lg:h-[360px] w-full overflow-hidden rounded-lg">
                <Image
                  src="/images/aerial-view.webp"
                  alt="Aerial View of Sheepshead Bay with Manhattan Skyline"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                />
              </div>
              <div className="relative h-[280px] md:h-[320px] lg:h-[360px] w-full overflow-hidden rounded-lg">
                <Image
                  src="/images/lobby-seating.webp"
                  alt="Luxury Lobby Seating Area"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                />
              </div>
              <div className="relative h-[280px] md:h-[320px] lg:h-[360px] w-full overflow-hidden rounded-lg">
                <Image
                  src="/images/lobby-fireplace.webp"
                  alt="Elegant Lobby with Fireplace"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                />
              </div>
              <div className="relative h-[280px] md:h-[320px] lg:h-[360px] w-full overflow-hidden rounded-lg">
                <Image
                  src="/images/rooftop-pool.webp"
                  alt="Rooftop Infinity Pool with City Views"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                />
              </div>
              <div className="relative h-[280px] md:h-[320px] lg:h-[360px] w-full overflow-hidden rounded-lg">
                <Image
                  src="/images/metro-overpass.webp"
                  alt="Neighborhood with Metro Overpass"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-12 md:py-20 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
              <div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter mb-4 md:mb-6">Contact Us</h2>
                <p className="text-muted-foreground mb-6 md:mb-8 max-w-[500px] text-sm md:text-base">
                  Schedule a private tour of our residences and experience the luxury of Bayview firsthand.
                </p>
                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-start gap-4">
                    <Phone className="h-5 w-5 md:h-6 md:w-6 text-primary shrink-0" />
                    <div>
                      <h3 className="font-medium">Sales Office</h3>
                      <p className="text-muted-foreground text-sm md:text-base">(718) 555-1234</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="h-5 w-5 md:h-6 md:w-6 text-primary shrink-0" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-muted-foreground text-sm md:text-base">info@bayviewresidences.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="h-5 w-5 md:h-6 md:w-6 text-primary shrink-0" />
                    <div>
                      <h3 className="font-medium">Sales Gallery</h3>
                      <p className="text-muted-foreground text-sm md:text-base">
                        2500 Emmons Avenue, Brooklyn, NY 11235
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="h-5 w-5 md:h-6 md:w-6 text-primary shrink-0" />
                    <div>
                      <h3 className="font-medium">Hours</h3>
                      <p className="text-muted-foreground text-sm md:text-base">Monday - Sunday: 10am - 6pm</p>
                    </div>
                  </div>
                </div>
              </div>
              <div id="contact-form" className="bg-background p-4 md:p-8 rounded-lg border">
                <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Schedule a Private Tour</h3>
                <form 
                  name="contact" 
                  method="POST" 
                  data-netlify="true" 
                  netlify-honeypot="bot-field"
                  className="space-y-3 md:space-y-4"
                >
                  {/* Hidden field for Netlify Forms */}
                  <input type="hidden" name="form-name" value="contact" />
                  
                  {/* Honeypot field to prevent spam */}
                  <div className="hidden">
                    <label>Don't fill this out if you're human: <input name="bot-field" /></label>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="first-name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        First Name
                      </label>
                      <Input id="first-name" name="first-name" placeholder="Enter your first name" required />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="last-name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Last Name
                      </label>
                      <Input id="last-name" name="last-name" placeholder="Enter your last name" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <Input id="email" name="email" type="email" placeholder="Enter your email" required />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Phone
                    </label>
                    <Input id="phone" name="phone" type="tel" placeholder="Enter your phone number" required />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="residence-type"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Residence Type
                    </label>
                    <select
                      id="residence-type"
                      name="residence-type"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      required
                    >
                      <option value="">Select a residence type</option>
                      <option value="one-bedroom">One Bedroom</option>
                      <option value="two-bedroom">Two Bedroom</option>
                      <option value="three-bedroom">Three Bedroom</option>
                      <option value="penthouse">Penthouse</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Enter your message"
                      className="min-h-[100px] md:min-h-[120px]"
                    />
                  </div>
                  <Button type="submit" className="w-full text-sm md:text-base">
                    Schedule Tour
                  </Button>
                </form>
              </div>
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
            <p className="text-xs text-muted-foreground">
              Luxury waterfront residences in Sheepshead Bay, Brooklyn. A new standard of coastal living.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-8">
            <div className="space-y-2 md:space-y-3">
              <h3 className="text-sm font-medium">Explore</h3>
              <ul className="space-y-1 md:space-y-2">
                <li>
                  <Link href="#residences" className="text-xs md:text-sm text-muted-foreground hover:text-foreground">
                    Residences
                  </Link>
                </li>
                <li>
                  <Link href="#amenities" className="text-xs md:text-sm text-muted-foreground hover:text-foreground">
                    Amenities
                  </Link>
                </li>
                <li>
                  <Link href="#neighborhood" className="text-xs md:text-sm text-muted-foreground hover:text-foreground">
                    Neighborhood
                  </Link>
                </li>
                <li>
                  <Link href="#gallery" className="text-xs md:text-sm text-muted-foreground hover:text-foreground">
                    Gallery
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2 md:space-y-3">
              <h3 className="text-sm font-medium">Contact</h3>
              <ul className="space-y-1 md:space-y-2">
                <li>
                  <Link href="#contact-form" className="text-xs md:text-sm text-muted-foreground hover:text-foreground">
                    Schedule a Tour
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-xs md:text-sm text-muted-foreground hover:text-foreground">
                    Sales Office
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-xs md:text-sm text-muted-foreground hover:text-foreground">
                    Press Inquiries
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2 md:space-y-3">
              <h3 className="text-sm font-medium">Legal</h3>
              <ul className="space-y-1 md:space-y-2">
                <li>
                  <Link href="#contact" className="text-xs md:text-sm text-muted-foreground hover:text-foreground">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-xs md:text-sm text-muted-foreground hover:text-foreground">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-xs md:text-sm text-muted-foreground hover:text-foreground">
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
              {new Date().getFullYear()} Bayview Residences. All rights reserved.
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
