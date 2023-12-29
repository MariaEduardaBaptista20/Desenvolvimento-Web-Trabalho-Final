import { BsFillBagFill } from "react-icons/bs";
import { Link } from "react-router-dom";


const Card = ({ id, img, title, reviews, newPrice }) => {
  return (
    <>
       <Link to={`/produto/${id}`}>
      <section className="card">
        <img src={img} alt={title} className="card-img" />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
         
          <section className="card-price">
            <div className="price">
             {newPrice}
            </div>
            <div className="bag">
              <BsFillBagFill className="bag-icon" />
            </div>
          </section>
        </div>
      </section>
      </Link>
    </>
  );
};

export default Card;