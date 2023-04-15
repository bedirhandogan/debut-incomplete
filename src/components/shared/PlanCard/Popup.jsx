import { IconDots, IconStar, IconTrash } from '@tabler/icons-react';

function Popup({ data, state, reference }) {
  return (
    <div className={'planCard-popup-container'}>
      <div className={`planCard-popup-trigger ${state ? 'active' : ''}`} ref={reference.popupTriggerRef}>
        <IconDots stroke={1.3} width={20} height={20} style={{ color: 'var(--icon-color-primary)' }} />
      </div>
      <div className={'planCard-popup'} style={{ display: state ? 'flex' : 'none' }} ref={reference.popupRef}>
        <div className={'planCard-popup-item'}>
          <IconTrash stroke={1.3} width={20} height={20} style={{ color: 'var(--icon-color-primary)' }} />
          Delete
        </div>
        <div className={'planCard-popup-item'}>
          <IconStar stroke={1.3} width={20} height={20} style={{ color: 'var(--icon-color-primary)' }} />
          Favorite
        </div>
      </div>
    </div>
  );
}

export default Popup;
