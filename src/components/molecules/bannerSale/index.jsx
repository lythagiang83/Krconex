export const BannerSale = ({ className = "" }) => {
  return (
    <div className={`m-banner-sale ${className}`}>
      <img src="/images/collections/SALE.png" alt="banner sale" />
      <button className="m-banner-sale__btn">CHECK CLERANCE</button>
    </div>
  );
};
