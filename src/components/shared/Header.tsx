import { headerNavList } from '@/utils/constants';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png';
import cart from '../../assets/cart.svg';
import profile from '../../assets/profile.svg';
import save from '../../assets/save.svg';
import search from '../../assets/search.svg';
import cartLight from '../../assets/cart-light.svg';
import profileLight from '../../assets/profile-light.svg';
import saveLight from '../../assets/save-light.svg';
import searchLight from '../../assets/search-light.svg';
import { useEffect, useState } from 'react';

const Header = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const show = 'bg-gray-700 transition-all duration-500';
  const top = 'translate-y-0 transition-all duration-500 bg-white';
  const hide = '-translate-y-16 transition-all duration-500';

  const [navStatus, setNavStatus] = useState(top);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showStatusColor, setShowStatusColor] = useState(false);

  const controlNavbar = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > 200) {
      if (currentScrollY > lastScrollY) {
        setNavStatus(hide);
        setShowStatusColor(false);
      } else if (currentScrollY < lastScrollY - 2) {
        setNavStatus(show);
        setShowStatusColor(true);
      }
    } else {
      setNavStatus(top);
      setShowStatusColor(false);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  const handleSearchBar = () => {
    console.log('search');
  };

  return (
    <header
      className={`w-full h-16 px-10 flex justify-between fixed ${navStatus} `}>
      <ul className='w-[25rem]  h-auto flex gap-5 items-center justify-start'>
        {headerNavList.map((item) => {
          const isActive = pathname === item.route ? true : false;
          return (
            <li key={item.label}>
              <Link
                to={item.route}
                className={`text-sm  ${
                  isActive
                    ? 'text-green-500 font-bold'
                    : 'text-gray-900 font-medium'
                } ${
                  showStatusColor && !isActive
                    ? 'text-gray-100 font-medium'
                    : ''
                }`}>
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>

      <div className='w-[25rem] h-auto  flex justify-center items-center'>
        <Link to='/'>
          <img
            src={logo}
            alt='logo'
            className='w-40'
          />
        </Link>
      </div>

      <ul className=' w-[25rem] h-auto flex items-center justify-end gap-5 '>
        <li>
          <button
            type='button'
            onClick={handleSearchBar}>
            <img
              src={showStatusColor ? searchLight : search}
              alt='search'
            />
          </button>
        </li>
        <li>
          <button>
            <img
              src={showStatusColor ? profileLight : profile}
              alt='profile'
            />
          </button>
        </li>
        <li>
          <button>
            <img
              src={showStatusColor ? saveLight : save}
              alt='save'
            />
          </button>
        </li>
        <li>
          <button>
            <img
              src={showStatusColor ? cartLight : cart}
              alt='cart'
            />
          </button>
        </li>
      </ul>
    </header>
  );
};
export default Header;
