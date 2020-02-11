import {blake2bHex} from 'blakejs'
import md5 from 'md5'
import multihashing from 'multihashing-async'

function multihashingBufferToArrayBuffer(multihashingBuffer) {
  const arrayBuffer = new ArrayBuffer(multihashingBuffer.length)
  const uint8Array = new Uint8Array(arrayBuffer)
  multihashingBuffer.copy(uint8Array)
  return arrayBuffer
}

const multihashingFunctionNames = [
  'sha1',
  'sha2-256',
  'sha2-512',
  'dbl-sha2-256',
  'sha3-224',
  'sha3-256',
  'sha3-384',
  'sha3-512',
  'shake-128',
  'shake-256',
  'keccak-224',
  'keccak-256',
  'keccak-384',
  'keccak-512',
  'murmur3-128',
  'murmur3-32',
]

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
    hashingFunctionName: "SHA-1 (window.crypto)",
    hashingFunctionAsync: (bufferToHash) => {
      return crypto.subtle.digest('SHA-1', bufferToHash).then(hash => {
        return hashToHex(hash)
      })
    }
  },
  {
    hashingFunctionName: 'SHA-256 (window.crypto)',
    hashingFunctionAsync: (buffer) => {
      return crypto.subtle.digest('SHA-256', buffer).then(hash => {
        return hashToHex(hash)
      })
    }
  },
  {
    hashingFunctionName: 'SHA-384 (window.crypto)',
    hashingFunctionAsync: function (buffer) {
      return crypto.subtle.digest('SHA-384', buffer).then(hash => {
        return hashToHex(hash)
      })
    }
  },
  {
    hashingFunctionName: 'SHA-512 (window.crypto)',
    hashingFunctionAsync: function (buffer) {
      return crypto.subtle.digest('SHA-512', buffer).then(hash => {
        return hashToHex(hash)
      })
    }
  },
  ...multihashingFunctionNames.map((hashingFunctionName) => {
    return {
      hashingFunctionName: `${hashingFunctionName} (multihashing)`,
      hashingFunctionAsync: async function (buffer) {
        return hashToHex (multihashingBufferToArrayBuffer(await multihashing.digest(buffer, hashingFunctionName)))
      }
    }
  })
]
