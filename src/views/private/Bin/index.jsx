import { IconArrowBackUp, IconTrash } from '@tabler/icons-react';

import Button from 'components/shared/Button';

import './styles.scss';

function Bin() {
  return (
    <div className={'bin'}>
      <div className={'bin-header'}>
        <div className={'bin-header-text'}>There is 0 deleted plan</div>
        <div className={'bin-header-buttons'}>
          <Button
            style={{
              width: 'max-content',
              padding: '0 15px 0 10px',
            }}
            type={'fourth'}
          >
            <IconTrash stroke={1.3} width={20} height={20} style={{ color: 'var(--icon-color-primary)' }} />
            Remove All
          </Button>
          <Button
            style={{
              width: 'max-content',
              padding: '0 15px 0 10px',
            }}
            type={'fourth'}
          >
            <IconArrowBackUp stroke={1.3} width={20} height={20} style={{ color: 'var(--icon-color-primary)' }} />
            Undo All
          </Button>
        </div>
      </div>
      <div className={'bin-grid'}>{/*<PlanCard key={v.id} data={v} type={'bin'} />*/}</div>
    </div>
  );
}

export default Bin;
