import React, {useState, useEffect, useRef} from 'react'

const HomePage = (props) => {
  
  const {setAudioStream, setFile} = props

  const [recordingStatus, setRecordingStatus] = useState('inactive')
  const [audioChunks, setAudioChunks] = useState([])
  const [duration, setDuration] = useState(0)

  const mediaRecorder = useRef(null)

  const mimeType = 'audio/webm'

  async function startRecording(){
    let tempStream
    console.log('Start Recording')

    try{
      const streamData = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: false
      })
      tempStream = streamData
    }catch(err){
      console.log(err.message)
      return
    }
    setRecordingStatus('recording')

    const media = new MediaRecorder(tempStream,{type: mimeType})
    mediaRecorder.current = media

    mediaRecorder.current.start()

    let localAudioChunks = []

    mediaRecorder.current.ondataavailable = (event) => {
      if(event.data === 'undefined'){return}
      if(event.data.size === 0){return}
      localAudioChunks.push(event.data)
    }
    setAudioChunks(localAudioChunks)
  }

  async function stopRecording() {
    setRecordingStatus('inactive')
    console.log('Stop recording')

    mediaRecorder.current.stop()
    mediaRecorder.current.onstop = (event) => {
      const audioBlob = new Blob(audioChunks,{type: mimeType})
      setAudioStream(audioBlob)
      setAudioChunks([])
    }
  }

  useEffect(() => {
    if(recordingStatus === 'inactive'){return}

    const interval = setInterval(() => {
      setDuration(curr => curr + 1)
    }, 1000);

    return () => clearInterval(interval)
  })


  return (
    <main className='flex-1 p-4 flex flex-col justify-center gap-3 sm:gap-4 md:gap-5 text-center justify-center pb-20'>
      <h1 className='font-semibold text-5xl sm:text-6xl md:text-7xl'>Polly<span className='text-blue-400 bold'>Scribe</span></h1>
      <h3 className='text-slate-600 text-xl md:text-xl font-medium tracking-wide'>Record 
        <span className='text-blue-400'> &rarr; </span>
         Transcribe 
        <span className='text-blue-400'> &rarr; </span>
         Translate 
      </h3>
      <button onClick={(recordingStatus === 'recording' ? stopRecording : startRecording)}className='flex items-center justify-between gap-4 mx-auto w-72 max-w-full my-4 text-slate-400 text-2xl font-medium specialBtn rounded-3xl px-4 py-2 hover:text-blue-400'>
        <p>Record</p>
        <div className='flex gap-2'>
          {duration !== 0 && (
            <p className='text-lg'>{duration}s</p>
          )}
          <i className={"fa-solid fa-microphone " + (recordingStatus === "recording" ? "text-rose-300" : "text-slate-400")}></i>
        </div>
      </button>
        <p className='text-slate-400 text-xl'>Or <label className='text-blue-400 cursor-pointer hover:text-blue-600 duration-200'>Upload
          <input onChange={(e) => {
            const tempFile = e.target.files[0]
            setFile(tempFile)
        }}className='hidden' type="file" accept='.mp3,.wave' /></label> a mp3 file</p>
    </main>
  )
}

export default HomePage;