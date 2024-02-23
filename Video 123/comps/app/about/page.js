import React from 'react'
import Script from 'next/script'

const page = () => {
    return (
        <div>
            <Script>
                {`alert("hello")`}
            </Script>
            I am about
        </div>
    )
}

export default page

export const metadata = {
    title: 'About - facebook.com',
    description: 'facebook is a social media platform',
}
