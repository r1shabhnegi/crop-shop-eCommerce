import { headerNavList } from '@/utils/constants';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png';
import cart from '../../assets/cart.svg';
import profile from '../../assets/profile.svg';
import save from '../../assets/save.svg';
import search from '../../assets/search.svg';

const Header = () => {
  const { pathname } = useLocation();

  return (
    <div className='w-full px-10 flex justify-between fixed '>
      <ul className='w-[25rem]   flex gap-5 items-center justify-start'>
        {headerNavList.map((item) => {
          const isActive = pathname === item.route ? true : false;
          return (
            <li key={item.label}>
              <Link
                to={item.route}
                className={`text-sm font-medium ${
                  isActive && 'text-green-700'
                } `}>
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>

      <div className='w-[25rem]  flex justify-center items-center'>
        <Link to='/'>
          <img
            src={logo}
            alt='logo'
            className='w-40'
          />
        </Link>
      </div>

      <ul className=' w-[25rem] flex items-center justify-end gap-5'>
        <li>
          <img
            src={search}
            alt='seaarch'
          />
        </li>
        <li>
          <img
            src={profile}
            alt='profile'
          />
        </li>
        <li>
          <img
            src={save}
            alt='save'
          />
        </li>
        <li>
          <img
            src={cart}
            alt='cart'
          />
        </li>
      </ul>
    </div>
  );
};
export default Header;
