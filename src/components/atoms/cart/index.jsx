export const Cart = ({ className = "" }) => {
  return (
    <div className={`a-cart ${className}`}>
      <img src="/images/icon/Buy.png" alt="buy" />
      <img src="/images/icon/Heart.png" alt="heart" />
    </div>
  );
};
