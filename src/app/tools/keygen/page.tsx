"use client"

import './styles.css'

import { useState } from 'react'

import { generateAESKey } from '../../lib/crypto/aes'
import { generateRSAKey } from '../../lib/crypto/rsa'

const KeygenPage = () => {
    const [aesKey, setAESKey] = useState('')
    const [rasKey, setRSAKey] = useState('')
    const onAesGenerate = () => {
        generateAESKey().then(setAESKey, console.error)
    }
    const onRsaGenerate = () => {
        setRSAKey(generateRSAKey())
    }

    return (
        <>
            <section className='keygen__container'>
                <button type='button' onClick={onAesGenerate}>Generate AES 256 key</button>
                <output name="AES 256 key">{aesKey}</output>
            </section>
            <section className='keygen__container'>
                <button type='button' onClick={onRsaGenerate}>Generate RSA key</button>
                <output name="RSA key">{rasKey}</output>
            </section>
        </>
    )
}

export default KeygenPage
