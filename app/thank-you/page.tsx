"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ThankYou() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-full bg-green-100 p-3">
                  <svg
                    className="h-8 w-8 text-green-600"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Thank You!</h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Your tour request has been submitted successfully. Our sales team will contact you shortly to confirm your appointment.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/">
                  <Button>Return to Homepage</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-muted/50">
        <div className="container flex flex-col gap-6 py-8 md:py-12 px-4 md:px-6">
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Bayview Residences. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
