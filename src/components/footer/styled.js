import styled from "styled-components"

export const Footer1 = styled.footer`

display: flex;
justify-content: space-around;
border-top: 2px solid #FFF;
margin-top: 80px;
padding-bottom: 50px;

.titulo-footer{
    font-size: 30px;
}
div{
    .link-footer{
    font-size: 22px;
    display: block;
    text-decoration: none;
    color: #FFF;
}
    .link-footer:hover{
        color: gray;
}

.icons{
    display: flex;
    align-items: center;
    gap: 5px;
}

.texto-atendimento{
    font-size: 22px;
    display: block;
    color: #FFF;
}

}
`