import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";


const Formulario = () =>{

    const times = [
        'Programação',
        'UX e Design',
        'Front-End',
        'Data Science',
        'DevOps',
        'Mobile',
        'Inovação e Gestão'
    ]

    return(
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto label='Nome' placeholder='Digite o seu nome'/>
                <CampoTexto label='Cargo' placeholder='Digite o seu cargo'/>
                <CampoTexto label='Imagem' placeholder='Informe o endereço da Imagem'/>
                <ListaSuspensa label='Time' itens = {times}/>
            </form>
        </section>
    )
}

export default Formulario;