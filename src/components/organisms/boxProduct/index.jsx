export const BoxProduct = ({ className = "" }) => {
  return (
    <div className={`o-box-product ${className}`}>
      <div className="o-box-product__bg">
        <div className="o-box-product__item">
          <img
            src="images/collections/tyler-nix-zOZYY3qC0-o-unsplash 1.png"
            alt="ACCESSORIES"
          />
          <button className="o-box-product__name accessories">
            ACCESSORIES
          </button>
        </div>

        <div className="o-box-product__item-group3">
          <div className="o-box-product__item2">
            <img
              src="images/collections/tyler-nix-zOZYY3qC0-o-unsplash 2.png"
              alt="SUMMER SALE"
            />
            <button className="o-box-product__name summer">SUMMER SALE</button>
          </div>

          <div className="o-box-product__item-group2">
            <div className="o-box-product__item3">
              <img
                src="images/collections/tyler-nix-zOZYY3qC0-o-unsplash 3.png"
                alt="NEW ARRIVALS"
              />
              <button className="o-box-product__name new">NEW ARRIVALS</button>
            </div>
            <div className="o-box-product__item4">
              <img
                src="images/collections/tyler-nix-zOZYY3qC0-o-unsplash 4.png"
                alt="MEN’S JEANS"
              />
              <button className="o-box-product__name men">MEN’S JEANS</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
