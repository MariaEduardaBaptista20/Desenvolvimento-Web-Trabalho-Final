import {Footer1} from "./styled"
import { Link } from "react-router-dom"
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";


export const Footer = () => {
  return (
  
    <Footer1>   

<div>
        <h1 className="titulo-footer">Institucional</h1>
        
        <Link to={`home`} className="link-footer">Contato</Link>
        <Link to={`home`} className="link-footer">Assistência Técnica</Link>
        <Link to={`home`} className="link-footer">Empresa</Link>
        <Link to={`home`} className="link-footer">Como comprar</Link>
        <Link to={`home`} className="link-footer">Pagamento</Link>
        <Link to={`home`} className="link-footer">Políticas de Envio</Link>
        <Link to={`home`} className="link-footer">Política de Privacidade</Link>
        <Link to={`home`} className="link-footer">Políticas de Trocas e Devoluções</Link>
        
    </div>

    <div>
        <h1 className="titulo-footer">Atendimento</h1>
        
        <Link to={`home`} className="link-footer">(21) 99745-9289</Link>
        <Link to={`home`} className="link-footer">(21) 99745-9289</Link>
        <Link to={`home`} className="link-footer">Atendimento via Telegram</Link>
        <Link to={`home`} className="link-footer">bigboy.atendimento@gmail.com</Link>
        <p className="texto-atendimento">Atendimento de Segunda a Sexta, das 10:00 as 17:30</p>
        
    </div>

    <div>
        <h1 className="titulo-footer">Redes Sociais</h1>
        <Link to={`home`} className="link-footer icons"><AiOutlineFacebook/>Facebook</Link>
        <Link to={`home`} className="link-footer icons"><AiOutlineInstagram/>Instagram</Link>      
    </div>

    <div>
        <h1 className="titulo-footer">Formas de pagamento</h1>
        <Link to={`home`} className="link-footer">Cartões</Link>
        <Link to={`home`} className="link-footer">Pix</Link>    
        <Link to={`home`} className="link-footer">Boleto</Link>     
    </div>
  </Footer1>
  
  );
};

