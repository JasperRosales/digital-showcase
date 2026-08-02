"use client"

import { motion, type Variants } from "motion/react"
import { ArrowRight } from "lucide-react"

import { GithubIcon } from "@/components/github-icon"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { REPO_URL } from "@/lib/constants"

const techStack = ["Next.js", "shadcn/ui", "Tailwind CSS", "Vercel"]

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] } },
}

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Decorative background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:56px_56px] opacity-40 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_60%,transparent_100%)]" />
        <motion.div
          aria-hidden
          className="absolute -top-32 left-1/2 h-[28rem] w-[40rem] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-6 pb-24 pt-28 text-center sm:pt-36">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.a
            variants={item}
            href={REPO_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3.5 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur transition-colors hover:text-foreground"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            Open to all students — start contributing
          </motion.a>

          <motion.h1
            variants={item}
            className="mx-auto mt-8 max-w-3xl font-heading text-4xl font-semibold tracking-tight text-balance sm:text-6xl"
          >
            Showcase your apps.
            <br />
            <span className="bg-gradient-to-r from-primary via-sky-400 to-violet-400 bg-clip-text text-transparent">
              Learn to ship.
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg"
          >
            {`ALIANCICS is a student-run digital showcase of applications, projects, and
            achievements. Contribute your own app, practice Git and GitHub for real, and watch
            your work go live.`}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-wrap items-center justify-center gap-3"
          >
            <a
              href="#contribute"
              className={cn(buttonVariants({ size: "lg" }), "rounded-full px-6")}
            >
              Start contributing
              <ArrowRight />
            </a>
            <a
              href={REPO_URL}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "rounded-full px-6")}
            >
              <GithubIcon />
              View the repo
            </a>
          </motion.div>

          <motion.ul
            variants={item}
            className="mt-12 flex flex-wrap items-center justify-center gap-2"
          >
            {techStack.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground"
              >
                {tech}
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  )
}
