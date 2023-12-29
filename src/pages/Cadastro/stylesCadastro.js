import styled, { keyframes, css } from 'styled-components';

const spin = keyframes`
  0%, 100% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(360deg);
  }
`;


export const AnimatedCircle = styled.div`
  position: absolute;
  width: 610px;
  height: 610px;
  border: 10px solid transparent;
  border-top: 10px solid #00FFFF;
  border-radius: 50%;
  z-index: -1;
  animation: ${spin} 2s linear infinite;
 
`;


export const Field = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
`;

export const Icon = styled.div`
  height: 50px;
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 20px;
  line-height: 50px;
  border: 1px solid white;
  border-right: none;
  border-radius: 5px 0 0 5px;
  background: linear-gradient(#333, #222);
`;

Icon.iconStyle = {
  color: 'white',
  fontSize: '20px',
};

export const Input = styled.input`
  height: 50px;
  width: 100%;
  outline: none;
  font-size: 19px;
  color: #fff;
  padding: 0 15px;
  border-radius: 0 5px 5px 0;
  border: 1px solid white;
  caret-color: #DCDCDC;
  background: linear-gradient(to right, #333, #6495ED);

  &::placeholder {
    color: #fff;
  }

  &:focus {
    color: #fff;
    box-shadow: 0 0 5px rgba(0, 0, 260, 0.2), inset 0 0 5px rgba(0, 0, 255, 0.1);
    background: linear-gradient(to right, #999999, #777777);
    animation: glow 0.8s ease-out infinite alternate;
  }
`;

const rainbow = keyframes`
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
`;

export const Button = styled.button`
  margin-top: 30px;
  margin-right: 20px;
  border-radius: 500px;
  font-weight: bold;
  letter-spacing: 1px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 300px;
  height: 45px;
  font-size: 15px;
  font-family: Arial;
  background-image: linear-gradient(90deg, #6495ED, #003366, #0055a4, #0077dd, #0099ff, #00bbff, #00ddff, #00ffff, #00ddff, #00bbff, #0099ff, #0077dd, #0055a4, #003366);
  background-size: 1800% 100%;
  animation: ${rainbow} 20s linear infinite;
  color: #fff;

  &:hover {
    color: #0066cc;
    border: 1px solid #87CEFA;
    box-shadow: 0 0 10px 9px rgba(135, 206, 250, 0.7);
  }
`;



// Adicione esses estilos condicionais para as mensagens de erro
export const ErrorText = styled.p`
  color: white;
  font-size: 14px;
  ${({ error }) => error && css`
    color: white;
    background-color: transparent; // Cor de fundo desejada
    padding: 5px; // Ajuste o preenchimento conforme necessário
    border-radius: 5px;
  `}
`;







export const Main = styled.main`

display: flex;
align-items: center;
justify-content: center;
gap: 200px;


  height: auto;
  background: transparent;
 
  box-sizing: border-box;
  border: none;
  border-image: linear-gradient(to right, #4682B4, #E6E6FA, #B0C4DE);
  border-image-slice: 1;
  border-radius: 5px;
  position: relative;
  text-align: center;

  .cadastro-info{
    display: flex;
    align-items: center;
    justify-content: center;
  }

form{
    margin-top: 40px;
  background: transparent;
  text-align: center;

  h1{
    font-size: 30px;
  color: #fff;
  font-weight: 600;
  letter-spacing: 2px;
  text-align: center;
  }


  p{
    margin-top: 25px;
  color: #fff;
  text-align: center;

  a {
    color: #1E90FF;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}
}

` 


