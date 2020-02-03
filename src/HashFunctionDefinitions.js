import {blake2bHex} from 'blakejs'
import md5 from 'md5'

// from https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest
function hashToHex(buffer) {
  const hexCodes = []
  const view = new DataView(buffer)

  for (let i = 0; i < view.byteLength; i += 4) {
    const value = view.getUint32(i)
    const stringValue = value.toString(16)
    const padding = '00000000'
    const paddedValue = (padding + stringValue).slice(-padding.length)
    hexCodes.push(paddedValue)
  }

  return hexCodes.join('')
}

export const hashFunctionProps = [
  {
    hashingFunctionName: "SHA-1",
    hashingFunctionAsync: (bufferToHash) => {
      return crypto.subtle.digest('SHA-1', bufferToHash).then(hash => {
        return hashToHex(hash)
      })
    }
  },
  {
    hashingFunctionName: 'SHA-256',
    hashingFunctionAsync: (buffer) => {
      return crypto.subtle.digest('SHA-256', buffer).then(hash => {
        return hashToHex(hash)
      })
    }
  },
  {
    hashingFunctionName: 'SHA-384',
    hashingFunctionAsync: function (buffer) {
      return crypto.subtle.digest('SHA-384', buffer).then(hash => {
        return hashToHex(hash)
      })
    }
  },
  {
    hashingFunctionName: 'SHA-512',
    hashingFunctionAsync: function (buffer) {
      return crypto.subtle.digest('SHA-512', buffer).then(hash => {
        return hashToHex(hash)
      })
    }
  },
  // {
  //   hashingFunctionName: 'blake2b',
  //   hashingFunctionAsync: function (buffer) {
  //     return new Promise((resolve) => {
  //       resolve(blake2bHex(buffer, null, 64))
  //     })
  //   }
  // },
  // {
  //   hashingFunctionName: 'md5',
  //   hashingFunctionAsync: function (buffer) {
  //     return new Promise((resolve) => {
  //       resolve(md5(buffer))
  //     })
  //   }
  // },
]
