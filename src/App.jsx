import { useState } from "react"
import Banner from "./components/Banner/Banner"
import Formulario from "./components/Formulario/Formulario"

function App() {

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
      console.log(colaborador)
      setColaboradores([...colaboradores, colaborador])
  }

  return (
    <>
      <Banner />
      <Formulario aoColaboradorCadastrado = {colaborador => aoNovoColaboradorAdicionado(colaborador)} />
    </>
  )
}

export default App
