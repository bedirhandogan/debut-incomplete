import { IconPencil, IconSquareRoundedCheck } from '@tabler/icons-react';
import CryptoJS from 'crypto-js';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from 'components/shared/Button';

import { change } from 'store/reducers/create-plan';
import { edit } from 'store/reducers/modal';

import addPlan from 'db/storage/add-plan';

import Check from './Check';
import Details from './Details';
import './styles.scss';

function CreatePlan() {
  const [stepId, setStepId] = useState(0);
  const user = useSelector((state) => state.user.data);
  const createPlan = useSelector((state) => state.createPlan.data);
  const dispatch = useDispatch();

  const handleClick = async () => {
    const date = new Date();
    const mockData = {
      title: 'Untitled',
      description: 'No description entered',
      tags: [],
      users: [],
    };

    if (stepId !== 1) {
      setStepId((prevState) => prevState + 1);
      return;
    }

    dispatch(
      edit({
        active: false,
      }),
    );

    await addPlan(
      user,
      {
        id: CryptoJS.lib.WordArray.random(4).toString(CryptoJS.enc.hex),
        ...createPlan,
        users: [
          {
            owner: true,
            mark: false,
            ...user,
          },
        ],
        date: {
          createdAt: date.getTime(),
          updatedAt: date.getTime(),
        },
      },
      dispatch,
    );

    dispatch(change(mockData));
    setStepId(0);
  };

  const sections = [
    {
      name: 'details',
      component: <Details />,
    },
    {
      name: 'check',
      component: <Check />,
    },
  ];

  return (
    <div className={'create-plan'}>
      <div className={'create-plan-steps'}>
        <div className={`create-plan-step ${stepId === 0 ? 'active' : 'null'}`}>
          <div className={'create-plan-step-icon'}>
            <IconPencil stroke={1.5} width={18} height={18} />
          </div>
          <div className={'create-plan-step-text'}>
            Details
            <span>Step 1</span>
          </div>
        </div>
        <div className={`create-plan-step ${stepId === 1 ? 'active' : 'null'}`}>
          <div className={'create-plan-step-icon'}>
            <IconSquareRoundedCheck stroke={1.5} width={18} height={18} />
          </div>
          <div className={'create-plan-step-text'}>
            Check
            <span>Step 2</span>
          </div>
        </div>
      </div>
      <div className={'create-plan-main'}>{sections[stepId].component}</div>
      <div className={'create-plan-buttons'}>
        {stepId !== 0 && (
          <Button type={'fourth'} style={{ width: '100%' }} onClick={() => setStepId((prevState) => prevState - 1)}>
            Prev
          </Button>
        )}
        <Button type={'secondary'} style={{ width: '100%' }} onClick={handleClick}>
          {stepId !== 1 ? 'Next' : 'Create'}
        </Button>
      </div>
    </div>
  );
}

export default CreatePlan;
