import styled from "styled-components"

export const Main = styled.main`
    display: flex;
    gap: 40px;
    align-items: center;
    justify-content: center;

    .mais-informacoes{
        font-size: 15px;
        text-decoration: none;
        color: #FFF;
    }

    .mais-informacoes:hover{
        font-size: 15px;
        text-decoration: none;
        color: gray;
    }

    .like{
        display: flex;
        align-items: center;
        border-bottom: 2px solid gray;
        a{
        color: #FFF;
        cursor: pointer;
        }

        .deslike{
            margin-left: 30px;
            cursor: pointer;

        }
    }
    .produto-img{
            width: 500px;
            height: 500px;
            margin-top: 50px ;
    }
    .produto-informacoes{
        width: 30%;
        display: flex;
        flex-direction: column;
        gap: 0px;
        
        

        /* .produto-img{
            width: 500px;
            height: 500px;
            padding: 50px 10px 0 90px;
        } */

        h2{
            font-size: 50px;
   
            margin-bottom: 30px;
            
        }
        .produto-valos{
            font-size: 40px;
            color: red;
            font-weight: bold;
            line-height: 0;
            margin-bottom: 30px;
            margin-top: 60px;
        }
        button{
            width: 100%;
            height: 50px;
            background-color: black;
            color: white;
            border-radius: 10px;
            margin-top: 50px;
            font-size: 20px;
            font-weight: bold;
        }
    }

    .produto-informacoes{
      
    }

`