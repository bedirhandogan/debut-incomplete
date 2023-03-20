import { IconArrowBackUp, IconTrash } from '@tabler/icons-react';
import { useDispatch, useSelector } from 'react-redux';

import Tooltip from 'components/shared/Tooltip';

import { change as binChange } from 'store/reducers/bin';
import { change as plansChange } from 'store/reducers/plans';

import getBin from 'db/storage/get-bin';
import getPlans from 'db/storage/get-plans';
import removeGarbage from 'db/storage/remove-garbage';
import undoPlan from 'db/storage/undo-plan';

function Options({ data }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.data);
  const plans = useSelector((state) => state.plans.data);
  const bin = useSelector((state) => state.bin.data);

  const handleUndoPlan = async () => {
    if (plans.length === 0) {
      const planData = await getPlans(user);
      dispatch(plansChange(planData));

      await undoPlan(user, planData, bin, data.id, dispatch);
      return;
    }

    undoPlan(user, plans, bin, data.id, dispatch);
  };

  const handleRemoveGarbage = async () => {
    if (bin.length === 0) {
      const binData = await getBin(user);
      dispatch(binChange(binData));

      await removeGarbage(user, binData, data.id, dispatch);
      return;
    }

    removeGarbage(user, bin, data.id, dispatch);
  };

  return (
    <div className={'planCard-options'}>
      <div className={'planCard-option'} onClick={handleRemoveGarbage}>
        <Tooltip position={'bottom'} text={'Remove'}>
          <IconTrash stroke={1.3} width={20} height={20} style={{ color: 'var(--icon-color-primary)' }} />
        </Tooltip>
      </div>
      <div className={'planCard-option'} onClick={handleUndoPlan}>
        <Tooltip position={'bottom'} text={'Undo'}>
          <IconArrowBackUp stroke={1.3} width={20} height={20} style={{ color: 'var(--icon-color-primary)' }} />
        </Tooltip>
      </div>
    </div>
  );
}

export default Options;
