import styled from "styled-components"

export const Container = styled.nav`


    display: flex;
    border-bottom: 2px solid #f3f3f3;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    padding-right:50px;
    background-color:#000000;
    color: white;
    height: 60px;
    display: flex;
    margin-bottom: 200px;
   
    .home{
        font-size: 25px;
        text-decoration: none;
        color: #FFF;
    }

     
    .home:hover{
        color: grey;
    }
    .nav-container{
    display: flex;
    align-items:center;
}

  
    .nav-container{
      input {
        padding: 12px 20px;
        border: none;
        background: #f7f6f6;
        outline: none;
        border-radius: 5px;
        width: 20rem;
      }
    }

        
    .profile-container{
      .nav-icons {
        width: 1.2rem;
        height: 1.2rem;
        margin-left: 2rem;
      }
    }

   .logo{
        width: 5rem;
        height: 5rem;


   }

   a{
    text-decoration: none;
    color: #FFF;
    font-size: 20px;
    margin-left: 20px;
    margin-right: 20px;
   }
  ` 