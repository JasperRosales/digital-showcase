import rawApps from "@/data/apps.json"

export type AppStatus = "draft" | "submitted" | "approved" | "rejected"

export type App = {
  slug: string
  name: string
  tagline: string
  description: string
  purpose: string
  target: string
  howItWorks: string
  icon: string
  screenshots: string[]
  github?: string
  author: string
  status: AppStatus
  createdAt: string
}

export const apps: App[] = rawApps.apps as App[]

export function getApprovedApps(): App[] {
  return apps.filter((app) => app.status === "approved")
}

export function getAppBySlug(slug: string): App | undefined {
  return apps.find((app) => app.slug === slug)
}
