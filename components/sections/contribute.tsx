import { ArrowRight, BookOpenText, FolderGit2, GitPullRequest, Share2, Sparkles } from "lucide-react"

import { GitGuide } from "@/components/git-guide"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { REPO_URL } from "@/lib/constants"

const steps = [
  {
    icon: BookOpenText,
    title: "Pick a task",
    description:
      "Browse the issues and README to find something to work on — from adding your own app to fixing a typo.",
  },
  {
    icon: FolderGit2,
    title: "Add your app",
    description:
      "Add an entry to data/apps.json with your app's details, then drop 1–2 screenshots into public/images/apps/.",
  },
  {
    icon: GitPullRequest,
    title: "Open a pull request",
    description:
      "Commit your changes, push to your fork, and open a pull request describing what you added.",
  },
  {
    icon: Share2,
    title: "Go live",
    description:
      "An admin reviews your PR, merges it, and your app appears in the showcase for everyone to see.",
  },
]

const folderTree = (
  <pre className="overflow-x-auto text-[13px] leading-6">
    <code>
      <span className="text-zinc-500"># your fork</span>
      {"\n"}
      <span className="text-sky-300">digital-showcase-web/</span>
      {"\n"}
      <span className="text-zinc-600">├── </span>
      <span className="text-sky-300">data/</span>
      {"\n"}
      <span className="text-zinc-600">│&nbsp;&nbsp;&nbsp;└── </span>
      <span className="text-emerald-300">apps.json</span>
      <span className="text-zinc-500">  &lt;-- add your entry</span>
      {"\n"}
      <span className="text-zinc-600">└── </span>
      <span className="text-sky-300">public/</span>
      {"\n"}
      <span className="text-zinc-600">&nbsp;&nbsp;&nbsp;&nbsp;└── </span>
      <span className="text-sky-300">images/apps/</span>
      {"\n"}
      <span className="text-zinc-600">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── </span>
      <span className="text-sky-300">attendance-tracker/</span>
      {"\n"}
      <span className="text-zinc-600">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── </span>
      <span className="text-emerald-300">icon.svg</span>
      <span className="text-zinc-500">  &lt;-- app icon</span>
      {"\n"}
      <span className="text-zinc-600">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── </span>
      <span className="text-emerald-300">home.svg</span>
      <span className="text-zinc-500">  &lt;-- screenshots</span>
    </code>
  </pre>
)

const exampleJson = (
  <pre className="overflow-x-auto text-[13px] leading-6">
    <code className="text-zinc-200">
      <span className="text-zinc-400">{"{"}</span>
      {"\n  "}
      <span className="text-sky-300">&quot;slug&quot;</span>
      <span className="text-zinc-400">: </span>
      <span className="text-emerald-300">&quot;attendance-tracker&quot;</span>
      <span className="text-zinc-400">,</span>
      {"\n  "}
      <span className="text-sky-300">&quot;name&quot;</span>
      <span className="text-zinc-400">: </span>
      <span className="text-emerald-300">&quot;Attendance Tracker&quot;</span>
      <span className="text-zinc-400">,</span>
      {"\n  "}
      <span className="text-sky-300">&quot;tagline&quot;</span>
      <span className="text-zinc-400">: </span>
      <span className="text-emerald-300">&quot;Record and report class attendance in a tap.&quot;</span>
      <span className="text-zinc-400">,</span>
      {"\n  "}
      <span className="text-sky-300">&quot;purpose&quot;</span>
      <span className="text-zinc-400">: </span>
      <span className="text-emerald-300">&quot;Make attendance tracking fast for officers.&quot;</span>
      <span className="text-zinc-400">,</span>
      {"\n  "}
      <span className="text-sky-300">&quot;target&quot;</span>
      <span className="text-zinc-400">: </span>
      <span className="text-emerald-300">&quot;Class officers and org secretaries.&quot;</span>
      <span className="text-zinc-400">,</span>
      {"\n  "}
      <span className="text-sky-300">&quot;howItWorks&quot;</span>
      <span className="text-zinc-400">: </span>
      <span className="text-emerald-300">&quot;Mark students present, export the list, done.&quot;</span>
      <span className="text-zinc-400">,</span>
      {"\n  "}
      <span className="text-sky-300">&quot;icon&quot;</span>
      <span className="text-zinc-400">: </span>
      <span className="text-emerald-300">&quot;/images/apps/attendance-tracker/icon.svg&quot;</span>
      <span className="text-zinc-400">,</span>
      {"\n  "}
      <span className="text-sky-300">&quot;screenshots&quot;</span>
      <span className="text-zinc-400">: [</span>
      <span className="text-emerald-300">&quot;/images/apps/attendance-tracker/home.svg&quot;</span>
      <span className="text-zinc-400">],</span>
      {"\n  "}
      <span className="text-sky-300">&quot;author&quot;</span>
      <span className="text-zinc-400">: </span>
      <span className="text-emerald-300">&quot;You!&quot;</span>
      <span className="text-zinc-400">,</span>
      {"\n  "}
      <span className="text-sky-300">&quot;status&quot;</span>
      <span className="text-zinc-400">: </span>
      <span className="text-amber-300">&quot;submitted&quot;</span>
      {"\n"}
      <span className="text-zinc-400">{"}"}</span>
    </code>
  </pre>
)

export function ContributeSection() {
  return (
    <section id="contribute" className="border-t border-border/60 bg-muted/30 py-24 sm:py-32">
      <div className="mx-auto w-full max-w-6xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="How to contribute"
            title="Get your project on the site"
            description="Contributing is easier than you think. Follow the steps below and your first pull request will be up before you know it."
          />
        </Reveal>

        <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.08}>
              <li className="relative h-full rounded-2xl border border-border bg-background p-6">
                <div className="flex items-center justify-between">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <step.icon className="size-5" />
                  </div>
                  <span className="font-heading text-4xl font-semibold text-muted-foreground/25">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-5 font-heading text-base font-semibold">{step.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={0.1}>
          <div className="mt-16 overflow-hidden rounded-3xl border border-border bg-background">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border bg-muted/40 px-6 py-4 sm:px-8">
              <div className="flex items-center gap-2.5">
                <span className="flex size-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Sparkles className="size-4" />
                </span>
                <p className="font-heading text-base font-semibold">A real example, step by step</p>
              </div>
              <span className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
                Adding &quot;Attendance Tracker&quot;
              </span>
            </div>

            <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-2">
              <div>
                <p className="text-sm font-semibold">1 · Put your icon and pictures in the right place</p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  Create a folder for your app with an icon.svg (square) and your screenshots. The
                  JSON points to them by path.
                </p>
                <div className="mt-4 rounded-2xl border border-white/10 bg-zinc-950 p-4 shadow-inner">
                  {folderTree}
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold">2 · Describe your app in data/apps.json</p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  Copy this entry, replace the values with your own app&apos;s info, and paste it
                  into the &quot;apps&quot; array.
                </p>
                <div className="mt-4 rounded-2xl border border-white/10 bg-zinc-950 p-4 shadow-inner">
                  {exampleJson}
                </div>
              </div>
            </div>

            <div className="border-t border-border bg-muted/40 px-6 py-5 sm:px-8">
              <p className="text-sm text-muted-foreground">
                3 · Commit, push, and open a pull request — an admin will review and merge it. Your
                app then appears on the Showcase page automatically.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <GitGuide />
        </Reveal>

        <Reveal delay={0.15} className="mt-14 flex flex-col items-center gap-3 text-center">
          <a
            href={REPO_URL}
            target="_blank"
            rel="noreferrer"
            className={cn(buttonVariants({ size: "lg" }), "rounded-full px-6")}
          >
            Go to the repository
            <ArrowRight />
          </a>
          <p className="text-sm text-muted-foreground">
            First time? Read the README for a full walkthrough.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
