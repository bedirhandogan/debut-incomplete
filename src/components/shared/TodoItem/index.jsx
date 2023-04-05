import { IconStar } from '@tabler/icons-react';
import { forwardRef } from 'react';

import Tooltip from 'components/shared/Tooltip';

import './styles.scss';

const TodoItem = forwardRef((props, ref) => {
  return (
    <div className={'todo-item'} {...props} ref={ref}>
      <div className={'todo-item-text'}>{props.text}</div>
      <div className={'todo-item-options'}>
        <Tooltip position={'bottom'} style={{ right: 0 }} text={'Mark as starred'}>
          <IconStar
            stroke={1.3}
            width={20}
            height={20}
            style={{ color: 'var(--icon-color-primary)', cursor: 'pointer' }}
          />
        </Tooltip>
      </div>
    </div>
  );
});

export default TodoItem;
