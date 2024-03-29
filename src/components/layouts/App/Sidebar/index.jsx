import {
  IconBell,
  IconGraph,
  IconLayoutCollage,
  IconMessage2,
  IconPlus,
  IconSettings,
  IconSquareRoundedArrowRight,
  IconTrash,
} from '@tabler/icons-react';
import defaultProfile from 'assets/images/default-profile.svg';
import logo from 'assets/images/logo.svg';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import Button from 'components/shared/Button';
import Tooltip from 'components/shared/Tooltip';

import { change } from 'store/reducers/modal';

import './styles.scss';

function Sidebar() {
  const dispatch = useDispatch();
  const location = useLocation();
  const { data } = useSelector((state) => state.user);
  const { show } = useSelector((state) => state.sidebar);

  return (
    <div className={`sidebar ${show && 'show'}`}>
      <div className={'sidebar-header'}>
        <img src={logo} alt={'logo'} />
        Debut
      </div>
      <div className={'sidebar-section'}>
        <div className={'sidebar-section-name'}>General</div>
        <Link to={'/app'} className={location.pathname === '/app' ? 'active' : ''}>
          <IconGraph stroke={1.3} width={24} height={24} style={{ color: 'var(--icon-color-primary)' }} />
          Overview
        </Link>
        <Link to={'plans'} className={location.pathname.includes('plans') ? 'active' : ''}>
          <IconLayoutCollage stroke={1.3} width={24} height={24} style={{ color: 'var(--icon-color-primary)' }} />
          Plans
        </Link>
      </div>
      <div className={'sidebar-section'}>
        <div className={'sidebar-section-name'}>Other</div>
        <Link to={'bin'} className={location.pathname === '/app/bin' ? 'active' : ''}>
          <IconTrash stroke={1.3} width={24} height={24} style={{ color: 'var(--icon-color-primary)' }} />
          Bin
        </Link>
      </div>
      <div className={'sidebar-section'}>
        <div className={'sidebar-section-name'}>Account</div>
        <div className={'section-modal-trigger'}>
          <IconBell stroke={1.3} width={24} height={24} style={{ color: 'var(--icon-color-primary)' }} />
          Notification
        </div>
        <div
          className={'section-modal-trigger'}
          onClick={() =>
            dispatch(
              change({
                component: 'settings',
                active: true,
              }),
            )
          }
        >
          <IconSettings stroke={1.3} width={24} height={24} style={{ color: 'var(--icon-color-primary)' }} />
          Settings
        </div>
        <div className={'section-modal-trigger'}>
          <IconMessage2 stroke={1.3} width={24} height={24} style={{ color: 'var(--icon-color-primary)' }} />
          Help & Support
        </div>
      </div>
      <div className={'sidebar-section'}>
        <Button
          style={{
            width: '100%',
          }}
          type={'third'}
          onClick={() =>
            dispatch(
              change({
                component: 'create-plan',
                active: true,
              }),
            )
          }
        >
          <IconPlus stroke={1.3} width={20} height={20} style={{ color: 'var(--icon-color-primary)' }} />
          Create Plan
        </Button>
      </div>
      <div className={'sidebar-footer'}>
        <div className={'sidebar-section-name'}>Session</div>
        <div className={'sidebar-footer-session'}>
          <img src={data.photoUrl !== null ? data.photoUrl : defaultProfile} alt={'profile'} />
          <div className={'sidebar-footer-username'}>{data.displayName !== null ? data.displayName : 'unknown'}</div>
          <div className={'sidebar-footer-logout-button'}>
            <Tooltip text={'Logout'} position={'top'}>
              <IconSquareRoundedArrowRight
                stroke={1.3}
                width={24}
                height={24}
                style={{ color: 'var(--icon-color-primary)' }}
              />
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
