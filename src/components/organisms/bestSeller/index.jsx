import { Link } from "react-router-dom";
import { PRODUCTS_LIST } from "../../../interface/constant";

export const BestSeller = ({ className = "" }) => {
  return (
    <div className={`o-best-seller ${className}`}>
      <ul className="o-best-seller__list">
        {PRODUCTS_LIST.map((item) => (
          <li key={item.id} className="o-best-seller__item">
            <Link to={item.url}>
              <img src={item.image} alt="" />
              <span className="items">{item.items}</span>
              <p className="name">{item.name}</p>

              <p className="discount">
                {item.discount} <span className="price">{item.price}</span>
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
