"use client"

import { useState, Fragment } from 'react'

import { generateAESKey } from "../aes"
import { generateRSAKey } from '../rsa'

export default function Page() {
  const [aesKey, setAESKey] = useState('')
  const [rasKey, setRSAKey] = useState('')
  const onAesGenerate = () => {
    generateAESKey().then(setAESKey, console.error)
  }
  const onRsaGenerate = () => {
    setRSAKey(generateRSAKey())
  }

  return (
    <Fragment>
      <header>
      </header>
      <section>
        <button type='button' onClick={onAesGenerate}>Generate AES 256 key</button>
        <output name="AES 256 key">{aesKey}</output>
      </section>
      <section>
        <button type='button' onClick={onRsaGenerate}>Generate RSA key</button>
        <output name="RSA key">{rasKey}</output>
      </section>
    </Fragment>
  )
}
