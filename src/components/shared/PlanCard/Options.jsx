import { IconArrowBackUp, IconTrash } from '@tabler/icons-react';

import Tooltip from 'components/shared/Tooltip';

function Options({ data }) {
  return (
    <div className={'planCard-options'}>
      <div className={'planCard-option'}>
        <Tooltip position={'bottom'} text={'Remove'}>
          <IconTrash stroke={1.3} width={20} height={20} style={{ color: 'var(--icon-color-primary)' }} />
        </Tooltip>
      </div>
      <div className={'planCard-option'}>
        <Tooltip position={'bottom'} text={'Undo'}>
          <IconArrowBackUp stroke={1.3} width={20} height={20} style={{ color: 'var(--icon-color-primary)' }} />
        </Tooltip>
      </div>
    </div>
  );
}

export default Options;
