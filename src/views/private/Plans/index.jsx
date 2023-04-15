import { IconFilter } from '@tabler/icons-react';

import Button from 'components/shared/Button';

import './styles.scss';

function Plans() {
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

      <div className={'plans-grid'}>{/*<PlanCard key={v.id} data={v} />*/}</div>
    </div>
  );
}

export default Plans;
