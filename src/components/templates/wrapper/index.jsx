import { Header } from "../header";
import { Menu } from "../menu";

export const Wrapper = ({ className = "", children }) => {
  return (
    <div className={`t-wrapper ${className}`}>
      <div className="t-wrapper__header">
        <Header />
      </div>
      <div className="t-wrapper__navigation">
        <Menu />
      </div>
      <div className="t-wrapper__body">{children}</div>
      <div className="t-wrapper__footer"></div>
    </div>
  );
};
