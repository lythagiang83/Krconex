export const Description = ({ className = "", children }) => {
  return (
    <div className={`a-description ${className}`}>
      <span>{children}</span>
    </div>
  );
};
