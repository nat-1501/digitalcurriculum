import "./style.css";
import Imagem from "./image-photo.png";

function app() {
  return (
    <div className="cv">
      <div className="coluna">
        <img className="img1" alt="img" src={Imagem} />
        <h1>CONTATO</h1>

        <div className="informacoes">
          <span>ENDEREÇO</span>
          <p> Travessa Nilo Chagas 09, Fazenda da juta, São Paulo - SP </p>
        </div>

        <div className="informacoes">
          <span>CELULAR</span>
          <p><a href="tel:(11) 98427-1548">(11) 98427-1548</a></p>
        </div>

        <div className="informacoes">
          <span>EMAIL</span>
          <p><a href="email:natalisoraes90@gmail.com"> natalisoares90@gmail.com</a></p>
        </div>

        <div className="informacoes">
          <span>NACIONALIDADE</span>
          <p>Brasileira </p>
        </div>

        <div className="separador"></div>

        <div className="perfil">
          <h1>PERFIL</h1>
          <p>
            Focada sempre em ser e mostrar meu melhor, tenho habilidades como
            boa comunicação, determinação. Apaixonada por estudos e leitura, não
            tenho experiencia na área, porém tenho muito sangue nos olhos para
            mostrar tudo o que eu tenho aprendido e sede de absorver o que puder
            para me tornar uma profisional de requinte no mercado de tecnologia.{" "}
          </p>
        </div>
      </div>

      <div className="colunadir">
        <h1>NATALI SOARES</h1>
        <p> Desenvolvedora FullStack </p>
        <div className="expec">
          <h2>EDUCAÇÃO</h2>
          <p>2018 - 2020 / Produção Multimidia (incompleto)</p>
          <p>2022 / Alura - Trilha FullStack GB Desenvolve </p>
        </div>
        <div className="expec">
      
          <h2>HABILIDADES</h2>
          <p>HTML/CSS</p>
          
          <div className="skill">
          <span className="ponto"></span>
          <span className="ponto"></span>
          <span className="ponto"></span>
          <span className="ponto"></span>
          <span className="embranco"></span>
          </div>
         

          <p>LARAVEL</p>
          
          <div className="skill">
          <span className="ponto"></span>
          <span className="ponto"></span>
          <span className="embranco"></span>
          <span className="embranco"></span>
          <span className="embranco"></span>
          </div>
         

          <p>PHP</p>
          
          <div className="skill">
          <span className="ponto"></span>
          <span className="ponto"></span>
          <span className="ponto"></span>
          <span className="embranco"></span>
          <span className="embranco"></span>
          </div>

          <p>NODEJS</p>
         
         <div className="skill">
          <span className="ponto"></span>
          <span className="ponto"></span>
          <span className="embranco"></span>
          <span className="embranco"></span>
          <span className="embranco"></span>
          </div>
         
          
          <p>REACTJS</p>
         
          <div className="skill">
          <span className="ponto"></span>
          <span className="ponto"></span>
          <span className="embranco"></span>
          <span className="embranco"></span>
          <span className="embranco"></span>
          </div>
          

         <p>C#</p>
         
         <div className="skill">
          <span className="ponto"></span>
          <span className="ponto"></span>
          <span className="embranco"></span>
          <span className="embranco"></span>
          <span className="embranco"></span>
          </div>

          <p>MySQL</p>
         
         <div className="skill">
          <span className="ponto"></span>
          <span className="ponto"></span>
          <span className="embranco"></span>
          <span className="embranco"></span>
          <span className="embranco"></span>
          </div>
        

          <p>JAVA SCRIPT</p>
         
          <div className="skill">
          <span className="ponto"></span>
          <span className="ponto"></span>
          <span className="embranco"></span>
          <span className="embranco"></span>
          <span className="embranco"></span>
          </div>

        <div className="expec">
          <h2>EXPERIÊNCIA</h2>
          <p>2022 / Criação de um buscador de Cep em React.JS</p>
          <p>2022 - Atual / Criação Portifólio em HTML & CSS </p>
          <p>2021 / Criação de um sistema de Batataria em Laravel</p>
          <p>2021 / Criação  de um Editor de texto em C#</p>
          
        </div>
      </div>
      </div>
    </div>
  );
}

export default app;
