import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import type { App } from "@/lib/apps"

export function AppCard({ app }: { app: App }) {
  return (
    <Link href={`/showcase/${app.slug}`} className="group block h-full">
      <Card className="h-full transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary/50 group-hover:shadow-lg group-hover:shadow-primary/5">
        <CardContent>
          <div className="flex items-start justify-between">
            <Image
              src={app.icon}
              alt={`${app.name} icon`}
              width={48}
              height={48}
              unoptimized
              className="size-12 rounded-xl shadow-md transition-transform duration-300 group-hover:scale-105"
            />
            <ArrowUpRight className="size-4 text-muted-foreground/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
          </div>
          <h3 className="mt-4 font-heading text-lg font-semibold group-hover:text-primary">
            {app.name}
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{app.tagline}</p>
          <p className="mt-4 text-xs font-medium uppercase tracking-wider text-muted-foreground/70">
            by {app.author}
          </p>
        </CardContent>
      </Card>
    </Link>
  )
}
