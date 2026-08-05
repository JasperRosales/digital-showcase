import { Suspense } from "react"
import dynamic from "next/dynamic"

import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/sections/hero"

const AboutSection = dynamic(() =>
  import("@/components/sections/about").then((module) => module.AboutSection)
)

const ContributeSection = dynamic(() =>
  import("@/components/sections/contribute").then((module) => module.ContributeSection)
)

const SiteFooter = dynamic(() =>
  import("@/components/site-footer").then((module) => module.SiteFooter)
)

function SectionFallback() {
  return <div className="h-64" />
}

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <AboutSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <ContributeSection />
        </Suspense>
      </main>
      <Suspense fallback={<SectionFallback />}>
        <SiteFooter />
      </Suspense>
    </>
  )
}
