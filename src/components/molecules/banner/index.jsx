export const Banner = ({ className = "" }) => {
  return (
    <div className={`m-banner ${className}`}>
      <div className="m-banner__bg">
        <div className="m-banner__left">
          <img
            src="/images/collections/ivan-dodig-g9bBxGOPPMI-unsplash 1.png"
            alt="banner 1"
          />
          <button className="m-banner__btn-left">SHOP FOR HER</button>
        </div>
        <div className="m-banner__right">
          <img
            src="/images/collections/ivan-dodig-g9bBxGOPPMI-unsplash 2.png"
            alt="banner 2"
          />
          <button className="m-banner__btn-right">SHOP FOR HIM</button>
        </div>
      </div>
    </div>
  );
};
