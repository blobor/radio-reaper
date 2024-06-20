const validChars = '2BnX4wUjxWbpe3koI#6FiRmgVH1hQlu8YvdyDLMr$EASOcta-KJ7T5fqZsz_NG90PC'

/**
 * generateRSA - generates a unique key for RSA
 *
 * Restricted Access to System (RSA) Authentication Key is 6-24 unicode
 * characters including 0-9, A-Z, a-z, hyphen’-‘, underscore’_’, dollar ‘$’ and pound ‘#’.
 */
export const generateRSAKey = (size: number = 24): string => {
  let key = ''
  const b = crypto.getRandomValues(new Uint8Array(size))

  for (let i = 0; i < b.length; i++) {
    key += validChars[b[i] % validChars.length]
  }

  return key
}
