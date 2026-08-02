import { Terminal } from "lucide-react"

type Step = {
  title: string
  description: string
  commands: string[]
}

const steps: Step[] = [
  {
    title: "Install Git and introduce yourself",
    description:
      "Install Git (git-scm.com), then set your name and email once. GitHub connects your commits to your account through this.",
    commands: [
      'git config --global user.name "Juan Dela Cruz"',
      'git config --global user.email "juandelacruz@email.com"',
    ],
  },
  {
    title: "Fork the repo and clone it",
    description:
      "On the repository page, click Fork to copy it to your account. Then download your copy to your computer.",
    commands: [
      "git clone https://github.com/<your-username>/digital-showcase-web.git",
      "cd digital-showcase-web",
    ],
  },
  {
    title: "Link upstream and make a branch",
    description:
      "Add the original repo as 'upstream' so you can pull fresh changes, then create a branch for your app.",
    commands: [
      "git remote add upstream https://github.com/cicsbalayan/digital-showcase-web.git",
      "git checkout -b add-attendance-tracker",
    ],
  },
  {
    title: "Add your app and stage the files",
    description:
      "Edit data/apps.json and put your images in public/images/apps/attendance-tracker/. Then check what changed and stage those files.",
    commands: [
      "git status",
      "git add data/apps.json public/images/apps/attendance-tracker/",
    ],
  },
  {
    title: "Commit your work",
    description: "Save a snapshot of your changes with a short, clear message.",
    commands: ['git commit -m "Add Attendance Tracker app"'],
  },
  {
    title: "Push to GitHub and open a pull request",
    description:
      "Upload your branch to your fork, then on GitHub click 'Compare & pull request' to create your PR.",
    commands: ["git push -u origin add-attendance-tracker"],
  },
]

function TerminalBlock({ commands }: { commands: string[] }) {
  return (
    <pre className="overflow-x-auto rounded-xl border border-white/10 bg-zinc-950 p-4 text-[13px] leading-6 shadow-inner">
      <code>
        {commands.map((command, index) => (
          <div key={index} className="whitespace-pre">
            <span className="select-none text-emerald-300">$ </span>
            <span className="text-zinc-200">{command}</span>
          </div>
        ))}
      </code>
    </pre>
  )
}

export function GitGuide() {
  return (
    <div className="mt-8 overflow-hidden rounded-3xl border border-border bg-background">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border bg-muted/40 px-6 py-4 sm:px-8">
        <div className="flex items-center gap-2.5">
          <span className="flex size-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Terminal className="size-4" />
          </span>
          <p className="font-heading text-base font-semibold">Git commands, from clone to push</p>
        </div>
        <span className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
          Beginner friendly
        </span>
      </div>

      <div className="p-6 sm:p-8">
        <ol>
          {steps.map((step, index) => (
            <li key={step.title} className="relative flex gap-5 pb-8 last:pb-0">
              <div className="flex flex-col items-center">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-border bg-muted font-heading text-sm font-semibold">
                  {index + 1}
                </span>
                {index < steps.length - 1 ? (
                  <span aria-hidden className="mt-2 w-px flex-1 bg-border" />
                ) : null}
              </div>
              <div className="min-w-0 flex-1 pb-2">
                <h3 className="font-heading text-base font-semibold">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
                <div className="mt-3">
                  <TerminalBlock commands={step.commands} />
                </div>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-6 rounded-xl border border-primary/20 bg-primary/5 px-4 py-3 text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">Tip:</span> to grab the latest changes
          later, run <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">git pull upstream main</code>.
        </div>
      </div>
    </div>
  )
}
