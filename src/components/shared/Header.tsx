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
import cancel from '../../assets/cancel.svg';
import cancelLight from '../../assets/cancel-light.svg';
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
  const [searchInputValue, setSearchInputValue] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  const controlNavbar = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > 200) {
      setShowSearch(false);
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
    setShowSearch((prev) => !prev);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('handleSearchSubmit');
  };

  const handleSearchClose = () => {
    setShowSearch(false);
  };

  return (
    <>
      <header
        className={`w-full h-16 px-10 flex justify-between fixed ${navStatus} z-50`}>
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
        <div
          className={`bg-gray-200 w-full ${
            showSearch ? 'top-16' : '-top-20'
          } left-0 h-20 absolute flex items-center justify-center transition-all -z-10`}>
          <form
            onSubmit={(e) => handleSearchSubmit(e)}
            className='flex items-center'>
            <input
              type='text'
              value={searchInputValue}
              className='outline-none h-10 w-72 p-2 rounded-tl-lg rounded-bl-lg'
              onChange={(e) => setSearchInputValue(e.target.value)}
            />
            <button
              type='submit'
              className='w-10 h-10'>
              <img
                className='h-full w-full p-2 bg-gray-300 '
                src={showStatusColor ? searchLight : search}
                alt='submit'
              />
            </button>
            <button
              type='button'
              className='h-10 w-10'
              onClick={handleSearchClose}>
              <img
                src={cancel}
                className='h-full w-full p-1 bg-gray-400 rounded-tr-lg rounded-br-lg'
                alt='cancel'
              />
            </button>
          </form>
        </div>
      </header>
    </>
  );
};
export default Header;
