import { Link } from "react-router-dom";

export const Account = ({ className = "" }) => {
  return (
    <div className={`m-account ${className}`}>
      <div className="m-account__box">
        <Link to="/login" className="bd-box">
          <img src="/images/icon/icon-user.png" alt="icon user" />
          My account
        </Link>
      </div>
    </div>
  );
};
