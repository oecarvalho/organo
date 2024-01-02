import Banner from "./components/Banner/Banner"
import CampoTexto from "./components/CampoTexto"

function App() {

  return (
    <>
      <Banner />
     <CampoTexto label='Nome' placeholder='Digite o seu nome'/>
     <CampoTexto label='Cargo' placeholder='Digite o seu cargo'/>
     <CampoTexto label='Imagem' placeholder='Informe o endereço da Imagem'/>
    </>
  )
}

export default App
