import { Link } from "react-router-dom";

export const Social = ({ className = "" }) => {
  return (
    <div className={`m-social ${className}`}>
      <div className="m-social__box">
        <Link to="">
          <img src="/images/icon/instagram.png" alt="instagram" />
        </Link>
        <Link to="">
          <img src="/images/icon/twitter.png" alt="twitter" />
        </Link>
        <Link to="">
          <img src="/images/icon/facebook.png" alt="facebook" />
        </Link>
      </div>
    </div>
  );
};
