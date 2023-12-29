import { useState } from "react";
import Navigation from "../../components/Navigation/Nav";
import Products from "../../components/Products/Products";
import Recommended from "../../components/Recommended/Recommended";
import Sidebar from "../../components/Sidebar/Sidebar";
import GlobalStyle from '../../global/globalStyle';
import { Container } from "./styled.js";
import HeroBanner from "../../img/banner.png";
import { Footer } from '../../components/footer/index';
//Database
import products from "../../db/data";
import Card from "../../components/Card";


function Home() {

  //Placing all of the state inside this Home component
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [query, setQuery] = useState("")
  const [priceRange, setPriceRange] = useState(null)

  //Capture Filter
  const handleInputChange = (e) => {
    setQuery(e.target.value)
  }

  const handlePriceRangeChange = (e) => {
    setPriceRange(e.target.value)
  }

  const handleChange = (e) => {
    setSelectedCategory(e.target.value)
  }

  const handleClick = (e) => {
    setSelectedCategory(e.target.value)
  }

  function filteredData(products, selected, query, priceRange) {
    let filteredProducts = products;

    if (query) {
      filteredProducts = products.filter((product) => product.title
        .toLocaleLowerCase()
        .indexOf(query.toLocaleLowerCase()) !== -1
      );
    }

    if (selected) {
      filteredProducts = filteredProducts.filter(({ category, color, company, newPrice, title }) =>
        category === selected ||
        color === selected ||
        company === selected ||
        newPrice === selected ||
        title === selected);
    }

    if (priceRange) {
      const [lowerBound, upperBound] = priceRange.split('-').map(Number);
      filteredProducts = filteredProducts.filter(({ newPrice }) =>
        Number(newPrice) >= lowerBound && Number(newPrice) <= upperBound);
    }

    return filteredProducts.map(
      ({id, img, title, reviews, newPrice}) => (
       
        <Card
          id={id}
          img={img}
          title={title}
          reviews={reviews}
          newPrice={newPrice}
         
        />
       
      ));
  }

  const result = filteredData(products, selectedCategory, query, priceRange);

  return (
    <>

      <GlobalStyle />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Container>

        <img src={HeroBanner} className="hero-banner" />
        <div className="hero-text">
          <h1> Prepare-se para a aventura e desafie seus limites neste emocionante mundo de jogos!</h1>
        </div>
        <div className="produtos">

          <div>
            <Recommended handleClick={handleClick} handlePriceRangeChange={handlePriceRangeChange} />
            <Products result={result} />
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default Home
