"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

interface MobileNavProps {
  isHomePage?: boolean
}

export function MobileNav({ isHomePage = false }: MobileNavProps) {
  const [open, setOpen] = useState(false)

  const baseLinks = [
    { href: isHomePage ? "#residences" : "/#residences", label: "Residences" },
    { href: isHomePage ? "#amenities" : "/#amenities", label: "Amenities" },
    { href: isHomePage ? "#neighborhood" : "/#neighborhood", label: "Neighborhood" },
    { href: "/floor-plans", label: "Floor Plans" },
    { href: isHomePage ? "#gallery" : "/#gallery", label: "Gallery" },
    { href: isHomePage ? "#contact" : "/#contact", label: "Contact" },
  ]

  // Add neighborhood-specific link if we're on the neighborhood page
  const links = isHomePage
    ? baseLinks
    : baseLinks.map((link) => (link.label === "Neighborhood" ? { ...link, href: "/neighborhood#overview" } : link))

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="md:hidden p-2">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col gap-4 mt-8">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-lg font-medium transition-colors hover:text-primary py-2 border-b border-muted"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild className="mt-4">
            <Link href={isHomePage ? "#contact" : "/#contact"} onClick={() => setOpen(false)}>
              Schedule a Tour
            </Link>
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

