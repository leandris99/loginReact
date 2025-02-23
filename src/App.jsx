import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Conversor from './Conversor'

function App() {

  //estados
  const [usuario, setUsuario] = useState('')
  const [clave, setClave] = useState('')
  const [logeado, setLogeado] = useState(false)


  function cambiarUsuario(evento) {
    //cambiarle el valor al input usuario para que pueda ser editado (usado)
    setUsuario(evento.target.value)

  }

  function cambiarClave(evento) {
    setClave(evento.target.value)
  }

  async function ingresar() {
    const peticion = await fetch('http://localhost:3000/login?usuario=' + usuario + '&clave=' + clave, {credentials: 'include' })
    if (peticion.ok) {
      setLogeado(true)
    }else{
      alert("usuario o clave incorrectos")
    }
    //if (usuario == "admin" && clave == "admin") {
      //alert("ingresaste")
      //setLogeado(true)
    //} else {
      //alert("usuario o clave incorrectos")
    //}
  }

   async function validar() {
    const peticion = await fetch('http://localhost:3000/validar', {credentials:'include'})
    if (peticion.ok) {
      setLogeado(true)
    }
  }
  useEffect(() => {
    validar()
  }, [])

  if(logeado){
    return < Conversor />
  }

  return (
    <>
    <h1>Iniciar Sesion</h1>
      <input type="text" name="usuario" id="usuario" placeholder='Usuario' value={usuario} onChange={cambiarUsuario} />
      <input type="password" name="clave" id="clave" placeholder='Clave' value={clave} onChange={cambiarClave} />
      <button onClick={ingresar}>Ingresar </button>

    </>
  )
}

export default App
