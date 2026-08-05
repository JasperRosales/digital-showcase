import { Suspense } from "react"
import dynamic from "next/dynamic"

import { Navbar } from "@/components/navbar"
import { AppCard } from "@/components/app-card"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { getApprovedApps } from "@/lib/apps"

const SiteFooter = dynamic(() =>
  import("@/components/site-footer").then((module) => module.SiteFooter)
)

function FooterFallback() {
  return <div className="h-24" />
}

export const metadata = {
  title: "Showcase",
  description:
    "Browse every app and project built by students — from study tools to campus utilities.",
}

export default function ShowcasePage() {
  const apps = getApprovedApps()
  const builders = new Set(apps.map((app) => app.author)).size

  const stats = [
    { value: apps.length, label: "apps live" },
    { value: builders, label: "student builders" },
  ]

  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:56px_56px] opacity-30 [mask-image:radial-gradient(ellipse_65%_55%_at_50%_0%,#000_50%,transparent_100%)]" />
          <div className="absolute -top-40 left-1/2 h-96 w-[48rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -right-32 top-40 h-80 w-80 rounded-full bg-violet-400/10 blur-3xl" />
        </div>

        <div className="mx-auto w-full max-w-6xl px-6 pb-24 pt-24 sm:pt-32">
          <Reveal>
            <SectionHeading
              eyebrow="Showcase"
              title="Apps built by students"
              description="Every app here was designed, built, and submitted by a student. Pick one to see what it does, who it's for, and how it works."
            />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10 flex justify-center">
              <div className="inline-flex flex-wrap items-center justify-center divide-x divide-border rounded-full border border-border bg-background/60 px-1 py-1 backdrop-blur">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex items-baseline gap-2 px-5 py-2">
                    <span className="font-heading text-xl font-semibold tabular-nums text-primary">
                      {stat.value}
                    </span>
                    <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {apps.map((app, index) => (
              <Reveal key={app.slug} delay={index * 0.06} className="h-full">
                <AppCard app={app} />
              </Reveal>
            ))}
          </div>
        </div>
      </main>
      <Suspense fallback={<FooterFallback />}>
        <SiteFooter />
      </Suspense>
    </>
  )
}
