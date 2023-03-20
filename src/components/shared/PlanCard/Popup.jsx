import { IconBookmark, IconDots, IconTrash } from '@tabler/icons-react';
import { useDispatch, useSelector } from 'react-redux';

import { change as binChange } from 'store/reducers/bin';

import getBin from 'db/storage/get-bin';
import removePlan from 'db/storage/remove-plan';

function Popup({ data, state, reference }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.data);
  const plans = useSelector((state) => state.plans.data);
  const bin = useSelector((state) => state.bin.data);

  const handleRemovePlan = async () => {
    if (bin.length === 0) {
      const binData = await getBin(user);
      dispatch(binChange(binData));

      await removePlan(user, plans, binData, data.id, dispatch);
      return;
    }

    removePlan(user, plans, bin, data.id, dispatch);
  };

  return (
    <div className={'planCard-popup-container'}>
      <div className={`planCard-popup-trigger ${state ? 'active' : ''}`} ref={reference.popupTriggerRef}>
        <IconDots stroke={1.3} width={20} height={20} style={{ color: 'var(--icon-color-primary)' }} />
      </div>
      <div className={'planCard-popup'} style={{ display: state ? 'flex' : 'none' }} ref={reference.popupRef}>
        <div className={'planCard-popup-item'} onClick={handleRemovePlan}>
          <IconTrash stroke={1.3} width={20} height={20} style={{ color: 'var(--icon-color-primary)' }} />
          Delete
        </div>
        <div className={'planCard-popup-item'}>
          <IconBookmark stroke={1.3} width={20} height={20} style={{ color: 'var(--icon-color-primary)' }} />
          Favorite
        </div>
      </div>
    </div>
  );
}

export default Popup;
