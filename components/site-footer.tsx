import { GithubIcon } from "@/components/github-icon"

import { REPO_URL, SITE_NAME } from "@/lib/constants"

const footerLinks = [
  { href: "/showcase", label: "Showcase" },
  { href: "/#about", label: "About" },
  { href: "/#contribute", label: "Contribute" },
  { href: REPO_URL, label: "GitHub", external: true },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-muted/30">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-heading text-lg font-semibold tracking-tight">
            {SITE_NAME}
            <span className="text-primary">.</span>
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
            A friendly website that is managed and developed by the students. It exists to let
            students learn collaboration through building and sharing apps.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold">Explore</p>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}
                  className="transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold">Get involved</p>
          <a
            href={REPO_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <GithubIcon className="size-4" />
            cicsbalayan/digital-showcase-web
          </a>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <p>Built for learning — anyone can contribute.</p>
        </div>
      </div>
    </footer>
  )
}
