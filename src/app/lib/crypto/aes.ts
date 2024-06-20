/**
 *
 * @returns
 */
export const generateAESKey = async (): Promise<string> => {
  const key = await globalThis.crypto.subtle.generateKey(
    {
      name: 'AES-CBC',
      length: 256,
    },
    true,
    ['encrypt']
  )
  const buffer = await crypto.subtle.exportKey('raw', key)
  const view = new DataView(buffer)
  let result = ''

  for (let i = 0; i < view.byteLength; i++) {
    result += view.getUint8(i).toString(16).toUpperCase().padStart(2, '0')
  }

  return result
}
