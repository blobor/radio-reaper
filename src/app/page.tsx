"use client"

import { useEffect, useState } from 'react'

import { generateAESKey } from "../aes"

export default function Page() {
  const [key, setKey] = useState('')
  useEffect(() => {
    generateAESKey().then(setKey, console.error)
  }, [])

  return <h1>{key}</h1>
}
