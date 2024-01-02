import { useState } from "react"
import Banner from "./components/Banner/Banner"
import Formulario from "./components/Formulario/Formulario"
import Time from "./components/Time/Time"

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
      <Time nome='Programação' />
      <Time nome='Front-End' />
      <Time nome='Data Science' />
    </>
  )
}

export default App
