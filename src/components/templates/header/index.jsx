import { Account } from "../../molecules/account";
import { Social } from "../../molecules/social";

export const Header = ({ className = "" }) => {
  return (
    <header className={`t-header ${className}`}>
      <div className="t-header__nav-left">
        <Social />
      </div>
      <div className="t-header__nav-right">
        <Account />
      </div>
    </header>
  );
};
