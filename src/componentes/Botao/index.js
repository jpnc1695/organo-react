import './Botao.css'

const Botao = (props) => {
 return (
    <button className='botao' type="submit">{props.texto}</button>
 )
}

export default Botao