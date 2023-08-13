import axios from "axios"
import { startLoading, loadingMessage, stopLoading } from "./loading"
import { getVideoId, loadVideo } from "./youtube-api"
import { transcribeAudio } from "../server/transcribe"

const form = document.querySelector('#form')

form.addEventListener('submit', async(e)=> {
  e.preventDefault()

  try {
    loadingMessage('Iniciando a aplicação')
    startLoading()

    const formData = new FormData(form)
    const url = formData.get('url')

    await loadVideo(url)

    // loadingMessage('Baixando e convertendo o vídeo')
    // await axios.get('http://localhost:3333/audio?v=' + getVideoId(url))

    const data = await transcribeAudio()
    console.log(data)
  }catch(error){
    console.log('[SUBMIT_ERROR]', error)
  }finally {
    stopLoading()
  }
})