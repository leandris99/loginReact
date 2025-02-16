import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Conversor() {

  //estados
  const [textoAVoz, setTextoAVoz] = useState('')
  const [vozATexto, setVozATexto] = useState('')

  //funciones
  function cambiarTexto(evento) {
    setTextoAVoz(evento.target.value)
  }

  function convertirTextoAVoz() {
    const synth = window.SpeechSynthesis
    const utterThis = new SpeechSynthesisUtterance(textoAVoz)
    synth.speak(utterThis)
  }

  function resultado(event) {
    setVozATexto(event.result[0][0].transcript)
  }

  function grabarVozATexto() {
    const recognition = new window.webkitSpeechREcognition()
    recognition.lang = "es_ES"
    recognition.star()
    recognition.onresult = resultado
  }


    return (
    <>
    <h1>Conversor de TTS y StT</h1>
    <br />
    <h3>concersor de texto a voz</h3>
    <input type="text" id="textoAVoz" value={textoAVoz} onChange={cambiarTexto} />
    <button onClick={convertirTextoAVoz}>Convertir</button>

    <h3>conversor de voz a texto</h3>
    <button onClick={grabarVozATexto}>Grabar</button>

    {vozATexto}
    </>
  );
}

export default Conversor
