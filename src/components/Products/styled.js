import styled from "styled-components"

export const Section = styled.section`


display: flex;
    flex-wrap: wrap;
   
    justify-content: center;
    margin-top: 2rem;
    z-index: -2;
    text-decoration: none;
  
  
  .card {
    margin: 20px;
    border: 2px solid #ededed;
    padding: 20px;
    cursor: pointer;
    width: 270px;
    color: white;
    
  }
  
  .card-img {
    width: 250px;
    height: 200px;
    margin-bottom: 1rem;
  }
  
  .card-title {
    margin-bottom: 1rem;
  }
  
  .card-reviews {
    margin-bottom: 1rem;
    display: flex;
  }
  
  .rating-star {
    color: #d5ab55;
  }
  
  .total-reviews {
    font-size: 0.9rem;
    margin-left: 10px;
  }
  
  .card-price {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .bag-icon {
    color: #535353;
  }
  ` 