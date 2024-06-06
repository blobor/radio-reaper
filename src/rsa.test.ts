import { describe, it, expect } from 'vitest'
import { generateRSAKey } from './rsa'

describe('generateRSAKey', () => {
  it('should generate by default with 24 chars size', () => {
    const key = generateRSAKey()

    expect(key).toHaveLength(24)
  })

  it('should generate valid key', () => {
    const key = generateRSAKey()

    const reserved = new Set(
      ['-', '_', '$', '#'].map(c => c.charCodeAt(0))
    )

    for (let i = 0; i < key.length; i++) {
      const char = key.charCodeAt(i)

      // Should contain upper case characters
      // Between A (65) to Z (90) char
      if (char >= 65 && char <= 90) {
        continue
      }

      // Should contain lower case characters
      // Between a (97) to z (122) char
      if (char >= 97 && char <= 122) {
        continue
      }

      // Should contain only numbers
      // Between 0 (48) and 9 (57)
      if (char >= 48 && char <= 57) {
        continue
      }

      // Special characters
      if (reserved.has(char)) {
        continue
      }

      expect.fail(`found unsupported char "${key[i]}" in "${key}" at ${i}-index`)
    }
  })
})
