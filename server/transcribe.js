import { pipeline } from "@xenova/transformers"
import { loadingMessage } from "../src/loading"

import data from '../src/data.json'
// let data = null

export async function transcribeAudio(){
  const options = {
    chunk_length_s: 30,
    stride_length_s: 5,
    language: 'portuguese',
    task: 'transcribe',
    return_timestamps: true
  }

  try{
    console.time()
    loadingMessage('Iniciando a transcrição de áudio, essa etapa é bem demorada... aguarde')
    console.log('[START_TRANSCRIBE]')

    // const transcriber = await pipeline('automatic-speech-recognition', 'Xenova/whisper-small')
    // data = await transcriber('../audio.mp3', options)
  } catch(error){
    console.log('[ERROR_TRANSCRIBE]', error)

  } finally {
    console.timeEnd()
    loadingMessage('Transcrição terminada')
    console.log('[STOP_TRANSCRIBE]')

    return data
  }
}