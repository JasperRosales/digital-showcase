"use client"

import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"

type ScreenshotLightboxProps = {
  screenshots: string[]
  name: string
}

export function ScreenshotLightbox({ screenshots, name }: ScreenshotLightboxProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const close = useCallback(() => setActiveIndex(null), [])
  const previous = useCallback(
    () => setActiveIndex((current) => (current === null ? current : (current - 1 + screenshots.length) % screenshots.length)),
    [screenshots.length]
  )
  const next = useCallback(
    () => setActiveIndex((current) => (current === null ? current : (current + 1) % screenshots.length)),
    [screenshots.length]
  )

  useEffect(() => {
    if (activeIndex === null) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close()
      else if (event.key === "ArrowRight") next()
      else if (event.key === "ArrowLeft") previous()
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [activeIndex, close, next, previous])

  useEffect(() => {
    if (activeIndex === null) return
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = ""
    }
  }, [activeIndex])

  return (
    <>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        {screenshots.map((screenshot, index) => (
          <button
            key={screenshot}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`View screenshot ${index + 1} of ${name}`}
            className="group overflow-hidden rounded-2xl border border-border bg-muted/40 text-left transition-colors hover:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <Image
              src={screenshot}
              alt={`Screenshot of ${name}`}
              width={1280}
              height={720}
              unoptimized
              loading="lazy"
              className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </button>
        ))}
      </div>

      <AnimatePresence>
        {activeIndex !== null ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 p-4 backdrop-blur-md sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label={`${name} screenshot ${activeIndex + 1} of ${screenshots.length}`}
          >
            <motion.figure
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="relative flex h-full w-full items-center justify-center"
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={screenshots[activeIndex]}
                alt={`Screenshot of ${name}`}
                width={1280}
                height={720}
                unoptimized
                className="max-h-full max-w-full rounded-2xl border border-border/60 object-contain shadow-2xl"
              />
              <figcaption className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 text-sm text-muted-foreground">
                {activeIndex + 1} / {screenshots.length}
              </figcaption>
            </motion.figure>

            <button
              type="button"
              onClick={close}
              aria-label="Close screenshot"
              className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full bg-background/80 text-muted-foreground shadow-md backdrop-blur transition-colors hover:text-foreground"
            >
              <X className="size-5" />
            </button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
