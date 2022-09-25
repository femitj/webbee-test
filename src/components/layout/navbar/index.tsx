import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import avatar from '../../../assets/images/avatar.png';
import Menu from '../../../assets/svgs/menu';

interface NavbarProps {
  showNavbar: boolean;
  setShowNavbar: (x: boolean) => void;
}

const Navbar = ({ showNavbar, setShowNavbar }: NavbarProps) => {
  const navigate = useNavigate();
  const { inventories } = useSelector((state: any) => state.generalReducer);

  return (
    <div className={`navbar app-padding `}>
      <div className='navbar1'>
        <div>
          <Menu
            className='hideOnDesktop'
            onClick={() => setShowNavbar(!showNavbar)}
            color='#000'
          />
        </div>
        <h2>Inventory</h2>

        <ul className='hideOMobile'>
          <li onClick={() => navigate('/')}>All</li>
          {inventories
            ?.filter((x: any) => x.name !== '')
            ?.map((data: any) => (
              <li onClick={() => navigate(`/${data?.id}`)} key={Math.random()}>
                {data?.name}
              </li>
            ))}

          <li onClick={() => navigate('/manage-types')}>Manage Types</li>
        </ul>
      </div>

      <div className='navbar2'>
        <div>
          <img src={avatar} alt='' />
        </div>
      </div>
      {showNavbar ? (
        <div className={`showNavMobile`}>
          <ul>
            <li onClick={() => navigate('/')}>All</li>
            {inventories
              ?.filter((x: any) => x.name !== '')
              ?.map((data: any) => (
                <li
                  onClick={() => navigate(`/${data?.id}`)}
                  key={Math.random()}
                >
                  {data?.name}
                </li>
              ))}

            <li onClick={() => navigate('/manage-types')}>Manage Types</li>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
