'use client'

import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="p-8">
      <h2 className="text-xl font-bold">Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/" className="text-blue-500">Return Home</Link>
    </div>
  )
}
