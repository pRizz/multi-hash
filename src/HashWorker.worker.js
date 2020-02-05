import {hashFunctionProps} from './HashFunctionDefinitions'

const jobQueue = []
let currentJob = null

function notifyJobQueueLengthChanged() {
  self.postMessage({
    jobQueueCount: jobQueue.length + (currentJob && 1 || 0)
  })
}

function pushJob(messageData) {
  jobQueue.push(messageData)
  notifyJobQueueLengthChanged()
  if(!currentJob) {
    dequeueJob()
  }
}

function executeJobAsync(job) {
  const {hashDefinitionIndex, bufferToHash, hashingFunctionName} = job
  const hashFunctionProp = hashFunctionProps[hashDefinitionIndex]
  const hashingFunctionAsync = hashFunctionProp.hashingFunctionAsync
  const hashingStartDate = performance.now()

  hashingFunctionAsync(bufferToHash).then((hash) => {
    const hashingEndDate = performance.now()
    const hashDuration = hashingEndDate - hashingStartDate

    self.postMessage({hash, bufferToHash, hashingFunctionName, hashDuration})
    currentJob = null
    notifyJobQueueLengthChanged()
    dequeueJob()
  })
}

function dequeueJob() {
  if(jobQueue.length === 0) {
    notifyJobQueueLengthChanged()
    return
  }
  currentJob = jobQueue.splice(0, 1)[0]
  executeJobAsync(currentJob)
}

function getRandomByte() {
  return Math.floor(256 * Math.random())
}

function generateRandomData(byteCount) {
  return Buffer.alloc(byteCount).map(getRandomByte)
}

function handleGetRandomData(opts) {
  const {byteCount} = opts
  postMessage({
    type: 'onRandomData',
    opts: {
      byteCount,
      buffer: generateRandomData(byteCount)
    }
  })
}

self.addEventListener('message', (e) => {
  if(e.data.type === 'onGetRandomData') {
    return handleGetRandomData(e.data.opts)
  }
  pushJob(e.data)
})
