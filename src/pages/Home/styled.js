import styled from "styled-components"

export const Container = styled.nav`

display: flex;
width:100%;
height:100%;
flex-direction: column;
align-items: center;

.hero-banner{
    width: 100%;
    height: 500px;
}

.hero-text{
    width: 100%;
    background-color: black;
    height: 150px;
    justify-content:center;
    align-items: center;
    display:flex;
    color: #44C3F6;
    font-size: 2rem;
}

.hero-text h1{
    width: 55%;
    text-align: center;
}

.produtos{
    display: flex;
    //width: 30%;
}

.btns{
    width: 200px;
}

`
