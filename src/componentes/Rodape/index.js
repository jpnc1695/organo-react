import './Rodape.css'

const Rodape = () => {
  return(
      <footer className='rodape'>
        <div className='img'>
          <img src='/imagens/fb.png' alt='ícone Facebook' className='logo'></img>
          <img src='/imagens/tw.png' alt='ícone Twitter'  className='logo'></img>
          <img src='/imagens/ig.png' alt='ícone Intagram' className='logo'></img>
        </div>
        <div>
          <img src='/imagens/logo.png' alt='Logo organo' className='organo'></img>
        </div>
        <div className='dev'>
          <h3>Desenvolvido por jpnc1695</h3>
        </div>
      </footer>
  )
}

export default Rodape