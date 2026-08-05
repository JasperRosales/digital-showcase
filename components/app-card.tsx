import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, Globe } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { App } from "@/lib/apps"

export function AppCard({ app }: { app: App }) {
  return (
    <div className="group relative flex h-full flex-col">
      <div
        aria-hidden
        className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary/25 via-transparent to-violet-400/25 opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-100"
      />
      <Card className="relative h-full border-border/70 bg-card/70 backdrop-blur transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary/40 group-hover:shadow-xl group-hover:shadow-primary/10">
        <CardContent className="flex h-full flex-col">
          <Link href={`/showcase/${app.slug}`} className="group/link flex h-full flex-col">
            <div className="flex items-start justify-between">
              <Image
                src={app.icon}
                alt={`${app.name} icon`}
                width={48}
                height={48}
                unoptimized
                loading="lazy"
                className="size-12 rounded-xl shadow-md transition-transform duration-300 group-hover/link:scale-105 group-hover/link:rotate-3"
              />
              <ArrowUpRight className="size-4 text-muted-foreground/40 transition-all duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 group-hover/link:text-primary" />
            </div>
            <h3 className="mt-4 font-heading text-lg font-semibold transition-colors group-hover/link:text-primary">
              {app.name}
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{app.tagline}</p>
          </Link>

          <div className="mt-auto flex items-center justify-between gap-3 border-t border-border/70 pt-4">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground/70">
              by {app.author}
            </p>
            {app.url ? (
              <a
                href={app.url}
                target="_blank"
                rel="noreferrer"
                className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "rounded-full text-xs")}
              >
                <Globe className="size-3.5" />
                Open app
              </a>
            ) : null}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
