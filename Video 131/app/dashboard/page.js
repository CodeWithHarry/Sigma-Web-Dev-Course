
'use client'
import React, { useEffect } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'
import Dashboard from '@/components/Dashboard.js'

const DashboardPage = () => {
    const { data: session } = useSession()
    const router = useRouter()
    useEffect(() => {
        if (!session) {
            router.push('/login')
        }
    }, [session, router])
    return (
        <div>
            <Dashboard />
        </div>
    )
}

export default DashboardPage

