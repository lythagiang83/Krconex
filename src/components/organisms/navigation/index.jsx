import { Link } from "react-router-dom";
import { HEADING_NAV_LIST } from "../../../interface/constant";
import { NavItem } from "../../molecules/navitem";

export const Navigation = ({ className = "" }) => {
  return (
    <div className={`o-navigation ${className}`}>
      <ul className="o-navigation__list">
        {HEADING_NAV_LIST.map((item) => (
          <li key={item.id} className="o-navigation__item">
            <Link to={item.url}>
              <NavItem>{item.name}</NavItem>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
