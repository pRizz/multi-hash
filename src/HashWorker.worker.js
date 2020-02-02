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

self.addEventListener('message', (e) => {
  pushJob(e.data)
})
