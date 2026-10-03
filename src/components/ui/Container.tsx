import type { ReactNode } from "react"

export type ContainerProps = { children: ReactNode; className?: string }

export function Container({ children, className = "" }: ContainerProps) {
  return <div className={`mx-auto max-w-7xl px-margin-mobile lg:px-margin ${className}`}>{children}</div>
}
