import React, { useState, useEffect } from "react";
import GlobalStyle from "../../global/globalStyle";
import { useNavigate } from 'react-router-dom';
import {NavLogin} from '../../components/NavBarLogin/index';
import {Footer} from '../../components/footer/index';
import {
  Main,
  AnimatedCircle,
  Field,
  Input,
  Button,
  Icon,
  ErrorText,
} from "../Cadastro/stylesCadastro";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import logoImage from "../../img/Games.png";
import instance from "../../services/api";

const Cadastro = () => {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");
  const [errorSenha, setErrorSenha] = useState("");
  const [errorConfirmaSenha, setErrorConfirmaSenha] = useState("");
  const [errorCadastro, setErrorCadastro] = useState("");
  const [cadastrosAnteriores, setCadastrosAnteriores] = useState([]);

  useEffect(() => {
    if (confirmaSenha && senha !== confirmaSenha) {
      setErrorConfirmaSenha("As senhas não coincidem");
    } else {
      setErrorConfirmaSenha("");
    }

    if (senha.length > 0 && senha.length < 6) {
      setErrorSenha("A senha deve ter pelo menos 6 caracteres");
    } else {
      setErrorSenha("");
    }
  }, [senha, confirmaSenha]);

  const carregarCadastrosAnteriores = async () => {
    try {
      const response = await instance.get("/cadastros");
      setCadastrosAnteriores(response.data);
     console.log(response.data);
    } catch (error) {
      console.error("Erro ao carregar cadastros anteriores", error);
    }
  };
  useEffect(() => {
    carregarCadastrosAnteriores();
  }, [email]);

  const handleCadastrar = async () => {
    for (const element of cadastrosAnteriores) {
      if (element.email === email) {
        alert("O email já foi cadastrado!");
        return;
      }
      } 
      if (
        usuario !== "" &&
        email !== "" &&
        senha !== "" &&
        confirmaSenha !== ""
      ) {
        try {
          const newUser = {
            nome: usuario,
            email: email,
            senha: senha,
          };

           const response = await instance.post("/cadastros", newUser);
          alert("Usuário cadastrado com sucesso:");
          setUsuario("");
          setEmail("");
          setSenha("");
          setConfirmaSenha("");
          setErrorCadastro("Usuário cadastrado com sucesso");

          
          window.location.href = '/login';
        } catch (error) {
          setErrorCadastro("Erro ao cadastrar o usuário");
          console.error("Erro ao cadastrar o usuário:", error);
         }
      }
   
  };
  return (
    <>

      <NavLogin />
      <GlobalStyle />
      <Main>
      <div className='cadastro-info'>
        <AnimatedCircle />
        <form>
        <h1>Faça login no Game<br/> Quest World</h1>
       
          <Field>
            <Icon className="icon">
              <FaUser />
            </Icon>
            <Input
              type="text"
              placeholder="Nome Completo"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              required
            />
          </Field>
          <Field>
            <Icon className="icon">
              <FaEnvelope />
            </Icon>
            <Input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Field>
          <Field>
            <Icon className="icon">
              <FaLock />
            </Icon>
            <Input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </Field>
          <Field>
            <Icon className="icon">
              <FaLock />
            </Icon>
            <Input
              type="password"
              placeholder="Confirma Senha"
              value={confirmaSenha}
              onChange={(e) => setConfirmaSenha(e.target.value)}
              required
            />
          </Field>
          <ErrorText error={errorSenha}>{errorSenha}</ErrorText>
          <ErrorText error={errorConfirmaSenha}>{errorConfirmaSenha}</ErrorText>
          <ErrorText error={errorCadastro}>{errorCadastro}</ErrorText>
          <Button type="button" onClick={handleCadastrar}>CADASTRAR</Button>
          <p>Já tem uma conta?<a className='link-cadastro' href="/login"> Entrar</a></p>
          </form>
      
      </div>
        <img className='img-game' src={logoImage} alt="Logo" />
      
    </Main> 
      <Footer />
    </>
  );
};

export default Cadastro;
