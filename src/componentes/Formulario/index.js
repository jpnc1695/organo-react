import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import { useState } from 'react'

const Formulario = (props) => {
  const imagemVazia = '/public/imagens/profile.png'

  const[nome, setNome] = useState('')
  const[cargo, setCargo] = useState('')
  const[imagem, setImagem] = useState('')
  const[time, setTime] = useState('')

  const aoSalvar = (e)=> {
    e.preventDefault()
    props.colaboradorCadastrado({
      nome:nome,
      cargo:cargo,
      imagem:imagem,
      time:time
    })
    setNome('')
    setCargo('')
    setImagem('')
    setTime('')
  }

  const verificaImagem = (valor)=>{
        if(valor === ""){
          setImagem(imagemVazia)
        }else{
          setImagem(valor)
        }
  }
  
 return (
    <section className='formulario'>
      <form onSubmit={aoSalvar}>
      <h2>Preencha os dados para criar o card do colaborador</h2>
      <CampoTexto 
          obrigatorio={true} 
          label="Nome" 
          placeholder="Digite seu nome" 
          valor={nome} 
          aoAlterado = {valor => setNome(valor)}
          />
      <CampoTexto 
          obrigatorio={true} 
          label="Cargo" 
          placeholder="Digite seu cargo"
          valor={cargo} 
          aoAlterado = {valor => setCargo(valor)}
          />
      <CampoTexto 
          label="Imagem"
          placeholder="Informe o endereço da imagem" 
          valor={imagem} 
          aoAlterado = {valor => verificaImagem(valor)}
          />
      <ListaSuspensa 
          label="Time" 
          itens={props.time}
          valor={time}
          aoAlterado={valor => setTime(valor)}
          />
      <Botao texto="Criar card"></Botao>
      </form>
    </section>
 )
}

export default Formulario