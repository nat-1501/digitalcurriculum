
import './style.css';
import Imagem from './image-photo.png'

function app(){
  return(
    <div className="cv">
      
      <div className="coluna">
          <img className="img1" alt='img' src={Imagem}/>
            <h1>CONTATO</h1>
            
            <div className="informacoes">
              <span>ENDEREÇO</span>
              <p> Travessa Nilo Chagas 09, Fazenda da juta, São Paulo - SP </p> 
            </div>

            <div className="informacoes">
              <span>CELULAR</span>
              <p>(11) 98427-1548</p>
            </div>

            <div className="informacoes">
              <span>EMAIL</span>
              <p> natalisoares90@gmail.com</p>
            </div>

            <div className="informacoes">
              <span>NACIONALIDADE</span>
              <p>Brasileira </p>
            </div> 

            <div className="separador">
              
            </div>        

            <div className="perfil">
              <h1>PERFIL</h1>
              <p>Focada sempre em ser e mostrar meu melhor, tenho habilidades como boa comunicação, determinação. Apaixonada por estudos e leitura, não tenho experiencia na área, porém tenho muito sangue nos olhos para mostrar tudo o que eu tenho aprendido e sede de absorver o que puder para me tornar uma profisional de requinte no mercado de trabalho. </p>    

            </div>
      </div> 
    
      <div className="colunadir">
              <h1>NATALI SOARES</h1>
              <p> Desenvolvedora Full Stack / front end</p>
            <div className= "expec">
              <h2>EDUCAÇÃO</h2>
              <p>2018 - 2020 / Produção Multimidia (incompleto)</p>
            </div>    
            </div>
    </div>
  )
}

export default app 
