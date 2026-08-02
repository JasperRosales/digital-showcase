import { Navbar } from "@/components/navbar"
import { AboutSection } from "@/components/sections/about"
import { ContributeSection } from "@/components/sections/contribute"
import { Hero } from "@/components/sections/hero"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <ContributeSection />
      </main>
      <SiteFooter />
    </>
  )
}
