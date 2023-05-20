import { IconFilter } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import Button from 'components/shared/Button';
import PlanCard from 'components/shared/PlanCard';

import { change } from 'store/reducers/plans';

import './styles.scss';

function Plans() {
  const dispatch = useDispatch();

  const [mockdata] = useState([
    {
      id: 0,
      title: 'Untitled',
      date: {
        updatedAt: 12837281637,
        createdAt: 11973126389,
      },
      tags: ['Lorem', 'Lorem'],
      users: [
        {
          displayName: 'Bedirhan',
          photoUrl:
            'https://lh3.googleusercontent.com/-yelEKktIDrw/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBu8KVGksCcBUfVUVKdcTVNLZs7Eow/photo.jpg?sz=46',
        },
      ],
    },
    {
      id: 1,
      title: 'Untitled',
      date: {
        updatedAt: 128372816376,
        createdAt: 119731263892,
      },
      tags: ['Lorem', 'Lorem'],
      users: [
        {
          displayName: 'Bedirhan',
          photoUrl:
            'https://lh3.googleusercontent.com/-yelEKktIDrw/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBu8KVGksCcBUfVUVKdcTVNLZs7Eow/photo.jpg?sz=46',
        },
        {
          displayName: 'Bedirhan',
          photoUrl:
            'https://lh3.googleusercontent.com/-yelEKktIDrw/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBu8KVGksCcBUfVUVKdcTVNLZs7Eow/photo.jpg?sz=46',
        },
        {
          displayName: 'Bedirhan',
          photoUrl:
            'https://lh3.googleusercontent.com/-yelEKktIDrw/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBu8KVGksCcBUfVUVKdcTVNLZs7Eow/photo.jpg?sz=46',
        },
        {
          displayName: 'Bedirhan',
          photoUrl:
            'https://lh3.googleusercontent.com/-yelEKktIDrw/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBu8KVGksCcBUfVUVKdcTVNLZs7Eow/photo.jpg?sz=46',
        },
      ],
    },
  ]);

  useEffect(() => {
    dispatch(change(mockdata));
  }, [dispatch, mockdata]);

  return (
    <div className={'plans'}>
      <div className={'plans-header'}>
        <div className={'plans-header-text'}>There is 0 plans</div>
        <Button
          style={{
            width: 'max-content',
            padding: '0 15px 0 10px',
          }}
          type={'fourth'}
        >
          <IconFilter stroke={1.3} width={20} height={20} style={{ color: 'var(--icon-color-primary)' }} />
          Filter
        </Button>
      </div>

      <div className={'plans-grid'}>
        {mockdata.map((v) => (
          <PlanCard key={v.id} data={v} />
        ))}
      </div>
    </div>
  );
}

export default Plans;
