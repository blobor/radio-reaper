import { describe, it, expect } from 'vitest'
import { generateAESKey } from './aes'

describe('generateAesKey', () => {
  it('should generate random string with 64 char length', async () => {
    const key = await generateAESKey()

    expect(key).toHaveLength(64)
  })

  it('should generate valid AES256 key', async () => {
    const key = await generateAESKey()

    for (let i = 0; i < key.length; i++) {
      const char = key.charCodeAt(i)

      // Should contain only upper case characters
      // Between A (65) to Z (90) char
      if (char >= 65 && char <= 90) {
        continue
      }

      // Should contain only numbers
      // Between 0 (48) and 9 (57)
      if (char >= 48 && char <= 57) {
        continue
      }

      expect.fail(`found unsupported char "${key[i]}" in "${key}" at ${i}-index`)
    }
  })
})
