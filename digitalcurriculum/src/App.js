
import './style.css';
import Imagem from './Imagem.png'

function app(){
  return(
    <div className="cv">
      
      <div className="coluna">
          <img className="img1" alt='img' src={Imagem.png}/>
            <h1>C O N T A T O</h1>
            
            <div className="endereco">
              <span>ENDEREÇO</span>
              <p> Travessa Nilo Chagas 09, Fazenda da juta, São Paulo - SP </p> 
            </div>
            <div className="tel">
              <span>CELULAR</span>
              <p>(11) 98427-1548</p>
            </div>
            <div className="email">
              <span>EMAIL</span>
              <p> natalisoares90@gmail.com</p>
            </div>
            <div className="nac">
             <span>NACIONALIDADE</span>
             <p>Brasileira </p>
            </div> 
            <div className="colunadir">
              <h1>NATALI SOARES</h1>
              <p> Desenvolvedora Full Stack / front end</p>
            <div className= "expec">
              <h2>EDUCAÇÃO</h2>
              <p>2018 - 2020 / Produção Multimidia (incompleto</p>
            </div>    
            </div>
            
      </div>
      
    </div>
  )
}

export default app 
