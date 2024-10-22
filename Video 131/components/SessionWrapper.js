"use client"
import { SessionProvider } from "next-auth/react"

export default function SessionWrapper({children}) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}