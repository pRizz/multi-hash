onmessage = function(e) {
  console.log('Worker: Message received from main script');
  const {hashFunction, bufferToHash, hashingFunctionName} = e.data
  hashFunction().then((hash) => {
    postMessage({hash, bufferToHash, hashingFunctionName})
  })
}
