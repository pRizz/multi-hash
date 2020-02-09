

// https://en.wikipedia.org/wiki/Orders_of_magnitude_(data)
// [1000^value, prefix]
const byteFormatterList = [
  [8, 'Y'],
  [7, 'Z'],
  [6, 'E'],
  [5, 'P'],
  [4, 'T'],
  [3, 'G'],
  [2, 'M'],
  [1, 'k'],
].map((byteArgs) => {
  return {
    minValue: Math.pow(1000, byteArgs[0]),
    prefix: byteArgs[1]
  }
})

// https://en.wikipedia.org/wiki/Orders_of_magnitude_(data)
// converts the input (number of bytes) to a human readable number, like 500 bytes or 3.5 MB
export function formatBytes(numberOfBytes) {
  for (const byteFormat of byteFormatterList) {
    if (numberOfBytes >= byteFormat.minValue) {
      return `${(numberOfBytes / byteFormat.minValue).toLocaleString(undefined, {
        maximumFractionDigits: 3
      })} ${byteFormat.prefix}B`
    }
  }
  return `${numberOfBytes} bytes`
}
