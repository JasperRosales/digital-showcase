import { Navbar } from "@/components/navbar"
import { AppCard } from "@/components/app-card"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { SiteFooter } from "@/components/site-footer"
import { getApprovedApps } from "@/lib/apps"

export const metadata = {
  title: "Showcase",
  description:
    "Browse every app and project built by students — from study tools to campus utilities.",
}

export default function ShowcasePage() {
  const apps = getApprovedApps()

  return (
    <>
      <Navbar />
      <main className="mx-auto w-full max-w-6xl px-6 py-24 sm:py-32">
        <Reveal>
          <SectionHeading
            eyebrow="Showcase"
            title="Apps built by students"
            description="Every app here was designed, built, and submitted by a student. Pick one to see what it does, who it's for, and how it works."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {apps.map((app, index) => (
            <Reveal key={app.slug} delay={index * 0.06}>
              <AppCard app={app} />
            </Reveal>
          ))}
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
