import {Section} from "./styled.js";

const Products = ({ result }) => {
  return (
    <>
      <Section className="card-container">{result}</Section>
    </>
  );
};

export default Products;