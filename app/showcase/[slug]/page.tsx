import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft, ExternalLink, Info, ListChecks, Target, Users } from "lucide-react"

import { GithubIcon } from "@/components/github-icon"
import { Navbar } from "@/components/navbar"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { buttonVariants } from "@/components/ui/button"
import { SiteFooter } from "@/components/site-footer"
import { cn } from "@/lib/utils"
import { apps, getAppBySlug } from "@/lib/apps"

export function generateStaticParams() {
  return apps.map((app) => ({ slug: app.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const app = getAppBySlug(slug)
  if (!app) return {}

  return {
    title: app.name,
    description: app.tagline,
  }
}

export default async function AppDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const app = getAppBySlug(slug)

  if (!app) {
    notFound()
  }

  const details = [
    {
      icon: Target,
      title: "Purpose",
      description: app.purpose,
    },
    {
      icon: Users,
      title: "Who it's for",
      description: app.target,
    },
    {
      icon: ListChecks,
      title: "How it works",
      description: app.howItWorks,
    },
  ]

  return (
    <>
      <Navbar />
      <main className="mx-auto w-full max-w-4xl px-6 py-16 sm:py-24">
        <Link
          href="/showcase"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          Back to showcase
        </Link>

        <header className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-start gap-5">
            <Image
              src={app.icon}
              alt={`${app.name} icon`}
              width={64}
              height={64}
              unoptimized
              className="size-16 shrink-0 rounded-2xl shadow-md"
            />
            <div>
              <h1 className="font-heading text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                {app.name}
              </h1>
              <p className="mt-2 text-base text-muted-foreground">{app.tagline}</p>
              <p className="mt-3 text-sm text-muted-foreground/80">
                by <span className="font-medium text-foreground">{app.author}</span>
              </p>
            </div>
          </div>

          {app.github ? (
            <a
              href={app.github}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: "outline" }), "shrink-0")}
            >
              <GithubIcon />
              Source
              <ExternalLink />
            </a>
          ) : null}
        </header>

        <section className="mt-12">
          <Card>
            <CardContent>
              <div className="flex items-center gap-2.5">
                <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Info className="size-4" />
                </div>
                <CardTitle className="font-heading">About</CardTitle>
              </div>
              <CardDescription className="mt-3 leading-relaxed">
                {app.description}
              </CardDescription>
            </CardContent>
          </Card>
        </section>

        <section className="mt-6 grid gap-5 sm:grid-cols-2">
          {details.map((detail) => (
            <Card key={detail.title} className={detail.title === "How it works" ? "sm:col-span-2" : ""}>
              <CardContent>
                <div className="flex items-center gap-2.5">
                  <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <detail.icon className="size-4" />
                  </div>
                  <CardTitle className="font-heading">{detail.title}</CardTitle>
                </div>
                <CardDescription className="mt-3 leading-relaxed">
                  {detail.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </section>

        {app.screenshots.length > 0 ? (
          <section className="mt-16">
            <h2 className="font-heading text-2xl font-semibold tracking-tight">Screenshots</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {app.screenshots.map((screenshot) => (
                <div
                  key={screenshot}
                  className="overflow-hidden rounded-2xl border border-border bg-muted/40"
                >
                  <Image
                    src={screenshot}
                    alt={`Screenshot of ${app.name}`}
                    width={1280}
                    height={720}
                    unoptimized
                    className="aspect-video w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </section>
        ) : null}
      </main>
      <SiteFooter />
    </>
  )
}
