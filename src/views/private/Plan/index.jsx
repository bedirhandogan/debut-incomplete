import { IconDots, IconLayoutGrid, IconLayoutKanban, IconLayoutList, IconStar, IconX } from '@tabler/icons-react';
import { useState } from 'react';

import Tooltip from 'components/shared/Tooltip';

import Notes from 'views/private/Plan/Notes';
import Tasks from 'views/private/Plan/Tasks';
import Todos from 'views/private/Plan/Todos';

import './styles.scss';

function Plan() {
  // const { id } = useParams();
  const [activeSection, setActiveSection] = useState('todos');
  const [todoDetailsActive, setTodoDetailsActive] = useState(null);

  const sections = {
    todos: <Todos setTodoDetailsActive={setTodoDetailsActive} />,
    tasks: <Tasks />,
    notes: <Notes />,
  };

  return (
    <div className={'plan'}>
      <div className={'plan-header'}>
        <div className={'plan-header-section'}>
          <div className={'plan-header-title'}>Title</div>
          {/*<Tags data={} />*/}
          <div className={'plan-header-options'}>
            <div className={'plan-header-option'}>
              <Tooltip position={'bottom'} text={'Favorite'}>
                <IconStar stroke={1.3} width={22} height={22} style={{ color: 'var(--icon-color-primary)' }} />
              </Tooltip>
            </div>
            <div className={'plan-header-option'}>
              <IconDots stroke={1.3} width={22} height={22} style={{ color: 'var(--icon-color-primary)' }} />
            </div>
          </div>
        </div>
        <div className={'plan-header-section'}>
          <div className={'plan-header-description'}>Description</div>
        </div>
        <div className={'plan-header-section'}>
          <div className={'plan-header-detail'}>
            <div className={'plan-header-label'}>Created</div>
            <div className={'plan-header-date'}>0</div>
          </div>
          <div className={'plan-header-detail'}>
            <div className={'plan-header-label'}>Updated</div>
            <div className={'plan-header-date'}>0 ago</div>
          </div>
          <div className={'plan-header-detail'}>
            <div className={'plan-header-label'}>Members</div>
            {/*<Members data={} />*/}
          </div>
        </div>
        <div className={'plan-header-navigation'}>
          <div className={'plan-header-item'} onClick={() => setActiveSection('todos')}>
            <IconLayoutList stroke={1.5} width={20} height={20} style={{ color: 'var(--icon-color-primary)' }} />
            Todos
            {activeSection === 'todos' ? <span /> : ''}
          </div>
          <div className={'plan-header-item'} onClick={() => setActiveSection('tasks')}>
            <IconLayoutKanban stroke={1.5} width={20} height={20} style={{ color: 'var(--icon-color-primary)' }} />
            Tasks
            {activeSection === 'tasks' ? <span /> : ''}
          </div>
          <div className={'plan-header-item'} onClick={() => setActiveSection('notes')}>
            <IconLayoutGrid stroke={1.5} width={20} height={20} style={{ color: 'var(--icon-color-primary)' }} />
            Notes
            {activeSection === 'notes' ? <span /> : ''}
          </div>
        </div>
      </div>
      <div
        className={`todo-details ${
          todoDetailsActive === true ? 'active' : todoDetailsActive === null ? '' : 'inactive'
        }`}
      >
        <div className={'todo-details-header'}>
          Title
          <Tooltip position={'left'} text={'Close'}>
            <IconX
              stroke={1.5}
              width={20}
              height={20}
              style={{ color: 'var(--icon-color-primary)' }}
              onClick={() => setTodoDetailsActive(false)}
            />
          </Tooltip>
        </div>
      </div>
      {sections[activeSection]}
    </div>
  );
}

export default Plan;
