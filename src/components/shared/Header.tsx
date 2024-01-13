import { headerNavList } from '@/utils/constants';
import { Link, useLocation, useNavigate } from 'react-router-dom';
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
import logout from '../../assets/logout.svg';
import profileSolid from '../../assets/profile-solid.svg';
import { useEffect, useState } from 'react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useSignOutAccount } from '@/services/tanStack/queriesAndMutations';
import { useAppDispatch, useAppSelector } from '@/services/redux/store';
import {
  selectUserData,
  setAuthentication,
  setInitialUser,
} from '@/services/redux/authSlice';

const Header = () => {
  const { mutate: signOutAccount, isSuccess } = useSignOutAccount();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { id } = useAppSelector(selectUserData);
  // console.log(id);
  // const data = useAppSelector((state) => state.auth.initialUser);
  // console.log(data);

  useEffect(() => {
    if (isSuccess) {
      navigate('/sign-in');
      dispatch(
        setInitialUser({
          id: '',
          name: '',
          username: '',
          email: '',
          imageUrl: '',
        })
      );

      dispatch(setAuthentication(false));
    }
  }, [isSuccess]);

  const { pathname } = useLocation();

  const show = 'bg-gray-600 transition-all duration-500';
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
    window.scrollTo(0, 0);
    setShowSearch(false);
  }, [pathname]);

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
                    isActive && 'text-green-500 font-bold'
                  } ${
                    showStatusColor && !isActive
                      ? 'text-gray-100 font-medium'
                      : 'text-gray-900 font-medium'
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

        <ul className=' w-[25rem] h-auto flex items-center justify-end gap-5'>
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
            <DropdownMenu>
              <DropdownMenuTrigger>
                <img
                  src={showStatusColor ? profileLight : profile}
                  alt='profile'
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem className='p-3'>
                  <Link
                    to={`/profile/${id}`}
                    className='text-bold flex'>
                    <img
                      src={profileSolid}
                      className='pr-2 w-5'
                      alt=''
                    />
                    <p className='pl-1 font-medium'>Profile</p>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className='p-3'>
                  <button
                    onClick={() => signOutAccount()}
                    className='flex items-center justify-center'>
                    <img
                      src={logout}
                      className='pr-2  w-6'
                      alt=''
                    />
                    <p className=' font-medium'>Logout</p>
                    {/* Logout */}
                  </button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
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
          className={`${
            showStatusColor ? 'bg-gray-500' : 'bg-gray-300'
          } w-full ${
            showSearch ? 'top-16' : '-top-20'
          } left-0 h-20 absolute flex items-center justify-center transition-all -z-10`}>
          <form
            onSubmit={(e) => handleSearchSubmit(e)}
            className='flex items-center'>
            <input
              type='text'
              value={searchInputValue}
              className={`${
                showStatusColor && 'bg-gray-200'
              } outline-none h-10 w-[40rem] p-2 rounded-tl-lg rounded-bl-lg`}
              onChange={(e) => setSearchInputValue(e.target.value)}
            />
            <button
              type='submit'
              className='w-10 h-10'>
              <img
                className={`h-full w-full p-2 ${
                  showStatusColor ? 'bg-gray-600' : 'bg-gray-400'
                }   rounded-tr-lg rounded-br-lg`}
                src={showStatusColor ? searchLight : search}
                alt='submit'
              />
            </button>
            <button
              type='button'
              className='h-10 w-10 relative left-96'
              onClick={handleSearchClose}>
              <img
                src={showStatusColor ? cancelLight : cancel}
                className='h-full w-full p-1 bg-gray-400 rounded-lg'
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
