export const NavItem = ({ className = "", children }) => {
  return (
    <div className={`m-navitem ${className}`}>
      <span>{children}</span>
    </div>
  );
};
