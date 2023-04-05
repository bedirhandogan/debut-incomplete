import { IconLayoutSidebarLeftCollapse, IconLayoutSidebarLeftExpand, IconSearch } from '@tabler/icons-react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import Input from 'components/shared/Input';
import ThemeSelector from 'components/shared/ThemeSelector';

import { change } from 'store/reducers/sidebar';

import './styles.scss';

function Navbar() {
  const dispatch = useDispatch();
  const location = useLocation();
  const { show } = useSelector((state) => state.sidebar);

  const handleSidebarShow = () => dispatch(change(!show));

  useEffect(() => {
    window.innerWidth <= 565 && dispatch(change(false));
  }, [dispatch]);

  return (
    <div className={'app-navbar'}>
      <div className={'app-navbar-section'}>
        <div className={`sidebar-show-trigger ${show ? 'active' : ''}`} onClick={handleSidebarShow}>
          {show ? (
            <IconLayoutSidebarLeftCollapse
              stroke={1.3}
              width={24}
              height={24}
              style={{ color: 'var(--icon-color-primary)' }}
            />
          ) : (
            <IconLayoutSidebarLeftExpand
              stroke={1.3}
              width={24}
              height={24}
              style={{ color: 'var(--icon-color-primary)' }}
            />
          )}
        </div>
        <div className={'app-sidebar-title'}>
          {location.pathname === '/app' ? 'Overview' : location.pathname.slice(5)}
        </div>
      </div>
      <div className={'app-navbar-section'}>
        <Input type={'text'} placeholder={'Search'} className={'app-navbar-search'}>
          <IconSearch stroke={1.3} width={20} height={20} style={{ color: 'var(--icon-color-primary)' }} />
        </Input>
        <ThemeSelector />
      </div>
    </div>
  );
}

export default Navbar;
