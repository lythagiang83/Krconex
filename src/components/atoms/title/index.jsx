export const Title = ({ className = "", children }) => {
  return (
    <div className={`a-title ${className}`}>
      <span>{children}</span>
    </div>
  );
};
