import { Link } from 'react-router-dom';
import { HELP_LIST, STORE_LIST, SUPPORT_LIST } from '../../../interface/constant';
import { NavItem } from './../../molecules/navitem/index';

export const Footer = ({ className = '' }) => {
  return (
    <div className={`t-footer ${className}`}>
      <div className='t-footer__bg'>
        <div className='t-footer__logo'>
          <img src='/images/icon/Krconex-grey.png' alt='' />
          <div className='t-footer__social'>
            <img src='/images/icon/fb.png' alt='' />
            <img src='/images/icon/ins.png' alt='' className='space' />
            <img src='/images/icon/tw.png' alt='' />
          </div>
        </div>
        <ul className='t-footer__item'>
          <p className='t-footer__title'>Help</p>
          {HELP_LIST.map((item) => (
            <li key={item.id} className='o-navigation__item'>
              <Link to={item.url}>
                <NavItem>{item.name}</NavItem>
              </Link>
            </li>
          ))}
        </ul>
        <ul className='t-footer__item'>
          <p className='t-footer__title'>Store</p>
          {STORE_LIST.map((item) => (
            <li key={item.id} className='o-navigation__item'>
              <Link to={item.url}>
                <NavItem>{item.name}</NavItem>
              </Link>
            </li>
          ))}
        </ul>
        <ul className='t-footer__item'>
          <p className='t-footer__title'>Support</p>
          {SUPPORT_LIST.map((item) => (
            <li key={item.id} className='o-navigation__item'>
              <Link to={item.url}>
                <NavItem>{item.name}</NavItem>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
