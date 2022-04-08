import { Cart } from "../../atoms/cart";
import { SearchInput } from "../../atoms/inputSearch";
import { Brand } from "../../molecules/brand";
import { Navigation } from "../../organisms/navigation";

export const Menu = ({ className = "" }) => {
  return (
    <div className={`t-menu ${className}`}>
      <div className="t-menu__brand">
        <Brand />
      </div>
      <div className="t-menu__navigation">
        <Navigation />
      </div>
      <div className="t-menu__search">
        <SearchInput />
      </div>
      <div className="t-menu__cart">
        <Cart />
      </div>
    </div>
  );
};
