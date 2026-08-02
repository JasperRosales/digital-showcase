import { GraduationCap, GitFork, Rocket, ShieldCheck } from "lucide-react"

import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"

const features = [
  {
    icon: GraduationCap,
    title: "Built by students",
    description:
      "A friendly website managed and developed by the students, for the students — a real project to grow together.",
  },
  {
    icon: GitFork,
    title: "Learn Git & GitHub",
    description:
      "Fork, clone, commit, push, and open pull requests. Every contribution is real practice you can put on your portfolio.",
  },
  {
    icon: Rocket,
    title: "Showcase your work",
    description:
      "Add your apps and projects with pictures, a purpose, who it's for, and how it works. See your work deployed live.",
  },
  {
    icon: ShieldCheck,
    title: "Community reviewed",
    description:
      "Admins review every contribution before it goes live, keeping the site safe, respectful, and spam-free.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="border-t border-border/60 py-24 sm:py-32">
      <div className="mx-auto w-full max-w-6xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="A showcase run by students"
            description="The project is a static showcase of achievements, announcements, and apps — but more than that, it's a classroom. Anyone who contributes learns real collaboration skills that translate directly to open source and future careers."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 0.08}>
              <Card className="h-full">
                <CardContent>
                  <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <feature.icon className="size-5" />
                  </div>
                  <CardTitle className="mt-5 font-heading">{feature.title}</CardTitle>
                  <CardDescription className="mt-2 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
